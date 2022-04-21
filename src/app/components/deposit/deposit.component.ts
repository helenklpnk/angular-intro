import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
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

  onDepositButton() {
    this.balance = this.transactionService.deposit(this.login, this.amount);
    this.msg = 'Операция выполнена успешно. Остаток на балансе: ' + this.balance + 'руб.'; 
  }

  back() {
    this.router.navigate([this.login]);
  }
}
