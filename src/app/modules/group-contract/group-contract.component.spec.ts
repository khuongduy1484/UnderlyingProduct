import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupContractComponent } from './group-contract.component';

describe('GroupContractComponent', () => {
  let component: GroupContractComponent;
  let fixture: ComponentFixture<GroupContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
