import {Component, OnInit} from '@angular/core';
import {Issuer} from '../../../model/models';
import {IssuerService} from '../service/issuer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-issuers',
  templateUrl: './issuers.component.html',
  styleUrls: ['./issuers.component.scss']
})
export class IssuersComponent implements OnInit {

  page: number;
  lstIssuer: Issuer [] = [];
  codeSearch = '';
  nameSearch = '';
  businessSector = '';
  issuerAdd: FormGroup;
  issuerUpdate: FormGroup;
  businessGroup: any [] = [];


  constructor(
    private issuerService: IssuerService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit() {
    this.getPageSymbol(0);
    this.buildForm();
    this.getBusinessGroup();
  }

  getBusinessGroup() {
    this.issuerService.findAllBusinessGroup().subscribe(result => {
      this.businessGroup = result.data;
    });
  }

  getBusinessName(id) {
    if (id != null) {
      const businessGroup = this.businessGroup.filter(x => x.id === id)[0];
      if (businessGroup !== undefined) {
        return this.businessGroup.filter(x => x.id === id)[0].name;
      } else {
        return '';
      }

    }
    return '';
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.issuerService.findIssuer('', current > 0 ? current - 1 : 0, 10, '', '').subscribe(data => {
      if (data) {
        this.lstIssuer = data.data;
      }
    });
  }

  buildForm() {
    this.issuerAdd = this.fb.group(
      {
        issuer: this.fb.group(
          {
            code: ['', [Validators.required]],
            businessNumber: ['', [Validators.required]],
            address: ['', [Validators.required]],
            businessGroupId: ['', [Validators.required]],
            email: ['', [Validators.required]],
            fax: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            active: ['', [Validators.required]],
            name: ['', [Validators.required]],
            businessSector: ['', [Validators.required]],
            id: ['', [Validators.required]],

          }
        )
      }
    );

    this.issuerUpdate = this.fb.group(
      {
        issuer: this.fb.group(
          {
            code: ['', [Validators.required]],
            businessNumber: ['', [Validators.required]],
            address: ['', [Validators.required]],
            businessGroupId: ['', [Validators.required]],
            email: ['', [Validators.required]],
            fax: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            active: ['', [Validators.required]],
            name: ['', [Validators.required]],
            businessSector: ['', [Validators.required]],
            id: ['', [Validators.required]],
          }
        )
      }
    );
  }

  doSelectRecodeUpdate(issuer: Issuer) {
    this.issuerUpdate.get('issuer').get('code').setValue(issuer.code);
    this.issuerUpdate.get('issuer').get('id').setValue(issuer.id);
    this.issuerUpdate.get('issuer').get('businessNumber').setValue(issuer.businessNumber);
    this.issuerUpdate.get('issuer').get('address').setValue(issuer.address);
    this.issuerUpdate.get('issuer').get('businessGroupId').setValue(issuer.businessGroupId);
    this.issuerUpdate.get('issuer').get('fax').setValue(issuer.fax);
    this.issuerUpdate.get('issuer').get('phone').setValue(issuer.phone);
    this.issuerUpdate.get('issuer').get('email').setValue(issuer.email);
    this.issuerUpdate.get('issuer').get('businessSector').setValue(issuer.businessSector);
    this.issuerUpdate.get('issuer').get('active').setValue(issuer.active);
    this.issuerUpdate.get('issuer').get('name').setValue(issuer.name);
  }

  doUpdate() {
    this.issuerService.update(this.issuerUpdate.value.issuer).subscribe(result => {
      if (result.status === 200) {
        this.notificationService.showSuccess('Đã cập nhập thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doSearch() {
    this.issuerService.findIssuer(this.nameSearch.trim(), 0, 10, this.businessSector.trim(), this.codeSearch.trim()).subscribe(result => {
      if (result) {
        this.lstIssuer = result.data;
      }
    });
  }

  doLoadData() {
    this.getPageSymbol(0);
  }

  clear() {
    this.nameSearch = '';
  }

  doDelete(issuer) {
  }

  doCreate() {
    this.issuerService.update(this.issuerAdd.value.issuer).subscribe(result => {
      if (result.status === 200) {
        this.doLoadData();
        this.notificationService.showSuccess('Đã tạo bản ghi  thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', result.message);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }
}
