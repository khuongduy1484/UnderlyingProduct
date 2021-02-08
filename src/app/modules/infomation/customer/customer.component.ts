import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/infomation/customer.service';
import {CustomerServicess} from '../service/customerApi.service';
import {ICustomer, IFormNotification} from '../../../model/models';
import {numbers} from '@material/list/constants';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  myDate: any;
  page: number;
  isHidden = false;
  isShowAdd = false;
  isShowUpdate = false;
  isShowDetail = false;
  nameSearch = '';
  id = null;
  idCardSearch = '';
  phoneSearch = '';
  emailSearch = '';
  branchNameSearch = '';
  reasonLock = '';
  customers: ICustomer[];
  customer: FormGroup;
  customerDetail: FormGroup;
  customerSelected: FormGroup;

  constructor(
    private customerService: CustomerServicess,
    private notificationService: NotificationService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getPageSymbol(0);
  }

  buildForm() {
    this.customer = this.fb.group({
      customerNew: this.fb.group(
        {
          id: [,  [Validators.required]],
          code: ['',  [Validators.required]],
          name: ['', [Validators.required]],
          dob: [ Date, [Validators.required]],
          phone: [, [Validators.required]],
          account: ['', [Validators.required]],
          email: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          address: ['', [Validators.required]],
          jd: ['', [Validators.required]],
          occupation: ['',  [Validators.required]],
          nationality: ['', [Validators.required]],
          taxCode: [ '', [Validators.required]],
          idCard: [, [Validators.required]],
          status: [, [Validators.required]],
          userName: ['', [Validators.required]],
          stockAccount: ['', [Validators.required]],
          vsdActivateAccount: [, [Validators.required]],
          subAccountNumber: [,  [Validators.required]],
          statusAccount: [, [Validators.required]],
          vsdActivateStatus: [, [Validators.required]],
          accountName: ['', [Validators.required]],
          bankCity: ['', [Validators.required]],
          branchName: ['', [Validators.required]],
          accountNumber: [, [Validators.required]],
          bankName: ['', [Validators.required]],
        }
      )
    });
    this.customerDetail = this.fb.group({
      customerDe: this.fb.group(
        {
          id: [,  [Validators.required]],
          code: ['',  [Validators.required]],
          name: ['', [Validators.required]],
          dob: [ Date, [Validators.required]],
          phone: [, [Validators.required]],
          account: ['', [Validators.required]],
          email: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          address: ['', [Validators.required]],
          jd: ['', [Validators.required]],
          occupation: ['',  [Validators.required]],
          nationality: ['', [Validators.required]],
          taxCode: [ '', [Validators.required]],
          idCard: [, [Validators.required]],
          status: [, [Validators.required]],
          userName: ['', [Validators.required]],
          stockAccount: ['', [Validators.required]],
          vsdActivateAccount: [, [Validators.required]],
          subAccountNumber: [,  [Validators.required]],
          statusAccount: [, [Validators.required]],
          vsdActivateStatus: [, [Validators.required]],
          accountName: ['', [Validators.required]],
          bankCity: ['', [Validators.required]],
          branchName: ['', [Validators.required]],
          accountNumber: [, [Validators.required]],
          bankName: ['', [Validators.required]],
        }
      )
    });
    this.customerSelected = this.fb.group({
      customerSe: this.fb.group(
        {
          id: [,  [Validators.required]],
          code: ['',  [Validators.required]],
          name: ['', [Validators.required]],
          dob: [ Date, [Validators.required]],
          phone: [, [Validators.required]],
          account: ['', [Validators.required]],
          email: ['', [Validators.required]],
          gender: ['', [Validators.required]],
          address: ['', [Validators.required]],
          jd: ['', [Validators.required]],
          occupation: ['',  [Validators.required]],
          nationality: ['', [Validators.required]],
          taxCode: [ '', [Validators.required]],
          idCard: [, [Validators.required]],
          status: [, [Validators.required]],
          userName: ['', [Validators.required]],
          stockAccount: ['', [Validators.required]],
          vsdActivateAccount: [, [Validators.required]],
          subAccountNumber: [,  [Validators.required]],
          statusAccount: [, [Validators.required]],
          vsdActivateStatus: [, [Validators.required]],
          accountName: ['', [Validators.required]],
          bankCity: ['', [Validators.required]],
          branchName: ['', [Validators.required]],
          accountNumber: [, [Validators.required]],
          bankName: ['', [Validators.required]],
        }
      )
    });
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.customerService.getCustomer(current > 0 ? current - 1 : 0, 10, '', '', '', '', '').subscribe(data => {
      if (data) {
        this.customers = data.data;
      }
    });
  }

  doSearch() {
    this.customerService.getCustomer(0, 10, this.nameSearch, this.idCardSearch, this.phoneSearch, this.emailSearch,
      this.branchNameSearch).subscribe(data => {
      if (data) {
        this.customers = data.data;
      }
    });
    console.log(this.customers);
  }

  doShowAdd() {
    this.isHidden = true;
    this.isShowAdd = true;
    this.isShowDetail = false;
    this.isShowUpdate = false;
  }

  doShowDetail(customer) {
    this.isHidden = true;
    this.isShowAdd = false;
    this.isShowDetail = true;
    this.isShowUpdate = false;
    this.customerService.getDetail(0, 10, customer.id).subscribe(data => {
      if (data) {
        console.log(data.data[0]);
        this.customerDetail.get('customerDe').get('id').setValue(data.data[0].id);
        this.customerDetail.get('customerDe').get('code').setValue(data.data[0].code);
        this.customerDetail.get('customerDe').get('name').setValue(data.data[0].name);
        this.customerDetail.get('customerDe').get('dob').setValue(data.data[0].dob);
        this.customerDetail.get('customerDe').get('phone').setValue(data.data[0].phone);
        this.customerDetail.get('customerDe').get('account').setValue(data.data[0].account);
        this.customerDetail.get('customerDe').get('email').setValue(data.data[0].email);
        this.customerDetail.get('customerDe').get('gender').setValue(data.data[0].gender);
        this.customerDetail.get('customerDe').get('address').setValue(data.data[0].address);
        this.customerDetail.get('customerDe').get('jd').setValue(data.data[0].jd);
        this.customerDetail.get('customerDe').get('occupation').setValue(data.data[0].occupation);
        this.customerDetail.get('customerDe').get('nationality').setValue(data.data[0].nationality);
        this.customerDetail.get('customerDe').get('taxCode').setValue(data.data[0].taxCode);
        this.customerDetail.get('customerDe').get('idCard').setValue(data.data[0].idCard);
        this.customerDetail.get('customerDe').get('status').setValue(data.data[0].status);
        this.customerDetail.get('customerDe').get('userName').setValue(data.data[0].cusUser.userName);
        this.customerDetail.get('customerDe').get('stockAccount').setValue(data.data[0].cusStockAccount.stockAccount);
        this.customerDetail.get('customerDe').get('vsdActivateAccount').setValue(data.data[0].cusStockAccount.vsdActivateAccount);
        this.customerDetail.get('customerDe').get('subAccountNumber').setValue(data.data[0].cusBankSubAccount.subAccountNumber);
        this.customerDetail.get('customerDe').get('statusAccount').setValue(data.data[0].cusStockAccount.statusAccount);
        this.customerDetail.get('customerDe').get('vsdActivateStatus').setValue(data.data[0].cusStockAccount.vsdActivateStatus);
        this.customerDetail.get('customerDe').get('accountName').setValue(data.data[0].cusBankAccount.accountName);
        this.customerDetail.get('customerDe').get('bankCity').setValue(data.data[0].cusBankAccount.bankCity);
        this.customerDetail.get('customerDe').get('branchName').setValue(data.data[0].cusBankAccount.branchName);
        this.customerDetail.get('customerDe').get('accountNumber').setValue(data.data[0].cusBankAccount.accountNumber);
        this.customerDetail.get('customerDe').get('bankName').setValue(data.data[0].cusBankAccount.bankName);
        console.log(data.data[0]);
      }
    });
  }

  doSelected(customer) {
    this.isHidden = true;
    this.isShowAdd = false;
    this.isShowDetail = false;
    this.isShowUpdate = true;
    this.customerSelected.get('customerSe').setValue(customer);
    this.customerService.getDetail(0, 10, customer.id).subscribe(data => {
      if (data) {
        this.customerSelected.get('customerSe').get('id').setValue(data.data.id);
        this.customerSelected.get('customerSe').get('code').setValue(data.data.code);
        this.customerSelected.get('customerSe').get('userName').setValue(data.data.userName);
        this.customerSelected.get('customerSe').get('dob').setValue(data.data.dob);
        this.customerSelected.get('customerSe').get('phone').setValue(data.data.phone);
        this.customerSelected.get('customerSe').get('account').setValue(data.data.account);
        this.customerSelected.get('customerSe').get('email').setValue(data.data.email);
        this.customerSelected.get('customerSe').get('gender').setValue(data.data.gender);
        this.customerSelected.get('customerSe').get('address').setValue(data.data.address);
        this.customerSelected.get('customerSe').get('jd').setValue(data.data.jd);
        this.customerSelected.get('customerSe').get('occupation').setValue(data.data.occupation);
        this.customerSelected.get('customerSe').get('nationality').setValue(data.data.nationality);
        this.customerSelected.get('customerSe').get('taxCode').setValue(data.data.taxCode);
        this.customerSelected.get('customerSe').get('idCard').setValue(data.data.idCard);
        this.customerSelected.get('customerSe').get('status').setValue(data.data.status);
        this.customerSelected.get('customerSe').get('userName').setValue(data.data.userName);
        this.customerSelected.get('customerSe').get('stockAccount').setValue(data.data.stockAccount);
        this.customerSelected.get('customerSe').get('vsdActivateAccount').setValue(data.data.vsdActivateAccount);
        this.customerSelected.get('customerSe').get('subAccountNumber').setValue(data.data.subAccountNumber);
        this.customerSelected.get('customerSe').get('statusAccount').setValue(data.data.statusAccount);
        this.customerSelected.get('customerSe').get('vsdActivateStatus').setValue(data.data.vsdActivateStatus);
        this.customerSelected.get('customerSe').get('accountName').setValue(data.data.accountName);
        this.customerSelected.get('customerSe').get('bankCity').setValue(data.data.bankCity);
        this.customerSelected.get('customerSe').get('branchName').setValue(data.data.branchName);
        this.customerSelected.get('customerSe').get('accountNumber').setValue(data.data.accountNumber);
        this.customerSelected.get('customerSe').get('bankName').setValue(data.data.bankName);
      }
    });
  }

  doCreate() {
    console.log(this.customer.value.customerNew);
    this.customerService.insertCustomer(this.customer.value.customerNew).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã thêm mới thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doUpdateCus() {
    this.customerService.updateCustomer(this.customerSelected.value.customerSe).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã cập nhật thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }


  doLock() {
      this.customerSelected.value.customerSe.get('status').setValue(0);
      this.customerService.updateCustomer(this.customerSelected.value.customerSe).subscribe(data => {
        if (data.status === 200) {
          this.notificationService.showSuccess('Đã cập nhập khách hàng thành công', 'Thông báo');
        } else {
          this.notificationService.showError('Thông báo', data.description);
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
  }

  doUnLock() {
    this.customerSelected.value.customerSe.get('status').setValue(1);
    this.customerService.updateCustomer(this.customerSelected.value.customerSe).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã cập nhập khách hàng thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  clear() {
    this.nameSearch = '';
    this.idCardSearch = '';
    this.phoneSearch = '';
    this.emailSearch = '';
    this.branchNameSearch = '';
  }

  clearAdd() {
  }

  closeAdd() {
    this.isHidden = false;
    this.isShowAdd = false;
  }

  closeUpdate() {
    this.isHidden = false;
    this.isShowUpdate = false;
    this.getPageSymbol(0);
  }

  closeDetail() {
    this.isHidden = false;
    this.isShowDetail = false;
  }


}
