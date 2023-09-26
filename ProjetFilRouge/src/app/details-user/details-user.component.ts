import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.modele';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  users! : User[];
  user! : User;
  userId!: number;
  errorMessage!: string;

  constructor (private route:ActivatedRoute, private router:Router, private userService:UsersService){
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(this.userId).subscribe(
      {
        next : user => {this.user = user},
        error : err => {this.errorMessage = err}
      }
    );
  }

  onClickChange(user:User){
    this.router.navigate(['/updateUser', user]);
  }

  onClickDelete(user:User){
    this.router.navigate(['/admin/deleteUser', user]);
  }

  goBack(){
    this.router.navigate(['/admin/users'])
  }
 
}
