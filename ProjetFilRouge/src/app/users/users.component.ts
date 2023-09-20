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

  constructor(private router:Router){
  }
 
  onClick(user:User){
    this.router.navigate(['/detailsUser', user]);
  }

  onCreateUser(){
    this.router.navigate(['/addUser']);
  }

}
