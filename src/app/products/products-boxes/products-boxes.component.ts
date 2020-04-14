import { Component, Input } from '@angular/core';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-products-boxes',
  templateUrl: './products-boxes.component.html',
  styleUrls: ['./products-boxes.component.scss']
})
export class ProductsBoxesComponent {
  @Input() products: Product[];
}
