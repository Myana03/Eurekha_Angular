import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-user-crud',
  imports: [FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud {

usersArr: any[] = [];

id:string=''
FirstName:string=''
LastName:string=''
Email:string=''
Gender:string=''
Age:string=''
loading:boolean=false


constructor(private userService:UserService){}
ngOnInit(){
  this.fetchUsers();
}

  fetchUsers() {
    this.loading = true;
    this.userService.getAllUsers().pipe(delay(1000)).subscribe((res) => {
      this.usersArr = res;
      this.loading = false;
    });
  }

addnewuser(){
 const newUser = {
      id: this.id,
      firstName: this.FirstName,
      lastName: this.LastName,
      email: this.Email,
      gender: this.Gender,
      age: this.Age
    };
    this.userService.postUser(newUser).subscribe((res:any)=>{
      this.usersArr.push(res);
      //this.fetchUsersdata;

         this.resetForm();
    })
}

 deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.usersArr = this.usersArr.filter(u => u.id !== id);
    });
  }

 updateUser() {
    const updatedUser = {
      id: this.id,
      firstName: this.FirstName,
      lastName: this.LastName,
      email: this.Email,
      gender: this.Gender,
      age: this.Age
    };

    this.userService.updateUser(this.id, updatedUser).subscribe(() => {
      const index = this.usersArr.findIndex(u => u.id === this.id);
      this.usersArr[index] = updatedUser;
      this.resetForm();
    });
  }

    edit(u: any) {
    this.id = u.id;
    this.FirstName = u.firstName;
    this.LastName = u.lastName;
    this.Email = u.email;
    this.Gender = u.gender;
    this.Age = u.age;
  }

   resetForm() {
    this.id = this.FirstName = this.LastName = this.Email = this.Gender = this.Age = '';
  }
}
