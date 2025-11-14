import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient:HttpClient){}
userURL='http://localhost:3000/users'

  getAllUsers(){
    return this.httpClient.get<any[]>(this.userURL);
  }

  postUser(user:any){
    return this.httpClient.post<any[]>(this.userURL,user)
  }
  
  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userURL}/${id}`);
  }

  updateUser(id: string, user: any) {
    return this.httpClient.put(`${this.userURL}/${id}`, user);
  }
}
