import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationService } from './services/pagination.service';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  providers: [
    PaginationService
  ]
})
export class PaginationModule { }
