import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingAddComponent } from './training-add/training-add.component';

const routes: Routes = [
  {path:"themes", component: ThemesComponent},
  {path:"trainings", component: TrainingsComponent},
  {path:"training-add", component: TrainingAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
