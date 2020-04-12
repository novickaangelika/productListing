import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ProductsComponent } from './products/products.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductsBoxesComponent } from './products-boxes/products-boxes.component';
import { ProductImageComponent } from './product/product-image/product-image.component';
import { ProductsViewChangerComponent } from './products-view-changer/products-view-changer/products-view-changer.component';
import { CsvConverterService } from './products/services/csv-converter.service';
import { PaginationModule } from './pagination/pagination.module';
import { PageLimitModule } from './page-limit/page-limit.module';
import { ProductsViewChangerModule } from './products-view-changer/products-view-changer.module';

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
    PaginationModule,
    PageLimitModule,
    ProductsViewChangerModule
  ],
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsBoxesComponent,
    ProductImageComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    CsvConverterService
  ]
})
export class ProductsModule { }
