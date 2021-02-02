import {Component, OnInit} from '@angular/core';
import {TemplateManagementService} from '../../service/templateManagement/template-management.service';
import {ITemplateContract} from '../../model/models';
import {TemplateContractService} from './service/templateContract.service';
import {combineLatest, Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {AutomationComponent} from '../automation/automation.component';
import {MatDialog} from '@angular/material';
import {UpdateTemplateContractComponent} from './update-template-contract/update-template-contract.component';
import {CreateTemplateContractComponent} from './create-template-contract/create-template-contract.component';
import {TemplateContractDetailComponent} from './template-contract-detail/template-contract-detail.component';
import {DialogService} from '../../dialogs';

@Component({
  selector: 'app-template-contract',
  templateUrl: './template-contract.component.html',
  styleUrls: ['./template-contract.component.scss']
})
export class TemplateContractComponent implements OnInit {
  page: number;
  templateContracts: ITemplateContract[] = [];
  contentSearch: any;
  codeContractOld:  string;


  templateContractNew = {
    content: '',
    name: '',
    code: '',
    description: '',
  };

  templateContractUpdate = {
    content: '',
    name: '',
    code: '',
    description: '',
  };

  constructor(
    private templateContractService: TemplateContractService,
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {
  }

  ngOnInit() {
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.templateContractService.getTemplateContract('', 1, current > 0 ? current - 1 : 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }


  // doUpdate(contract) {
  //   const dialogRef = this.dialog.open(UpdateTemplateContractComponent, {
  //     data: {data: contract[0]},
  //     width: '60%',
  //     height: '480px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  //   this.getPageSymbol(0);
  // }

  doSelected(contractTemplate) {
    this.templateContractUpdate = contractTemplate;
    this.codeContractOld = contractTemplate.code;
  }

  doUpdate() {
    if (!(this.codeContractOld === this.templateContractUpdate.code)) {
      this.dialogService.error({'title': 'Thông báo', 'message': 'Mã hợp đồng không được phép sửa'}, () => {
      });
      return;
    }
    this.templateContractService.createTemplateContractWaitingForApproval(this.templateContractUpdate).subscribe(data => {
      if (data.errorCode === '1') {
        this.dialogService.success({'title': 'Thông báo', 'message': 'Đã cập nhập xong hợp đồng'}, () => {});
      } else {
        this.dialogService.error({'title': 'Thông báo', 'message': data.description}, () => {});
      }
    }, error => {
      console.log(error);
      this.dialogService.error({'title': 'Thông báo', 'message': 'Có lỗi xảy ra vui lòng thử lại'}, () => {
      });
    });
  }

  doCreate() {
    this.templateContractService.createTemplateContract(this.templateContractNew).subscribe(data => {
      if (data.errorCode === '1') {
        this.dialogService.success({'title': 'Thông báo', 'message': 'Đã gửi phê duyệt thành công'}, () => {
        });
      } else {
        this.dialogService.error({'title': 'Thông báo', 'message': data.description}, () => {
        });
      }
    }, error => {

      console.log(error);
      this.dialogService.error({'title': 'Thông báo', 'message': 'Có lỗi xảy ra vui lòng thử lại'}, () => {
      });
    });
  }

  clear() {
    this.templateContractNew.description = '';
    this.templateContractNew.code = '';
    this.templateContractNew.name = '';
    this.templateContractNew.content = '';
    this.contentSearch = '';
  }

  doSearch() {
    this.templateContractService.getTemplateContract(this.contentSearch.trim(), 1, 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doShowDetail(contract) {
    const dialogRef = this.dialog.open(TemplateContractDetailComponent, {
      data: {data: contract[0]},
      width: '50%',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

