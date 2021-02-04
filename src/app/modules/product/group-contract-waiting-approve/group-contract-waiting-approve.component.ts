import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IGroupContract, ITemplateContract} from '../../../model/models';
import {GroupContractService} from '../service/groupContract.service';
import {MatDialog} from '@angular/material';
import {NotificationService} from '../../../shared/notification.service';
import {TemplateContractService} from '../service/templateContract.service';

@Component({
  selector: 'app-group-contract-waiting-approve',
  templateUrl: './group-contract-waiting-approve.component.html',
  styleUrls: ['./group-contract-waiting-approve.component.scss']
})
export class GroupContractWaitingApproveComponent implements OnInit {
  page: number;
  groupContracts: IGroupContract[] = [];
  templateContracts: ITemplateContract[] = [];
  contentSearch = '';
  codeContractOld: string;
  @ViewChild('divElement') detailContent: ElementRef;
  lstGroupContract: any[] = [];
  action: string;

  groupContractNew = {
    content: '',
    name: '',
    code: '',
    description: '',
    appliedDate: new Date().getTime(),
    templateId: '',
    status: ''
  };

  groupContractUpdate  = {
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
  }

  getTemplateContract() {
    this.templateContractService.getAllTemplateContracts().subscribe(data => {
      this.templateContracts = data.result;
    });
  }

  getPageSymbol(current: number) {
    console.log(current);
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.groupContractService.getGroupContractWaitingForApproval('', current > 0 ? current - 1 : 0, 10).subscribe(data => {
      if (data) {
        this.groupContracts = data.result;
      }
    });
  }

  doSelectedUpdate(groupCtract) {
    this.groupContractUpdate = groupCtract;
    this.groupContractUpdate.status =  '3';
    this.codeContractOld = groupCtract.code;
  }

  doUpdate() {
    if (!(this.codeContractOld === this.groupContractUpdate.code)) {
      this.notificationService.showError('Mã hợp đồng không được phép sửa', 'Thông báo');
      return;
    }
    this.groupContractUpdate.status = '3';
    this.groupContractService.updateGroupContractWaitingForApproval(this.groupContractUpdate).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã cập nhập xong hợp đồng', 'Thông báo');
      } else {
        this.notificationService.showError('Thông báo', data.description);
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doCreate() {
    this.groupContractNew.status =  '3';
    this.groupContractService.createGroupContractWaitingForApproval(this.groupContractNew).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã  tạo bản ghi thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {

      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  clear() {
    this.groupContractNew.description = '';
    this.groupContractNew.code = '';
    this.groupContractNew.name = '';
    this.groupContractNew.content = '';
    this.contentSearch = '';
  }

  doSearch() {
    this.groupContractService.getGroupContractApproval(this.contentSearch.trim(), 0, 10).subscribe(data => {
      if (data) {
        this.groupContracts = data.result;
      }
    });
    this.doLoadData();
  }


  doLoadData() {
    this.getPageSymbol(0);
  }

  doSubmit() {
    const groupContract = this.groupContracts.filter(r => r.checked === true);
    if (groupContract.length <= 0 || groupContract === undefined) {
      this.notificationService.showError('Vui lòng chọn ít nhất một bản ghi để thực hiện tác vụ', 'Thông báo');
      return;
    }
    if (this.action === null || this.action === undefined) {
      this.notificationService.showError('Vui lòng chọn tác vụ', 'Thông báo');
      return;
    }

    if (this.action === '1') {
      let isActionApproval = true;
      let error = '';
      groupContract.forEach(r => {
          if (r.status === '0') {
            error = 'Bản ghi với mã nhóm: ' + r.code + ' đã ở trạng thái phê duyêt vui lòng chọn lại bản ghi khác';
            isActionApproval = false;
          }
        }
      );
      if (!isActionApproval) {
        this.notificationService.showWarning(error, 'Thông báo');
        return;
      }
      this.groupContractService.updateGroupContractWaitingForApproval(groupContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.notificationService.showSuccess('Đã gửi phê duyệt thành công', 'Thông báo');
        } else {
          this.notificationService.showError(data.description, 'Thông báo');
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
    }

    if (this.action === '2') {
      this.groupContractService.deleteGroupContract(groupContract).subscribe(data => {
        if (data.errorCode === '0') {
          groupContract.forEach(r => {
              r.status = '4';
            }
          );
          this.notificationService.showSuccess('Đã xóa thành công', 'Thông báo');
        } else {
          this.notificationService.showError(data.description, 'Thông báo');
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
    }
    this.doLoadData();

  }

  doApproval(contract) {
    const template = [];
    contract.status = '1';
    template.push(contract);
    this.groupContractService.createGroupContract(template).subscribe(data => {
      if (data.errorCode === '0') {
        this.doLoadData();
        this.notificationService.showSuccess('Đã  phê duyệt thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doDelete(template) {
    template.status = '4';
    this.lstGroupContract.push(template);
    this.groupContractService.deleteGroupContract(this.lstGroupContract).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã xóa thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
    this.doLoadData();
  }

  doPerformAction(event, index) {
    this.groupContracts[index].checked = event.target.checked;
    if ( this.groupContracts[index].status === '4' &&  this.groupContracts[index].checked) {
      this.notificationService.showError('Bản ghi đã xóa vui lòng chọn bản ghi khác', 'Thông báo');
      return;
    }
    if (this.groupContracts[index].checked) {
      this.groupContracts[index].status = '0';
    }
  }

  doUpdateGroupForWaitingForApproval(groupContract: IGroupContract, action) {
    if (action === 'submit for approval') {
      groupContract.status = '0';
      this.groupContractService.updateGroupContractWaitingForApproval(groupContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.notificationService.showSuccess('Đã gửi phê duyệt thành công', 'Thông báo');
        } else {
          this.notificationService.showError('Thông báo', data.description);
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
      return;
    }

    if (action === 'reject approval') {
      groupContract.status = '2';
      this.groupContractService.updateGroupContractWaitingForApproval(groupContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.notificationService.showSuccess('Thành công', 'Thông báo');
        } else {
          this.notificationService.showError('Thông báo', data.description);
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
      return;
    }
  }

}
