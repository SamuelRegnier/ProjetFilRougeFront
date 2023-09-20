import { Component, OnInit } from '@angular/core';
import { User } from '../user.modele';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  users! : User[];
  user! : User;

  constructor (private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(): void {
    this.users = Users;
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    for (const element of this.users){
      if(element.id == id){
        this.user = element;
      }
    }
  }

  onClickChange(user:User){
    alert("Attention vous êtes sur le point de modifier l'utilisateur " +  user.nom + " " + user.prenom);
  }

  onClickDelete(user:User){
    alert("Attention vous êtes sur le point de supprimer l'utilisateur " +  user.nom + " " + user.prenom);
  }

  goBack(){
    this.router.navigate(['/users'])
  }
 
}
