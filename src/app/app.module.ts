import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { CloseAccountComponent } from './components/close-account/close-account.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    OpenAccountComponent,
    CloseAccountComponent,
    DepositComponent,
    WithdrawalComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
