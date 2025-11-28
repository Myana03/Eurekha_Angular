import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {

  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(
        'Virat',
        [Validators.required, Validators.minLength(5)] 
      ),
      lastName: new FormControl('kohli'),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
    },{updateOn : 'blur'});
  }

  submitMyForm() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
