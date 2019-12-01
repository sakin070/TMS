import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { AuthGuard } from './services/auth.guard';
import {ProfessorComponent} from './professor/professor.component';
import {CourseListComponent} from './course-list/course-list.component';

const routes: Routes = [
  {path: 'register', component: RegistrationFormComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentComponent},
  {path: 'teams', component: TeamsListComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'courses', component: CourseListComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
