import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MaterialModule} from '../material/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AutomationComponent} from '../automation/automation.component';
import {ToastrModule} from 'ngx-toastr';
import {EditorModule} from 'primeng/editor';
import {ProductComponent} from './product.component';
import {TemplateContractRoutingModule} from './template-contract/template-contract-routing.module';
import { GroupContractComponent } from './group-contract/group-contract.component';
import {GroupContractWaitingApproveComponent} from './group-contract-waiting-approve/group-contract-waiting-approve.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NgbModule,
    EditorModule,
    ToastrModule.forRoot(),
    TemplateContractRoutingModule
  ],
  entryComponents: [AutomationComponent],
  exports: [MatDialogModule, MatIconModule, MatTabsModule, MatSidenavModule, GroupContractComponent, GroupContractWaitingApproveComponent],
  providers: [],
})
export class ProductModule {
}