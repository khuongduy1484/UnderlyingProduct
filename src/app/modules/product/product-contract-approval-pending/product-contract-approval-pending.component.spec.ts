import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContractApprovalPendingComponent } from './product-contract-approval-pending.component';

describe('ProductContractApprovalPendingComponent', () => {
  let component: ProductContractApprovalPendingComponent;
  let fixture: ComponentFixture<ProductContractApprovalPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContractApprovalPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContractApprovalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
