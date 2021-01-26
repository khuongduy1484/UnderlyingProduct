import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { DialogSuccesComponent } from './dialog-succes/dialog-succes.component';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogErrorComponent,
    DialogConfirmComponent,
    DialogSuccesComponent,
  ],
  entryComponents: [
    DialogErrorComponent,
    DialogConfirmComponent,
    DialogSuccesComponent,
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
