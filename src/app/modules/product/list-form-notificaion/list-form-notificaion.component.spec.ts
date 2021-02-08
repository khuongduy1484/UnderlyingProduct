import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormNotificaionComponent } from './list-form-notificaion.component';

describe('ListFormNotificaionComponent', () => {
  let component: ListFormNotificaionComponent;
  let fixture: ComponentFixture<ListFormNotificaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormNotificaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormNotificaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
