import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveByIdComponent } from './retrieve-by-id.component';

describe('RetrieveByIdComponent', () => {
  let component: RetrieveByIdComponent;
  let fixture: ComponentFixture<RetrieveByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
