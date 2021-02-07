import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAttributesComponent } from './apply-attributes.component';

describe('ApplyAttributesComponent', () => {
  let component: ApplyAttributesComponent;
  let fixture: ComponentFixture<ApplyAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
