import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnDestroy {


  registerSub!:Subscription
  constructor(private  _AuthService:AuthService , private _Router:Router){}


  resText!:string
  loading: boolean = false


 registerForm: FormGroup = new FormGroup({
  name: new FormControl(null, [Validators.required , Validators.minLength(3)]),
  email: new FormControl(null , [Validators.required , Validators.email]),
  password: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)]),
  rePassword: new FormControl(null , [Validators.required]),
  phone: new FormControl(null , [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
 } ,
 this.confirmPassword
)


 confirmPassword(g: AbstractControl) {
  if(g.get('password')?.value === g.get('rePassword')?.value ) {
    return null;
  }else{
    return {missMatch : true}
  }
 }

 registerUser(){
  if(this.registerForm.valid){
    this.loading = true
      console.log(this.registerForm);
     this.registerSub = this._AuthService.registerUser(this.registerForm.value).subscribe({
        next:(res)=>{console.log(res);
          this._Router.navigate(['/auth/login'])
        },
        error:(error)=>{console.log(error.error.message);
          this.resText= error.error.message
          this.loading = false
        },
        complete:()=>{}
      })

  }else{
    this.registerForm.setErrors({'missMatch':true})
  }
 }

ngOnDestroy(): void {
  this.registerSub?.unsubscribe()
}


}
