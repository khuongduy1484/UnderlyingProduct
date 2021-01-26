import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';

import {DialogConfirmComponent} from './dialog-confirm/dialog-confirm.component';
import {DialogErrorComponent} from './dialog-error/dialog-error.component';
import {DialogSuccesComponent} from './dialog-succes/dialog-succes.component';
import {IConfirmModel, IErrorModel} from './dialog.model';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  error(data: IErrorModel, callback?: (result: boolean) => void) {
    const dialogRef = this.dialog.open(DialogErrorComponent, { data });
    if (callback) {
      dialogRef.afterClosed().subscribe(callback);
    }
  }

  confirm(data: IConfirmModel, callback: (result: boolean) => void) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data });
    dialogRef.afterClosed().subscribe(callback);
  }

  success(data: IConfirmModel, callback?: (result: boolean) => void) {
    const dialogRef = this.dialog.open(DialogSuccesComponent, {data});
    if (callback) {
      dialogRef.afterClosed().subscribe(callback);
    }
  }
}
