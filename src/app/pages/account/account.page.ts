import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/auth/account.service';
import { Account } from '../../../model/account.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {
  // The account fields for the login form.
  account: Account = {
    login: '',
    email: '',
    firstName: '',
    activated: false,
    langKey: '',
    imageUrl: ''
  };

  constructor(private navCtrl: NavController, private accountService: AccountService) {
    console.log('AccountPage.constructor');
  }

  ngOnInit() {
    this.accountService.identity().then(account => {
      if (account === null) {
        this.navCtrl.navigateBack('');
      } else {
        this.account = account;
      }
    });
  }

}
