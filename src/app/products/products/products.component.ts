import { Component, OnInit, Input } from '@angular/core';
import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CsvConverterService } from 'src/app/shared/services/csv-converter.service';
import { Product } from '../shared/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() currentLanguage: string;
  products$: Observable<Product[]>;

  constructor(
    private csvConverterService: CsvConverterService
  ) {
  }

  ngOnInit() {
    this.products$ = this.csvConverterService.getCsvData(`dane_${this.currentLanguage}`)
      .pipe(
        map(data => {
          const wynik = this.csvConverterService.convertCsvData(data);
          console.log('wynik', wynik);
          return wynik;
        }),
        share()
      );
  }

}
