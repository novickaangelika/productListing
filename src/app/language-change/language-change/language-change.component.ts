import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Language } from '../models/language.model';
import { LanguageChangerService } from '../services/language-changer.service';
import { LanguageService } from '../services/language.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})

export class LanguageChangeComponent implements OnInit {
  @Input() currentLanguage: string;
  languageCodes$: Observable<Language[]>;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private languageService: LanguageService,
    private storageService: StorageService) {}

  ngOnInit() {
    this.languageCodes$ = this.languageService.getLanguagesCodes();
  }

  changeLanguage(code: string) {
    this.translate.setDefaultLang(code);
    this.languageChangerService.changeLanguage(code);
    this.storageService.setItem('language', code);
    location.replace('/');
  }
}
