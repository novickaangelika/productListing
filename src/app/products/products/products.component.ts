import { Component, OnInit, Input } from '@angular/core';
import { map, share, takeUntil, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { CsvConverterService } from 'src/app/shared/services/csv-converter.service';
import { Product } from '../shared/models/product.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() currentLanguage$: Observable<string>;
  products$: Observable<Product[]>;
  activeView: boolean[];
  viewOptions = [
    [true, false],
    [false, true]
  ];

  private unsubscribe$ = new Subject();

  constructor(
    private csvConverterService: CsvConverterService,
    private storageService: StorageService
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

    const productsView: boolean[] = this.storageService.getItem('productsView');
    if (!productsView) {
      this.storageService.setItem('productsView', this.viewOptions[0]);
    }
    this.activeView = productsView ? productsView : this.viewOptions[0];
  }

  changeProductsView(productsView: boolean[]) {
    this.storageService.setItem('productsView', productsView);
    this.activeView = productsView;
  }
}
