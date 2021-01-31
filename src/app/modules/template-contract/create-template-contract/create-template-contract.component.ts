import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ITemplateContract} from '../../../model/models';
import {TemplateContractService} from '../service/templateContract.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
    this.templateContractService.createTemplateContract(this.templateContract).subscribe(data => {
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
