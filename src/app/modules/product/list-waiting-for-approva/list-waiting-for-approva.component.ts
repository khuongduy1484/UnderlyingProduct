import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TemplateContractService} from '../service/templateContract.service';
import {ITemplateContract} from '../../../model/models';
import {NotificationService} from '../../../shared/notification.service';

@Component({
  selector: 'app-list-waiting-for-approva',
  templateUrl: './list-waiting-for-approva.component.html',
  styleUrls: ['./list-waiting-for-approva.component.scss']
})
export class ListWaitingForApprovaComponent implements OnInit {
  page: 0;
  templateContracts: ITemplateContract[] = [];
  lstTemplate: any[] = [];
  contentSearch = '';
  action: string;
  codeContractOld: string;
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

  @ViewChild('divElement') detailContent: ElementRef;


  constructor(
    private notificationService: NotificationService,
    private templateContractService: TemplateContractService
  ) {
  }

  ngOnInit() {
  }

  getPageSymbol(current: number) {
    if (current === null) {
    }
    this.templateContractService.getTemplateContractInRedis('', 1).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doSearch() {
    this.templateContractService.getTemplateContractInRedis(this.contentSearch.trim(), 1).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  clear() {
    this.contentSearch = '';
  }

  doSelect(event, index) {
    this.templateContracts[index].checked = event.target.checked;
  }

  doSubmit() {
    const templateContract = this.templateContracts.filter(r => r.checked === true);
    if (templateContract.length <= 0 || templateContract === undefined) {
      this.notificationService.showError('Vui lòng chọn ít nhất một bản ghi để thực hiện tác vụ', 'Thông báo');
      return;
    }
    if (this.action === null || this.action === undefined) {
      this.notificationService.showError('Vui lòng chọn tác vụ', 'Thông báo');
      return;
    }

    if (this.action === '1') {
      this.templateContractService.updateOrCreateTemplateContract(templateContract).subscribe(data => {
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
      this.templateContractService.deleteTemplateContract(templateContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.notificationService.showSuccess('Đã xóa thành công', 'Thông báo');
        } else {
          this.notificationService.showError(data.description, 'Thông báo');
        }
      }, error => {
        console.log(error);
        this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
      });
    }
  }

  doApproval(contract) {
    const template = [];
    template.push(contract);
    this.templateContractService.updateOrCreateTemplateContract(template).subscribe(data => {
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

  doDelete(template) {
    this.lstTemplate.push(template);
    this.templateContractService.deleteTemplateContract(this.lstTemplate).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã xóa thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
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
        this.notificationService.showSuccess('Đã cập nhập xong hợp đồng', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
  }

  doCreate() {
    this.templateContractService.createTemplateContract(this.templateContractNew).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã gửi phê duyệt thành công', 'Thông báo');
      } else {
        this.notificationService.showError(data.description, 'Thông báo');
      }
    }, error => {
      console.log(error);
      this.notificationService.showError('Có lỗi xảy ra vui lòng thử lại', 'Thông báo');
    });
    this.getPageSymbol(0);
  }

  doShowDetail(content) {
    this.detailContent.nativeElement.innerHTML = content;
  }
}
