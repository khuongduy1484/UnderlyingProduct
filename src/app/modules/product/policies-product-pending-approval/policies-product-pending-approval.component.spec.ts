import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesProductPendingApprovalComponent } from './policies-product-pending-approval.component';

describe('PoliciesProductPendingApprovalComponent', () => {
  let component: PoliciesProductPendingApprovalComponent;
  let fixture: ComponentFixture<PoliciesProductPendingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesProductPendingApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesProductPendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
