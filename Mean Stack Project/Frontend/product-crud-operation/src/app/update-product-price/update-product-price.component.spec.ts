import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductPriceComponent } from './update-product-price.component';

describe('UpdateProductPriceComponent', () => {
  let component: UpdateProductPriceComponent;
  let fixture: ComponentFixture<UpdateProductPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
