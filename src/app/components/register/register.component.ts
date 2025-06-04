import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 registerForm: FormGroup = new FormGroup({
  name: new FormControl(null),
  email: new FormControl(null),
  password: new FormControl(null),
  rePassword: new FormControl(null),
  phone: new FormControl(null),
 })

 registerUser(){
  console.log(this.registerForm);

 }




}
