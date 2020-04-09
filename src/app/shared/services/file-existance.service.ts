import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class FileExistanceService {
    constructor(private http: HttpClient) { }

    checkFileExistance(fileName: string): Observable<boolean> {
        return this.http.get(fileName).pipe(
            mapTo(true),
            catchError(error => of(error.status === 200 ? true : false))
        );
    }
}
