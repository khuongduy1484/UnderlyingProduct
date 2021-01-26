import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalBondsComponent } from './original-bonds.component';

describe('OriginalBondsComponent', () => {
  let component: OriginalBondsComponent;
  let fixture: ComponentFixture<OriginalBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
