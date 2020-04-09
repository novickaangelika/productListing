import { Component, OnInit, Input } from '@angular/core';
import { map, share, takeUntil, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { CsvConverterService } from 'src/app/shared/services/csv-converter.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() currentLanguage$: Observable<string>;
  products$: Observable<Product[]>;
  private unsubscribe$ = new Subject();

  constructor(
    private csvConverterService: CsvConverterService
  ) {
  }

  ngOnInit() {
    // todo czy lepiej odwolac się do serwisu?
    this.products$ = this.currentLanguage$.pipe(
      takeUntil(this.unsubscribe$),
      mergeMap(currentLanguage => this.csvConverterService.getCsvData(`dane_${currentLanguage}`)),
      map(csvData => this.csvConverterService.convertCsvData(csvData)),
      share()
    );
  }
}
