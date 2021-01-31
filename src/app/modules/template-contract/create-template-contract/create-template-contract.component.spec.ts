import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemplateContractComponent } from './create-template-contract.component';

describe('CreateTemplateContractComponent', () => {
  let component: CreateTemplateContractComponent;
  let fixture: ComponentFixture<CreateTemplateContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTemplateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTemplateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
