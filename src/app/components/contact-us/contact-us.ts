import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  hasChanges:boolean = true;

  submitForm(formData:any){
    this.hasChanges = false;
    console.log(formData)
  }

}
