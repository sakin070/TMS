export class Professor {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    courseList: Array<string>;
  
    constructor() {
      this.id = '';
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.courseList = [];
    }
  }
  