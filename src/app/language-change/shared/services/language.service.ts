import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable()
export class LanguageService {
    constructor(private http: HttpClient) { }

    getLanguagesCodes(): Observable<Language[]>{
        return (this.http.get(`../assets/data/language.json`) as Observable<Language[]>);
    }
}
