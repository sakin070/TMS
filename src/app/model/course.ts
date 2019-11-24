export class Course {
    courseName: string;
    courseId: string;
    teamList : Array<string>;
    minimalNumberInTeam: number;
    maximalNumberInTeam: number;
    deadlineFormation: Date;
  
    constructor() {
      this.courseName = '';
      this.courseId = '';
      this.teamList = [];
      this.deadlineFormation = new Date();
      this.minimalNumberInTeam = 0;
      this.maximalNumberInTeam = 0;
    }
  }