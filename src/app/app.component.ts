import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LanguageChangerService } from './language-change/services/language-changer.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentLanguage$: Observable<string>;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private storageService: StorageService) {}

  ngOnInit() {
    const language: string = this.storageService.getItem('language');

    if (language) {
      this.currentLanguage$ = of(language);
      this.translate.setDefaultLang(language);
    } else {
      this.currentLanguage$ = this.languageChangerService.languageCode$.pipe(
        tap(currentLanguage => this.translate.setDefaultLang(currentLanguage))
      );
    }
  }
}
