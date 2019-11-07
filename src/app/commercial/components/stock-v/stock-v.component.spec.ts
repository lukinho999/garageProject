import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVComponent } from './stock-v.component';

describe('StockVComponent', () => {
  let component: StockVComponent;
  let fixture: ComponentFixture<StockVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
