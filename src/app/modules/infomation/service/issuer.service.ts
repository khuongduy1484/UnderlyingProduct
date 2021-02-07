import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IssuerService {

  constructor(
    private http: HttpClient
  ) {
  }


  findIssuer(name: string, offset: number, pageSize: number, businessNumber: string, code: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/issuer/search?name=${name}&id=${code}&businessNumber=${businessNumber}&offset=${offset}&pageSize=${pageSize}`);
  }

  findAllBusinessGroup(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/business-group`);

  }

  update(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/issuer`, body);
  }

}
