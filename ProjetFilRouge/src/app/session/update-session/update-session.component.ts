import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ValidationErrors} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/model/session.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit{
sessionId!: number;
updateSessionForm!: FormGroup;
session!: Session;


constructor (private sessionService: SessionService, 
            private activeRoute: ActivatedRoute, 
            private fb:FormBuilder,
            private router : Router){ // import du librairie router qui permet de recuperer la route active de n'importe ou dans l'app
       this.sessionId = this.activeRoute.snapshot.params['id']; // extraire l'id de la route active
     }


 ngOnInit(): void {
 this.sessionService.getSessionById(this.sessionId).subscribe({
   next : data => {
      this.session = data 
      this.updateSessionForm = this.fb.group({
           dateDebut: this.fb.control(this.session.dateDebut,[Validators.required]), 
           dateFin: this.fb.control (this.session.dateFin, [ Validators.required]),
           nbParticipant: this.fb.control (this.session.nbParticipant),
           training: this.fb.group ({
                id: this.session.training.id
                }),
           classroom: this.fb.group ({
                id: this.session.classroom.id
                }),
          matter: this.fb.group ({
                  id: this.session.matter.id
                  })

       })
    //    this.updateSessionForm.setValue({
    //     dateDebut: this.session.dateDebut,
    //     dateFin: this.session.dateFin,
    //     nbParticipant: this.session.nbParticipant,
    //     classroom: this.session.classroom
    //   });
    },
      error: err => {console.log (err)}
      }) ; 
   }
    

  handleUpdateSession () {
    let s = this.updateSessionForm.value;
    s.id = this.session.id;
    this.sessionService.updateSession(s).subscribe ({
        next: data => 
        {alert ("Session modifiée en succès!")
        this.router.navigateByUrl ("/admin/session")
    },
    error : err => {console.log (err);}

    });
  }


  getErrorMessage (fieldName: string , error : ValidationErrors ) {
    if (error ['required']) {
     return fieldName + " est obligatoire"
    } else return "";
  }

 
}