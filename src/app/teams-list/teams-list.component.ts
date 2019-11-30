import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../services/course.service';
import { SuiModalService, ModalTemplate, TemplateModalConfig } from 'ng2-semantic-ui';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { TeamService } from '../services/team.service';
import { Team } from '../model/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  currentCourseID = null;
  teamList = [];
  course = null;
  newCourse = new Course();
  studentList_toAdd = []

  addMemberForm = new FormGroup({
    memberID: new FormControl()
  });

  newTeamForm = new FormGroup({
    teamName: new FormControl(),
  });

  @ViewChild('applicantModal')
  public applicantModal: ModalTemplate<{}, void, void>;

  constructor(private modalService: SuiModalService, private router: Router, private courseService: CourseService, private teamService: TeamService) { }

  ngOnInit() {

    this.currentCourseID = sessionStorage.getItem('currentCourseID');

    if (!this.currentCourseID) {
      this.router.navigateByUrl('student'); // if no course is selected go back to student view
    }

    this.courseService.GetCourse(this.currentCourseID).valueChanges().subscribe(course => {
      sessionStorage.setItem('currentCourse', JSON.stringify(course));
      this.course = course;

      if (!this.course.teamList) {
        this.teamList = [];
      } else {
        this.teamList = this.course.teamList;
      }

      console.log(this.teamList)
    });

  }

  goBack() {
    this.router.navigateByUrl('student');
  }

  isTeamListEmpty() {
    console.log('length');
    console.log(this.teamList.length);
    return (this.teamList.length > 0);
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
    newTeam.pendingMemebers = [];

    // push team to firebase
    const teamId = this.teamService.AddTeam(newTeam);

    if (!this.course.teamList) {
      this.course.teamList= [];
    }

    // add new team to course team list
    this.course.teamList.push(teamId);

    // push to firebase
    this.courseService.UpdateCourse(this.course);

    //update local storage
    sessionStorage.setItem('currentCourse', JSON.stringify(this.course));
  }

  openProfileModal() {
    const config = new TemplateModalConfig<{}, void, void>(this.applicantModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(value => {
        this.createNewTeam(value);
      })
      .onDeny(_ => { });
  }
}
