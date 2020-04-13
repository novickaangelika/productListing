import { NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { LanguageChangeComponent } from './language-change/language-change/language-change.component';
import { LanguageChangerService } from './language-change/services/language-changer.service';
import { LanguageService } from './language-change/services/language.service';
import { HeaderComponent } from './header/header.component';
import { WindowService } from './services/window.service';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

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
    HeaderComponent,
    HeaderMobileComponent,
    LanguageChangeComponent
  ],
  exports: [
    HeaderComponent,
    HeaderMobileComponent
  ],
  providers: [
    WindowService,
    LanguageChangerService,
    LanguageService
  ]
})
export class HeaderModule {}
