import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { DetailsSessionComponent } from './details-session/details-session.component';

const routes: Routes = [
  {path:"login", component: LoginComponent } ,
  //{path:"", component: LoginComponent } , 
  {path: "detailsSession", component: DetailsSessionComponent },
  {path:"admin", component: AdminTemplateComponent, canActivate : [AuthenticationGuard], children:   [  
  {path:"session", component: SessionComponent },
  {path: "sessionAdd", component : SessionAddComponent },


]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
