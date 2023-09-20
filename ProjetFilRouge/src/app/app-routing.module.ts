import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
  {path:"users", component:UsersComponent},
  {path:"detailsUser", component:DetailsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
