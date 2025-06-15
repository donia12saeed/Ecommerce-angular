import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../core/services/products.service';
import { error } from 'console';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit , OnDestroy{
  categorySub!:Subscription
  private readonly _ProductsService =inject(ProductsService)
  private readonly _CategoriesService =inject(CategoriesService)

  productsData!:IProduct[]
  categoriesData!:ICategory[]

mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
     items:1 ,
    nav: true
  }


  categoriesSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1100:{
        items:6
      }
    },
    nav: true
  }
  productSub!:Subscription
  ngOnInit(): void {
    this.productSub = this._ProductsService.getAllProduct().subscribe({
      next:(res)=>{console.log(res.data)
        this.productsData = res.data
      },
      error:(error)=>{console.log(error)
      },
    })


   this.categorySub = this._CategoriesService.getAllCategories().subscribe({
    next:(res)=>{console.log(res.data);
      this.categoriesData = res.data
    },
    error:(error)=>{console.log(error);
    },
    complete:()=>{}
    })
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
    this.categorySub?.unsubscribe()
  }
}
