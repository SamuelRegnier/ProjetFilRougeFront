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
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UpdateSessionComponent } from './session/update-session/update-session.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionAddComponent } from './session/session-add/session-add.component';
import { DetailsTrainingComponent } from './details-training/details-training.component';

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
    UpdateSessionComponent,
    DetailsTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
