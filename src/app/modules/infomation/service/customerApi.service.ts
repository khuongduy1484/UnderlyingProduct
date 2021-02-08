import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerService} from '../../../service/infomation/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicess {
  constructor(
    private customerService: CustomerService ) {
  }

  getCustomer(offset: number, pageSize: number, name: string, idCard: string, phone: string, email: string, branchName: string): Observable<any> {
    return this.customerService.findCustomer(offset, pageSize, name, idCard, phone, email, branchName);
  }

  getDetail(offset: number, pageSize: number, id: number): Observable<any> {
    return this.customerService.findDetail(offset, pageSize, id);
  }

  insertCustomer(body): Observable<any> {
    return this.customerService.insertCustomer(body);
  }

  updateCustomer(body): Observable<any> {
    return this.customerService.updateCustomer(body);
  }
}
