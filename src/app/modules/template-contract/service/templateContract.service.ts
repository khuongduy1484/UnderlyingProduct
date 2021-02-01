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

  getTemplateContract(code: string, status: number, offset: number): Observable<any> {
    return this.templateManagementService.getTemplateContract(code, status, offset);
  }

  updateTemplateContract(body: ITemplateContract): Observable<any> {
    return this.templateManagementService.updateTemplateContract(body);

  }

  createTemplateContract(body: ITemplateContract): Observable<any> {
    return this.templateManagementService.createTemplateContract(body);
  }

  getTemplateContractInRedis(code: string, offset: number): Observable<any> {
    return this.templateManagementService.getTemplateContractInRedis(code , offset);
  }
}
