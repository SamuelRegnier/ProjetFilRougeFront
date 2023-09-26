import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Theme } from '../entities/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private themesUrl:string = "http://localhost:8080/api/themes";

  constructor(private http: HttpClient){}
  
  public getAllThemes(): Observable <Theme[]> {
    const url = this.themesUrl;
    return this.http.get<Theme[]>(url ).pipe(
      tap(_=> this.log(`fetched themes OK`)),
      catchError(this.handleError(`getThemes`, [] ))
      )
  }

  updateTheme(theme: Theme): Observable<Theme>{

    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const url = `${this.themesUrl}`;
    alert("url du put "+url)
    return this.http.put<Theme>( url,theme,httpOptions) ;
  }

  deleteTheme(theme:Theme): Observable<Theme> {   
    const url = `${this.themesUrl}/${theme.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    };
    return this.http.delete<Theme>(url, httpOptions) .pipe(
      tap(_ => this.log(`delete theme id=${theme.id}`)),
      catchError(this.handleError<Theme>('deleteTheme'))
    ) 
  }

    addNewTheme(theme: Theme): Observable<Theme> {

      const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
      const url = `${this.themesUrl}`;
    
      return this.http.post<Theme>( url,theme,httpOptions) .pipe(
        tap(_ => this.log(`created theme id=${theme.id}`)),
        catchError(this.handleError<Theme>('Created Theme')));
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
