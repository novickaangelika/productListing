import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewChangerComponent } from './products-view-changer/products-view-changer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsViewChangerComponent
  ],
  exports: [
    ProductsViewChangerComponent
  ]
})
export class ProductsViewChangerModule { }
