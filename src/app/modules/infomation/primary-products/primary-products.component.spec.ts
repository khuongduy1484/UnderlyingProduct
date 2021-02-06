import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryProductsComponent } from './primary-products.component';

describe('PrimaryProductsComponent', () => {
  let component: PrimaryProductsComponent;
  let fixture: ComponentFixture<PrimaryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
