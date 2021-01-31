import {Component, OnInit} from '@angular/core';
import {UpdateTemplateContractComponent} from '../update-template-contract/update-template-contract.component';
import {CreateTemplateContractComponent} from '../create-template-contract/create-template-contract.component';
import {TemplateContractService} from '../service/templateContract.service';
import {MatDialog} from '@angular/material';
import {ITemplateContract} from '../../../model/models';

@Component({
  selector: 'app-list-waiting-for-approva',
  templateUrl: './list-waiting-for-approva.component.html',
  styleUrls: ['./list-waiting-for-approva.component.scss']
})
export class ListWaitingForApprovaComponent implements OnInit {
  page: 0;
  templateContracts: ITemplateContract[] = [];

  constructor(
    private templateContractService: TemplateContractService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getTemplateManagement();
  }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  doUpdate(contract) {
    const dialogRef = this.dialog.open(UpdateTemplateContractComponent, {
      data: {data: contract[0]},
      width: '90%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  doCreate() {
    const dialogRef = this.dialog.open(CreateTemplateContractComponent, {
      data: {data: ''},
      width: '90%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getTemplateManagement() {
    this.templateContractService.getTemplateContract().subscribe(data => {
      if (data) {
        this.templateContracts = data;
      }
    });
  }

}
