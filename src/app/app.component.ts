import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LanguageChangerService } from './language-change/services/language-changer.service';
import { StorageService } from './services/storage.service';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentLanguage$: Observable<string>;
  windowScrolled: boolean;
  topPositionToStartShowingScroll = 100;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private storageService: StorageService,
    private windowService: WindowService) {}

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

  @HostListener('window:scroll')
  onWindowScrolled() {
      const scrollPosition = this.windowService.getScrollPosition();

      if (scrollPosition >= this.topPositionToStartShowingScroll) {
          this.windowScrolled = true;
      } else {
          this.windowScrolled = false;
      }
  }
}
