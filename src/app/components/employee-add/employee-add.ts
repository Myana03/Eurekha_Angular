import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['employeeAdded']
})
export class EmployeeAdd {
 employeeAdded = new EventEmitter();

  newEmp = { eId: 0, name: '', sal: 0 ,gender: '',dept: '',status:'',role:''};

  addEmployee() {
    if (this.newEmp.eId && this.newEmp.name && this.newEmp.sal && this.newEmp.gender && this.newEmp.dept
       && this.newEmp.status && this.newEmp.role
    ) {
      this.employeeAdded.emit({ ...this.newEmp });
      this.newEmp = { eId: 0, name: '', sal: 0, gender: '',dept: '',status:'',role:'' };
    new Snackbar('Employee Added Successfully', {
        position: 'top-center',
        theme: 'dark',
        timeout: 3000,
      });
      } else {
      new Snackbar('Please enter all fields', {
        position: 'top-center',
        theme: 'dark',
        timeout: 3000,
      });
    }
  }
}

