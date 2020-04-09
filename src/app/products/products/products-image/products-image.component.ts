import { Component, OnInit, Input } from '@angular/core';
import { FileExistanceService } from 'src/app/shared/services/file-existance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html'
})
export class ProductsImageComponent implements OnInit {
    @Input() image: string;
    imageExists$: Observable<boolean>;

    constructor(
        private fileExistanceService: FileExistanceService) { }

    ngOnInit() {
        this.imageExists$ = this.fileExistanceService.checkFileExistance(this.image);
    }

}
