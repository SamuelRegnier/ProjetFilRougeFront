import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { SESSION } from '../session/SESSION';
import { Session } from '../model/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
    private sessions!: Session [];

  constructor () {
    this.sessions=SESSION;
  }

  public getAllSessions(): Observable <Session []>{
    return of (this.sessions);
  }

  public deleteSession (id:number) : Observable <boolean> {
    this.sessions=this.sessions.filter(session => session.id !=id);
  return of (true);
  }
}
