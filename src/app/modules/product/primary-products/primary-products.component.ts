import {Component, OnInit} from '@angular/core';
import {IPrimaryProduct, Issuer} from '../../../model/models';
import {PrimaryProductService} from '../service/primaryProduct.service';
import {NotificationService} from '../../../shared/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IssuerService} from '../../infomation/service/issuer.service';

@Component({
  selector: 'app-primary-products',
  templateUrl: './primary-products.component.html',
  styleUrls: ['./primary-products.component.scss']
})
export class PrimaryProductsComponent implements OnInit {
  isHidden = false;
  page: number;
  lstPrimaryProduct: IPrimaryProduct [] = [];
  recordUpdate: IPrimaryProduct;
  primaryProductUpdate: FormGroup;
  lstIssuer: Issuer [] = [];
  codeSearch = '';


  constructor(
    private  primaryProductService: PrimaryProductService,
    private notificationService: NotificationService,
    private issuerService: IssuerService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getPageSymbol(0);
    this.getIssuser();
    this.buildForm();
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

  doSelectRecordUnlock(record, status) {
    this.recordUpdate.status = status;
    this.recordUpdate = record;
  }

  doSelectRecordUpdate(record) {
    this.isHidden = !this.isHidden;
    this.primaryProductUpdate.setValue(record);
  }

  doUpdateStatus() {
    this.primaryProductService.upDateStatus(this.recordUpdate).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã cập nhập thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doActionCreate() {
    this.isHidden = !this.isHidden;
  }

  doUpdate() {
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

  getIssuser() {
    this.issuerService.findAll().subscribe(result => {
      if (result) {
        this.lstIssuer = result.data;
      }
    });
  }

  doSearch() {
    this.primaryProductService.getPrimaryProductApproval(this.codeSearch.trim(), 0, 10).subscribe(result => {
      if (result) {
        this.lstPrimaryProduct = result.data;
      }
    });
  }

  getNameIssuer(id) {
    return  this.lstIssuer.filter(x => x.id === id)[0].name;
  }

}
