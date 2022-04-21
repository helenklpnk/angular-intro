import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login = '';
  passwd = '';
  msg = '';
  res: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  logon() {
    console.log(this.login + ' ' + this.passwd);
    this.res = this.transactionService.checkForAccount(this.login, this.passwd);
    if (this.res)
	    this.router.navigate(['/' + this.login]);
    else
	    this.msg = 'Неверный логин или пароль';
  }

  openAccount() {
    this.router.navigate(['/open']);
  }
}
