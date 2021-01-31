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

  getTemplateContract(): Observable<ITemplateContract[]> {
    return this.templateManagementService.getTemplateContract();
  }

  updateTemplateContract(body: ITemplateContract): Observable<any> {
    return this.templateManagementService.updateTemplateContract(body);

  }

  createTemplateContract(body: ITemplateContract): Observable<any> {
    return this.templateManagementService.createTemplateContract(body);

  }
}
