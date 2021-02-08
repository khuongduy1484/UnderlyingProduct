import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private http: HttpClient
  ) {
  }
  findCustomer( offset: number, pageSize: number, name: string, idCard: string, phone: string, email: string, branchName: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/customer?name=${name}&idCard=${idCard}&phone=${phone}&email=${email}&branchName=${branchName}&offset=${offset}&pageSize=${pageSize}`);
  }

  findDetail( offset: number, pageSize: number, id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/customer/find-detail?id=${id}&offset=${offset}&pageSize=${pageSize}`);
  }

  checkExistIdCard(idCard: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/customer/check-id-card?idCard=${idCard}`);
  }

  checkExistAccount(account: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/customer/check-account?account=${account}`);
  }

  insertCustomer(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/customer`, body);
  }

  updateCustomer(body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/customer`, body);
  }

  managerCustomer(body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/customer/lock-or-unlock`, body);
  }
}
