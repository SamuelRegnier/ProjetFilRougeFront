import { Component } from '@angular/core';
import { User } from '../model/user.modele';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  user! : User;
  userId!: number;
  errorMessage!: string;

  constructor(private userService:UsersService, private route:ActivatedRoute, private router:Router, private location: Location){}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(this.userId).subscribe(
      {
        next : user => {this.user = user},
        error : err => {this.errorMessage = err}
      }
    );
  }

  deleteUser(user : User){
    let conf = confirm("Etes vous sure de votre choix ?");
    if (conf == false) return;
    this.userService.deleteUser(user).subscribe(
      {
        next : data => {alert("L'utilisateur " + user.nom + " " + user.prenom + " a bien été supprimé")},
        error : err => {this.errorMessage = err}
      }
    )
    this.router.navigate(['/users'])
  }

  goBack(): void{
    this.location.back()
  }
}
