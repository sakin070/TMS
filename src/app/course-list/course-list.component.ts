import {Component, OnInit, ViewChild} from '@angular/core';
import {TeamService} from '../services/team.service';
import {CourseService} from '../services/course.service';
import {Router} from '@angular/router';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  currentUser = null;
  courseList = null;
  teamList = [];

  @ViewChild('applicantModal')
  public applicantModal: ModalTemplate<{}, void, void>;

  constructor(private modalService: SuiModalService, private courseService:CourseService, private teamService:TeamService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.courseList = this.currentUser.courseList;
    console.log(this.courseList)
  }

  getTeams(course) {
    // console.log(this.courseService.GetCourse(course).once())
    this.teamList = [];
    this.courseService.GetCourse(course).valueChanges().forEach(team => {
      team.teamList.forEach(teamId => {
        this.teamService.GetTeam(teamId).valueChanges().forEach(teamInfo => {
          this.teamList.push(teamInfo.teamName)
        })
      })
    });

    const config = new TemplateModalConfig<{}, void, void>(this.applicantModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onDeny(_ => { });
  }

  back() {
    this.router.navigateByUrl("/professor")
  }
}
