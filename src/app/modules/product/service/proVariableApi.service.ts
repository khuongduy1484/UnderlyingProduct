import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ContractParamService} from '../../../service/product/contract-param.service';
import {ProVariableService} from '../../../service/product/proVariable.service';


@Injectable({
  providedIn: 'root'
})
export class ProVariableApiService {
  constructor(
    private proVariableService: ProVariableService
  ) {
  }

  getGroupContract(code: string, offset: number, pageSize: number): Observable<any> {
    return this.proVariableService.findPropVariableByCode(code, offset, pageSize,);
  }



}
