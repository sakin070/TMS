export class Team {
    id: string;
    minimalNumber: number;
    maximalNumber: number;
    deadlineFormation: string;
    studentThatIsLiasion: string;
    dateOfCreation: string;
    isComplete: boolean;
    teamName: string;
    courseId: string;
    teamMembers: Array<string>;
    pendingMemebers: Array<string>;
  
    constructor() {
      this.id = '';
      this.minimalNumber = 0;
      this.maximalNumber = 0;
      this.deadlineFormation = '';
      this.studentThatIsLiasion = '';
      this.dateOfCreation = '';
      this.isComplete = false;
      this.teamName = '';
      this.courseId = '';
      this.teamMembers = [];
      this.pendingMemebers = [];
    }
  }