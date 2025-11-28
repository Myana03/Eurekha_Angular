import { Component } from '@angular/core';
import { MyModal } from '../my-modal/my-modal';
import { Cart } from '../cart/cart';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Cart,RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
