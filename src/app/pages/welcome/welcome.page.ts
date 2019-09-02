import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage implements OnInit {
  public loading: HTMLIonLoadingElement;

  constructor(
    private navCtrl: NavController, 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth
  ) {
    console.log('WelcomePage.constructor');

    this.loadingCtrl.create({ message: 'Please wait...' }).then((loading) => {
      this.loading = loading;
    }).catch((error) => {
      console.log('WelcomePage.constructor.loadingCtrl.create error', error);
    });
  }

  ngOnInit() {}

  signInFacebook() {
    console.log('WelcomePage.signInFacebook');

    this.loading.present();
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(async (result) => {
        console.log('WelcomePage.signInFacebook result', result);

        await this.loading.dismiss();
        this.navCtrl.navigateRoot('/tabs');
      }).catch(async (error) => {
        console.log('WelcomePage.signInFacebook error', error);
        
        await this.loading.dismiss();
        this.toastCtrl.create({ message: 'Unable to sign in with Facebook', cssClass: "error", showCloseButton: true }).then(async (toast) => await toast.present());
      });
  }

  signInGoogle() {
    console.log('WelcomePage.signInGoogle');

    this.loading.present();
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(async (result) => {
        console.log('WelcomePage.signInGoogle result', result);

        await this.loading.dismiss();
        this.navCtrl.navigateRoot('/tabs');
      }).catch(async (error) => {
        console.log('WelcomePage.signInGoogle error', error);

        await this.loading.dismiss();
        this.toastCtrl.create({ message: 'Unable to sign in with Google', cssClass: "error", showCloseButton: true }).then(async (toast) => await toast.present());
      });
  }
}
