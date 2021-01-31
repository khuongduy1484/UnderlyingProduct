import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {BoardUserComponent} from './modules/board-user/board-user.component';
import {BoardModeratorComponent} from './modules/board-moderator/board-moderator.component';
import {BoardAdminComponent} from './modules/board-admin/board-admin.component';
import {OriginalBondsComponent} from './modules/original-bonds/original-bonds.component';
import {AppComponent} from './app.component';
import {ContractParametersComponent} from './modules/contract-parameters/contract-parameters.component';
import {UpdateContractComponent} from './modules/contract-parameters/update-contract/update-contract.component';
import {TemplateContractComponent} from './modules/template-contract/template-contract.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'original', component: OriginalBondsComponent },
  {path: 'contract-parameter', component: ContractParametersComponent},
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'home'
    },
    children: [
      {
        path: 'template-contract',
        data: {
          breadcrumb: 'template-contract'
        },
        component: TemplateContractComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
