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
import {PendingRulesComponent} from './modules/product/product-attributes/pending-rules/pending-rules.component';
import {ApprovedRulesComponent} from './modules/product/product-attributes/approved-rules/approved-rules.component';
import {ProductContractComponent} from './modules/product/product-contract/product-contract.component';
import {ProductContractApprovalPendingComponent} from './modules/product/product-contract-approval-pending/product-contract-approval-pending.component';
import {InformationComponent} from './modules/infomation/information.component';
import {IssuersComponent} from './modules/infomation/issuers/issuers.component';
import {PrimaryProductsComponent} from './modules/product/primary-products/primary-products.component';
import {PrimaryProductAprrovalPendingComponent} from './modules/product/primary-product-aprroval-pending/primary-product-aprroval-pending.component';
import {PoliciesProductsComponent} from './modules/product/policies-products/policies-products.component';
import {CustomerComponent} from './modules/infomation/customer/customer.component';
import {FinancialProductsComponent} from './modules/product/financial-products/financial-products.component';
import {ApplyAttributesComponent} from './modules/product/apply-attributes/apply-attributes.component';
import {PoliciesProductPendingApprovalComponent} from './modules/product/policies-product-pending-approval/policies-product-pending-approval.component';
import {FinancialProductPendingApprovalComponent} from './modules/product/financial-product-pending-approval/financial-product-pending-approval.component';
import {ProVariableApprovalComponent} from './modules/product/prop-variable/pro-variable-approval/pro-variable-approval.component';

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
        path: 'product-contract',
        data: {
          breadcrumb: 'Hợp đồng sản phẩm'
        },
        component: ProductContractComponent
      },
      {
        path: 'product-contract-approval-pending',
        data: {
          breadcrumb: 'Hợp đồng sản phẩm'
        },
        component: ProductContractApprovalPendingComponent
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
      },
      {
        path: 'prop-variable-approval',
        data: {
          breadcrumb: 'Thuộc tính Sản phẩm / Quy tắc áp dụng'
        },
        component: ProVariableApprovalComponent
      },
      {
        path: 'policies-product',
        data: {
          breadcrumb: 'Chính sách và sản phẩm'
        },
        component: PoliciesProductsComponent
      },      {
        path: 'policies-product-pending-approval',
        data: {
          breadcrumb: 'Chính sách và sản phẩm'
        },
        component: PoliciesProductPendingApprovalComponent
      },
      {
        path: 'financial-products',
        data: {
          breadcrumb: 'Sản phảm tài chính'
        },
        component: FinancialProductsComponent
      },
      {
        path: 'financial-products-pending-approval',
        data: {
          breadcrumb: 'Sản phảm tài chính'
        },
        component: FinancialProductPendingApprovalComponent
      },
      {
        path: 'apply-attributes',
        data: {
          breadcrumb: 'Thuộc tính sản phẩm / Áp dụng thuộc tính '
        },
        component: ApplyAttributesComponent
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
  },
  {
    path: '',
    component: InformationComponent,
    data: {
      breadcrumb: 'Thông tin'
    },
    children: [
      {
        path: 'info_issuer',
        data: {
          breadcrumb: 'Tổ chức phát hành'
        },
        component: IssuersComponent
      },
      {
        path: 'primary-product',
        data: {
          breadcrumb: 'Sản phảm sơ cấp'
        },
        component: PrimaryProductsComponent
      },
      {
        path: 'primary-product-approval-pending',
        data: {
          breadcrumb: 'Sản phảm sơ cấp'
        },
        component: PrimaryProductAprrovalPendingComponent
      },
      {
        path: 'info-customer',
        data: {
          breadcrumb: 'Khách hàng'
        },
        component: CustomerComponent
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
