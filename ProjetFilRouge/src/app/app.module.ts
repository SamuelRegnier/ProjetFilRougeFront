import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';
import { TrainingAddComponent } from './training-add/training-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    TrainingsComponent,
    ThemeAddComponent,
    ThemeUpdateComponent,
    TrainingAddComponent,
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
