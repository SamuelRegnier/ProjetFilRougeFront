import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    SessionFormComponent,
    LoginComponent,
    AdminTemplateComponent,
    DetailsSessionComponent,
    SessionAddComponent,
    UsersComponent,
    DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
