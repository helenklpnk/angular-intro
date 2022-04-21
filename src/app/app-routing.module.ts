import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CloseAccountComponent } from './components/close-account/close-account.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'open', component: OpenAccountComponent },
  { path: ':login', component: MainComponent },
  { path: ':login/deposit', component: DepositComponent },
  { path: ':login/withdraw', component: WithdrawalComponent },
  { path: ':login/close', component: CloseAccountComponent },
  { path: '**', component: NotFoundComponent },
  { path: ':login/**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
