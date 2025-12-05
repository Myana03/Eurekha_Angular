// import { Component } from '@angular/core';
// import products from './products_data';
// import { FormsModule } from '@angular/forms';
// import { TextOnly } from '../../custom_directives/text-only';
// import { ZoomIn } from '../../custom_directives/zoom-in';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { ProductItem } from '../product-item/product-item';

// @Component({
//   selector: 'app-products',
//   imports: [FormsModule, FontAwesomeModule, NgxPaginationModule, TextOnly, ProductItem],
//   templateUrl: './products.html',
//   styleUrl: './products.css',
// })
// export class Products {
//   filteredProducts = products;
  // categoryArr: string[] = [];
  // selectedCategory: string = 'all';
  // searchString: string = '';
  //  p: number = 1;

  // constructor() {
  //   this.categoryArr = ['all', ...new Set(products.map(p => p.category))];
  // }

  // onCategoryChange() {
  //   this.filteredProducts = this.selectedCategory === 'all'
  //     ? products
  //     : products.filter(p => p.category === this.selectedCategory);
  // }

  // search() {
  //   const word = this.searchString.toLowerCase();
  //   this.filteredProducts = products.filter(
  //     p => p.title.toLowerCase().includes(word) ||
  //          p.description.toLowerCase().includes(word) ||
  //          p.category.toLowerCase().includes(word)
  //   );
  // }

  // asc() { this.filteredProducts.sort((a, b) => a.price - b.price); }
  // dsc() { this.filteredProducts.sort((a, b) => b.price - a.price); }

  
// }


import { Component } from '@angular/core';
import products from './products_data';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,RouterLink,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  filteredProducts = products;
  categoryArr: string[] = [];
  selectedCategory: string = 'all';

  constructor(private cartService: CartService) {
    this.categoryArr = products.map(prod => prod.category); // duplicate categories
    this.categoryArr = ['all', ...new Set(this.categoryArr)]; // unique categories
  }
  onCategoryChange() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = products;
    } else {
      this.filteredProducts = products.filter(product => product.category === this.selectedCategory);
    }
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
