import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css'
})
export class NavMainComponent {
   constructor( private _Router:Router){}
  logOut():void{
    sessionStorage.removeItem('token');
    this._Router.navigate(['/auth/login'])
  }
}
