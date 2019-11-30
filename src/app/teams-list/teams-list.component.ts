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

  addMemberForm = new FormGroup({
    memberID: new FormControl()
  });

  newTeamForm = new FormGroup({
    teamName: new FormControl(),
  });

  @ViewChild('createJobModal')
  public createJobModal: ModalTemplate<{}, void, void>;

  @ViewChild('alreadyPartOfTeamModal')
  public alreadyPartOfTeamModal: ModalTemplate<{}, void, void>;

  constructor(private modalService: SuiModalService,
    private router: Router,
    private courseService: CourseService,
    private teamService: TeamService,
    private authService: AuthService) { }

  ngOnInit() {
    this.currentCourseID = localStorage.getItem('currentCourseID');

    if (!this.currentCourseID) {
      this.router.navigateByUrl('student'); // if no course is selected go back to student view
    }

    this.courseService.GetCourse(this.currentCourseID).valueChanges().subscribe(course => {
      localStorage.setItem('currentCourse', JSON.stringify(course));
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
    let currentUser = JSON.parse(localStorage.getItem('user'));

    newTeam.teamName = value.teamName;
    newTeam.minimalNumber = this.course.minimalNumberInTeam;
    newTeam.maximalNumber = this.course.maximalNumberInTeam;
    newTeam.deadlineFormation = this.course.deadlineFormation;
    newTeam.dateOfCreation = new Date(Date.now()).toISOString();
    newTeam.studentThatIsLiasion = JSON.parse(localStorage.getItem('user')).id;
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
    localStorage.setItem('currentCourse', JSON.stringify(this.course));
  }

  joinTeam(team) {

    if (!team.isComplete) {
      let currentUser = JSON.parse(localStorage.getItem('user'));

      let alreadyJoined = "";
      let closedModal = false;

      this.teamService.GetTeamList().valueChanges().subscribe(teams => {
        for (let key of Object.keys(teams)) {
          if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
            alreadyJoined = teams[key];
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
    let currentUser = JSON.parse(localStorage.getItem('user'));
    let currentUserTeam = null;
    let closedModal = false;

    this.teamService.GetTeamList().valueChanges().subscribe(teams => {
      for (let key of Object.keys(teams)) {
        if (teams[key].teamMembers.indexOf(currentUser.id) >= 0) {
          currentUserTeam = teams[key];
        }
      }

      if (currentUserTeam) {
        console.log("my team found");
      } else if (!closedModal) {
        this.openGenericModal("You are not a member of any team!");
        closedModal = true;
      }
    });

  }

  openGenericModal(msg) {
    this.joinJobModalMessage = msg;

    const config = new TemplateModalConfig<{}, void, void>(this.alreadyPartOfTeamModal);
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

  openProfileModal() {
    const config = new TemplateModalConfig<{}, void, void>(this.createJobModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(value => {
        this.createNewTeam(value);
        window.location.reload();
      })
      .onDeny(_ => { });
  }

  logout() {
    this.authService.logout();
  }
}