import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreiveProductComponent } from './retreive-product.component';

describe('RetreiveProductComponent', () => {
  let component: RetreiveProductComponent;
  let fixture: ComponentFixture<RetreiveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetreiveProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
