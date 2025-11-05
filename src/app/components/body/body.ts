import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Assignment1 } from '../assignment1/assignment1';
import { Directives } from '../directives/directives';
import { UserList } from '../user-list/user-list';
import { TypescriptUserlist } from '../typescript-userlist/typescript-userlist';
import { Products } from '../products/products';
import { MyModal } from '../my-modal/my-modal';
import { Demo1 } from '../demo1/demo1';
@Component({
  selector: 'app-body',
  imports: [Products],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
