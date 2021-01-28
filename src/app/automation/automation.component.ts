import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent implements OnInit {
  myDate: any;
  checkLocationSticker: number;
  type: string[] = ['0', '1'];
  constructor(
    public dialogRef: MatDialogRef<AutomationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.disableClose = true;
    dialogRef.backdropClick().subscribe(_ => {
      dialogRef.close();
    });
  }
  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }
}
