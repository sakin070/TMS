import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  currentUser = null;
  courseList = [];
  selectedCourse = null;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.courseList = this.currentUser.courseList;
  }

  onSelect(course) {
    this.selectedCourse = course;
    sessionStorage.setItem('currentCourseID', this.selectedCourse);
    this.router.navigateByUrl('teams');
  }



}
