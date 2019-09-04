import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewStockComponent } from './register-new-stock.component';

describe('RegisterNewStockComponent', () => {
  let component: RegisterNewStockComponent;
  let fixture: ComponentFixture<RegisterNewStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
