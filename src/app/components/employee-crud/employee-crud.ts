import { Component } from '@angular/core';
import employeeData from './employee-data';
import Swal from 'sweetalert2';
import { MyModal } from '../my-modal/my-modal';
import Snackbar from 'awesome-snackbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faUserPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule, FormsModule,MyModal],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {
  data = employeeData;

  eId: any;
  name: string = '';
  sal: any;
  gender: string = 'male';
  dept: string = '';
  status: string = 'Active';
  role: string = '';

  constructor() {
    console.log('Initial employees:', this.data);
  }
  // selectedEmployee: any = null;

  // viewEmployee(emp: any) {
  //   Swal.fire({
  //     title: `<strong>Employee Details</strong>`,
  //     html: `
  //     <div style="text-align:left;">
  //       <p><b>ID:</b> ${emp.eId}</p>
  //       <p><b>Name:</b> ${emp.name}</p>
  //       <p><b>Salary:</b> ${emp.sal}</p>
  //       <p><b>Gender:</b> ${emp.gender}</p>
  //       <p><b>Department:</b> ${emp.dept}</p>
  //       <p><b>Status:</b> ${emp.status}</p>
  //       <p><b>Role:</b> ${emp.role}</p>
  //     </div>
  //   `,
  //     confirmButtonText: 'Close',
  //     confirmButtonColor: '#3085d6',
  //     width: '400px',
  //   });
  // }


// selectedEmployee: any = null;
// viewEmployee(emp: any) {
//   this.selectedEmployee = emp;
// }

  addEmployee() {
    if (this.eId && this.name && this.sal && this.dept && this.role) {
      const newEmp = {
        eId: this.eId,
        name: this.name,
        sal: this.sal,
        gender: this.gender,
        dept: this.dept,
        status: this.status,
        role: this.role,
      };

      this.data = [...this.data, newEmp];
      console.log('Employee added:', newEmp);

      new Snackbar('Employee Added Successfully', {
        position: 'top-center',
        theme: 'light',
        timeout: 2000,
      });

      this.eId = '';
      this.name = '';
      this.sal = '';
      this.gender = 'male';
      this.dept = '';
      this.status = 'Active';
      this.role = '';
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'All fields are required!',
        confirmButtonColor: '#3085d6',
      });
    }
  }

  deleteEmployee(eId: number) {
    this.data = this.data.filter((e) => e.eId != eId);
  }

  confirmDelete(eId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEmployee(eId);
        Swal.fire({
          title: 'Deleted!',
          text: 'Employee has been removed.',
          icon: 'success',
        });
      }
    });
  }

  faTrash = faTrash;
  faUserPlus = faUserPlus;
  faEye = faEye;
}
