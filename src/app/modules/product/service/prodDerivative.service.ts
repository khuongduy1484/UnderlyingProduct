import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdDerivativeService {
  constructor(
    private http: HttpClient) {
  }

  getProdDerivativeApproval(name: string, vanillaId: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prod-derivative/search/approval?name=${name}&vanillaId=${vanillaId}&offset=${offset}&pageSize=${pageSize}`);
  }

  getProdDerivativePendingApproval(name: string, vanillaId: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prod-derivative/search/pending-approval?name=${name}&vanillaId=${vanillaId}&offset=${offset}&pageSize=${pageSize}`);
  }

  creatProdDerivativeApprovalPending(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-derivative/pending-approval`, body);
  }

  updateProdDerivativeApprovalPending(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-derivative/pending-approval`, body);
  }

  creatProdDerivativeApproval(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/prod-derivative/approval`, body);
  }

  remove(body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/prod-derivative/pending-approval/remove`, body);
  }


}
