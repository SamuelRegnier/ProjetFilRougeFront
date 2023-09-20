import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private fb: FormBuilder){};

  userForm = this.fb.group({
    nom :  ['', Validators.required],
    prenom :  ['', Validators.required],
    dateNaissance :  ['', Validators.required],
    adresse :  ['', Validators.required],
    mail :  ['', Validators.required],
    telephone :  ['', Validators.required],
    statut :  ['', Validators.required],
  })

  onSubmit(){
    alert("L'utilisateur a bien été crée");
  }
}
