import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  // The account fields for the signup form
  account: {
    login: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    langKey: string;
  } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'en'
  };

  private loading: HTMLIonLoadingElement;

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth
  ) {
    console.log('SignupPage.constructor');

    this.loadingCtrl.create({ message: 'Please wait...' }).then((loading) => {
      this.loading = loading;
    }).catch((error) => {
      console.log('SignupPage.constructor.loadingCtrl.create error', error);
    });

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe(values => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.signupSuccessString = values.SIGNUP_SUCCESS;
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
    });
  }

  ngOnInit() {}

  signUpWithEmail() {
    console.log('SignupPage.signUpWithEmail');

    // set login to same as email
    this.account.login = this.account.email;

    this.loading.present();
    this.afAuth.auth.createUserWithEmailAndPassword(this.account.login, this.account.password)
      .then(async (result) => {
        console.log('SignupPage.signUpWithEmail result', result);

        await this.loading.dismiss();
        await this.toastCtrl.create({ message: this.signupSuccessString, duration: 3000, position: 'top'}).then(async (toast) => await toast.present());
        this.navCtrl.navigateRoot('/tabs');
      }).catch(async (error) => {
        console.log('SignupPage.signUpWithEmail error', error);

        await this.loading.dismiss();
        this.toastCtrl.create({ message: 'Unable to sign in', cssClass: "error", showCloseButton: true }).then(async (toast) => await toast.present());
      });
  }
}
