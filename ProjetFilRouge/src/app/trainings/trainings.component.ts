import { Component } from '@angular/core';
import { Training } from '../model/training.model';
import { TrainingsService } from '../services/trainings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  trainings!: Training[];
  errorMessage!: string;
  trainingId!: number;
  training!: Training;
  constructor(private service: TrainingsService,
    public authService: AuthenticationService,
    private router: Router,
    private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.handleGetAllTrainings();
  }

  handleGetTrainingId(training : Training){
    this.router.navigate(['/detailsTraining', training]);
  }

  handleGetAllTrainings() {
    this.service.getAllTrainings().subscribe(
      {
        next: data => { this.trainings = data },
        error: err => { this.errorMessage = err; }
      }
    );
  }

  handleDeleteTraining(p: Training) {
    let conf = confirm("Etes vous certains de vouloir supprimer la formation " + p.nom +" ?");
    if (conf == false) return;
    else {
      this.service.deleteTraining(p).subscribe({
        next: data => {
          console.log("training id= " + p.id + " is deleted ");
          this.handleGetAllTrainings();
        },
        error: err => { this.errorMessage = err; }

      });
    }
  }

 
}
