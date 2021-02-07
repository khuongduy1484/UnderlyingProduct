import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PoliciesProductService {
  constructor(
    private http: HttpClient) {
  }

  searchPoliceApprovalPending(name: string, offset: number, pageSize: number, mortgage: string, discount: string, holdAsset: string
    , holdMoney: string, createdDate: string, transfer: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${environment.apiUrl}/prod-agreement/search/approval-pending?name=${name}&offset=${offset}&pageSize=${mortgage}&mortgage=${discount}&discount=${discount}&holdAsset=${holdAsset}&holdMoney=${holdMoney}&createdDate=${createdDate}&transfer=${transfer}`);
  }

  searchPoliceApproval(name: string, offset: number, pageSize: number, mortgage: string, discount: string, holdAsset: string
    , holdMoney: string, createdDate: string, transfer: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${environment.apiUrl}/prod-agreement/search/approval?name=${name}&offset=${offset}&pageSize=${mortgage}&mortgage=${discount}&discount=${discount}&holdAsset=${holdAsset}&holdMoney=${holdMoney}&createdDate=${createdDate}&transfer=${transfer}`);
  }


  createPoliciesProductApprovalPending(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-agreement/pending-approval`, body);
  }
  createPoliciesProductApproval(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-agreement/pending-approval`, body);
  }



  remove(body: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/prod-agreement/pending-approval`, body);
  }

}
