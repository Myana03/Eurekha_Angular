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
//import { CommentList } from '../comment-list/comment-list';
import { HttpModuleAssignment } from '../http-module-assignment/http-module-assignment';
import { EmployeeList } from '../employee-list/employee-list';
import { UserCrud } from '../user-crud/user-crud';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { EmpSubjectComponent } from '../emp-subject-component/emp-subject-component';
import { EffectDemo } from '../effect-demo/effect-demo';
//import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateDrivenForm } from '../template-driven-form/template-driven-form';
import { SignalAssignment } from '../signal-assignment/signal-assignment';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
