import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IContractGroup, IGroupContract} from '../../../model/models';
import {ContractParamService} from '../../../service/product/contract-param.service';


@Injectable({
  providedIn: 'root'
})
export class ContractParamServices {
  constructor(
    private contractParamService: ContractParamService
  ) {
  }

  getGroupContract(code: string, offset: number, pageSize: number): Observable<any> {
    return this.contractParamService.findContractParam(offset, pageSize, code);
  }

  updateGroupContract(body): Observable<any> {
    return this.contractParamService.updateContractParam(body);

  }

}
