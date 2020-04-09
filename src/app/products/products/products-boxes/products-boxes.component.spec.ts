import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBoxesComponent } from './products-boxes.component';

describe('ProductsBoxesComponent', () => {
  let component: ProductsBoxesComponent;
  let fixture: ComponentFixture<ProductsBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
