import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  endpointUrl = 'http://localhost:48888/endpoint2';

  account: Account = {
    login: '',
    password: '',
    first_name: '',
    last_name: '',
    city: '',
    balance: 0.0
  };

  flag: boolean = false;
  newBalance: number = -1;

  constructor(private http: HttpClient) { }

  checkForAccount(login: string, password: string): boolean {
    this.http.post<any>(
      `${this.endpointUrl}`,
      {login, password},
      httpOptions).subscribe(
        (result) => {
          console.log(Boolean(result.key) + " " + result.key);
          this.flag = Boolean(result.key);
        }
    );
    return this.flag;
  }

  showBalance(login: string): number {
    this.http.post<any>(
      `${this.endpointUrl}`,
      {login,
      'command': 'balance'},
      httpOptions).subscribe(
        (result) => {
          this.newBalance = Number(result.key);
        }
    );
    return this.newBalance;
  }

  deposit(login: string, debit: number) {
    this.http.post<any>(
      `${this.endpointUrl}`,
      {login, debit},
      httpOptions
    ).subscribe(
      (result) => {
        this.newBalance = Number(result.key);
      }
    )
    return this.newBalance;
  }

  withdraw(login: string, credit: number) {
    this.http.post<any>(
      `${this.endpointUrl}`,
      {login, credit},
      httpOptions
    ).subscribe(
      (result) => {
        this.newBalance = Number(result.key);
      }
    )
    return this.newBalance;
  }

  getAccount(login: string): Account {
    this.http.get<Account[]>(
      `${this.endpointUrl}`
    ).subscribe(
      (result) => {
        result.forEach(account => {
          if (account.login == login)
            this.account = account;
        })
      }
    )
    return this.account;
  }

  postAccount(newAccount: Account): boolean {
    this.http.post<any>(
      `${this.endpointUrl}`,
      newAccount,
      httpOptions
    ).subscribe(
      (result) => {
        console.log(Boolean(result.key) + " " + result.key);
        this.flag = Boolean(result.key);
      }
    );
    return this.flag;
  }

  deleteAccount(login: string): boolean {
    this.http.post<any>(
      `${this.endpointUrl}`,
      {login,
      'command':'delete'},
      httpOptions
    ).subscribe(
      (result) => {
        console.log(Boolean(result.key) + " " + result.key);
        this.flag = Boolean(result.key);
      }
    );
    return this.flag;
  }
}
