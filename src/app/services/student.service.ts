import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Student } from '../model/student';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Injectable()
export class StudentService {

    studentsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    studentRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
    currentLoggedInStudent: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase, private authService: AuthService) { }

    // Add Student
    AddStudent(student: Student) {
        this.studentRef = this.db.object('students-list/' + student.id);
        this.studentRef.set({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            programOfStudy: student.programOfStudy,
            courseList: student.courseList,
        })
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