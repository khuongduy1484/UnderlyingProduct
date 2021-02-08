import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductPendingApprovalComponent } from './financial-product-pending-approval.component';

describe('FinancialProductPendingApprovalComponent', () => {
  let component: FinancialProductPendingApprovalComponent;
  let fixture: ComponentFixture<FinancialProductPendingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialProductPendingApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialProductPendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
