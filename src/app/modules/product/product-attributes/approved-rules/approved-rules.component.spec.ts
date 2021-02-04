import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRulesComponent } from './approved-rules.component';

describe('ApprovedRulesComponent', () => {
  let component: ApprovedRulesComponent;
  let fixture: ComponentFixture<ApprovedRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
