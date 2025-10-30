import { Component, signal } from '@angular/core';
import { Categories } from './components/categories/categories';
import { Navbar } from './components/Navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';
import { TopDeals } from './components/top-deals/top-deals';

@Component({
  selector: 'app-root',
  imports: [Navbar,Categories,Carousel,TopDeals,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Eurekha_Angular');
}
