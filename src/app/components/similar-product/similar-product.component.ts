import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/mocks/product.mock';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.css']
})
export class SimilarProductComponent {
  products:Product[]=PRODUCTS;
  
}
