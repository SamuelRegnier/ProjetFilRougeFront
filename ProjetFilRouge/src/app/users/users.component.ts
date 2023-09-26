import { User } from './../model/user.modele';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?:User[];
  errorMessage?:string;
  
  ngOnInit(){
    this.usersService.getUsers().subscribe(
      {next : data => {this.users = data},
      error: err => {this.errorMessage = err}}
    );
   // alert(this.usersService.getUsers());
  }

  constructor(private router:Router, private usersService: UsersService){
  }
 
  onClick(user:User){
    this.router.navigate(['/detailsUser', user]);
  }

  onCreateUser(){
    this.router.navigate(['admin/addUser']);
  }

  onUpdateUser(user : User){
    this.router.navigate(['/admin/updateUser/'+ user.id]);
  }

}
