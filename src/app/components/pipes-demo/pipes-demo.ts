import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../custom_pipes/ordinal-pipe';
import { FormsModule } from '@angular/forms';
import { RomanPipe } from '../../custom_pipes/roman-pipe';
import { AgePipe } from '../../custom_pipes/age-pipe';
import { SalutationPipe } from '../../custom_pipes/salutation-pipe';
import { SearchPipe } from '../../custom_pipes/search-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, OrdinalPipe,RomanPipe,AgePipe,SalutationPipe,SearchPipe,FormsModule,],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName: string = 'saChIn TenDulKar';
  salary: number = 5000;
  dateObj = new Date();
  user = { name: 'sai', add: 'warangal', age: 25 };
  arr = [1, 2, 3, 4, 5, 6];
  num: number = 21;
  toRomanValue:number=0;
  birthday:Date=new Date();
  employees = [
  { eId: 101, name: 'Sanjay', sal: 50000, gender: 'male', dept: 'IT', status: 'Active', role: 'Developer' },
  { eId: 102, name: 'Sita', sal: 90000, gender: 'female', dept: 'HR', status: 'Active', role: 'Manager' },
  { eId: 103, name: 'Sameer', sal: 70000, gender: 'male', dept: 'Finance', status: 'Inactive', role: 'Tester' },
  { eId: 104, name: 'Geeta', sal: 80000, gender: 'female', dept: 'IT', status: 'Active', role: 'Developer' },
  { eId: 105, name: 'Deepak', sal: 100000, gender: 'male', dept: 'HR', status: 'Inactive', role: 'Manager' }
];
searchtext:string='';

}
