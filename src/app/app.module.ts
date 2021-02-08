import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {HomeComponent} from './modules/home/home.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './modules/_helpers/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import {OriginalBondsComponent} from './modules/original-bonds/original-bonds.component';
import {AutomationComponent} from './modules/automation/automation.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './modules/layout/layout.component';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {MaterialModule} from './modules/material/material.module';
import {ContractParametersComponent} from './modules/product/contract-parameters/contract-parameters.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppLoadingComponent} from './shared/app-loading/app-loading.component';
import {BreadcrumbComponent} from './modules/breadcrumb/breadcrumb.component';
import {RequestInterceptor} from './service/authentication/request.interceptor';
import {LocalStorageService} from './service/utils/local-storage.service';
import {ToastrModule} from 'ngx-toastr';
import {TemplateContractComponent} from './modules/product/template-contract/template-contract.component';
import {ProductComponent} from './modules/product/product.component';
import {ListWaitingForApprovaComponent} from './modules/product/list-waiting-for-approva/list-waiting-for-approva.component';
import {GroupContractComponent} from './modules/product/group-contract/group-contract.component';
// tslint:disable-next-line:max-line-length
import {GroupSystemComponent} from './modules/system/group-system/group-system.component';
import {PropVariableComponent} from './modules/product/prop-variable/prop-variable.component';
import {NgxPaginationModule} from 'ngx-pagination';
// tslint:disable-next-line:max-line-length
import {GroupContractWaitingApproveComponent} from './modules/product/group-contract-waiting-approve/group-contract-waiting-approve.component';
import {SystemComponent} from './modules/system/system/system.component';
import {ProductAttributesComponent} from './modules/product/product-attributes/product-attributes.component';
import {PendingRulesComponent} from './modules/product/product-attributes/pending-rules/pending-rules.component';
import {ApprovedRulesComponent} from './modules/product/product-attributes/approved-rules/approved-rules.component';
import {ProductContractComponent} from './modules/product/product-contract/product-contract.component';
import {ProductContractApprovalPendingComponent} from './modules/product/product-contract-approval-pending/product-contract-approval-pending.component';
import {IssuersComponent} from './modules/infomation/issuers/issuers.component';
import {InformationComponent} from './modules/infomation/information.component';
import {PrimaryProductsComponent} from './modules/product/primary-products/primary-products.component';
import {PrimaryProductAprrovalPendingComponent} from './modules/product/primary-product-aprroval-pending/primary-product-aprroval-pending.component';
import {PoliciesProductsComponent} from './modules/product/policies-products/policies-products.component';
import {CustomerComponent} from './modules/infomation/customer/customer.component';
import { FinancialProductsComponent } from './modules/product/financial-products/financial-products.component';
import { ApplyAttributesComponent } from './modules/product/apply-attributes/apply-attributes.component';
import { PoliciesProductPendingApprovalComponent } from './modules/product/policies-product-pending-approval/policies-product-pending-approval.component';
import { FinancialProductPendingApprovalComponent } from './modules/product/financial-product-pending-approval/financial-product-pending-approval.component';
import { ProVariableApprovalComponent } from './modules/product/prop-variable/pro-variable-approval/pro-variable-approval.component';
import {ListFormNotificaionComponent} from './modules/product/list-form-notificaion/list-form-notificaion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    OriginalBondsComponent,
    AutomationComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    ContractParametersComponent,
    AppLoadingComponent,
    BreadcrumbComponent,
    TemplateContractComponent,
    ListWaitingForApprovaComponent,
    ProductComponent,
    GroupContractComponent,
    GroupContractWaitingApproveComponent,
    GroupSystemComponent,
    PropVariableComponent,
    SystemComponent,
    ProductAttributesComponent,
    PendingRulesComponent,
    ApprovedRulesComponent,
    ProductContractComponent,
    ProductContractApprovalPendingComponent,
    IssuersComponent,
    InformationComponent,
    PrimaryProductsComponent,
    PrimaryProductAprrovalPendingComponent,
    PoliciesProductsComponent,
    CustomerComponent,
    FinancialProductsComponent,
    ContractParametersComponent,
    ApplyAttributesComponent,
    PoliciesProductPendingApprovalComponent,
    FinancialProductPendingApprovalComponent,
    ProVariableApprovalComponent,
    ListFormNotificaionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
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
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSelectModule,
    MatRadioModule


  ],
  entryComponents: [AutomationComponent],
  exports: [MatDialogModule, MatIconModule, MatTabsModule, MatSidenavModule],
  providers: [authInterceptorProviders, {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
