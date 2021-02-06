import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {OriginalBondsComponent} from './modules/original-bonds/original-bonds.component';
import {ContractParametersComponent} from './modules/product/contract-parameters/contract-parameters.component';
import {TemplateContractComponent} from './modules/product/template-contract/template-contract.component';
import {ListWaitingForApprovaComponent} from './modules/product/list-waiting-for-approva/list-waiting-for-approva.component';
import {GroupContractComponent} from './modules/product/group-contract/group-contract.component';
// tslint:disable-next-line:max-line-length
import {GroupContractWaitingApproveComponent} from './modules/product/group-contract-waiting-approve/group-contract-waiting-approve.component';
import {GroupSystemComponent} from './modules/system/group-system/group-system.component';
import {PropVariableComponent} from './modules/product/prop-variable/prop-variable.component';
import {ProductComponent} from './modules/product/product.component';
import {SystemComponent} from './modules/system/system/system.component';
import {ProductAttributesComponent} from './modules/product/product-attributes/product-attributes.component';
import {PendingRulesComponent} from './modules/product/product-attributes/pending-rules/pending-rules.component';
import {ApprovedRulesComponent} from './modules/product/product-attributes/approved-rules/approved-rules.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'original', component: OriginalBondsComponent},
  {path: 'contract-parameter', component: ContractParametersComponent},
  {
    path: '',
    component: ProductComponent,
    data: {
      breadcrumb: 'Sản phẩm'
    },
    children: [
      {
        path: 'template-contract',
        data: {
          breadcrumb: 'Hợp đồng và thông báo / Hợp đồng mẫu'
        },
        component: TemplateContractComponent
      },
      {
        path: 'template-contract-waiting-approval',
        data: {
          breadcrumb: 'Hợp đồng và thông báo / Hợp đồng mẫu'
        },
        component: ListWaitingForApprovaComponent
      },
      {
        path: 'group-contract',
        data: {
          breadcrumb: 'Nhóm hợp đồng'
        },
        component: GroupContractComponent
      },
      {
        path: 'group-contract-waiting-approval',
        data: {
          breadcrumb: 'Nhóm hợp đồng'
        },
        component: GroupContractWaitingApproveComponent
      },
      {
        path: 'contract-param',
        data: {
          breadcrumb: 'Tham số hợp đồng'
        },
        component: ContractParametersComponent
      },
      {
        path: 'prop-variable',
        data: {
          breadcrumb: 'Thuộc tính'
        },
        component: PropVariableComponent
      },

      {
        path: 'product-attributes-approved-rules',
        data: {
          breadcrumb: 'Thuộc tính Sản phẩm / Quy tắc áp dụng'
        },
        component: ApprovedRulesComponent
      },
      {
        path: 'product-attributes-pending-rules',
        data: {
          breadcrumb: 'Thuộc tính Sản phẩm / Quy tắc áp dụng'
        },
        component: PendingRulesComponent
      }


    ]
  },
  {
    path: '',
    component: SystemComponent,
    data: {
      breadcrumb: 'Hế thống'
    },
    children: [
      {
        path: 'system-param',
        data: {
          breadcrumb: 'Tham số hệ thống'
        },
        component: GroupSystemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
