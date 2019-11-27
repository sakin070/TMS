import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
import { StudentService } from './services/student.service';
import { ProfessorService } from './services/professor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private studentService: StudentService, private professorService: ProfessorService) { }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log(value);
          resolve(res);

          if (value.designation == "Student") {
            firebase.database().ref('students-list/' + res.user.uid).set({
              id: value.id,
              firstName: value.firstName,
              lastName: value.lastName,
              email: value.email,
              programOfStudy: value.programOfStudy,
              courseList: [],
            })
              .then(save => {
                resolve(save);
              },
                err2 => reject(err2));
          } else {
            firebase.database().ref('professors-list/' + res.user.uid).set({
              id: value.id,
              firstName: value.firstName,
              lastName: value.lastName,
              email: value.email,
              courseList: [],
            })
              .then(save => {
                resolve(save);
              },
                err2 => reject(err2));
          }
        }, err => reject(err));
    });
  }

  doLogin(value) {

    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => {

        if (value.designation == "Student") {
          firebase.database().ref('students-list/' + res.user.uid).once('value').then(function (snapshot) {
            console.log(res);
            if (snapshot.val()) {
              console.log(snapshot.val());
              console.log(value);
              resolve(res);
            }
          }, err => reject(err));
        } else {
          firebase.database().ref('professors-list/' + res.user.uid).once('value').then(function (snapshot) {
            console.log(res);
            if (snapshot.val()) {
              console.log(snapshot.val());
              console.log(value);
              resolve(res);
            }
          }, err => reject(err));
        }
      },
        err2 => reject(err2));
    });
  }
}
