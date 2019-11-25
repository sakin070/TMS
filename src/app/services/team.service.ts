import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Team } from '../model/team';

@Injectable({
    providedIn: 'root'
})

export class TeamService {

    teamsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    teamRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

    constructor(private db: AngularFireDatabase) { }

    // Create Team
    AddTeam(team: Team) {
        this.teamsRef.push({
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
    UpdateUser(team: Team) {
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