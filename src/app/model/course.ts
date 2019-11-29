export class Course {
    id: string;
    teamList : Array<string>;
    minimalNumberInTeam: number;
    maximalNumberInTeam: number;
    deadlineFormation: string;
  
    constructor() {
      this.id = '';
      this.teamList = [];
      this.deadlineFormation = "";
      this.minimalNumberInTeam = 0;
      this.maximalNumberInTeam = 0;
    }
  }