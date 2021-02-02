import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TemplateContractService} from '../service/templateContract.service';
import {DialogService} from '../../../dialogs';

@Component({
  selector: 'app-update-template-contract',
  templateUrl: './update-template-contract.component.html',
  styleUrls: ['./update-template-contract.component.scss']
})
export class UpdateTemplateContractComponent implements OnInit {
  templateContract: ITemplateContract;
  isLoadingSave = false;
  codeContractOld:  string;

  constructor(
    private templateContractService: TemplateContractService,
    public dialogRef: MatDialogRef<UpdateTemplateContractComponent>,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.disableClose = true;
    dialogRef.backdropClick().subscribe(_ => {
      dialogRef.close();
    });
  }

  ngOnInit() {
    this.templateContract = this.data.data;
    this.codeContractOld = this.templateContract.code;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  doUpdate() {
    if (!(this.codeContractOld === this.templateContract.code)) {
      this.dialogService.error({'title': 'Thông báo', 'message': 'Mã hợp đồng không được phép sửa'}, () => {
      });
      return;
    }
    this.isLoadingSave = true;
    this.templateContractService.createTemplateContractWaitingForApproval(this.templateContract).subscribe(data => {
      this.isLoadingSave = false;
      this.dialogRef.close();
      if (data.errorCode === '1') {
        this.dialogService.success({'title': 'Thông báo', 'message': 'Đã cập nhập xong hợp đồng'}, () => {});
      } else {
        this.dialogService.error({'title': 'Thông báo', 'message': data.description}, () => {});
      }
    }, error => {
      this.isLoadingSave = false;
      console.log(error);
      this.dialogService.error({'title': 'Thông báo', 'message': 'Có lỗi xảy ra vui lòng thử lại'}, () => {
      });
    });
  }


  clear() {
    this.templateContract.description = '';
    this.templateContract.code = '';
    this.templateContract.name = '';
    this.templateContract.content = '';
  }
}
