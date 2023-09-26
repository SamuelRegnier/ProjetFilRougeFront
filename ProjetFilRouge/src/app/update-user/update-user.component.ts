import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.modele';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  userFormGroup!: FormGroup;
  userId!: number;
  user !: User;

  constructor(private fb: FormBuilder, public userService:UsersService, private activeRoute: ActivatedRoute, private router : Router, private location : Location)
  {this.userId=this.activeRoute.snapshot.params['id'];}

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe({
      next:data => {
        this.user=data
        this.userFormGroup= this.fb.group({
            nom: this.fb.control(this.user.nom, [Validators.required, Validators.minLength(3)]),
            prenom: this.fb.control(this.user.prenom, [Validators.required, Validators.minLength(3)]),
            dateNaissance: this.fb.control(this.user.dateNaissance, [Validators.required]),
            adresse: this.fb.control(this.user.adresse, [Validators.required]),
            mail: this.fb.control(this.user.mail, [Validators.required]),
            telephone: this.fb.control(this.user.telephone, [Validators.required]),
            statut: this.fb.control(this.user.statut, [Validators.required]),
        })
      },
      error: err => {console.log(err)} 
    });
  }

  handleUpdateUser() {
    let u=this.userFormGroup.value;
    u.id= this.user.id;
    this.userService.updateUser(u).subscribe({
      next: data=> {alert("Utilisateur modifié avec succès");
      this.location.back();
      //this.router.navigate(['admin/users'])
      },
      error:err=> {console.log(err);}
      });
  }

  goBack(): void{
    this.location.back()
  }

}
