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
export class GroupContractManagementService {

  constructor(
    private http: HttpClient
  ) {
  }


  getGroupContractApproval(code: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/group-contract?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  createGroupContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group-contract/approval`, body);
  }

  createGroupContractWaitingForApproval(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group-contract/waiting-for-approval`, body);
  }

  getGroupContractWaitingForApproval(code: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/group-contract/waiting-for-approval?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  deleteGroupContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group-contract/waiting-for-approvals`, body);
  }

  updateGroupContractWaitingForApproval(body: any) {
    return this.http.put(`${environment.apiUrl}/group-contract/waiting-for-approval`, body);

  }

}
