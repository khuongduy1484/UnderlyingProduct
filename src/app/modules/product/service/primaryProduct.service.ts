import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrimaryProductService {
  constructor(
    private http: HttpClient) {
  }

  getPrimaryProductApproval(name: string, issuerId: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prod-vanilla/search/approval?name=${name}&issuerId=${issuerId}&offset=${offset}&pageSize=${pageSize}`);
  }

  upDateStatus(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/pending-approval`, body);
  }

  creatPrimaryProductApproval(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-vanilla/approval`, body);
  }

  getPrimaryProductApprovalPending(name: string, issuerId: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prod-vanilla/search/pending-approval?name=${name}&issuerId=${issuerId}&offset=${offset}&pageSize=${pageSize}`);
  }

  creatPrimaryProductApprovalPending(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-vanilla/pending-approvals`, body);
  }

  delete(body: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/pending-approval`, body);
  }

  findAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prod-vanilla/search/all`);
  }
}
