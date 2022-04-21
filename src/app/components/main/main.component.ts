import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { map } from 'rxjs';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  login: string = '';
  currentBalance: number = 0.0;

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['login'])).subscribe(val => {
      this.login = val;
    });
    this.currentBalance = this.transactionService.showBalance(this.login);
  }

  toDeposit() {
    this.router.navigate(['deposit'], {relativeTo: this.route});
  }

  toWithdrawal() {
    this.router.navigate(['withdraw'], {relativeTo: this.route});
  }

  toClose() {
    this.router.navigate(['close'], {relativeTo: this.route});
  }
}
