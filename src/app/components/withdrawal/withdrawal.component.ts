import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {
  login: string = '';
  amount: number = 0.0;
  balance: number = 0.0;
  msg = 'Диагностическое сообщение';

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['login'])).subscribe(val => {
      this.login = val;
    });
  }

  onButtonWithdraw() {
    if ((this.balance = this.transactionService.withdraw(this.login, this.amount)) == -1)
      this.msg = 'Недостаточно средств на счете';
    else 
      this.msg = 'Операция выполнена успешно. Остаток на балансе: ' + this.balance + 'руб.';
  }

  back() {
    this.router.navigate([this.login]);
  }
}
