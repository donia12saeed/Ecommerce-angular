import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envvironment } from '../environments/envvironments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient:HttpClient) { }

  getAllProduct():Observable<any> {
    return this._HttpClient.get(`${envvironment.baseUrl}/api/v1/products`)
  }
}
