// import {NgModule} from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
// import {OriginalBondsComponent} from '../original-bonds/original-bonds.component';
// import {ContractParametersComponent} from './contract-parameters/contract-parameters.component';
// // import {ListWaitingForApprovaComponent} from './list-waiting-for-approva/list-waiting-for-approva.component';
// import {ProductComponent} from './product.component';
// import {TemplateContractComponent} from './template-contract/template-contract.component';
// import {GroupContractComponent} from './group-contract/group-contract.component';
// import {GroupContractWaitingApproveComponent} from './group-contract-waiting-approve/group-contract-waiting-approve.component';
// import {GroupSystemComponent} from '../system/group-system/group-system.component';
// import {PropVariableComponent} from './prop-variable/prop-variable.component';
//
// const routes: Routes = [
//   {path: 'original', component: OriginalBondsComponent},
//   {path: 'contract-parameter', component: ContractParametersComponent},
//   // {path: 'template-contract-waiting-approval', component: ListWaitingForApprovaComponent},
//   {
//     path: '',
//     component: ProductComponent,
//     data: {
//       breadcrumb: 'Sản phẩm'
//     },
//     children: [
//       {
//         path: 'template-contract',
//         data: {
//           breadcrumb: 'Hợp đồng mẫu'
//         },
//         component: TemplateContractComponent
//       },
//       {
//         path: 'group-contract',
//         data: {
//           breadcrumb: 'GROUP CONTRACT'
//         },
//         component: GroupContractComponent
//       }
//       // {
//       //   path: 'group-contract',
//       //   data: {
//       //     breadcrumb: 'GROUP CONTRACT '
//       //   },
//       //   component: GroupContractComponent
//       // },
//       // {
//       //   path: 'group-contract-waiting-approval',
//       //   data: {
//       //     breadcrumb: 'GROUP CONTRACT WAITING APPROVAL'
//       //   },
//       //   component: GroupContractWaitingApproveComponent
//       // },
//       // {
//       //   path: 'contract-param',
//       //   data: {
//       //     breadcrumb: 'CONTRACT PARAM'
//       //   },
//       //   component: ContractParametersComponent
//       // },
//       // {
//       //   path: 'system-param',
//       //   data: {
//       //     breadcrumb: 'SYSTEM PARAM'
//       //   },
//       //   component: GroupSystemComponent
//       // },
//       // {
//       //   path: 'prop-variable',
//       //   data: {
//       //     breadcrumb: 'Thuộc tính'
//       //   },
//       //   component: PropVariableComponent
//       // }
//
//     ]
//   }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class ProductRoutingModule {
// }
