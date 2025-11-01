import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Assignment1 } from '../assignment1/assignment1';
@Component({
  selector: 'app-body',
  imports: [DataBinding,Assignment1],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
