import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'teams', component: TeamsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
