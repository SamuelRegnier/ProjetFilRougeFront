import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //alert("je suis dans le guard ");
    let authenticated =  this.authService.isAuthenticated();
    if(!authenticated ){
   //alert("je retourne false ");
      this.router.navigateByUrl("/login");
   
      return false; 
    } else {
       //alert("je retourne true  ");
      return true
    }
  }

  constructor (private authService: AuthenticationService,
    private router : Router){ }
  
  

}
