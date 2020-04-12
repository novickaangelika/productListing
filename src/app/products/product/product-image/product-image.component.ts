import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FileExistanceService } from 'src/app/services/file-existance.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html'
})
export class ProductImageComponent implements OnInit {
    @Input() image: string;
    imageExists$: Observable<boolean>;

    constructor(
        private fileExistanceService: FileExistanceService) {}

    ngOnInit() {
        this.imageExists$ = this.fileExistanceService.checkFileExistance(this.image);
    }

}
