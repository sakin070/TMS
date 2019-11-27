import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  eCheckReadonly: any;
  private errorMessage: string;
  private successMessage: string;

  registerForm = new FormGroup({
    firstName: new FormControl(),
    email: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    id: new FormControl(),
    programOfStudy: new FormControl(),
    designation: new FormControl()
  });

  constructor(public authService: AuthService, public studentService: StudentService) {

  }

  ngOnInit() {
  }

  tryRegister(value) {

    if (value.designation == "Student") {
      this.authService.doRegister(value)
        .then(res => {
          console.log(res);
          this.errorMessage = "";
          this.successMessage = "Your account has been created";
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = "";
        })
    } else {
      this.authService.doRegister(value)
        .then(res => {
          console.log(res);
          this.errorMessage = "";
          this.successMessage = "Your account has been created";
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = "";
        })
    }
  }
}
