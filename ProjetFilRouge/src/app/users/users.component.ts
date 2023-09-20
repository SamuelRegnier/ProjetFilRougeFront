import { Component, OnInit } from '@angular/core';
import { User } from '../user.modele';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?:User[];
  
  ngOnInit(){
    this.users = Users;
  }

  onClickChange(user:User){
    alert("Attention vous êtes sur le point de modifier l'utilisateur " +  user.nom + " " + user.prenom);
  }

  onClickDelete(user:User){
    alert("Attention vous êtes sur le point de supprimer l'utilisateur " +  user.nom + " " + user.prenom);
  }

  constructor(private router:Router){
  }
 
  onClick(user:User){
    let link = ['/detailsUser', user];
    this.router.navigate(link);
  }

}
