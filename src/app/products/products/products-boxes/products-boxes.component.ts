import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-products-boxes',
  templateUrl: './products-boxes.component.html',
  styleUrls: ['./products-boxes.component.scss']
})
export class ProductsBoxesComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
