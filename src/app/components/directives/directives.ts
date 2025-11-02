import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 5;
  f1Teams = ['redbull', 'alpine', 'ferrari', 'mclaren'];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  isLoggedIn: boolean=true;
  isLogged(){
    this.isLoggedIn=!this.isLoggedIn
  }
  userRole: String='manager'

  employees1 = [
  { eId: 101, name: 'Sanjay', sal: 5000, gender: 'male', dept: 'IT' },
  { eId: 102, name: 'Sita', sal: 9000, gender: 'female', dept: 'HR' },
  { eId: 103, name: 'Sameer', sal: 7000, gender: 'male', dept: 'Finance' },
  { eId: 104, name: 'Geeta', sal: 8000, gender: 'female', dept: 'IT' },
  { eId: 105, name: 'Deepak', sal: 10000, gender: 'male', dept: 'HR' }
];

selectedDept = '';


 tasks = [
  { id: 1, title: 'Complete Angular assignment', completed: false },
  { id: 2, title: 'Review pull requests', completed: true },
  { id: 3, title: 'Prepare project report', completed: false },
  { id: 4, title: 'Attend team meeting', completed: true },
  { id: 5, title: 'Update documentation', completed: false },
 ];

 toggleTask(task:any){
  task.completed=!task.completed;
 }
}
