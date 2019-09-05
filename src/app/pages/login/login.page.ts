import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  // The account fields for the login form.
  account: { username: string; password: string; rememberMe: boolean } = {
    username: '',
    password: '',
    rememberMe: false
  };

  private loading: HTMLIonLoadingElement;

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public translateService: TranslateService,
    private afAuth: AngularFireAuth
  ) {
    console.log('LoginPage.constructor');

    this.loadingCtrl.create({ message: 'Please wait...' }).then((loading) => {
      this.loading = loading;
    }).catch((error) => {
      console.log('LoginPage.constructor.loadingCtrl.create error', error);
    });
  }

  ngOnInit() {
    this.translateService.get('LOGIN_ERROR').subscribe(value => {
      this.loginErrorString = value;
    });
  }

  doLogin() {
    this.signInWithEmail();
  }

  signInWithEmail() {
    console.log('LoginPage.signInWithEmail');

    this.loading.present();
    this.afAuth.auth.signInWithEmailAndPassword(this.account.username, this.account.password)
      .then(async (result) => {
        console.log('LoginPage.signInWithEmail result', result);

        await this.loading.dismiss();
        this.navCtrl.navigateRoot('/tabs');
      }).catch(async (error) => {
        console.log('LoginPage.signInWithEmail error', error);

        await this.loading.dismiss();
        this.toastCtrl.create({ message: 'Unable to sign in', cssClass: "error", showCloseButton: true }).then(async (toast) => await toast.present());
      });
  }
}
