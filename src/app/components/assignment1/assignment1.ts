import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignment1',
  imports: [FormsModule, CommonModule],
  templateUrl: './assignment1.html',
  styleUrl: './assignment1.css',
})
export class Assignment1 {
  flag: boolean = true;
  toggle() {
    this.flag = !this.flag;
  }
  msg: String = '';
  Team: String = '';

  number1: number = 0;
  number2: number = 0;
  operator: string = '';
  result: Number | string = 0;

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 !== 0 ? this.number1 / this.number2 : 'Cannot divide by 0';
        break;
    }
    return this.result;
  }
  inputType: string = 'text';
  textPassword() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }

  count: number = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }

  isDark: boolean = false;
  toggleTheme() {
    this.isDark = !this.isDark;
  }
  fahrenheit: Number = 0;
  temperature: number = 0;
  conversion() {
    this.fahrenheit = (this.temperature * 9) / 5 + 32;
  }

  
}
