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
  templateContract: ITemplateContract;
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
    this.templateContract =  this.data.data;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  doCreate() {
    this.isLoadingSave =  true;
    this.templateContractService.createTemplateContract(this.templateContract).subscribe(data => {
      this.isLoadingSave =  false;
      this.dialogRef.close();
      this.dialogService.success({'title': 'Thông báo', 'message': 'Đã gửi phê duyệt thành công'}, () => {
      });
    }, error => {
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
