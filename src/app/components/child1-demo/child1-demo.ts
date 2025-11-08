
import { Component } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs:['parenttochild1','b']
})
export class Child1Demo {
  parenttochild1:any;
  b:any;
}