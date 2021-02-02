import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupContractWaitingApproveComponent } from './group-contract-waiting-approve.component';

describe('GroupContractWaitingApproveComponent', () => {
  let component: GroupContractWaitingApproveComponent;
  let fixture: ComponentFixture<GroupContractWaitingApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupContractWaitingApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupContractWaitingApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
