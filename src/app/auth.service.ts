import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  getCurrentUser() {
    let user = this.afAuth.auth.currentUser;
    if (user){
      return user;
    }
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
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
              courseList: value.courseList,
            })
              .then(save => {
                resolve(save);
                this.doLogin(value);
                this.router.navigateByUrl('/student')
              },
                err2 => reject(err2));
          } else {
            firebase.database().ref('professors-list/' + res.user.uid).set({
              id: value.id,
              firstName: value.firstName,
              lastName: value.lastName,
              email: value.email,
              courseList: value.courseList,
            })
              .then(save => {
                resolve(save);
                this.doLogin(value);
              },
                err2 => reject(err2));
          }
        }, err => reject(err));
    });
  }

  doLogin(value) {

    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(res => {
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

  logout() {
    this.afAuth.auth.signOut();
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
