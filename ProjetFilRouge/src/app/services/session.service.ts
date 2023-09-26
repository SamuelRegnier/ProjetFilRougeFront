import { Session } from './../model/session.model';
//import { UUID } from 'angular2-UUID';
import { Injectable} from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
    private sessions!: Session [];
    //urlGetAllSessions:string= "http://localhost:8080/api/sessions";
    urlGetById: string = "http://localhost:8080/api/session";
    urlDelete: string = "http://localhost:8080/api/delete/session";
    urladd : string = "http://localhost:8080/api/add/session";
    urlUpdate: string = "http://localhost:8080/api/update/session";
    
  constructor (private http : HttpClient) {
  }
  

  /*GET all sessions from the server*/
 getAllSessions(): Observable <Session []>{ 
  const urlGetAllSessions = "http://localhost:8080/api/sessions";
  return this.http.get<Session[]> (urlGetAllSessions).pipe (
   tap(_ => this.log('fetched sessions')),
    catchError (this.handleError('getSession', []))
  )
  }
  //get by id dans le sercice
  getSessionById (id: number): Observable <Session> {
    const urlGetSessionById = `${this.urlGetById}/${id}`;
    return this.http.get<Session> (urlGetSessionById).pipe (
      tap (_=> this.log('fetched session id = ${id}')),
      catchError (this.handleError <Session>('getSession id = ${id}'))
    );
  }
  // delete
  public deleteSession (session:Session) : Observable <Session> {
    const urlDeleteSession = `${this.urlDelete}/${session.id}`;
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type' : 'application/json'})};

   return this.http.delete <Session> (urlDeleteSession, httpOptions).pipe (
      tap (_=> this.log ('delete sessions id =$ {session.id}')),
      catchError (this.handleError <Session>('deleteSession'))
   )
  }
  
  addNewSession (session: Session): Observable <Session> {
    const httpOptions=  { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const urlAddSession = `${this.urladd}`;
    return this.http.post<Session> (urlAddSession, session , httpOptions) . pipe (
      tap (_=> this.log ('ajout de nouvelle session id = ${session.id}')),
      catchError (this.handleError<Session> ('Ajout session'))
    )
  }

  updateSession (session:Session): Observable <Session> {
    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const urlUpdateSession = `${this.urlUpdate}`;
    return this.http.put<Session> (urlUpdateSession, session, httpOptions). pipe (
      tap(_ => this.log(`Modification session id=${session.id}`)),
      catchError(this.handleError<Session>('updateSession'))
    );
    


  }

  // //pour créer la methode get
  // getSession (id:number): Observable <Session>  {
  //   let sess = this.sessions.find (session => session.id=id);
  //   if (sess == undefined ){
  //     return throwError (() => new Error("Session non trouvée"));
  //   }
  //   return of (sess);
  // }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    }
  }

  private log(log: string){
    console.info(log);
    }
}
