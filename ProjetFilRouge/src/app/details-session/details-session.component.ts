import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session.model';
import { SessionComponent } from '../session/session.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION } from '../session/SESSION';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.css']
})
export class DetailsSessionComponent implements OnInit {
  sessions!: Session[];
  session!: Session;

  constructor (private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.sessions = SESSION;
    let id:number =Number(this.route.snapshot.paramMap.get('id'));
    for (const element of this.sessions){
      if(element.id == id){
        this.session = element;
      }
    }
  }
}
