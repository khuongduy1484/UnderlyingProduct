import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AutomationComponent} from '../automation/automation.component';
import {DialogService} from '../dialogs';

@Component({
  selector: 'app-original-bonds',
  templateUrl: './original-bonds.component.html',
  styleUrls: ['./original-bonds.component.scss']
})
export class OriginalBondsComponent implements OnInit {
  myDate: any;
  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit() {
  }


  openDialog() {
    const dialogRef = this.dialog.open(AutomationComponent, {
      data: {url: '', conversationId: '', idMessage: ''},
      width: '680px',
      height: '580px',
      backdropClass: 'red'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
