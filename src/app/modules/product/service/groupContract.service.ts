import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IGroupContract, ITemplateContract} from '../../../model/models';
import {GroupContractManagementService} from '../../../service/templateManagement/group-contract-management.service';


@Injectable({
  providedIn: 'root'
})
export class GroupContractService {
  constructor(
    private groupContractManagementService: GroupContractManagementService
  ) {
  }

  getGroupContractApproval(code: string, offset: number , pageSize: number): Observable<any> {
    return this.groupContractManagementService.getGroupContractApproval(code, offset, pageSize);
  }

  createGroupContract(body: IGroupContract[]): Observable<any> {
    return this.groupContractManagementService.createGroupContract(body);

  }

  createGroupContractWaitingForApproval(body: any): Observable<any> {
    return this.groupContractManagementService.createGroupContractWaitingForApproval(body);
  }

  getGroupContractWaitingForApproval(code: string, offset: number,  pageSize: number): Observable<any> {
    return this.groupContractManagementService.getGroupContractWaitingForApproval(code , offset ,pageSize);
  }

  deleteGroupContract(body: IGroupContract[]): Observable<any> {
    return this.groupContractManagementService.deleteGroupContract(body);
  }

  updateGroupContractWaitingForApproval(body: any): Observable<any> {
    return this.groupContractManagementService.updateGroupContractWaitingForApproval(body);

  }
}
