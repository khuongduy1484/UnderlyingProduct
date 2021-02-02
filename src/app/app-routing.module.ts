import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {BoardUserComponent} from './modules/board-user/board-user.component';
import {BoardModeratorComponent} from './modules/board-moderator/board-moderator.component';
import {BoardAdminComponent} from './modules/board-admin/board-admin.component';
import {OriginalBondsComponent} from './modules/original-bonds/original-bonds.component';
import {ContractParametersComponent} from './modules/contract-parameters/contract-parameters.component';
import {TemplateContractComponent} from './modules/template-contract/template-contract.component';
import {ListWaitingForApprovaComponent} from './modules/template-contract/list-waiting-for-approva/list-waiting-for-approva.component';
import {GroupContractComponent} from './modules/group-contract/group-contract.component';
import {GroupContractWaitingApproveComponent} from './modules/group-contract-waiting-approve/group-contract-waiting-approve.component';

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
      breadcrumb: 'HOME'
    },
    children: [
      {
        path: 'template-contract',
        data: {
          breadcrumb: 'TEMPLATE CONTRACT'
        },
        component: TemplateContractComponent
      },
      {
        path: 'template-contract-waiting-approva',
        data: {
          breadcrumb: 'TEMPLATE CONTRACT Waiting For Approva'
        },
        component: ListWaitingForApprovaComponent
      },
      {
        path: 'group-contract',
        data: {
          breadcrumb: 'Group contract'
        },
        component: GroupContractComponent
      },
      {
        path: 'group-contract-waiting-apporve',
        data: {
          breadcrumb: 'Group contract'
        },
        component: GroupContractWaitingApproveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
