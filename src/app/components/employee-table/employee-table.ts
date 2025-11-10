import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-table',
  imports: [FormsModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employees'],
  outputs:['employeeDeleted']
})
export class EmployeeTable {
  employees:any[]=[]
  employeeDeleted = new EventEmitter()
 deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This employee record will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeDeleted.emit(id);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      }
    });
  }
}
