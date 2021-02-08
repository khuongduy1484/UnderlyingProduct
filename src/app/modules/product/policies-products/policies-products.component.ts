import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../shared/notification.service';
import {PoliciesProductService} from '../service/policies.service';
import {IPolicesProduct} from '../../../model/models';

@Component({
  selector: 'app-policies-products',
  templateUrl: './policies-products.component.html',
  styleUrls: ['./policies-products.component.scss']
})
export class PoliciesProductsComponent implements OnInit {
  isHidden = false;
  page: number;
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
    this.getPageSymbol(0);
    this.buildForm();
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.policiesProductService.searchPoliceApproval('', current > 0 ? current - 1 : 0, 10, '1', '', '', '', '', '').subscribe(result => {
      if (result) {
        this.policiesProductS = result.data;
      }
    });
  }

  actionCreate() {
    this.isHidden = !this.isHidden;
  }

  buildForm() {
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
    this.policiesProductUpdate.get('status').setValue('3');
    this.policiesProductService.createPoliciesProductApprovalPending(this.policiesProductUpdate.value).subscribe(result => {
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
