import { Component, NgModule, OnInit } from '@angular/core';
import { trainings } from '../assets/objects/TRAININGS';
import { Training } from './model/training.model';
import { User } from './model/user.modele';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ProjetFilRouge';

}


