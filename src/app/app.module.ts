import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './services/student.service';
import { TeamService } from './services/team.service';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { ProfessorService } from './services/professor.service';
import { CourseService } from './services/course.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponent,
    StudentComponent,
    TeamsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireStorageModule, // Only required for storage features
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    // imports firebase/auth, only needed for auth features
  ],
  providers: [
    StudentService,
    TeamService,
    ProfessorService,
    CourseService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
