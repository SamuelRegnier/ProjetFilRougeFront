import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{
  sessions!: Session [];
  errorMessage!: string;

  constructor (private service: SessionService,
    public authService:AuthenticationService, private router:Router){}

  
  ngOnInit(): void {
    this.handleGetAllSession();
  }

  handleGetAllSession(){
    this.service.getAllSessions().subscribe(
      {
        next : data => {this.sessions=data},
        error: err => {this.errorMessage=err}
      }
    );
  }

  handleDeleteSession (session:Session) {
    let conf = confirm ("Etes vous sur de bien vouloir supprimer la session ?")
    if (conf ==false) return; 
    this.service.deleteSession(session.id).subscribe(
      {next : data => {this.handleGetAllSession();}
    }
    );
  }

  selectSession(session: Session) {
    this.router.navigate(['/detailsSession', session])
  }

}
