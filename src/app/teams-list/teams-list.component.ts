import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../services/course.service';
import { SuiModalService, ModalTemplate, TemplateModalConfig } from 'ng2-semantic-ui';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { TeamService } from '../services/team.service';
import { Team } from '../model/team';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  currentCourseID = null;
  course = new Course();
  teamIDList = [];
  teamList = [];
  isTeamListEmpty = false;
  newCourse = new Course();
  studentList_toAdd = []
  joinJobModalMessage = "";
  currentUserTeam = null;
  currentUserIsLiaison = false;

  addMemberForm = new FormGroup({
    memberID: new FormControl()
  });

  newTeamForm = new FormGroup({
    teamName: new FormControl(),
  });

  @ViewChild('createJobModal')
  public createJobModal: ModalTemplate<{}, void, void>;

  @ViewChild('genericModal')
  public genericModal: ModalTemplate<{}, void, void>;

  @ViewChild('viewTeamModal')
  public viewTeamModal: ModalTemplate<{}, void, void>;

  constructor(private modalService: SuiModalService,
    private router: Router,
    private courseService: CourseService,
    private teamService: TeamService,
    private authService: AuthService) { }

  ngOnInit() {
    this.currentCourseID = sessionStorage.getItem('currentCourseID');

    if (!this.currentCourseID) {
      this.router.navigateByUrl('student'); // if no course is selected go back to student view
    }

    this.courseService.GetCourse(this.currentCourseID).valueChanges().subscribe(course => {
      sessionStorage.setItem('currentCourse', JSON.stringify(course));
      this.course = course;
      this.teamIDList = course.teamList;

      if (!this.teamIDList) {
        this.teamIDList = [];
      }

      if (Object.keys(this.teamIDList).length > 0) {

        for (let key of Object.keys(this.teamIDList)) {
          this.teamService.GetTeam(this.teamIDList[key]).valueChanges().subscribe(team => {
            console.log(team);
            this.teamList.push(team);
          });
        }
      } else {
        this.isTeamListEmpty = true;
      }
    });

    //this.viewMyTeam();

  }

  goBack() {
    this.router.navigateByUrl('student');
  }

  // implement to cheque if member exists
  addTeamMember(value) {
    if (!this.studentList_toAdd.includes(value.memberID) && value.memberID != null) {
      this.studentList_toAdd.push(value.memberID);
    }
    this.addMemberForm.reset();
  }

  createNewTeam(value) {

    let newTeam = new Team();
    let currentUser = JSON.parse(sessionStorage.getItem('user'));

    newTeam.teamName = value.teamName;
    newTeam.minimalNumber = this.course.minimalNumberInTeam;
    newTeam.maximalNumber = this.course.maximalNumberInTeam;
    newTeam.deadlineFormation = this.course.deadlineFormation;
    newTeam.dateOfCreation = new Date(Date.now()).toISOString();
    newTeam.studentThatIsLiasion = JSON.parse(sessionStorage.getItem('user')).id;
    newTeam.isComplete = false; // create a function that takes in value and returns whether its complete or not
    newTeam.courseId = this.currentCourseID;
    newTeam.teamMembers = this.studentList_toAdd;
    newTeam.teamMembers.push(currentUser.id);
    newTeam.pendingMembers = [];

    // push team to firebase
    const teamId = this.teamService.AddTeam(newTeam);

    console.log(teamId);

    // add new team to course team list
    this.teamIDList.push(teamId);
    this.course.teamList = this.teamIDList;

    // push to firebase
    this.courseService.UpdateCourse(this.course);

    //update local storage
    sessionStorage.setItem('currentCourse', JSON.stringify(this.course));
  }

  joinTeam(team) {

    if (!team.isComplete) {
      let currentUser = JSON.parse(sessionStorage.getItem('user'));
      let alreadyJoined = false;
      let closedModal = false;

      this.teamService.GetTeamList().valueChanges().subscribe(teams => {
        for (let key of Object.keys(teams)) {
          if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
            alreadyJoined = true;
          }
        }

        if (!alreadyJoined) {
          if (!team.pendingMembers) {
            team.pendingMembers = [];
          }

          if (!team.pendingMembers.includes(currentUser.id) && currentUser.id != null && !closedModal) {
            team.pendingMembers.push(currentUser.id);
            this.teamService.UpdateTeam(team);
            this.isTeamListEmpty = true;
            this.openGenericModal("Your request to join the team has been sent.");
            closedModal = true;
          } else if (!closedModal) {
            this.openGenericModal("You've already requested to join this team.");
            closedModal = true;
          }
        } else if (alreadyJoined && !closedModal) {
          this.openGenericModal("You're already part of a team.");
          closedModal = true;
        }
      });
    }
  }

  viewMyTeam() {
    let currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.currentUserTeam = null;
    let closedModal = false;
    this.currentUserIsLiaison = false;

    this.teamService.GetTeamList().valueChanges().subscribe(teams => {
      for (let key of Object.keys(teams)) {
        if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
          this.currentUserTeam = teams[key];
        }
      }

      if (this.currentUserTeam && !closedModal) {

        if (this.currentUserTeam.studentThatIsLiasion == currentUser.id) {
          this.currentUserIsLiaison = true;
        }

        this.openViewTeamModal();
        closedModal = true;
      } else if (!closedModal) {
        this.openGenericModal("You are not a member of any team!");
        closedModal = true;
      }
    });

  }

  acceptStudentToTeam(student) {
    this.currentUserTeam.teamMembers.push(student);
    this.currentUserTeam.pendingMembers.splice(this.currentUserTeam.pendingMembers.indexOf(student), 1);
    this.teamService.UpdateTeam(this.currentUserTeam);
  }

  declineStudentToTeam(student) {
    this.currentUserTeam.pendingMembers.splice(this.currentUserTeam.pendingMembers.indexOf(student), 1);
    this.teamService.UpdateTeam(this.currentUserTeam);
  }

  openViewTeamModal() {
    const config = new TemplateModalConfig<{}, void, void>(this.viewTeamModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(_ => {
        window.location.reload();
      })
      .onDeny(_ => { });
  }

  openGenericModal(msg) {
    this.joinJobModalMessage = msg;

    const config = new TemplateModalConfig<{}, void, void>(this.genericModal);
    config.isClosable = false;
    config.size = 'mini';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(_ => {
        window.location.reload();
      })
      .onDeny(_ => { });
  }

  createTeamButton() {
    let currentUser = JSON.parse(sessionStorage.getItem('user'));
    let alreadyJoined = false;
    let closedModal = false;

    this.teamService.GetTeamList().valueChanges().subscribe(teams => {
      for (let key of Object.keys(teams)) {
        if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
          alreadyJoined = true;
        }
      }

      if (!alreadyJoined && !closedModal) {
        this.createNewTeamModal();
        closedModal = true;
      } else if (alreadyJoined && !closedModal) {
        this.openGenericModal("You're already part of a team.");
        closedModal = true;
      }

    });
  }

  createNewTeamModal() {
    const config = new TemplateModalConfig<{}, void, void>(this.createJobModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(value => {
        this.createNewTeam(value);
        this.openGenericModal("Your team has been created!");
      })
      .onDeny(_ => { });
  }

  logout() {
    this.authService.logout();
  }
}
