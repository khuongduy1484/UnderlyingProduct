import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SystemParamService {
  constructor(
    private http: HttpClient
  ) {
  }

  findGroupSystem(offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/system-param/search?offset=${offset}&pageSize=${pageSize}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/system-param`);
  }


}
