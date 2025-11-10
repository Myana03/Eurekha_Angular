import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Assignment1 } from '../assignment1/assignment1';
import { Directives } from '../directives/directives';
import { UserList } from '../user-list/user-list';
import { TypescriptUserlist } from '../typescript-userlist/typescript-userlist';
import { Products } from '../products/products';
import { MyModal } from '../my-modal/my-modal';
import { Demo1 } from '../demo1/demo1';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Employee } from '../employee/employee';
import { EmployeeComponent } from '../employee-component/employee-component';
@Component({
  selector: 'app-body',
  imports: [EmployeeComponent],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
