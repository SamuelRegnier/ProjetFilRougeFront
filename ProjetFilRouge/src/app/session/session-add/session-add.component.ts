import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'src/app/model/session.model';
import { TrainingsService } from 'src/app/services/training.service';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent implements OnInit  {

addSessionFormGroup!: FormGroup;
sessions: Session[] = [];
  selectedIds = {
    trainingId: null!  as number,
    classroomId: null! as number,
    matterId: null! as number
  };


  constructor(private fb: FormBuilder,
              private sessionService: SessionService,
              private router: Router) {

  }
 ngOnInit(): void {
    this.addSessionFormGroup = this.fb.group ({
      dateDebut:['', [Validators.required]],
      dateFin:['', [Validators.required]],
      nbParticipant: [''],
      training: this.fb.group ({
          id:[''],
          }),

      classroom: this.fb.group ({
        id:[''],
        }),

      matter: this.fb.group ({
        id:[''],
        }),
   
     });
  }


    handleAddSession () {
    let nouvelleSession=this.addSessionFormGroup.value;
     //le model session contient des attributs differents du formulaire => cette etape pour convertir le fichier json et pouvoir remplir le formulaire
    //  nouvelleSession.dateDebut = this.addSessionFormGroup.value.dateDebut;
    //   nouvelleSession.dateFin=this.addSessionFormGroup.value.dateFin;
    //   nouvelleSession.nbParticipant=this.addSessionFormGroup.value.nbParticipant;
    //   nouvelleSession.training.id=  this.addSessionFormGroup.value.trainingId;
    //   nouvelleSession.classroom.id= this.addSessionFormGroup.value.classroomId;
    //   nouvelleSession.matter.id=this.addSessionFormGroup.value.metterId; 
    //   console.log(nouvelleSession);

      this.sessionService.addNewSession(nouvelleSession).subscribe ({
          next : data => {
           alert ("La session est ajoutée en succès.");
          this.addSessionFormGroup.reset();
            this.router.navigateByUrl("/admin/session");
        },
         error: err => {console.log (err); }
       })
    }
  // handleAddSession() {
  //   const nouvelleSession = {
  //     ...this.addSessionFormGroup.value,
  //     ...this.selectedIds
  //   };
  
  //   this.sessionService.addNewSession(nouvelleSession).subscribe({
  //     next: data => {
  //       alert("La session est ajoutée en succès.");
  //       this.addSessionFormGroup.reset();
  //       this.router.navigateByUrl("/admin/session");
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }


  getErrorMessage (fieldName: string , error : ValidationErrors ) {
  if (error ['required']) {
    return fieldName + " est obligatoire"
   } else return "";
  }

//   onTrainingChange(selectedValue: string | null) {
//     if (selectedValue !== null) {
//       // Appelez le service pour obtenir les informations du training par ID
//       this.trainingsService.getTrainingById(parseInt(selectedValue, 1)) // Convertissez la valeur sélectionnée en nombre si nécessaire
//         .subscribe(
//           (trainingData: any) => {
//             // Mettez à jour les champs du formulaire avec les données du training
//             this.addSessionFormGroup.patchValue({
//               // Utilisez les noms corrects de vos champs de formulaire
//               training: trainingData.name, // Supposons que 'name' est le champ que vous voulez utiliser
//               // Ajoutez d'autres champs si nécessaire
//             });
//           },
//           (error: any) => {
//             console.error('Erreur lors de la récupération des informations du training:', error);
//           }
//         );
//     }
//   }

  
//   onClassroomChange(selectedValue: any) {
//     this.selectedIds.classroomId = selectedValue as number;
//   }
  
//   onMatterChange(selectedValue: any) {
//     this.selectedIds.matterId = selectedValue as number;
//   }
// }
}
