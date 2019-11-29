import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Team } from '../model/team';
import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class TeamService {

    teamsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    teamRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

    constructor(private db: AngularFireDatabase) { }

    // Create Team
    AddTeam(team: Team) {
        const teamId = uuid.v4();
        this.teamRef = this.db.object('teams-list/'+ teamId);
        this.teamRef.set({
            id: teamId,
            minimalNumber: team.minimalNumber,
            maximalNumber: team.maximalNumber,
            deadlineFormation: team.deadlineFormation,
            studentThatIsLiasion: team.studentThatIsLiasion,
            dateOfCreation: team.dateOfCreation,
            isComplete: team.isComplete,
            teamName: team.teamName,
            courseId: team.courseId,
            teamMembers: team.teamMembers,
            pendingMemebers: team.pendingMemebers,
        })

        return teamId;
    }

    // Read Team
    GetTeam(id: string) {
        this.teamRef = this.db.object('teams-list/' + id);
        return this.teamRef;
    }

    // Read Team List
    GetTeamList() {
        this.teamsRef = this.db.list('teams-list');
        return this.teamsRef;
    }

    // Update Team
    UpdateTeam(team: Team) {
        this.teamRef = this.db.object('teams-list/' + team.id);
        this.teamRef.update({
            id: team.id,
            minimalNumber: team.minimalNumber,
            maximalNumber: team.maximalNumber,
            deadlineFormation: team.deadlineFormation,
            studentThatIsLiasion: team.studentThatIsLiasion,
            dateOfCreation: team.dateOfCreation,
            isComplete: team.isComplete,
            teamName: team.teamName,
            courseId: team.courseId,
            teamMembers: team.teamMembers,
            pendingMemebers: team.pendingMemebers,
        })
    }

    // Delete Team
    DeleteTeam(id: string) {
        this.teamRef = this.db.object('teams-list/' + id);
        this.teamRef.remove();
    }
}