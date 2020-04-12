import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {
  @Input() pagination: Pagination = {};
  @Output() pageChangeEvent = new EventEmitter<number>();

  setPage(page: number) {
    this.pageChangeEvent.emit(page);
  }
}
