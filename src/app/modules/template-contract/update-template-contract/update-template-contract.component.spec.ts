import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemplateContractComponent } from './update-template-contract.component';

describe('UpdateTemplateContractComponent', () => {
  let component: UpdateTemplateContractComponent;
  let fixture: ComponentFixture<UpdateTemplateContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTemplateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTemplateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
