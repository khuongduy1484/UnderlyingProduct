import {Injectable} from '@angular/core';
import {FormNotificationService} from '../../../service/product/form-notification.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormNotificationServicess {
  constructor(
    private formNotificationService: FormNotificationService ) {
  }

  getFormNotification(code: string, offset: number, pageSize: number): Observable<any> {
    return this.formNotificationService.findFormNotification(offset, pageSize, code);
  }

  getFormNotificationByNotiType(noticeType: string): Observable<any> {
    return this.formNotificationService.findFormNotificationByNotiType(noticeType);
  }

  getByNotiTypeAndName(noticeType: string, name: string): Observable<any> {
    return this.formNotificationService.findByNotiTypeAndName(noticeType, name);
  }

  getContentByCode(code: string): Observable<any> {
    return this.formNotificationService.getContentByCode(code);
  }

  updateFormNotification(body): Observable<any> {
    return this.formNotificationService.updateFormNotification(body);
  }

  insertFormNotification(body): Observable<any> {
    return this.formNotificationService.insertFormNotification(body);
  }
}
