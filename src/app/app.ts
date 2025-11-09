import { Component, signal } from '@angular/core';
import { Categories } from './components/categories/categories';
import { Navbar } from './components/Navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';
import { DataBinding } from './components/data-binding/data-binding';
import { Assignment1 } from './components/assignment1/assignment1';
import { Body } from './components/body/body';
import { ProductItem } from './components/product-item/product-item';
import { Products } from './components/products/products';
@Component({
  selector: 'app-root',
  imports: [Navbar,Body,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Eurekha_Angular');
}
