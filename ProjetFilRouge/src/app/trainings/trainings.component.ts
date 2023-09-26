import { Component } from '@angular/core';
import { Training } from '../model/training.model';
import { TrainingsService } from '../services/trainings.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  trainings!: Training[];
  errorMessage!: string;
  constructor(private service: TrainingsService,
    public authService: AuthenticationService,
    private router: Router) { }


  ngOnInit(): void {
    this.handleGetAllTrainings();
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
    let conf = confirm("Are you sure ? ");
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
