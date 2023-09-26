import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { SessionComponent } from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateSessionComponent } from './session/update-session/update-session.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsTrainingComponent } from './details-training/details-training.component';
import { SessionAddComponent } from './session/session-add/session-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    TrainingsComponent,
    TrainingAddComponent,
    SessionComponent,
    SessionFormComponent,
    LoginComponent,
    AdminTemplateComponent,
    DetailsSessionComponent,
    SessionAddComponent,
    UsersComponent,
    DetailsUserComponent,
    UserAddComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UpdateSessionComponent,
    DetailsTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
