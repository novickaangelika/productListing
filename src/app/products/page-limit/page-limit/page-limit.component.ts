import { Component, Output, EventEmitter, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-page-limit',
  templateUrl: './page-limit.component.html',
  styleUrls: ['./page-limit.component.scss']
})

export class PageLimitComponent {
  @Input() limitOption;
  @Output() limitChangeEvent = new EventEmitter<number>();

  constructor(
    private storageService: StorageService) {}

  limits = [
    5,
    10,
    15,
    20,
    25
  ];

  chooseLimit(limit: number) {
    this.storageService.setItem('pageLimit', limit);
    this.limitChangeEvent.emit(limit);
  }
}
