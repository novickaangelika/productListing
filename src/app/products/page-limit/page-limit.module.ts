import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PageLimitComponent } from './page-limit/page-limit.component';
import { PageLimitService } from './services/page-limit.service';

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
    FormsModule
  ],
  declarations: [
    PageLimitComponent
  ],
  exports: [
    PageLimitComponent
  ],
  providers: [
    PageLimitService
  ]
})
export class PageLimitModule { }
