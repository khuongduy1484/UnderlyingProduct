import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../../shared/notification.service';
import {IPropRuleApproval, ISysParam} from '../../../../model/models';
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
  isHidden = false;
  sysParams: ISysParam [] = [];
  sysParamSelect: any;
  dataValue: string;


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
      sysParam: [[], [Validators.required]]
    });
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
  };


  actionCreate() {
    this.isHidden = !this.isHidden;
  }

  doSelectGroup(sys) {
    console.log(sys);
    console.log(this.dataValue);
    console.log(this.dataValue);
   this.dataValue = this.sysParamSelect.value;
  }
}
