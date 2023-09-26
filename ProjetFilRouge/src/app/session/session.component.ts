
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{
  sessions!: Session [] ;
  errorMessage!: string;
 


  constructor (private serviceSession: SessionService,
              public authService:AuthenticationService, 
              private router:Router){}

  
  ngOnInit(): void {
    this.handleGetAllSessions();
  }

  handleGetAllSessions(){
  this.serviceSession.getAllSessions().subscribe(
         {
        next : data => {this.sessions = data},
         error: err => {this.errorMessage = err;}
       }
     );
  }
 

  handleDeleteSession (session:Session) {
    let conf = confirm ("Etes vous sur de bien vouloir supprimer la session ?")
    if (conf ==false) return; 
    this.serviceSession.deleteSession(session).subscribe(
      {next : data => { this.handleGetAllSessions(), console.log("La session id = " + session.id + " a été bien supprimée") },
                    
        error: err => { this.errorMessage=err;}
       });
  }

  selectSession(session: Session) {
    this.router.navigate(['/detailsSession', session])
  }

  handleAddNewSession() {
    this.router.navigateByUrl("/admin/sessionAdd") 
   }

// //   handleEditSession {
// //   this.router.navigateByUrl ("/admin/editSession/" + session.id); 
// // }

handleEditSession(session:Session){
  this.router.navigateByUrl("/admin/sessionUpdate/"+ session.id);
}
}
