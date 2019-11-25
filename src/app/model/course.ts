export class Course {
    id: string;
    teamList : Array<string>;
    minimalNumberInTeam: number;
    maximalNumberInTeam: number;
    deadlineFormation: Date;
  
    constructor() {
      this.id = '';
      this.teamList = [];
      this.deadlineFormation = new Date();
      this.minimalNumberInTeam = 0;
      this.maximalNumberInTeam = 0;
    }
  }