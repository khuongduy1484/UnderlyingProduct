import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IGroupContract, ITemplateContract} from '../../../model/models';
import {TemplateContractService} from '../service/templateContract.service';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';
import {GroupContractService} from '../service/groupContract.service';

@Component({
  selector: 'app-group-contract',
  templateUrl: './group-contract.component.html',
  styleUrls: ['./group-contract.component.scss']
})
export class GroupContractComponent implements OnInit {

  page: number;
  groupContracts: IGroupContract[] = [];
  templateContracts: ITemplateContract[] = [];
  contentSearch: any;
  codeContractOld: string;
  @ViewChild('divElement') detailContent: ElementRef;
  groupContractDetail = {
    content: '',
    name: '',
    code: '',
    description: '',
    appliedDate: new Date().getTime(),
    templateId: '',
    status: '',
    contTemplateDocDto: {
      activeVersion: '',
      content: ''
    }
  };


  groupContractUpdate = {
    content: '',
    name: '',
    code: '',
    description: '',
    appliedDate: new Date().getTime(),
    templateId: '',
    status: ''
  };

  constructor(
    private groupContractService: GroupContractService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private templateContractService: TemplateContractService
  ) {
  }

  ngOnInit() {
    this.getTemplateContract();
    this.getPageSymbol(0);
  }

  getTemplateContract() {
    this.templateContractService.getAllTemplateContracts().subscribe(data => {
      this.templateContracts = data.data;
    });
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.groupContractService.getGroupContractApproval('', current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.groupContracts = data.data;
      }
    });
  }

  doSelected(groupContract) {
    this.groupContractUpdate = groupContract;
    this.codeContractOld = groupContract.code;
  }

  doUpdate() {
    this.groupContractUpdate.status = '0';
    if (!(this.codeContractOld === this.groupContractUpdate.code)) {
      this.notificationService.showError('Mã hợp đồng không được phép sửa', 'Thông báo');
      return;
    }
    this.groupContractService.updateGroupContractWaitingForApproval(this.groupContractUpdate).subscribe(data => {
      if (data.status === 200) {
        this.notificationService.showSuccess('Đã cập nhập xong hợp đồng', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }


  clear() {
    this.groupContractUpdate.description = '';
    this.groupContractUpdate.code = '';
    this.groupContractUpdate.name = '';
    this.groupContractUpdate.content = '';
    this.contentSearch = '';
  }

  doSearch() {
    this.groupContractService.getGroupContractApproval(this.contentSearch.trim(), 0, 10).subscribe(data => {
      if (data) {
        this.groupContracts = data.data;
      }
    });
  }

  doShowDetailGroupContract(groupContract) {
    this.groupContractDetail = groupContract;
  }

  doShowDetailTemplateContract(contractTemplate) {
    this.detailContent.nativeElement.innerHTML = contractTemplate;

  }

  doLoadData() {
    this.getPageSymbol(0);
  }

}
