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
import {TemplateContractDetailComponent} from './template-contract-detail/template-contract-detail.component';

@Component({
  selector: 'app-template-contract',
  templateUrl: './template-contract.component.html',
  styleUrls: ['./template-contract.component.scss']
})
export class TemplateContractComponent implements OnInit {
  page: number ;
  templateContracts: ITemplateContract[] = [];
  contentSearch: any;

  constructor(
    private templateContractService: TemplateContractService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getTemplateManagement();
  }

  getPageSymbol(current: number) {
    if (current === null) {
      current = 0;
    }
    this.page = current;
    this.templateContractService.getTemplateContract('', 1, current > 0 ? current - 1 : 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  getTemplateManagement() {
    this.templateContractService.getTemplateContract('', 1, 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  doUpdate(contract) {
    const dialogRef = this.dialog.open(UpdateTemplateContractComponent, {
      data: {data:  contract[0]},
      width: '60%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  doCreate() {
    const dialogRef = this.dialog.open(CreateTemplateContractComponent, {
      data: {data:  ''},
      width: '60%',
      height: '480px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  doSearch() {
    this.templateContractService.getTemplateContract(this.contentSearch.trim(), 1, 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

  clear() {
    this.contentSearch = '';
  }

  doShowDetail(contract) {
    const dialogRef = this.dialog.open(TemplateContractDetailComponent, {
      data: {data:  contract[0]},
      width: '50%',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}

