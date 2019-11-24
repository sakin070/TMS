export class Team {
    minimalNumber: number;
    maximalNumber: number;
    deadlineFormation: Date;
    studentThatIsLiasion: string;
    dateOfCreation: Date;
    isComplete: boolean;
    teamName: string;
    courseId: string;
    teamMembers: Array<string>;
    pendingMemebers: Array<string>;
  
    constructor() {
      this.minimalNumber = 0;
      this.maximalNumber = 0;
      this.deadlineFormation = new Date();
      this.studentThatIsLiasion = '';
      this.dateOfCreation = new Date();
      this.isComplete = false;
      this.teamName = '';
      this.courseId = '';
      this.teamMembers = [];
      this.pendingMemebers = [];
    }
  }