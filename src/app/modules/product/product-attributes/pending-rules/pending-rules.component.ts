import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../../shared/notification.service';
import {IPropRuleApproval} from '../../../../model/models';
import {RulesManageService} from '../../service/ruleManeges.service';
import {SystemParamService} from '../../../system/service/systemParam.service';

@Component({
  selector: 'app-pending-rules',
  templateUrl: './pending-rules.component.html',
  styleUrls: ['./pending-rules.component.scss']
})
export class PendingRulesComponent implements OnInit {
  page: number;
  contentSearch = '';
  conditionSearch = 1;
  statusSearch = 1;
  action: '';
  propRuleConditionNew: FormGroup;
  approveRules: IPropRuleApproval[] = [];
  isHidden = true;
  sysParams: any [] = [];
  sysParamSelect: any;
  dataValue: string;
  sysValue: any [] = [];
  showTable = false;
  typeSelected: number;

  constructor(
    private rulesManageService: RulesManageService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private systemParamService: SystemParamService
  ) {
  }

  ngOnInit() {
    this.getPageSymbol(0);
    this.buildForm();
    this.getSysParam();
  }

  getSysParam() {
    this.systemParamService.findAll().subscribe(result => {
      this.sysParams = result.data;
    });
  }

  buildForm() {
    this.propRuleConditionNew = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      condition: ['', [Validators.required]],
      sysParam: this.fb.array([])
    });
    this.addSysParam();
  }

  addSysParam(): void {
    const formGroup = this.fb.group({
      id: [],
      name: [],
      sysParamValue: this.fb.group({
        value: []
      }),
      sysParamValueOption: []
    });
    this.sysParamForm.push(formGroup);
    this.onChangeGroup(this.sysParamForm.controls.length - 1);
  }

  removeSysParam(index: number): void {
    this.sysParamForm.removeAt(index);
  }

  onChangeGroup(index): void {
    this.sysParamForm.controls[index].get('id').valueChanges.subscribe(x => {
      const value = this.sysParams.filter(sys => (sys.id) == x)[0].sysParamValue;
      this.sysParamForm.controls[index].get('sysParamValueOption').patchValue(value);
    });
  }

  get sysParamForm(): FormArray {
    return this.propRuleConditionNew.get('sysParam') as FormArray;
  }


  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.rulesManageService.getPropRulePending('', current > 0 ? current - 1 : 0, 10, 1, 1).subscribe(data => {
      if (data) {
        this.approveRules = data.data;
      }
    });
  }

  doSearch() {
    this.rulesManageService.getPropRulePending(this.contentSearch, 0, 10, this.conditionSearch, this.statusSearch).subscribe(data => {
      if (data) {
        this.approveRules = data.data;
      }
    });
  }

  clear() {
    this.contentSearch = '';
  }

  doSubmit() {
  }


  actionCreate() {
    this.isHidden = !this.isHidden;
  }

  doSelectGroup(sys) {
    this.dataValue = this.sysParamSelect.value;
  }

  onChangeCondition(condition) {
    if (condition === '1') {
      this.showTable = true;
    } else {
      this.showTable = false;
    }

  }

  doCreate() {
    this.propRuleConditionNew.get('description').markAsTouched();
   console.log(this.sysParamForm.value);
  }

}
