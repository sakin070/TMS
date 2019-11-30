import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfessorService} from '../services/professor.service';
import {CourseService} from '../services/course.service';
import {Professor} from '../model/professor';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';
import {Course} from '../model/course';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  courseList = [];
  currentUser =  null;
  constructor(private router: Router, private courseService: CourseService, private professorService: ProfessorService, private modalService: SuiModalService) { }

  @ViewChild('applicantModal')
  public applicantModal: ModalTemplate<{}, void, void>;
  newCourseForm  = new FormGroup(
    {
      courseId: new FormControl(),
    }
  );

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.courseList = this.currentUser.courseList;
  }

  addCourse(value) {
    let course = new Course();
    course.id = value.courseId;
    course.teamList = [];
    course.deadlineFormation = value.deadlineFormation;
    course.minimalNumberInTeam = value.minimalNumberInTeam;
    course.maximalNumberInTeam = value.maximalNumberInTeam;
    this.courseService.AddCourse(course);
    this.courseList.concat(course.id);
    const proff = {
      id: this.currentUser.id,
      firstName : this.currentUser.firstName,
      lastName: this.currentUser.lastName,
      email: this.currentUser.email,
      courseList: this.courseList
    }
    this.professorService.UpdateProffesor(proff);
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
        this.addCourse(value);
      })
      .onDeny(_ => { });
  }
  courses(){
    this.router.navigateByUrl('courses');
  }
}
