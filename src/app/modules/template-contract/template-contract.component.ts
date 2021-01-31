import {Component, OnInit} from '@angular/core';
import {TemplateManagementService} from '../../service/templateManagement/template-management.service';
import {ITemplateContract} from '../../model/models';
import {TemplateContractService} from './service/templateContract.service';
import {combineLatest, Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {AutomationComponent} from '../automation/automation.component';
import {MatDialog} from '@angular/material';
import {UpdateTemplateContractComponent} from './update-template-contract/update-template-contract.component';
import {CreateTemplateContractComponent} from './create-template-contract/create-template-contract.component';

@Component({
  selector: 'app-template-contract',
  templateUrl: './template-contract.component.html',
  styleUrls: ['./template-contract.component.scss']
})
export class TemplateContractComponent implements OnInit {
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

  getTemplateManagement() {
    this.templateContractService.getTemplateContract().subscribe(data => {
      if (data) {
        this.templateContracts = data;
      }
    });
  }

  doUpdate(contract) {
    const dialogRef = this.dialog.open(UpdateTemplateContractComponent, {
      data: {data:  contract[0]},
      width: '90%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  doCreate() {
    const dialogRef = this.dialog.open(CreateTemplateContractComponent, {
      data: {data:  ''},
      width: '90%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

