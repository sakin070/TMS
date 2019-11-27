import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TeamService } from '../services/team.service';
import { Student } from '../model/student';
import { Team } from '../model/team';
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  currentStudent: Student = new Student();
  currentTeam: Team = new Team();

  constructor(private studentService: StudentService, private teamService: TeamService) { }

  ngOnInit() {
    this.currentStudent.id = "8668550";
    this.currentStudent.firstName = "Amar";
    this.currentStudent.lastName = "Jasarbasic";
    this.currentStudent.email = "ajasa@gmail.com";
    this.currentStudent.programOfStudy = "Software Engineering";
    this.currentStudent.courseList = ['CSI2100'];

    this.currentTeam.minimalNumber = 0;
    this.currentTeam.maximalNumber = 5;
    this.currentTeam.deadlineFormation = new Date(2019,11,22).toISOString();
    this.currentTeam.studentThatIsLiasion = '8668550';
    this.currentTeam.dateOfCreation = new Date(Date.now()).toISOString()
    this.currentTeam.isComplete = false;
    this.currentTeam.teamName = "Team 1";
    this.currentTeam.courseId = "CSI2100";
    this.currentTeam.teamMembers = ['8668550'];
    this.currentTeam.pendingMemebers = [];

    this.studentService.AddStudent(this.currentStudent);
    this.teamService.AddTeam(this.currentTeam);
  }

}
