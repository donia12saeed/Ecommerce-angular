import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envvironment } from '../environments/envvironments';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient = inject(HttpClient)
  constructor() { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${envvironment.baseUrl}/api/v1/categories`)
  }
}
