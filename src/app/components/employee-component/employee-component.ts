import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-component',
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {
  employeeArr:any
  employee:any;
    EmployeeService= inject(EmployeeService);

constructor(){
  this.employeeArr=this.EmployeeService.getAllEmployees();
}
employeeTypes(){
  if(this.employee==='allEmployees'){
    this.employeeArr=this.EmployeeService.getAllEmployees();
  }else if (this.employee === 'maleEmployees') {
      this.employeeArr = this.EmployeeService.getMaleEmployees();
    } else if (this.employee === 'femaleEmployees') {
      this.employeeArr = this.EmployeeService.getFemaleEmployees();
    }
}
}
