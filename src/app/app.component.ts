import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { CsvConverterService } from './shared/services/csv-converter.service';
import { Product } from './products/shared/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'productListing';
  products$: Observable<Product[]>;

  constructor(
    private translate: TranslateService,
    private csvConverterService: CsvConverterService
  ) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.products$ = this.csvConverterService.getCsvData('dane_en')
      .pipe(
        map(data => {
          const wynik = this.csvConverterService.convertCsvData(data);
          console.log('wynik', wynik);
          return wynik;
        })
      );
  }
}
