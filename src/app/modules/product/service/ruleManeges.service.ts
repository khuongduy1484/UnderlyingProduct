import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RulesManageService {
  constructor(
    private http: HttpClient
  ) {
  }

  getPropRuleApproval(name: string, offset: number, pageSize: number, condition: number, status: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prop-rule/search?name=${name}&offset=${offset}&pageSize=${pageSize}&condition=${condition}&status=${status}`);
  }

  getPropRulePending(name: string, offset: number, pageSize: number, condition: number, status: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prop-rule/pending?name=${name}&offset=${offset}&pageSize=${pageSize}&condition=${condition}&status=${status}`);
  }


}
