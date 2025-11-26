import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpSubjectService {

  private employeesSubject = new BehaviorSubject<any[]>([
    { eId: 101, name: 'Sanjay', sal: 50000, gender: 'male' },
    { eId: 102, name: 'Sita', sal: 90000, gender: 'female' },
    { eId: 103, name: 'Sameer', sal: 70000, gender: 'male' },
    { eId: 104, name: 'Geeta', sal: 80000, gender: 'female' },
    { eId: 105, name: 'Deepak', sal: 100000, gender: 'male' }
  ]);

  employees$ = this.employeesSubject.asObservable();

  addEmployee(emp: any) {
    const current = this.employeesSubject.value;
    this.employeesSubject.next([...current, emp]);
  }

  deleteEmployee(id: number) {
    this.employeesSubject.next(
      this.employeesSubject.value.filter(e => e.eId !== id)
    );
  }

  clearEmployee() {
    this.employeesSubject.next([]);
  }

}
