import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{path: 'register', component: RegistrationFormComponent},
  {path: 'login', component: LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
