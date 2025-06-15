import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { envvironment } from '../environments/envvironments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  _HttpClient:HttpClient) { }


  registerUser(userData:object):Observable<any> {
    return this._HttpClient.post(`${envvironment.baseUrl}/api/v1/auth/signup` , userData)
  }

  loginUser(userData:object):Observable<any> {
    return this._HttpClient.post(`${envvironment.baseUrl}/api/v1/auth/signin` , userData)
  }
}
