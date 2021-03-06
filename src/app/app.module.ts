import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { StorageService } from './services/storage.service';
import { FileExistanceService } from './services/file-existance.service';
import { HeaderModule } from './header/header.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ProductsModule,
    HeaderModule
  ],
  declarations: [
    AppComponent,
    FooterComponent
  ],
  providers: [
    FileExistanceService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
