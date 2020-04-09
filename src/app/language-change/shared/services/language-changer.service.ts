import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageChangerService {

    private languageCodeSubject = new BehaviorSubject('pl');
    public languageCode$ = this.languageCodeSubject.asObservable();

    public changeLanguage(code: string) {
        this.languageCodeSubject.next(code);
    }
}
