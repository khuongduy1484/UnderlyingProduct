import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormNotificationService {
  constructor(
    private http: HttpClient
  ) {
  }

  findFormNotification( offset: number, pageSize: number, code: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/form-notification?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  findFormNotificationByNotiType(notiType: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/form-notification/noti-type?notiType=${notiType}`);
  }

  findByNotiTypeAndName(notiType: string, name: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/form-notification/noti-type-name?notiType=${notiType}&name=${name}`);
  }

  getContentByCode(code: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/form-notification/content?code=${code}`);
  }

  updateFormNotification(body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/form-notification`, body);
  }

  insertFormNotification(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/form-notification`, body);
  }
}
