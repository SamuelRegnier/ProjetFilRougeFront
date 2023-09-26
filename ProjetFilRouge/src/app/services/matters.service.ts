import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Matter } from '../entities/matter.model';
import { ThemeMatter } from '../entities/themematter.model';

@Injectable({
  providedIn: 'root'
})
export class MattersService {private mattersUrl:string = "http://localhost:8080/api/matters";

constructor(private http: HttpClient){}

public getAllMatters(): Observable <Matter[]> {
  const url = this.mattersUrl;
  return this.http.get<Matter[]>(url ).pipe(
    tap(_=> this.log(`fetched matters OK`)),
    catchError(this.handleError(`getMatters`, [] ))
    )
}

updateMatter(matter: Matter): Observable<Matter>{

  const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
  const url = `${this.mattersUrl}`;
  alert("url du put "+url)
  return this.http.put<Matter>( url,matter,httpOptions) ;
}

deleteMatter(matter:Matter): Observable<Matter> {   
  const url = `${this.mattersUrl}/${matter.id}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };
  return this.http.delete<Matter>(url, httpOptions) .pipe(
    tap(_ => this.log(`delete matter id=${matter.id}`)),
    catchError(this.handleError<Matter>('deleteMatter'))
  ) 
}

  addNewMatter(matter: ThemeMatter): Observable<ThemeMatter> {

    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const url = `${this.mattersUrl}`;
  
    return this.http.post<ThemeMatter>( url,matter,httpOptions) .pipe(
      tap(_ => this.log(`created matter id=${matter.matter.id}`)),
      catchError(this.handleError<ThemeMatter>('Created Matter')));
  }

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

