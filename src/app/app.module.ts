import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {HomeComponent} from './modules/home/home.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {BoardAdminComponent} from './modules/board-admin/board-admin.component';
import {BoardModeratorComponent} from './modules/board-moderator/board-moderator.component';
import {BoardUserComponent} from './modules/board-user/board-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
  MatPaginatorModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from './dialogs';
import {LayoutComponent} from './modules/layout/layout.component';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {MaterialModule} from './modules/material/material.module';
import {ContractParametersComponent} from './modules/contract-parameters/contract-parameters.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UpdateContractComponent} from './modules/contract-parameters/update-contract/update-contract.component';
import {TemplateContractComponent} from './modules/template-contract/template-contract.component';
import {UpdateTemplateContractComponent} from './modules/template-contract/update-template-contract/update-template-contract.component';
import {TemplateContractRoutingModule} from './modules/template-contract/products-routing.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import { AppLoadingComponent } from './shared/app-loading/app-loading.component';
import { CreateTemplateContractComponent } from './modules/template-contract/create-template-contract/create-template-contract.component';
import { ListWaitingForApprovaComponent } from './modules/template-contract/list-waiting-for-approva/list-waiting-for-approva.component';
import { BreadcrumbComponent } from './modules/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    OriginalBondsComponent,
    AutomationComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    ContractParametersComponent,
    UpdateContractComponent,
    TemplateContractComponent,
    UpdateTemplateContractComponent,
    AppLoadingComponent,
    CreateTemplateContractComponent,
    ListWaitingForApprovaComponent,
    BreadcrumbComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DialogModule,
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
    TemplateContractRoutingModule,
    EditorModule




  ],
  entryComponents: [AutomationComponent, UpdateTemplateContractComponent, CreateTemplateContractComponent],
  exports: [MatDialogModule, MatIconModule, MatTabsModule, MatSidenavModule],
  providers: [authInterceptorProviders , {provide: APP_BASE_HREF, useValue: '/'},  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
