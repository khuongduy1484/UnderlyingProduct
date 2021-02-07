import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryProductAprrovalPendingComponent } from './primary-product-aprroval-pending.component';

describe('PrimaryProductAprrovalPendingComponent', () => {
  let component: PrimaryProductAprrovalPendingComponent;
  let fixture: ComponentFixture<PrimaryProductAprrovalPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryProductAprrovalPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryProductAprrovalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
