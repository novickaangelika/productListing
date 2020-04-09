import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageChangerService } from './language-change/shared/services/language-changer.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentLanguage$: Observable<string>;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService
  ) {
  }

  ngOnInit() {
    this.currentLanguage$ = this.languageChangerService.languageCode$.pipe(
      tap(currentLanguage => this.translate.setDefaultLang(currentLanguage))
    );
  }
}
