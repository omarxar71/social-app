import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly _HttpClient=inject(HttpClient)
  constructor() { }


  createCommentApi=(commentForm:object):Observable <any>=>{
    return  this._HttpClient.post(`https://linked-posts.routemisr.com/comments` , commentForm ,{headers:{'token':localStorage.getItem('token')!}} )
  }
  GetPostCommentsApi =(postId:string):Observable <any>=>{
    return this._HttpClient.get(`https://linked-posts.routemisr.com/posts/${postId}/comments` ,  {headers:{"token":localStorage.getItem("token")!}})
  }
  UpdateCommentApi= (commentId:string , NewComment:object):Observable <any>=>{
    return this._HttpClient.put(`https://linked-posts.routemisr.com/comments/${commentId}`, NewComment, {headers:{'token':localStorage.getItem('token')!}})
  }
  DeleteCommentApi=(commentId:string)=>{
    this._HttpClient.delete(`https://linked-posts.routemisr.com/comments/${commentId}` , {headers:{'token':localStorage.getItem('token')!}})
  }
}
