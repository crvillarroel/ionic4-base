import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/auth/account.service';
import { Account } from 'src/model/account.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  account: Account;

  constructor(public navController: NavController, private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      if (account === null) {
        //TODO If you want the welcome page always, even when the user is not logged in
        //this.goBackToWelcomePage();
      } else {
        this.account = account;
      }
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  logout() {
    this.accountService.logout();
    this.goBackToWelcomePage();
  }

  private goBackToWelcomePage(): void {
    this.navController.navigateBack('/welcome');
  }
}
