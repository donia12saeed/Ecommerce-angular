import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {path:'auth' , component:AuthComponent , children:[
    {path:'' , redirectTo:'login' , pathMatch:'full'},
    {path:'login' , component:LoginComponent , title:'login'},
    {path:'register' , component:RegisterComponent , title:'register'}
  ]},
  {path:'main' , component:MainComponent , canActivate:[authGuard] ,children:[
        {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent , title:'home' ,},
    {path:'products' , component:ProductComponent , title:'products'},
    {path:'cart' , component:CartComponent , title:'cart'},
    {path:'brands' , component:BrandsComponent , title:'brands'},
    {path:'categories' , component:CategoriesComponent , title:'categories'},
    {path:'home' , component:HomeComponent , title:'home'},
    {path:'wish list' , component:WishListComponent , title:'wish list'}
  ]},
  {path:'**' , component:NotFoundComponent}
];
