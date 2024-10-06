import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  private readonly _HttpClient=inject(HttpClient)
  signUpAPI= (signUpForm:object):Observable <any>=>{
    return this._HttpClient.post(`https://linked-posts.routemisr.com/users/signup` , signUpForm)
  }
  signInAPI= (signInForm:object):Observable <any>=>{
    return this._HttpClient.post(`https://linked-posts.routemisr.com/users/signin` , signInForm)

  }

}
