import { Injectable } from '@angular/core';
import { User } from '../model/user.modele';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="http://localhost:8080/api/users"

  private handleError<T>(operation='operation', result?:T){
    return (error:any): Observable<T> => {
      console.error(error);
      //this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
      
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
    .pipe(catchError(this.handleError<User[]>('getUsers',[])));
  }

  getUser(userId: number): Observable<User>{
    const url2 = `${this.url}/${userId}`
    return this.http.get<User>(url2).pipe(catchError(this.handleError<User>(`getUser id=${userId}`)))
  }

  deleteUser(user : User): Observable<User> {
    const url3 = `${this.url}/${user.id}`;
    return this.http.delete<User>(url3).pipe(catchError(this.handleError<User>('deleteUser')))
  }

  updateUser(user: User): Observable<User>{
    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const url4 = `${this.url}`;

    return this.http.put<User>( url4,user,httpOptions) ;
  }

  addProduct(user: User): Observable<User> {

    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'})};
    const url5 = "http://localhost:8080/api/add/users";
    return this.http.post<User>( url5,user,httpOptions) .pipe(
      catchError(this.handleError<User>('Created Product')));
  }

  constructor(private http : HttpClient) { }
}
