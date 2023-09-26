import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { themes } from './../../assets/objects/THEMES';
import { Theme } from './../model/theme.model';
import { Training } from '../model/training.model';
import { trainings } from 'src/assets/objects/TRAININGS';

@Component({
  selector: 'app-training-add',
  templateUrl: './training-add.component.html',
  styleUrls: ['./training-add.component.css']
})
export class TrainingAddComponent {
  constructor(private fb:FormBuilder) {}
  themes!:Theme[];

  ngOnInit(): void {
    this.themes= themes;
  }

  trainingForm = this.fb.group({
    name: [''],
    nbParticipants: ['', [Validators.required]],
    duree: ['', [Validators.required]],
    certifiante: [''],
    prerequis: [''],
    prix: ['', [Validators.required]],
    matter: ['']
  });

  onSubmit() {
    console.warn(this.trainingForm.value);
  }

  addTraining() {
    const submittedTraining = {
      id: 15,
      nom: this.trainingForm.get('name')!.value ?? '',
      nbParticipants: parseInt(this.trainingForm.get('nbParticipants')!.value ?? '1'),
      duree: parseInt(this.trainingForm.get('duree')!.value ?? '1'),
      certifiante: (this.trainingForm.get('certifiante')!.value ?? 'false') == 'true',
      prerequis: (this.trainingForm.get('prerequis')!.value ?? 'false') == 'true',
      prix: parseInt(this.trainingForm.get('prix')!.value ?? '1'),
      description: 'caca'
    }
    trainings.push(submittedTraining);
  }
}
