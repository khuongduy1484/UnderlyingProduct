import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-succes',
  templateUrl: './dialog-succes.component.html',
  styleUrls: ['./dialog-succes.component.scss']
})
export class DialogSuccesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSuccesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close(false);
  }

}
