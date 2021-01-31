import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TemplateContractService} from '../service/templateContract.service';

@Component({
  selector: 'app-update-template-contract',
  templateUrl: './update-template-contract.component.html',
  styleUrls: ['./update-template-contract.component.scss']
})
export class UpdateTemplateContractComponent implements OnInit {
  templateContract: ITemplateContract;
  isLoadingSave = false;

  constructor(
    private templateContractService: TemplateContractService,
    public dialogRef: MatDialogRef<UpdateTemplateContractComponent>,
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

  update() {
    this.isLoadingSave =  true;
    this.templateContractService.updateTemplateContract(this.templateContract).subscribe(data => {
      this.isLoadingSave =  false;
    });
  }

  clear () {
    this.templateContract.description = '';
    this.templateContract.code = '';
    this.templateContract.name = '';
    this.templateContract.content = '';
  }
}
