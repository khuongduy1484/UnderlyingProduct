import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IContractGroup, IFormNotification} from '../../../model/models';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../shared/notification.service';
import {FormNotificationServicess} from '../service/formNotification.service';
import {numbers} from '@material/list/constants';

@Component({
  selector: 'app-list-form-notificaion',
  templateUrl: './list-form-notificaion.component.html',
  styleUrls: ['./list-form-notificaion.component.scss']
})
export class ListFormNotificaionComponent implements OnInit {
  page: number;
  formNotification: FormGroup;
  formNotificationNew: FormGroup;
  contentNoti: '';
  nameNoti: '';
  @ViewChild('divElement') detailContent: ElementRef;
  contentSearch = '';
  noticeTypeSelected = '';
  lstNameNotificationByNoticeType = [];
  formNotifications: IFormNotification[] = [];
  lstNoticeType = ['SMS', 'Email'];
  lstTransType = ['BUY', 'SELL'];
  notificationGroupNew = {
      id: 1,
      code: '',
      notiType: '',
      transType: '',
      description: '',
      content: '',
      status: 1,
      name: ''
    };
  // const ctrol = new FormControl({value: 'n/a', disabled: true});

  constructor(
    private formNotificationServices: FormNotificationServicess,
    private notificationService: NotificationService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formNotification = this.fb.group({
      notificationGroup: this.fb.group(
        {
          code: ['',  [Validators.required]],
          notiType: ['', [Validators.required]],
          transType: [ '', [Validators.required]],
          description: ['', [Validators.required]],
          content: ['', [Validators.required]],
          status: [, [Validators.required]],
          name: ['', [Validators.required]],
          id: ['', [Validators.required]],
        }
      )
    });
    this.formNotificationNew = this.fb.group({
      notificationGroupNew: this.fb.group(
        {
          code: ['',  [Validators.required]],
          notiType: ['', [Validators.required]],
          transType: [ '', [Validators.required]],
          description: ['', [Validators.required]],
          content: ['', [Validators.required]],
          status: [, [Validators.required]],
          name: ['', [Validators.required]],
          id: ['', [Validators.required]],
        }
      )
    });
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.formNotificationServices.getFormNotification('', current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.formNotifications = data.data;
      }
    });
  }

  onOptionsSelected(value: string) {
    this.noticeTypeSelected = value;
    this.formNotificationServices.getFormNotificationByNotiType(value.trim()).subscribe(result => {
      if (result) {
        this.lstNameNotificationByNoticeType = result.data;
      }
    });
  }

  doShowDetailNotification(formNotification) {
    this.formNotification = formNotification;
  }

  doShowDetailTemplateContract(formNotification) {
    this.contentNoti = formNotification.content;
    this.nameNoti = formNotification.name;
  }

  doDelete(template) {
  }

  doSelected(formNotification) {
    this.lstNameNotificationByNoticeType.push(formNotification.name);
    this.formNotification.get('notificationGroup').get('id').setValue(formNotification.id);
    this.formNotification.get('notificationGroup').get('code').setValue(formNotification.code);
    this.formNotification.get('notificationGroup').get('notiType').setValue(formNotification.notiType);
    this.formNotification.get('notificationGroup').get('transType').setValue(formNotification.transType);
    this.formNotification.get('notificationGroup').get('name').setValue(formNotification.name);
    this.formNotification.get('notificationGroup').get('status').setValue(formNotification.status);
    this.formNotification.get('notificationGroup').get('description').setValue(formNotification.description);
    this.formNotification.get('notificationGroup').get('content').setValue(formNotification.content);
  }

  getByNotiTypeAndName(notificationGroupNew) {
    this.formNotificationServices.getByNotiTypeAndName(notificationGroupNew.notiType, notificationGroupNew.name).subscribe( result => {
      if (result) {
        this.notificationGroupNew.code = result.data.code;
        this.notificationGroupNew.id = result.data.id;
        this.notificationGroupNew.notiType = result.data.notiType;
        this.notificationGroupNew.description = result.data.description;
      }
    }
    );
  }

  doUpdate() {
    this.formNotificationServices.updateFormNotification(this.formNotification.value.notificationGroup).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã cập nhập thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doAdd() {
    console.log(this.notificationGroupNew);
    this.formNotificationServices.updateFormNotification(this.notificationGroupNew).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã thêm mới thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doSearch() {
    this.formNotificationServices.getFormNotification(this.contentSearch.trim(), 0, 10).subscribe(data => {
      if (data) {
        this.formNotifications = data.data;
      }
    });
  }

  doLoadData() {
    this.getPageSymbol(0);
  }

  clear() {
    this.contentSearch = '';
  }

}
