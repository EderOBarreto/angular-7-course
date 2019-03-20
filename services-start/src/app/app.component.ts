import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
// don't forget to import the service class too.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // to import add the service class in providers
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  // For the injection to work you just need to add the
  // service class in the constructor.
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
