import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProVariableService {

  constructor(
    private http: HttpClient
  ) {
  }


  findPropVariableByCode(name: string, offset: number, pageSize: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/prop-variable?name=${name}&offset=${offset}&pageSize=${pageSize}`);
  }

}
