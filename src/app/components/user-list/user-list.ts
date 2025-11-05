import { Component } from '@angular/core';
import * as data from './users.json' 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope,faStar,faLandmark,faAddressBook,faUser } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-user-list',
  imports: [FontAwesomeModule, NgxPaginationModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr=(data as any).default;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLandmark=faLandmark;
  faAddressBook=faAddressBook;
  faUser=faUser;
  p:number=1;
}
