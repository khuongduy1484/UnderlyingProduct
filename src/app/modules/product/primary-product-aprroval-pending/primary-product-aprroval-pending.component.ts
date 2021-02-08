import {Component, OnInit} from '@angular/core';
import {IssuerService} from '../../infomation/service/issuer.service';
import {IPrimaryProduct, Issuer} from '../../../model/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrimaryProductService} from '../service/primaryProduct.service';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-primary-product-aprroval-pending',
  templateUrl: './primary-product-aprroval-pending.component.html',
  styleUrls: ['./primary-product-aprroval-pending.component.scss']
})
export class PrimaryProductAprrovalPendingComponent implements OnInit {
  isHidden = false;
  page: number;
  lstIssuer: Issuer [] = [];
  primaryProductUpdate: FormGroup;
  lstPrimaryProduct: IPrimaryProduct [] = [];


  constructor(
    private issuerService: IssuerService,
    private fb: FormBuilder,
    private primaryProductService: PrimaryProductService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.getIssuser();
    this.buildForm();
    this.getPageSymbol(0);
  }

  doActionCreate() {
    this.isHidden = !this.isHidden;
  }

  getIssuser() {
    this.issuerService.findAll().subscribe(result => {
      if (result) {
        this.lstIssuer = result.data;
      }
    });
  }

  buildForm() {
    this.primaryProductUpdate = this.fb.group(
      {
        code: ['', [Validators.required]],
        issuerId: ['', [Validators.required]],
        name: ['', [Validators.required]],
        issueDate: ['', [Validators.required]],
        maturityDate: ['', [Validators.required]],
        par: ['', [Validators.required]],
        listedCode: ['', [Validators.required]],
        issueType: ['', [Validators.required]],
        issuePurpose: ['', [Validators.required]],
        status: ['', [Validators.required]],
        id: ['', [Validators.required]],
        bondType: ['', [Validators.required]],
        collateral: ['', [Validators.required]],
        guarantee: ['', [Validators.required]],
        guaranteeInfo: ['', [Validators.required]],
        collateralValue: ['', [Validators.required]],
        callBack: ['', [Validators.required]],
        collateralInfo: ['', [Validators.required]],
        guaranteeValue: ['', [Validators.required]],
      }
    );
  }

  doCreate() {
    this.primaryProductService.creatPrimaryProductApproval(this.primaryProductUpdate.value).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã  tạo bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  getNameIssuer(id) {
    return this.lstIssuer.filter(x => x.id === id)[0].name;
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.primaryProductService.getPrimaryProductApproval('', current > 0 ? current - 1 : 0, 10).subscribe(result => {
      if (result) {
        this.lstPrimaryProduct = result.data;
      }
    });
  }

  doDelete(record) {
    this.primaryProductService.delete(record).subscribe(result => {
      if (result.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  xóa  thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doCreateApproval(record) {
    this.primaryProductUpdate.get('status').setValue('1');
    this.primaryProductService.creatPrimaryProductApproval(record).subscribe(result => {
      if (result.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  phê duyệt thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });

  }

  doSelectRecord(record) {
    this.primaryProductUpdate.setValue(record);
  }

  loadData() {
    this.getPageSymbol(0);
  }

}
