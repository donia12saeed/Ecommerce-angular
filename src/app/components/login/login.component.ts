import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import e from 'express';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  loginSub!:Subscription
  constructor(private  _FormBuilder:FormBuilder , private _AuthService:AuthService, private _Router:Router){

  }

  resText!:string
    loading: boolean = false



  loginForm: FormGroup = this._FormBuilder.group({
    email: [null , [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)]]
  })



   loginUser():void{
    if(this.loginForm.valid){
      this.loading = true
        console.log(this.loginForm);

     this.loginSub =  this._AuthService.loginUser(this.loginForm.value).subscribe({
          next:(res)=>{console.log(res);
            this.resText = res.message;
            this.loading = false;
            sessionStorage.setItem('token' , res.token)
            this._Router.navigate(['/main/home'])
          },
          error:(error)=>{console.log(error);
            this.resText = error.error.message;
             this.loading = false
          },
          complete:()=>{}
        })
    }
   }

ngOnDestroy(): void {
  this.loginSub?.unsubscribe()
}
}
