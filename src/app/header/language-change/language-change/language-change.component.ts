import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { Language } from '../models/language.model';
import { LanguageChangerService } from '../services/language-changer.service';
import { LanguageService } from '../services/language.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})

export class LanguageChangeComponent implements OnInit {
  currentLanguage$: Observable<string>;
  languageCodes$: Observable<Language[]>;
  changeLanguage: string;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private languageService: LanguageService,
    private storageService: StorageService) {}

  ngOnInit() {
    this.languageCodes$ = this.languageService.getLanguagesCodes();
    const language: string = this.storageService.getItem('language');

    if (language) {
      this.currentLanguage$ = of(language);
    } else {
      this.currentLanguage$ = this.languageChangerService.languageCode$;
    }
  }

  doChangeLanguage(code) {
    this.translate.setDefaultLang(code);
    this.languageChangerService.changeLanguage(code);
    this.storageService.setItem('language', code);
    location.replace('/');
  }
}
