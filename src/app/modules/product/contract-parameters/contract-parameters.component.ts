import {Component, OnInit} from '@angular/core';
import {ContractParamServices} from '../service/contractParam.service';
import {NotificationService} from '../../../shared/notification.service';
import {IContractGroup} from '../../../model/models';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-parameters',
  templateUrl: './contract-parameters.component.html',
  styleUrls: ['./contract-parameters.component.scss']
})
export class ContractParametersComponent implements OnInit {
  page: number;
  contractParam: FormGroup;

  contractParams: IContractGroup[] = [];
  contentSearch = '';
  lstFormat = ['DD/MM/YYYY', 'DD-MM-YY', '0,0'];
  lstType = ['String', 'Datetime', 'Integer', 'Integer', 'Number'];

  constructor(
    private contractParamServices: ContractParamServices,
    private notificationService: NotificationService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
   this.buildForm();
  }

  buildForm() {
    this.contractParam = this.fb.group({
      contractGroup: this.fb.group(
        {
          code: ['',  [Validators.required]],
          description: ['', [Validators.required]],
          format: ['', [Validators.required]],
          type: ['', [Validators.required]],
          id: ['', [Validators.required]],
          createDate: ['', [Validators.required]],
          updateDate: ['', [Validators.required]],
        }
      )
    });
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.contractParamServices.getContractParam('', current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.contractParams = data.data;
      }
    });
  }

  doSelected(contractParam) {
    this.contractParam.get('contractGroup').setValue(contractParam);
    this.contractParam.get('contractGroup').get('code').disable();
    this.contractParam.get('contractGroup').get('id').setValue(contractParam.id);
  }

  doUpdate() {
    this.contractParamServices.updateContractParam(this.contractParam.value.contractGroup).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã cập nhập thành công', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doSearch() {
    this.contractParamServices.getContractParam(this.contentSearch.trim(), 0, 10).subscribe(data => {
      if (data) {
        this.contractParams = data.data;
      }
    });
  }

  doLoadData() {
    this.getPageSymbol(0);
  }

  clear() {
    this.contentSearch = '';
  }


}
