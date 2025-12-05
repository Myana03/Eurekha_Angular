import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  activadedRoute = inject(ActivatedRoute);
  productInfo: any; 
  ngOnInit() {
    this.activadedRoute.queryParams.subscribe((params: any) => {
      this.productInfo = {
        id: params.id,
        name: params.name,
        price: params.price
      }
})
  }
}
