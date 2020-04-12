import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-view-changer',
  templateUrl: './products-view-changer.component.html',
  styleUrls: ['./products-view-changer.component.scss']
})
export class ProductsViewChangerComponent {
    @Input() activeView: string;
    @Input() viewOptions: string[];
    @Output() productsViewChangeEvent = new EventEmitter<string>();

    changeProductsView(viewId: number) {
        const productsView = this.viewOptions[viewId];
        this.activeView = productsView;
        this.productsViewChangeEvent.emit(productsView);
    }
}
