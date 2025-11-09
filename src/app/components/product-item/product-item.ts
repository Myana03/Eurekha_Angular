import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faDollarSign, faTags, faInfoCircle, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ZoomIn } from '../../custom_directives/zoom-in';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ZoomIn],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  inputs: ['product']
})
export class ProductItem {
  product: any;
  faStar = faStar;
  faDollarSign = faDollarSign;
  faTags = faTags;
  faInfoCircle = faInfoCircle;
  faBoxOpen = faBoxOpen;
}
