import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageChangerService } from './shared/services/language-changer.service';
import { Observable } from 'rxjs';
import { LanguageService } from './shared/services/language.service';
import { Language } from './shared/models/language.model';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})

export class LanguageChangeComponent implements OnInit {
  languageCodes$: Observable<Language[]>;
  @Input() currentLanguage: string;

  constructor(
    private translate: TranslateService,
    private languageChangerService: LanguageChangerService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit() {
    this.languageCodes$ = this.languageService.getLanguagesCodes();
  }

  changeLanguage(code: string) {
    console.log('code', code);
    this.translate.setDefaultLang(code);
    this.languageChangerService.changeLanguage(code);
  }
}
