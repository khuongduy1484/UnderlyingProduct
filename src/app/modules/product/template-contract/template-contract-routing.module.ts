import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateContractComponent} from './template-contract.component';
import {ProductComponent} from '../product.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: ProductComponent,
  //   data: {
  //     breadcrumb: 'PRODUCT'
  //   },
  //   children: [
  //     {
  //       path: 'template-contract',
  //       data: {
  //         breadcrumb: 'TEMPLATE CONTRACT'
  //       },
  //       component: TemplateContractComponent
  //     },
  //     {
  //       path: 'template-contract-waiting-approval',
  //       data: {
  //         breadcrumb: 'TEMPLATE CONTRACT/ WAITING FOR APPROVAL'
  //       },
  //       component: ListWaitingForApprovaComponent
  //     }
  //   ]
  // }


  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'product',
  //       component: ProductComponent,
  //       children: [
  //         {
  //           children: [
  //             {
  //               path: '/template-contract',
  //               component: TemplateContractComponent
  //             },
  //             {
  //               path: '/template-contract-waiting-approva',
  //               component: ListWaitingForApprovaComponent
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TemplateContractRoutingModule {
}
