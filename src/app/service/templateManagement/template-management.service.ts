import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TemplateManagementService {

  constructor(
    private http: HttpClient
  ) {
  }


  getTemplateContract(code: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/template-contracts/search?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  updateOrCreateTemplateContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/template-contracts/approval`, body);
  }

  createTemplateContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/template-contracts/waiting-for-approval`, body);
  }

  getTemplateContractWaitingForApproval(code: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/template-contracts/waiting-for-approval?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  deleteTemplateContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/template-contracts/waiting-for-approvals`, body);
  }

  createTemplateContractWaitingForApproval(body: any) {
    return this.http.put(`${environment.apiUrl}/template-contracts/waiting-for-approval`, body);
  }

  getAllTemplateContract(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/template-contracts`);
  }

}
