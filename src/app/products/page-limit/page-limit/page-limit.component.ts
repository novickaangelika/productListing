import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-page-limit',
  templateUrl: './page-limit.component.html',
  styleUrls: ['./page-limit.component.scss']
})

export class PageLimitComponent {
  @Input() limitOption;
  @Output() limitChangeEvent = new EventEmitter<number>();

  limits = [
    5,
    10,
    15,
    20,
    25
  ];

  chooseLimit(limit: number) {
    this.limitChangeEvent.emit(limit);
  }
}
