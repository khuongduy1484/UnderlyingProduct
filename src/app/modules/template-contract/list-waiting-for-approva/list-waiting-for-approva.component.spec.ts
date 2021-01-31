import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaitingForApprovaComponent } from './list-waiting-for-approva.component';

describe('ListWaitingForApprovaComponent', () => {
  let component: ListWaitingForApprovaComponent;
  let fixture: ComponentFixture<ListWaitingForApprovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWaitingForApprovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWaitingForApprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
