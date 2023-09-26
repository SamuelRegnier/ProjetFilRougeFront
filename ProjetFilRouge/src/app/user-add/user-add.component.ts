import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm!:FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private userService : UsersService, private location : Location){};

  ngOnInit (){ 
    this.userForm = this.fb.group({
      nom: this.fb.control('',[Validators.required]),
      prenom: this.fb.control('',[Validators.required]),
      dateNaissance : this.fb.control('', [Validators.required]),
      adresse :  this.fb.control('',[Validators.required]),
      mail :  this.fb.control('',[Validators.required]),
      telephone :  this.fb.control('',[Validators.required]),
      statut :  this.fb.control('',[ Validators.required]),
      photo :  this.fb.control('',[ Validators.required]),
    })
  }

  onSubmit(){;
    let userToCreate =  this.userForm.value;
    this.userService.addProduct(userToCreate).subscribe({
       next : data => {
         alert ("L'utilisateur a été créé avec succès");
         this.userForm.reset;
         this.router.navigateByUrl("/admin/users"); 
       },
       error : err => { console.log(err);
       }
    })
  }

  goBack(): void{
    this.location.back()
  }
}
