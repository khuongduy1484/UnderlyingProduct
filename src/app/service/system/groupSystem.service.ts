import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupSystemService {

  constructor(
    private http: HttpClient
  ) {
  }


  findGroupSystem(offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/system-param?offset=${offset}&pageSize=${pageSize}`);
  }


}
