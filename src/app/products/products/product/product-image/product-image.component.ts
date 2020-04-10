import { Component, OnInit, Input } from '@angular/core';
import { FileExistanceService } from 'src/app/shared/services/file-existance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
    @Input() image: string;
    imageExists$: Observable<boolean>;

    constructor(
        private fileExistanceService: FileExistanceService) { }

    ngOnInit() {
        this.imageExists$ = this.fileExistanceService.checkFileExistance(this.image);
    }

}
