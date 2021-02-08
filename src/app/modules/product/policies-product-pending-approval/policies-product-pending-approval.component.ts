import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../shared/notification.service';
import {PoliciesProductService} from '../service/policies.service';
import {IPolicesProduct} from '../../../model/models';

@Component({
  selector: 'app-policies-product-pending-approval',
  templateUrl: './policies-product-pending-approval.component.html',
  styleUrls: ['./policies-product-pending-approval.component.scss']
})
export class PoliciesProductPendingApprovalComponent implements OnInit {
  page: number;
  isHidden = false;
  policiesProductNew: FormGroup;
  policiesProductUpdate: FormGroup;
  month: string [] = [];
  policiesProductS: IPolicesProduct [] = [];
  contentSearch = {
    name: '',
    mortgage: '',
    holdAsset: '',
    holdPeriod: '',
    holdMoney: '',
    transfer: '',
    discount: '',
    createdDate: ''
  };

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private policiesProductService: PoliciesProductService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    for (let i = 0; i <= 12; i++) {
      this.month.push(String(i));
    }
    this.getPageSymbol(0);
  }

  actionCreate() {
    this.isHidden = !this.isHidden;
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.policiesProductService.searchPoliceApprovalPending('', current > 0 ? current - 1 : 0, 10, '1', '', '', '', '', '').subscribe(result => {
      if (result) {
        this.policiesProductS = result.data;
      }
    });
  }

  buildForm() {
    this.policiesProductNew = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        holdingPeriod: ['', [Validators.required]],
        repurchase: ['', [Validators.required]],
        autoSell: ['', [Validators.required]],
        holdMoney: ['', [Validators.required]],
        holdAsset: ['', [Validators.required]],
        active: ['', [Validators.required]],
        discountRate: ['', [Validators.required]],
        mortgage: ['', [Validators.required]],
        status: ['', [Validators.required]],
      }
    );

    this.policiesProductUpdate = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        holdingPeriod: ['', [Validators.required]],
        repurchase: ['', [Validators.required]],
        autoSell: ['', [Validators.required]],
        holdMoney: ['', [Validators.required]],
        holdAsset: ['', [Validators.required]],
        active: ['', [Validators.required]],
        discountRate: ['', [Validators.required]],
        mortgage: ['', [Validators.required]],
        status: ['', [Validators.required]],
      }
    );
  }

  doCreateApprovalPending() {
    this.policiesProductNew.get('status').setValue('3');
    this.policiesProductService.createPoliciesProductApprovalPending(this.policiesProductNew.value).subscribe(result => {
      if (result.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  thêm mới thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });

  }

  doSearch() {
    // tslint:disable-next-line:max-line-length
    this.policiesProductService.searchPoliceApprovalPending(this.contentSearch.name.trim(), 0, 10, this.contentSearch.mortgage, this.contentSearch.discount, this.contentSearch.holdAsset, this.contentSearch.holdMoney, this.contentSearch.createdDate, this.contentSearch.transfer).subscribe(result => {
      if (result) {
        this.policiesProductS = result.data;
      }
    });
  }

  doCreateApproval(record) {
    this.policiesProductNew.get('status').setValue('1');
    this.policiesProductService.createPoliciesProductApproval(record).subscribe(result => {
      if (result.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  thêm mới thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });

  }


  doDelete(record) {
    this.policiesProductNew.get('status').setValue('4');
    this.policiesProductService.remove(record).subscribe(result => {
      if (result.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  thêm mới thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  loadData() {
    this.getPageSymbol(0);

  }

  doSelectRecord(record) {
    this.policiesProductUpdate.setValue(record);
  }
}
