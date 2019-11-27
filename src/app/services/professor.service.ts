import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Professor } from '../model/professor';
import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class ProfessorService {

    professorsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    professorRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

    constructor(private db: AngularFireDatabase) { }

    // Create Professor
    AddProfessor(professor: Professor) {
        const profId = uuid.v4();
        this.professorRef = this.db.object('professors-list/'+ profId);
        this.professorRef.set({
            id: profId,
            firstName: professor.firstName,
            lastName: professor.lastName,
            email: professor.email,
            courseList: professor.courseList,
        })
    }

    // Read Professor
    GetProfessor(id: string) {
        this.professorRef = this.db.object('professors-list/' + id);
        return this.professorRef;
    }

    // Read Professor List
    GetProfessorList() {
        this.professorsRef = this.db.list('professors-list');
        return this.professorsRef;
    }

    // Update Professor
    UpdateProffesor(professor: Professor) {
        this.professorRef = this.db.object('professors-list/' + professor.id);
        this.professorRef.update({
            id: professor.id,
            firstName: professor.firstName,
            lastName: professor.lastName,
            email: professor.email,
            courseList: professor.courseList,
        })
    }

    // Delete Professor
    DeleteProfessor(id: string) {
        this.professorRef = this.db.object('professors-list/' + id);
        this.professorRef.remove();
    }
}