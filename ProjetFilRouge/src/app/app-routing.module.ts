import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { SessionComponent } from './session/session.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:"login", component: LoginComponent } ,
  {path:"themes", component: ThemesComponent},
  {path:"trainings", component: TrainingsComponent},
  {path:"detailsUser", component:DetailsUserComponent},
  {path:"training-add", component: TrainingAddComponent},
  {path:"updateUser", component:UpdateUserComponent},
  {path:"", redirectTo:'trainings', pathMatch:'full' } , 
  {path: "detailsSession", component: DetailsSessionComponent },
  {path:"admin", component: AdminTemplateComponent, canActivate : [AuthenticationGuard], children:   [  
  {path:"session", component: SessionComponent },
  {path: "sessionAdd", component : SessionAddComponent },
  {path:"deleteUser", component:DeleteUserComponent},
  {path:"updateUser", component:UpdateUserComponent},
  {path:"addUser", component: UserAddComponent},
  {path:"users", component:UsersComponent},

]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }