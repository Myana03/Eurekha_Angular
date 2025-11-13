import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentUrl='https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient:HttpClient){

  }
  getAllComment():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.commentUrl)
  }
  
}
