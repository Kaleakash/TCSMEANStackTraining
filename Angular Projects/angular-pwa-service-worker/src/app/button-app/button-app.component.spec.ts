import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAppComponent } from './button-app.component';

describe('ButtonAppComponent', () => {
  let component: ButtonAppComponent;
  let fixture: ComponentFixture<ButtonAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
