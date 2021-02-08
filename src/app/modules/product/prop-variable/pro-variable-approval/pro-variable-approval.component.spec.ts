import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProVariableApprovalComponent } from './pro-variable-approval.component';

describe('ProVariableApprovalComponent', () => {
  let component: ProVariableApprovalComponent;
  let fixture: ComponentFixture<ProVariableApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProVariableApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProVariableApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
