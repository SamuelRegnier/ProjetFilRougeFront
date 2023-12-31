import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'; // RxJS 6, à utiliser
import { catchError, map, tap } from 'rxjs/operators';
import { Training } from '../model/training.model';
import { ValidationErrors } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  private trainingsUrl:string = "http://localhost:8080/api/trainings";
  private url="http://localhost:8080/api/trainings"

  constructor(private http: HttpClient){}
  
  public getAllTrainings(): Observable <Training[]> {
    const url = this.trainingsUrl;
    return this.http.get<Training[]>(url ).pipe(
      tap(_=> this.log(`fetched trainings OK`)),
      catchError(this.handleError(`getTrainings`, [] ))
      )
  }

  getTraining(trainingId: number): Observable<Training>{
    const url2 = `${this.url}/${trainingId}`
    return this.http.get<Training>(url2).pipe(catchError(this.handleError<Training>(`getUser id=${trainingId}`)))
  }

  updateTraining(training: Training): Observable<Training>{

    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const url = `${this.trainingsUrl}`;
    alert("url du put "+url)
    return this.http.put<Training>( url,training,httpOptions) ;
  }

  deleteTraining(training:Training): Observable<Training> {   
    const url = `${this.trainingsUrl}/${training.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    };
    return this.http.delete<Training>(url, httpOptions) .pipe(
      tap(_ => this.log(`delete training id=${training.id}`)),
      catchError(this.handleError<Training>('deleteTraining'))
    ) 
  }

    addNewTraining(training: Training): Observable<Training> {

      const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
      const url = `${this.trainingsUrl}`;
    
      return this.http.post<Training>( url,training,httpOptions) .pipe(
        tap(_ => this.log(`created training id=${training.id}`)),
        catchError(this.handleError<Training>('Created Training')));
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
