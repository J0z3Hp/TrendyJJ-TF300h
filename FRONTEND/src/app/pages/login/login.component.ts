import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formularioLoginUsers = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });

  handleSubmint(){


    console.log('Esta es la información obtenida del imput email' + this.formularioLoginUsers.value.email);
    console.log('Esta es la información obtenida del imput password'+ this.formularioLoginUsers.value.password);
  }
}
