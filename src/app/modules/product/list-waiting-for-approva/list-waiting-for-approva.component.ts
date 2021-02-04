import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TemplateContractService} from '../service/templateContract.service';
import {IGroupContract, ITemplateContract} from '../../../model/models';
import {NotificationService} from '../../../shared/notification.service';
import {forEach} from '@angular/router/src/utils/collection';

const ELEMENT_DATA  = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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
    status: ''
  };

  templateContractUpdate = {
    content: '',
    name: '',
    code: '',
    description: '',
    status: ''
  };
  isActionSubmit = true;


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
    this.templateContractService.getTemplateContractWaitingForApproval('', 0, 10).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doSearch() {
    this.templateContractService.getTemplateContractWaitingForApproval(this.contentSearch.trim(), 0, 10).subscribe(data => {
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
    if ( this.templateContracts[index].status === '4' &&  this.templateContracts[index].checked) {
      this.notificationService.showError('Bản ghi đã xóa vui lòng chọn bản ghi khác', 'Thông báo');
      return;
    }
    if (this.templateContracts[index].checked) {
      this.templateContracts[index].status = '0';
    }
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
      let isActionApproval = true;
      let error = '';
      templateContract.forEach(r => {
          if (r.status === '0') {
            error = 'Bản ghi với mã hơp đồng: ' + r.code + ' đã ở trạng thái phê duyêt vui lòng chọn lại bản ghi khác';
            isActionApproval = false;
          }
        }
      );
      if (!isActionApproval) {
        this.notificationService.showWarning(error, 'Thông báo');
        return;
      }
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
          templateContract.forEach(r => {
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
    this.templateContractService.updateOrCreateTemplateContract(template).subscribe(data => {
      if (data.errorCode === '0') {
        this.doLoadData();
        this.notificationService.showSuccess('Phê duyệt thành công', 'Thông báo');
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
    this.doLoadData();
  }

  doSelected(contractTemplate) {
    this.templateContractUpdate = contractTemplate;
    this.templateContractUpdate.status = '0';
    this.codeContractOld = contractTemplate.code;
  }

  doUpdate() {
    this.templateContractUpdate.status = '0';
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
    this.templateContractNew.status = '3';
    this.templateContractService.createTemplateContract(this.templateContractNew).subscribe(data => {
      if (data.errorCode === '0') {
        this.notificationService.showSuccess('Đã tạo  bản ghi  thành công', 'Thông báo');
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

  doUpdateTemplateForWaitingForApproval(templateContract: ITemplateContract, action) {
    if (action === 'submit for approval') {
      templateContract.status = '0';
      this.templateContractService.createTemplateContractWaitingForApproval(templateContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.doLoadData();
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
      templateContract.status = '2';
      this.templateContractService.createTemplateContractWaitingForApproval(templateContract).subscribe(data => {
        if (data.errorCode === '0') {
          this.doLoadData();
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

  doLoadData() {
    this.getPageSymbol(0);
  }
}
