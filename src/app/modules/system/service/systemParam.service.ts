import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IContractGroup, IGroupContract} from '../../../model/models';
import {ContractParamService} from '../../../service/product/contract-param.service';
import {GroupSystemService} from '../../../service/system/groupSystem.service';


@Injectable({
  providedIn: 'root'
})
export class SystemParamService {
  constructor(
    private groupSystemService: GroupSystemService
  ) {
  }

  findGroupSystem(offset: number, pageSize: number): Observable<any> {
    return this.groupSystemService.findGroupSystem(offset, pageSize);
  }


}
