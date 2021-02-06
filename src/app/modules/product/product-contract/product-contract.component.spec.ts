import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContractComponent } from './product-contract.component';

describe('ProductContractComponent', () => {
  let component: ProductContractComponent;
  let fixture: ComponentFixture<ProductContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
