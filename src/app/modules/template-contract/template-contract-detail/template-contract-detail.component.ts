import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {TemplateContractService} from '../service/templateContract.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-template-contract-detail',
  templateUrl: './template-contract-detail.component.html',
  styleUrls: ['./template-contract-detail.component.scss']
})
export class TemplateContractDetailComponent implements OnInit {
  templateContract: ITemplateContract;

  constructor(
    public dialogRef: MatDialogRef<TemplateContractDetailComponent>,
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

}
