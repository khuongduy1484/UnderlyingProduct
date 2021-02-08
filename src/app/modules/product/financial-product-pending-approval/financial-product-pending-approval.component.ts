import {Component, OnInit} from '@angular/core';
import {IPolicesProduct, IPrimaryProduct, IProdDerivative} from '../../../model/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PoliciesProductService} from '../service/policies.service';
import {PrimaryProductService} from '../service/primaryProduct.service';
import {ProdDerivativeService} from '../service/prodDerivative.service';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-financial-product-pending-approval',
  templateUrl: './financial-product-pending-approval.component.html',
  styleUrls: ['./financial-product-pending-approval.component.scss']
})
export class FinancialProductPendingApprovalComponent implements OnInit {
  lstPoliciesProductS: IPolicesProduct [] = [];
  lstProdVanilla: IPrimaryProduct [] = [];
  lstIProdDerivative: IProdDerivative [] = [];
  prodDerivativeNew: FormGroup;
  prodDerivativeUpdate: FormGroup;
  page: number;
  contentSearch = {
    name: '',
    prodVanillaId: ''
  };


  constructor(
    private  policiesProductService: PoliciesProductService,
    private primaryProductService: PrimaryProductService,
    private  prodDerivativeService: ProdDerivativeService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.getProdAgreement();
    this.getProdVanilla();
    this.getPageSymbol(0);
    this.buildForm();
  }

  buildForm() {
    this.prodDerivativeNew = this.fb.group(
      {
        name: ['', [Validators.required]],
        vanillaId: ['', [Validators.required]],
        agreementId: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        description: ['', [Validators.required]],
        status: ['', [Validators.required]],
      }
    );
    this.prodDerivativeUpdate = this.fb.group(
      {
        name: ['', [Validators.required]],
        vanillaId: ['', [Validators.required]],
        agreementId: ['', [Validators.required]],
        startDate: [new Date(), [Validators.required]],
        endDate: [new Date(), [Validators.required]],
        description: ['', [Validators.required]],
        status: ['', [Validators.required]],

      }
    );
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.prodDerivativeService.getProdDerivativePendingApproval('', '', current > 0 ? current - 1 : 0, 10).subscribe(result => {
      if (result) {
        this.lstIProdDerivative = result.data;
      }
    });
  }

  getProdAgreement() {
    this.policiesProductService.findAll().subscribe(result => {
      if (result) {
        this.lstPoliciesProductS = result.data;
      }
    });
  }

  getProdVanilla() {
    this.primaryProductService.findAll().subscribe(result => {
      if (result) {
        this.lstProdVanilla = result.data;
      }
    });
  }

  getProdAgreementName(id) {
    if (id != null) {
      return this.lstPoliciesProductS.filter(x => x.id === id)[0].name;
    }
    return '';
  }

  getProdVanillaName(id) {
    console.log(id);
    if (id != null) {
      return this.lstProdVanilla.filter(x => x.id === id)[0].name;
    }
    return '';
  }

  doCreate() {
    const prodDerivative = [];
    this.prodDerivativeNew.get('status').setValue('4');
    prodDerivative.push(this.prodDerivativeNew.value);
    this.prodDerivativeService.creatProdDerivativeApprovalPending(prodDerivative).subscribe(data => {
      if (data.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  tạo bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doUpdate() {
    const prodDerivative = [];
    this.prodDerivativeUpdate.get('status').setValue('0');
    prodDerivative.push(this.prodDerivativeUpdate.value);
    this.prodDerivativeService.updateProdDerivativeApprovalPending(prodDerivative).subscribe(data => {
      if (data.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  tạo bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  loadData() {
    this.getPageSymbol(0);
  }

  doSearch() {
    this.prodDerivativeService.getProdDerivativePendingApproval(this.contentSearch.name.trim(), this.contentSearch.prodVanillaId, 0, 10).subscribe(result => {
      if (result) {
        this.lstIProdDerivative = result.data;
      }
    });
  }

  clear() {
    this.contentSearch.name = '';
    this.contentSearch.prodVanillaId = '';
  }

  doSelected(record) {
    this.prodDerivativeUpdate.setValue(record);
  }

  doActionUpdateStatusRecord(record: IProdDerivative, status) {
    const prodDerivative = [];
    record.status = status;
    prodDerivative.push(record);
    this.prodDerivativeService.updateProdDerivativeApprovalPending(prodDerivative).subscribe(data => {
      if (data.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  cập bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doApprovalRecord(record) {
    const prodDerivative = [];
    prodDerivative.push(record);
    this.prodDerivativeService.creatProdDerivativeApproval(prodDerivative).subscribe(data => {
      if (data.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  phê duyệt bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doRemove(record) {
    const prodDerivative = [];
    prodDerivative.push(record);
    this.prodDerivativeService.remove(prodDerivative).subscribe(data => {
      if (data.status === 200) {
        this.loadData();
        this.notificationService.showSuccess('Đã  xóa bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });

  }
}
