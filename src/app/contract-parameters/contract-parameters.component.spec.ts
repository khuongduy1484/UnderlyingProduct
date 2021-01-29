import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractParametersComponent } from './contract-parameters.component';

describe('ContractParametersComponent', () => {
  let component: ContractParametersComponent;
  let fixture: ComponentFixture<ContractParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
