import { Component, OnInit } from '@angular/core';
import { Training } from '../model/training.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingsService } from '../services/training.service';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.css']
})
export class DetailsTrainingComponent implements OnInit {
  trainings!: Training[];
  training!: Training;
  errorMessage!: string;
  id!: number;
  

  constructor (private route:ActivatedRoute, private router : Router, private trainingService: TrainingsService){}

  
   ngOnInit(): void { //ngOnInit est une méthode du cycle de vie d'un composant Angular qui est appelée lorsque le composant est initialisé. 
     this.route.paramMap.subscribe(params => { //  => activatedRoute pour souscrire aux modifications des paramètres de l'URL. Les paramètres de l'URL sont extraits de l'objet params.
       const id = Number(params.get('id')); // => extraire l'ID de la session de l'URL en utilisant params.get('id')
      this.getTrainingById (id);// =>  appeler la méthode getSessionById en lui passant l'ID de session extrait de l'URL.
     
    });
   }

   getTrainingById(id: number) {
     this.trainingService.getTrainingById(id).subscribe({
       next: training=> {
         this.training = training;
       },
       error: err => {
         this.errorMessage = err;
       }
     });
  }
 
}
