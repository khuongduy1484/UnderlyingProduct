import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContractParamService {

  constructor(
    private http: HttpClient
  ) {
  }


  findContractParam( offset: number, pageSize: number, code: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/contract-param?code=${code}&offset=${offset}&pageSize=${pageSize}`);
  }

  updateContractParam(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/contract-param`, body);
  }

}
