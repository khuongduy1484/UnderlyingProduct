import {Component, OnInit} from '@angular/core';
import {UpdateTemplateContractComponent} from '../update-template-contract/update-template-contract.component';
import {CreateTemplateContractComponent} from '../create-template-contract/create-template-contract.component';
import {TemplateContractService} from '../service/templateContract.service';
import {MatDialog} from '@angular/material';
import {ITemplateContract} from '../../../model/models';
import {DialogService} from '../../../dialogs';

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
  actionDefaut = 'Chọn tác vụ';
  codeContractOld:  string;
  templateContractNew =  {
    content :  '',
    name :  '',
    code : '',
    description :  '',
  };

  templateContractUpdate =  {
    content :  '',
    name :  '',
    code : '',
    description :  '',
  };
  constructor(
    private dialogService: DialogService,
    private templateContractService: TemplateContractService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.templateContractService.getTemplateContractInRedis('', 1).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  // doUpdate(contract) {
  //   const dialogRef = this.dialog.open(UpdateTemplateContractComponent, {
  //     data: {data: contract[0]},
  //     width: '90%',
  //     height: '480px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  //   this.getPageSymbol(0);
  // }
  //
  // doCreate() {
  //   const dialogRef = this.dialog.open(CreateTemplateContractComponent, {
  //     data: {data: ''},
  //     width: '90%',
  //     height: '480px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  //   this.getPageSymbol(0);
  // }


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
      this.dialogService.error({'title': 'Thông báo', 'message': 'Vui lòng chọn ít nhất một bản ghi để thực hiện tác vụ'}, () => {
      });
      return;
    }
    if (this.action === null || this.action === undefined) {
      this.dialogService.error({'title': 'Thông báo', 'message': 'Vui lòng chọn tác vụ'}, () => {
      });
      return;
    }

    if (this.action === '1') {
      this.templateContractService.updateOrCreateTemplateContract(templateContract).subscribe(data => {
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

    if (this.action === '2') {
      this.templateContractService.deleteTemplateContract(templateContract).subscribe(data => {
        if (data.errorCode === '1') {
          this.dialogService.success({'title': 'Thông báo', 'message': 'Đã xóa thành công'}, () => {
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
  }

  doApproval(contract) {
    const template = [];
    template.push(contract);
    this.templateContractService.updateOrCreateTemplateContract(template).subscribe(data => {
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

  doDelete(code) {
    this.lstTemplate.push(code);
    this.templateContractService.deleteTemplateContract( this.lstTemplate).subscribe(data => {
      if (data.errorCode === '1') {
        this.dialogService.success({'title': 'Thông báo', 'message': 'Đã xóa thành công'}, () => {
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

}
