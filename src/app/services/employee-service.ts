import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
 employees = [
    { eId: 101, name: 'Sanjay', sal: 50000, gender: 'male', dept: 'IT', status: 'Active', role: 'Developer' },
    { eId: 102, name: 'Sita', sal: 90000, gender: 'female', dept: 'HR', status: 'Active', role: 'Manager' },
    { eId: 103, name: 'Sameer', sal: 70000, gender: 'male', dept: 'Finance', status: 'Inactive', role: 'Tester' },
    { eId: 104, name: 'Geeta', sal: 80000, gender: 'female', dept: 'IT', status: 'Active', role: 'Developer' },
    { eId: 105, name: 'Deepak', sal: 100000, gender: 'male', dept: 'HR', status: 'Inactive', role: 'Manager' },
  ];

  getAllEmployees(){
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter(e=>e.gender==='male');
    }
     getFemaleEmployees(){
    return this.employees.filter(e=>e.gender==='female');
    }
}
