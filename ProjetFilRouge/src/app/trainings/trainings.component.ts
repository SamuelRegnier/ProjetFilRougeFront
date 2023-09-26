import { Component } from '@angular/core';
import { Training } from '../model/training.model';
import { trainings } from 'src/assets/objects/TRAININGS';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  trainings!:Training[];

  ngOnInit(): void {
    this.trainings = trainings;
  }

  handleDeleteTraining(training: any) {
    let index = this.trainings?.indexOf(training);
    this.trainings?.splice(index,1)
}
}
