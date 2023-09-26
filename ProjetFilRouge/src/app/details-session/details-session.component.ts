import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session.model';
import { SessionComponent } from '../session/session.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.css']
})
export class DetailsSessionComponent implements OnInit {
  sessions!: Session[];
  session!: Session;
  errorMessage!: string;
  id!: number;
  

  constructor (private route:ActivatedRoute, private router : Router, private serviceSession: SessionService){}

  // ngOnInit(): void {
  //  this.sessions = SESSION;
  //   let id:number =Number(this.route.snapshot.paramMap.get('id'));
  //   for (const element of this.sessions){
  //   if(element.id == id){
  //       this.session = element;
  //  }
  //   }
  //  this.serviceSession.getSessionById(this.id).subscribe(
  //     {
  //       next : data => {this.session = data},
  //        error: err => {this.errorMessage = err;}
  //     }
  //   );
  // }
  
   ngOnInit(): void { //ngOnInit est une méthode du cycle de vie d'un composant Angular qui est appelée lorsque le composant est initialisé. 
     this.route.paramMap.subscribe(params => { //  => activatedRoute pour souscrire aux modifications des paramètres de l'URL. Les paramètres de l'URL sont extraits de l'objet params.
       const id = Number(params.get('id')); // => extraire l'ID de la session de l'URL en utilisant params.get('id')
      this.getSessionById(id);// =>  appeler la méthode getSessionById en lui passant l'ID de session extrait de l'URL.
     
    });
   }

   getSessionById(id: number) {
     this.serviceSession.getSessionById(id).subscribe({
       next: session => {
         this.session = session;
       },
       error: err => {
         this.errorMessage = err;
       }
     });
  }
 
 
  goBack(){
    this.router.navigate(['/admin/session'])
  }

  save(): void {
    if (this.session) {
      this.serviceSession.updateSession(this.session)
        .subscribe(() => this.goBack());
    }
  }
 }