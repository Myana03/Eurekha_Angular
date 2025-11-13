import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr:Comment[]=[]
  commentUrl='https://jsonplaceholder.typicode.com/comments'
  // constructor(private httpClient: HttpClient ){

  // }
  // ngOnInit(){
  //   this.httpClient.get(this.commentUrl).subscribe((response:any)=>{
  //     this.commentArr=response
  //   })
  // }

  ngOnInit(){
    this.fetchdata();
  }

  constructor(private commentService:CommentService){
  }

  fetchdata(){
    this.commentService.getAllComment().subscribe((res:Comment[])=>{
      this.commentArr=res;
    });
  }
}
