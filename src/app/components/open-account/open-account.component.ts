import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  newAccount: Account = {
    login: '',
    password: '',
    first_name: '',
    last_name: '',
    city: '',
    balance: 0.0
  }
  msg = '';

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  openAccount() {
    if (this.transactionService.postAccount(this.newAccount))
      this.router.navigate(['/' + this.newAccount.login]);
    else if (this.newAccount.login == '' || this.newAccount.password == '' || this.newAccount.first_name == '' ||
    this.newAccount.last_name == '' || this.newAccount.city == '')
      this.msg = 'Все поля должны быть заполнены';
    else 
      this.msg = 'Пользователь с таким логином уже существует';
  }
}
