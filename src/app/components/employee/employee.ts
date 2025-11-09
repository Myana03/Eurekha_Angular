import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';
import { EmployeeTable } from '../employee-table/employee-table';

@Component({
  selector: 'app-employee',
  imports: [EmployeeAdd, EmployeeTable],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
employees = [
    { eId: 101, name: 'Sanjay', sal: 50000, gender: 'male', dept: 'IT', status: 'Active', role: 'Developer' },
    { eId: 102, name: 'Sita', sal: 90000, gender: 'female', dept: 'HR', status: 'Active', role: 'Manager' },
    { eId: 103, name: 'Sameer', sal: 70000, gender: 'male', dept: 'Finance', status: 'Inactive', role: 'Tester' },
    { eId: 104, name: 'Geeta', sal: 80000, gender: 'female', dept: 'IT', status: 'Active', role: 'Developer' },
    { eId: 105, name: 'Deepak', sal: 100000, gender: 'male', dept: 'HR', status: 'Inactive', role: 'Manager' },
  ];

  onEmployeeAdded(newEmp: any) {
    this.employees.push(newEmp);
  }

  onEmployeeDeleted(eId: number) {
    this.employees = this.employees.filter(e => e.eId !== eId);
  }
}
