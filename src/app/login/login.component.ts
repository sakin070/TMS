import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(),
    email: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    designation: new FormControl()
  });
  constructor(public authService: AuthService) { }
  private errorMessage: string;
  private successMessage: string;

  ngOnInit() {
  }

  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      });
  }
}
