import {Component, OnInit} from '@angular/core';
import {IPropRuleApproval} from '../../../../model/models';
import {NotificationService} from '../../../../shared/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RulesManageService} from '../../service/ruleManeges.service';


@Component({
  selector: 'app-approved-rules',
  templateUrl: './approved-rules.component.html',
  styleUrls: ['./approved-rules.component.scss']
})
export class ApprovedRulesComponent implements OnInit {

  page: number;
  approveRules: IPropRuleApproval[] = [];
  contentSearch = '';
  conditionSearch: number;
  statusSearch = 1;
  propRuleCondition: FormGroup;

  constructor(
    private rulesManageService: RulesManageService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.getPageSymbol(0);
    this.buildForm();
  }

  buildForm() {
    this.propRuleCondition = this.fb.group({
      dataValue: ['', [Validators.required]],
      dataType: ['', [Validators.required]],
      orderNo: ['', [Validators.required]],
    });
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.rulesManageService.getPropRuleApproval('', current > 0 ? current - 1 : 0, 10, 1, 1).subscribe(data => {
      if (data) {
        this.approveRules = data.data;
      }
    });
  }


  clear() {
    this.contentSearch = '';
    this.conditionSearch = null;

  }

  doSearch() {
    this.rulesManageService.getPropRuleApproval(this.contentSearch, 0, 10, this.conditionSearch, this.statusSearch).subscribe(data => {
      if (data) {
        this.approveRules = data.data;
      }
    });
  }

  doShowDetailProRule(propRuleCondition) {
    this.propRuleCondition = propRuleCondition;
  }


  doLoadData() {
    this.getPageSymbol(0);
  }
}
