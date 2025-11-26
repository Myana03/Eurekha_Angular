import { Component } from '@angular/core';
import { EmpSubjectService } from '../../services/emp-subject-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-subject-component',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './emp-subject-component.html',
  styleUrl: './emp-subject-component.css',
})
export class EmpSubjectComponent {
employees: any[] = [];

  eId: any = '';
  name = '';
  sal: any = '';
  gender = '';

  constructor(private empService: EmpSubjectService) {}

  ngOnInit() {
    this.empService.employees$.subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee() {
    const emp = {
      eId: Number(this.eId),
      name: this.name,
      sal: Number(this.sal),
      gender: this.gender
    };

    this.empService.addEmployee(emp);

    this.eId = '';
    this.name = '';
    this.sal = '';
    this.gender = '';
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id);
  }

  clearAll() {
    this.empService.clearEmployee();
  }
}
