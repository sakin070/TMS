import { Component, OnInit } from '@angular/core';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  currentUser = null;
  courseList = null;
  teamList = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.courseList = this.currentUser.courseList;
  }

  getTeams(course) {
    this.teamList = [];
    for (let id in course.teamList){
       this.teamService.GetTeam(id).snapshotChanges().subscribe( team => {
        this.teamList.concat(team)
      });
    //   teams.forEach(team => {
    //     this.teamList.concat(team.payload.key.teamName);
    //   })
    }
  }

}
