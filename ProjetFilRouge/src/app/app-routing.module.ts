import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { SessionComponent } from './session/session.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { SessionAddComponent } from './session/session-add/session-add.component';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UpdateSessionComponent } from './session/update-session/update-session.component';

const routes: Routes = [
  {path:"login", component: LoginComponent } ,
  {path:"users", component:UsersComponent},
  {path:"detailsUser", component:DetailsUserComponent},
  {path:"themes", component: ThemesComponent},
  {path:"trainings", component: TrainingsComponent},
  {path:"training-add", component: TrainingAddComponent},
  {path: "session/:id", component: DetailsSessionComponent },
  //{path:"", component: LoginComponent } ,  
  {path: "detailsSession", component: DetailsSessionComponent },
  {path:"admin", component: AdminTemplateComponent, canActivate : [AuthenticationGuard], children:   [  
      {path:"session", component: SessionComponent },
      {path: "sessionAdd", component : SessionAddComponent },
      {path: "sessionUpdate/:id", component: UpdateSessionComponent},
    

]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }