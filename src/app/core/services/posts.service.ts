import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(){}
  private readonly _HttpClient=inject(HttpClient);

  CreatePostsApi=(data:object):Observable <any>=>{
    return this._HttpClient.post(`https://linked-posts.routemisr.com/posts`,data, {headers:{'token':localStorage.getItem('token')!}})
  }
  GetAllPostsApi=(limit:number):Observable <any>=>{
    return this._HttpClient.get(`https://linked-posts.routemisr.com/posts?limit=${limit}` , {headers:{'token':localStorage.getItem("token")!}})
  }
  GetMyPostsApi= ():Observable <any>=>{
    return this._HttpClient.get(`https://linked-posts.routemisr.com/users/664bcf3e33da217c4af21f00/posts?limit=2` , {headers:{'token':localStorage.getItem('token')!}})
  }
  GetSinglePostApi= (postId:string):Observable <any>=>{
    return this._HttpClient.get(`https://linked-posts.routemisr.com/posts/${postId}` , {headers:{'token':localStorage.getItem('token')!}})
  }
  updatePostApi=(postId:string , data:object):Observable <any>=>{
    return this._HttpClient.put(`https://linked-posts.routemisr.com/posts/${postId}`,data , {headers:{'token':localStorage.getItem('token')! }})
  }
  deletePostApi=(postId:string):Observable <any>=>{
    return this._HttpClient.delete(`https://linked-posts.routemisr.com/posts/${postId}` , {headers:{'token' : localStorage.getItem("token")!}})
  }

}
