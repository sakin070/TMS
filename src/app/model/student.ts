export class Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    programOfStudy: string;
    courseList: Array<string>;
  
    constructor() {
      this.id = '';
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.programOfStudy = '';
      this.courseList = [];
    }
  }
  