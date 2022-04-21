import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-close-account',
  templateUrl: './close-account.component.html',
  styleUrls: ['./close-account.component.css']
})
export class CloseAccountComponent implements OnInit {
  login: string = '';
  authLogin: string = '';
  verify: string = '';
  msg: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['login'])).subscribe(val => {
      this.authLogin = val;
    });
  }

  onButtonDelete() {
    if (this.verify == 'закрыть мой счет' && this.authLogin == this.login)
      if (this.transactionService.deleteAccount(this.login))
        this.router.navigate(['auth']);
      else
        this.msg = 'Невозможно закрыть счет';
    else
      this.msg = 'Проверьте корректность введенных данных.'    
  }

}
