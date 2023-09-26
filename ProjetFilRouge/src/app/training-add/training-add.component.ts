import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Theme } from './../model/theme.model';
import { filter } from "rxjs/operators";
import { Training } from '../model/training.model';
import { trainings } from 'src/assets/objects/TRAININGS';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-training-add',
  templateUrl: './training-add.component.html',
  styleUrls: ['./training-add.component.css']
})
export class TrainingAddComponent {
  constructor(private service: TrainingsService, private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) {}
  themes!:Theme[];
  id?:number;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { this.id = params['id']});
  }

  trainingForm = this.fb.group({
    name: ['', [Validators.required]],
    nbParticipants: ['', [Validators.required]],
    duree: ['', [Validators.required]],
    certifiante: [''],
    prerequis: [''],
    prix: ['', [Validators.required]],
    matter: [''],
    description: ['']
  });

  onSubmit() {
    console.warn(this.trainingForm.value);
  }

  addTraining() {
    alert("Êtes-vous sûr de vouloir rajouter cette formation ?");
    const submittedTraining = {
      id: 0,
      nom: this.trainingForm.get('name')!.value ?? '',
      nbParticipants: parseInt(this.trainingForm.get('nbParticipants')!.value ?? '1'),
      duree: parseInt(this.trainingForm.get('duree')!.value ?? '1'),
      certifiante: (this.trainingForm.get('certifiante')?.value ?? 'false') == 'true',
      prerequis: (this.trainingForm.get('prerequis')?.value ?? 'false') == 'true',
      prix: parseInt(this.trainingForm.get('prix')!.value ?? '1'),
      description: this.trainingForm.get('description')!.value ?? ''
    }
    console.log(submittedTraining);
    console.log(submittedTraining);
    this.service.addNewTraining(submittedTraining).subscribe({
        next : data => {
          alert ("Cette formation a été créée avec succès ! ");
          this.trainingForm.reset;
          this.router.navigateByUrl("/api/trainings"); 
        },
        error : err => { console.log(err);
        }
    })
  }

  
  updateTraining(id_:number) {
    alert("Êtes-vous sûr de vouloir modifier cette formation ?");
    const submittedTraining = {
      id: id_,
      nom: this.trainingForm.get('name')!.value ?? '',
      nbParticipants: parseInt(this.trainingForm.get('nbParticipants')!.value ?? '1'),
      duree: parseInt(this.trainingForm.get('duree')!.value ?? '1'),
      certifiante: (this.trainingForm.get('certifiante')!.value ?? 'false') == 'true',
      prerequis: (this.trainingForm.get('prerequis')!.value ?? 'false') == 'true',
      prix: parseInt(this.trainingForm.get('prix')!.value ?? '1'),
      description: this.trainingForm.get('description')!.value ?? ''
    }

    this.service.updateTraining(submittedTraining).subscribe({
      next : data => {
        alert ("Cette formation a été modifiée avec succès ! ");
        this.trainingForm.reset;
        this.router.navigateByUrl("/api/trainings"); 
      },
      error : err => { console.log(err);
      }
  })
  }
}
