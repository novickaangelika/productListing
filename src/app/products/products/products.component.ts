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
  activeView: string;
  viewOptions = [
    'table',
    'boxes'
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

    this.setProductsView();
  }

  changeProductsView(productsView: string) {
    this.storageService.setItem('productsView', productsView);
    this.activeView = productsView;
  }

  private setProductsView() {
    const productsView: string = this.storageService.getItem('productsView');

    if (productsView) {
      this.activeView = productsView;
    } else {
      const tableView = this.viewOptions[0];
      this.storageService.setItem('productsView', tableView);
      this.activeView = tableView;
    }
  }
}
