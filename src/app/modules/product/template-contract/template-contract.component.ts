import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {TemplateContractService} from '../service/templateContract.service';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-template-contract',
  templateUrl: './template-contract.component.html',
  styleUrls: ['./template-contract.component.scss']
})
export class TemplateContractComponent implements OnInit {
  page: number;
  templateContracts: ITemplateContract[] = [];
  contentSearch: any;
  codeContractOld: string;
  @ViewChild('detailContent') detailContent: ElementRef;




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
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.templateContractService.getTemplateContract('',  current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doSelected(contractTemplate) {
    this.templateContractUpdate = contractTemplate;
    this.codeContractOld = contractTemplate.code;
  }

  doUpdate() {
    if (!(this.codeContractOld === this.templateContractUpdate.code)) {
      this.notificationService.showError('Mã hợp đồng không được phép sửa', 'Thông báo');
      return;
    }
    this.templateContractService.createTemplateContractWaitingForApproval(this.templateContractUpdate).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã cập nhập xong hợp đồng', 'Thông báo' );
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError( 'Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doCreate() {
    this.templateContractService.createTemplateContract(this.templateContractNew).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã gửi phê duyệt thành công', 'Thông báo' );
      } else {
        this.notificationService.showError( data.description, 'Thông báo');
      }
    }, error => {

      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo', );
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
    this.templateContractService.getTemplateContract(this.contentSearch.trim(), 1, 10).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doShowDetail(content) {
    this.detailContent.nativeElement.innerHTML = content;
  }


}

