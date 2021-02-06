import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesProductsComponent } from './policies-products.component';

describe('PoliciesProductsComponent', () => {
  let component: PoliciesProductsComponent;
  let fixture: ComponentFixture<PoliciesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
