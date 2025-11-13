import { Component, inject } from '@angular/core';
import { EmpService } from '../../services/emp-service';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
empservice=inject(EmpService)
empArr:Employee[]=[];

ngOnInit(){
  this.empservice.getAllEmployees().subscribe((res:Employee[])=>{
    console.log(res)
    this.empArr=res;
  })
}
}
