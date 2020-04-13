import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

import { LanguageChangerService } from './header/language-change/services/language-changer.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private storageService: StorageService) {}

  ngOnInit() {
    const language: string = this.storageService.getItem('language');

    if (language) {
      this.translate.setDefaultLang(language);
    } else {
      this.languageChangerService.languageCode$.pipe(
        tap(currentLanguage => this.translate.setDefaultLang(currentLanguage))
      );
    }
  }
}
