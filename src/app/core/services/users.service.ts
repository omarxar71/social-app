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
  ChangePasswordApi = (changePasswordForm:object):Observable <any>=>{
    return this._HttpClient.patch('https://linked-posts.routemisr.com/users/change-password' , changePasswordForm , {headers:{'token':localStorage.getItem("token")!}})
  }
  uploadPhotoApi=(UploadPhotoFile:object):Observable <any>=>{
    return  this._HttpClient.put(`https://linked-posts.routemisr.com/users/upload-photo` ,UploadPhotoFile , {headers:{'token' : localStorage.getItem("token")!}}) 
  }
  GetLoggedUserApi =():Observable <any>=>{
    return  this._HttpClient.get(`https://linked-posts.routemisr.com/users/profile-data` , {headers:{'token':localStorage.getItem('token')!}})
  }
}
