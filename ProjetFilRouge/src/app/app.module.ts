import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { SessionComponent } from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    TrainingsComponent,
    ThemeAddComponent,
    ThemeUpdateComponent,
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
    UpdateUserComponent
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
