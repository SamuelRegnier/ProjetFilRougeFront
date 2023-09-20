import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent {

  constructor(private fb: FormBuilder) {
    
  }

    addSession = this.fb.group ({
   dateDebut: ['', Validators.required], 
   dateFin: ['', Validators.required],
   idClassroom: ['', Validators.required]
  });

  onSubmit () {
    console.warn (this.addSession.value)
  }
}
