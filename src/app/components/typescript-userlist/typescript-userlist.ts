import { Component } from '@angular/core';
import users from './user-lists-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faEnvelope,
  faStar,
  faLandmark,
  faAddressBook,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-typescript-userlist',
  imports: [FontAwesomeModule],
  templateUrl: './typescript-userlist.html',
  styleUrl: './typescript-userlist.css',
})
export class TypescriptUserlist {
  userArr = users;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLandmark = faLandmark;
  faAddressBook = faAddressBook;
  faUser = faUser;
}
