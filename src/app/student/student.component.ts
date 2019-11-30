import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  currentUser = null;
  courseList = [];
  selectedCourse = null;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.courseList = this.currentUser.courseList;
  }

  onSelect(course) {
    this.selectedCourse = course;
    localStorage.setItem('currentCourseID', this.selectedCourse);
    this.router.navigateByUrl('teams');
  }

  logout() {
    this.authService.logout();
  }

}
