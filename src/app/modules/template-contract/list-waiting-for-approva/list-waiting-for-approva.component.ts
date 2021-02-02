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
  contentSearch = '';
  action: number;
  actionDefaut = 'Chọn tác vụ';
  templateContract: ITemplateContract;


  constructor(
    private dialogService: DialogService,
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
    this.templateContractService.getTemplateContractInRedis('', 1).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
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
    this.templateContractService.getTemplateContractInRedis('', 0).subscribe(data => {
      if (data) {
        this.templateContracts = data.result;
      }
    });
  }

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
    const arrTemplate = [];

    if (templateContract.length > 0) {
      templateContract.forEach(r => {
        arrTemplate.push(r);
      });
    }
    console.log(templateContract);
    if (templateContract.length <= 0 || templateContract === undefined ) {
      this.dialogService.error({'title': 'Thông báo', 'message': 'Vui lòng chọn ít nhất một bản ghi để thực hiện tác vụ'}, () => {
      });
      return;
    }
    if (this.action === null || this.action === undefined) {
      this.dialogService.error({'title': 'Thông báo', 'message': 'Vui lòng chọn tác vụ'}, () => {
      });
      return;
    }

    // if (this.action === 1) {
    //
    // }
    //
    // if (this.action === 2){
    //
    // }
  }

}
