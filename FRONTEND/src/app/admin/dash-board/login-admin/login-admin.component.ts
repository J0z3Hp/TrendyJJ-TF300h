import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  formularioLoginAdmin = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });

  handleSubmint(){


    console.log('Esta es la información obtenida del imput email' + this.formularioLoginAdmin.value.email);
    console.log('Esta es la información obtenida del imput password'+ this.formularioLoginAdmin.value.password);
  }

}
