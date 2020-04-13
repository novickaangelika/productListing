import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, mergeMap } from 'rxjs/operators';

import { CsvConverterService } from 'src/app/products/products/services/csv-converter.service';
import { Product } from '../product/models/product.model';
import { StorageService } from 'src/app/services/storage.service';
import { PaginationService } from '../pagination/services/pagination.service';
import { Pagination } from '../pagination/models/pagination.model';
import { LanguageChangerService } from 'src/app/header/language-change/services/language-changer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  activeView: string;
  viewOptions = [
    'table',
    'boxes'
  ];
  pagination: Pagination = {};
  pagedItems: Product[];
  pageLimit: number;

  private unsubscribe$ = new Subject();
  private allItems: Product[];

  constructor(
    private csvConverterService: CsvConverterService,
    private storageService: StorageService,
    private paginationService: PaginationService,
    private languageChangerService: LanguageChangerService) {}

  ngOnInit() {
    this.changeLanguageCsvFile();
    this.setProductsView();

    this.pageLimit = this.storageService.getItem('pageLimit') ? +this.storageService.getItem('pageLimit') : 5;
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
    this.pagination = this.paginationService.createPagination(this.allItems.length, page, this.pageLimit);
    this.pagedItems = this.allItems.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

  changeLimit(limit: number) {
    this.pageLimit = limit;
    this.storageService.setItem('pageLimit', limit);
    this.changePage(1);
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

  private changeLanguageCsvFile() {
    const language: string = this.storageService.getItem('language');

    if (language) {
      this.csvConverterService.getCsvData(`dane_${language}`).pipe(
        map(csvData => this.csvConverterService.convertCsvData(csvData))
      ).subscribe(data => {
        this.allItems = data;
        this.changePage(1);
      });
    } else {
      this.languageChangerService.languageCode$.pipe(
        takeUntil(this.unsubscribe$),
        mergeMap(currentLanguage => {
          return this.csvConverterService.getCsvData(`dane_${currentLanguage}`);
        }),
        map(csvData => this.csvConverterService.convertCsvData(csvData))
      ).subscribe(data => {
        this.allItems = data;
        this.changePage(1);
      });
    }
  }
}
