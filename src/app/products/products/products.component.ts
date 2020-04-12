import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, mergeMap } from 'rxjs/operators';

import { CsvConverterService } from 'src/app/products/products/services/csv-converter.service';
import { Product } from '../product/models/product.model';
import { StorageService } from 'src/app/services/storage.service';
import { PaginationService } from '../pagination/services/pagination.service';
import { Pagination } from '../pagination/models/pagination.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() currentLanguage$: Observable<string>;

  products$: Observable<Product[]>;
  activeView: string;
  viewOptions = [
    'table',
    'boxes'
  ];
  private unsubscribe$ = new Subject();
  private allItems: Product[];

  pagination: Pagination = {};
  pagedItems: Product[];

  constructor(
    private csvConverterService: CsvConverterService,
    private storageService: StorageService,
    private paginationService: PaginationService) {}

  ngOnInit() {
    // todo czy lepiej odwolac się do serwisu?
    this.currentLanguage$.pipe(
      takeUntil(this.unsubscribe$),
      mergeMap(currentLanguage => this.csvConverterService.getCsvData(`dane_${currentLanguage}`)),
      map(csvData => this.csvConverterService.convertCsvData(csvData))
    ).subscribe(data => {
       this.allItems = data;
       this.changePage(1);
    });

    this.setProductsView();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  changeProductsView(productsView: string) {
    this.storageService.setItem('productsView', productsView);
    this.activeView = productsView;
  }

  changePage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }
    this.pagination = this.paginationService.createPagination(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
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
