import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContractDetailComponent } from './template-contract-detail.component';

describe('TemplateContractDetailComponent', () => {
  let component: TemplateContractDetailComponent;
  let fixture: ComponentFixture<TemplateContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
