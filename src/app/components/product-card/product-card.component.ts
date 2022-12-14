import { Component, Input } from '@angular/core';
import { Product } from 'src/mocks/product.mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // declarer un produit comme une proprieté input
@Input()product!:Product;
}
