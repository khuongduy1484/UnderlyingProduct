import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContractComponent } from './template-contract.component';

describe('TemplateContractComponent', () => {
  let component: TemplateContractComponent;
  let fixture: ComponentFixture<TemplateContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
