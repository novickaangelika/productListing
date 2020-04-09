import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsTableComponent } from './products/products-table/products-table.component';
import { ProductsBoxesComponent } from './products/products-boxes/products-boxes.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsBoxesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
