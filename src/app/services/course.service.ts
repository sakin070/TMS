import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Course } from '../model/course';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    coursesRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    courseRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

    constructor(private db: AngularFireDatabase) { }

    // Create Course
    AddCourse(course: Course) {
        this.coursesRef.push({
            id: course.id,
            teamList: course.teamList,
            minimalNumberInTeam: course.minimalNumberInTeam,
            maximalNumberInTeam: course.maximalNumberInTeam,
            deadlineFormation: course.deadlineFormation,
        })
    }

    // Read Course
    GetCourse(id: string) {
        this.courseRef = this.db.object('courses-list/' + id);
        return this.courseRef;
    }

    // Read Course List
    GetCourseList() {
        this.coursesRef = this.db.list('courses-list');
        return this.coursesRef;
    }

    // Update Course
    UpdateUser(course: Course) {
        this.courseRef.update({
            id: course.id,
            teamList: course.teamList,
            minimalNumberInTeam: course.minimalNumberInTeam,
            maximalNumberInTeam: course.maximalNumberInTeam,
            deadlineFormation: course.deadlineFormation,
        })
    }

    // Delete Course
    DeleteCourse(id: string) {
        this.courseRef = this.db.object('courses-list/' + id);
        this.courseRef.remove();
    }
}