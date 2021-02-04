import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRulesComponent } from './pending-rules.component';

describe('PendingRulesComponent', () => {
  let component: PendingRulesComponent;
  let fixture: ComponentFixture<PendingRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
