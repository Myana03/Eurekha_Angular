import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr:any=[]
  commentUrl='https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient: HttpClient ){

  }
  ngOnInit(){
    this.httpClient.get(this.commentUrl).subscribe((response:any)=>{
      this.commentArr=response
    })
  }

}
