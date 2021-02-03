import {Injectable} from '@angular/core';
import {TemplateManagementService} from '../../../service/templateManagement/template-management.service';
import {Observable} from 'rxjs';
import {ITemplateContract} from '../../../model/models';


@Injectable({
  providedIn: 'root'
})
export class TemplateContractService {
  constructor(
    private templateManagementService: TemplateManagementService
  ) {
  }

  getTemplateContract(code: string,  offset: number, pageSize: number): Observable<any> {
    return this.templateManagementService.getTemplateContract(code, offset, pageSize);
  }

  updateOrCreateTemplateContract(body: ITemplateContract[]): Observable<any> {
    return this.templateManagementService.updateOrCreateTemplateContract(body);

  }

  createTemplateContract(body: any): Observable<any> {
    return this.templateManagementService.createTemplateContract(body);
  }

  getTemplateContractWaitingForApproval(code: string, offset: number, pageSize: number): Observable<any> {
    return this.templateManagementService.getTemplateContractWaitingForApproval(code , offset, pageSize);
  }

  deleteTemplateContract(body: ITemplateContract[]): Observable<any> {
    return this.templateManagementService.deleteTemplateContract(body);
  }

  createTemplateContractWaitingForApproval(body: any): Observable<any> {
    return this.templateManagementService.createTemplateContractWaitingForApproval(body);
  }

  getAllTemplateContracts(): Observable<any> {
    return this.templateManagementService.getAllTemplateContract();
  }
}
