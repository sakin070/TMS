import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Student } from '../model/student';
import * as firebase from 'firebase';

@Injectable()
export class StudentService {

    studentsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    studentRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
    currentLoggedInStudent: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase) { }

    // Add Student
    AddStudent(student: Student) {
        this.studentRef = this.db.object('students-list/' + student.id);
        this.studentRef.set({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            programOfStudy: student.programOfStudy,
            courseList: [],
        })
    }

    doLogin(email, password) {

        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
                firebase.database().ref('students-list/' + res.user.uid).once('value').then(function (snapshot) {
                    console.log(res);
                    if (snapshot.val()) {
                        this.currentLoggedInStudent = this.GetStudent(res.user.uid);
                        console.log(this.currentLoggedInStudent);
                        resolve(res);
                    }
                }, err => reject(err));
            },
                err2 => reject(err2));
        });
    }

    // Read Student
    GetStudent(id: string) {
        this.studentRef = this.db.object('students-list/' + id);
        return this.studentRef;
    }

    // Read Student List
    GetStudentList() {
        this.studentsRef = this.db.list('students-list');
        return this.studentsRef;
    }

    // Update Student
    UpdateStudent(student: Student) {
        this.studentRef = this.db.object('students-list/' + student.id);
        this.studentRef.update({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            programOfStudy: student.programOfStudy,
            courseList: student.courseList,
        })
    }

    // Delete Student
    DeleteStudent(id: string) {
        this.studentRef = this.db.object('students-list/' + id);
        this.studentRef.remove();
    }
}