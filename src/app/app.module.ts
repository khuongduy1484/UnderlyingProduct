import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders   } from './_helpers/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import { OriginalBondsComponent } from './original-bonds/original-bonds.component';
import { AutomationComponent } from './automation/automation.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatListModule, MatPaginator, MatPaginatorModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from './dialogs';
import { LayoutComponent } from './layout/layout.component';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {MaterialModule} from './material/material.module';
import { ContractParametersComponent } from './contract-parameters/contract-parameters.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateContractComponent } from './contract-parameters/update-contract/update-contract.component';



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
    UpdateContractComponent
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
    NgbModule


  ],
  entryComponents: [AutomationComponent],
  exports: [MatDialogModule, MatIconModule, MatTabsModule, MatSidenavModule],
  providers: [authInterceptorProviders , {provide: APP_BASE_HREF, useValue: '/'},  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
