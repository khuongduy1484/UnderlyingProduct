import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {TemplateContractService} from '../service/templateContract.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogService} from '../../../dialogs';

@Component({
  selector: 'app-create-template-contract',
  templateUrl: './create-template-contract.component.html',
  styleUrls: ['./create-template-contract.component.scss']
})
export class CreateTemplateContractComponent implements OnInit {
  templateContract =  {
   content :  '',
   name :  '',
  code : '',
   description :  '',
  };

  isLoadingSave = false;

  constructor(
    private templateContractService: TemplateContractService,
    public dialogRef: MatDialogRef<CreateTemplateContractComponent>,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.disableClose = true;
    dialogRef.backdropClick().subscribe(_ => {
      dialogRef.close();
    });
  }

  ngOnInit() {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  doCreate() {
    this.isLoadingSave =  true;
    console.log(this.templateContract);
    this.templateContractService.createTemplateContract(this.templateContract).subscribe(data => {
      this.isLoadingSave =  false;
      this.dialogRef.close();
      if (data.errorCode === '1') {
        this.dialogService.success({'title': 'Thông báo', 'message': 'Đã gửi phê duyệt thành công'}, () => {});
      } else {
        this.dialogService.error({'title': 'Thông báo', 'message': data.description}, () => {});
      }
    }, error => {
      this.isLoadingSave =  false;
      console.log(error);
      this.dialogService.error({'title': 'Thông báo', 'message': 'Có lỗi xảy ra vui lòng thử lại'}, () => {
      });
    });
  }

  clear () {
    this.templateContract.description = '';
    this.templateContract.code = '';
    this.templateContract.name = '';
    this.templateContract.content = '';
  }

}
