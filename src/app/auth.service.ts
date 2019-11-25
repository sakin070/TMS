import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {

  }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log(value);
          resolve(res);
          firebase.database().ref('/' + value.designation + '/' + res.user.uid).set({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email
          })
            .then(save => { resolve(save); },
              err2 => reject(err2));
        }, err => reject(err));
    });
  }

  doLogin(value) {

    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => {
        firebase.database().ref('/' + value.designation + '/' + res.user.uid).once('value').then(function (snapshot) {
          console.log(res);
          if (snapshot.val()) {
            console.log(snapshot.val());
            console.log(value);
            resolve(res);
          }
        }, err => reject(err));
      },
        err2 => reject(err2));
    });
  }
}
