import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropVariableComponent } from './prop-variable.component';

describe('PropVariableComponent', () => {
  let component: PropVariableComponent;
  let fixture: ComponentFixture<PropVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
