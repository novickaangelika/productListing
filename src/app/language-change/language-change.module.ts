import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguageChangeComponent } from './language-change/language-change.component';
import { FormsModule } from '@angular/forms';
import { LanguageChangerService } from './shared/services/language-changer.service';
import { LanguageService } from './shared/services/language.service';

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
    LanguageChangeComponent
  ],
  exports: [
    LanguageChangeComponent
  ],
  providers: [
    LanguageChangerService,
    LanguageService
  ]
})
export class LanguageChangeModule { }
