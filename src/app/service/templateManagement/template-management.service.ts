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


  getTemplateContract(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/template-contracts`);
  }

  updateTemplateContract(body: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/template-contracts`, body);
  }

  createTemplateContract(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/template-contracts`, body);
  }

}
