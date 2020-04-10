import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ProductsComponent } from './products/products.component';
import { ProductsTableComponent } from './products/products-table/products-table.component';
import { ProductsBoxesComponent } from './products/products-boxes/products-boxes.component';
import { ProductImageComponent } from './products/product/product-image/product-image.component';
import { ProductsViewChangerComponent } from './products/products-view-changer/products-view-changer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: (HttpLoaderFactory),
            deps: [PLATFORM_ID, HttpClient]
        },
        isolate: false
    }),
  ],
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsBoxesComponent,
    ProductImageComponent,
    ProductsViewChangerComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
