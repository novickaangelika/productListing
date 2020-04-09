import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { CsvConverterService } from './shared/services/csv-converter.service';
import { FileExistanceService } from './shared/services/file-existance.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ProductsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    CsvConverterService,
    FileExistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
