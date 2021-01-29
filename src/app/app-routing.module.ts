import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {OriginalBondsComponent} from './original-bonds/original-bonds.component';
import {AppComponent} from './app.component';
import {ContractParametersComponent} from './contract-parameters/contract-parameters.component';

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
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './app.module#AppModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
