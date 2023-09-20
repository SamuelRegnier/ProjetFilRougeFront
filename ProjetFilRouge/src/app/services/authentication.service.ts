//import { UUID } from 'angular2-UUID';
import { Injectable } from '@angular/core';
import { AppUser } from '../model/appUser.model';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
users: AppUser[]=[];
authenticatedUser:AppUser | undefined;


  constructor() {  
  this.users.push({id:1, username:"StephanieAlkoussa",password:"1234",roles:["USER","ADMIN"]});
  this.users.push( {id:2, username:"SamuelRegnier",password:"1234",roles:["USER","ADMIN"]});
  this.users.push({id:3, username:"SofianeBenHamed",password:"1234",roles:["USER","ADMIN"]});
  this.users.push({id:4, username:"RomainFerrer",password:"1234",roles:["USER","ADMIN"]});
  this.users.push({id:5, username:"User01",password:"1234",roles:["USER"]});
  this.users.push({id:6, username:"User02",password:"1234",roles:["USER","ADMIN"]});

}

 public login(username: string, password: string): Observable<AppUser> {
  let appUser = this.users.find(u => u.username == username);

  if (!appUser || appUser.password != password) 
    return throwError(() => new Error("Le nom d'utilisateur ou le mot de passe est incorrect")); // j'ai supprimer des {} 
  return of(appUser);
}

  public authenticateUser (appUser: AppUser) :Observable <boolean> {
    this.authenticatedUser= appUser;
    localStorage.setItem("authUser" , JSON.stringify ({username:appUser.username, roles:appUser.roles, jwt: "JWT_TOKEN" }))
  return of (true);
  }

  public hasRole (roles:string) : boolean {
   return this.authenticatedUser!.roles.includes("ADMIN"); 
  }
  
  isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }

  public logout (): Observable <boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authuser")
    return of (true);
  }
}

