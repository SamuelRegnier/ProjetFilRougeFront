import { Component, NgModule, OnInit } from '@angular/core';
import { themes } from '../assets/objects/THEMES';
import { trainings } from '../assets/objects/TRAININGS';
import { Training } from './entities/training.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "a"
}
