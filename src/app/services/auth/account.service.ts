import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Account } from '../../../model/account.model';
import { ApiService } from '../api/api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userIdentity: Account;
  private authenticated = false;
  private authenticationState = new Subject<any>();

  constructor(private sessionStorage: SessionStorageService, private afAuth: AngularFireAuth, private translate: TranslateService) {
    console.log('AccountService.constructor');
  }

  //TODO Use typed Account
  loginWithEmail(account: any, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      //this.authServerProvider.login(credentials).subscribe(
      this.afAuth.auth.signInWithEmailAndPassword(account.username, account.password)
        .then((credential) => {
          console.log('AccountService.loginWithEmail.afAuth.auth.signInWithEmailAndPassword credential', credential);

          this.identity(true).then(account => {
            // After the login the language will be changed to
            // the language selected by the user during his registration
            if (account !== null) {
              this.translate.use(account.langKey);
            }
            resolve(credential);
          });

          //this.updateUser(credential.user);

          return cb();
        }).catch((error) => {
          console.log('AccountService.loginWithEmail.afAuth.auth.signInWithEmailAndPassword error', error);

          this.logout();
          reject(error);

          return cb(error);
        }
      );
    });
  }

  loginWithToken(jwt, rememberMe) {
    //return this.authServerProvider.loginWithToken(jwt, rememberMe);
    return null;
  }

  /**
   * Sign out the current user and clean up the session
   */
  logout() {
    this.afAuth.auth.signOut();
    this.authenticate(null);
  }

  save(account: any): Observable<HttpResponse<any>> {
    //return this.http.post(ApiService.API_URL + '/account', account, { observe: 'response' });
    //TODO implement save user account
    return null;
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[]): Promise<boolean> {
    return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
  }

  hasAnyAuthorityDirect(authorities: string[]): boolean {
    if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this.userIdentity.authorities.includes(authorities[i])) {
        return true;
      }
    }

    return false;
  }

  hasAuthority(authority: string): Promise<boolean> {
    if (!this.authenticated) {
      return Promise.resolve(false);
    }

    return this.identity().then(
      id => {
        return Promise.resolve(id.authorities && id.authorities.includes(authority));
      },
      () => {
        return Promise.resolve(false);
      }
    );
  }

  /**
   * Get the current user identity from local storage
   * 
   * @param force Clean the current user identity
   */
  identity(force?: boolean): Promise<Account> {
    if (force === true) {
      this.userIdentity = undefined;
    }

    // check and see if we have retrieved the userIdentity data from the server.
    // if we have, reuse it by immediately resolving
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }

    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.afAuth.authState.pipe(first())
      .toPromise()
      .then((user) => {
        //TODO Create an account according to the sign in provider
        const account: Account = {
          activated: true,
          authorities: ['USER_ROLE'],
          email: user.email,
          firstName: user.displayName || user.email,
          langKey: 'en',
          lastName: '',
          login: user.email,
          imageUrl: user.photoURL
        };

        if (account) {
          this.userIdentity = account;
          this.authenticated = true;
          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting

          const langKey = this.sessionStorage.retrieve('locale') || this.userIdentity.langKey;
          // this.languageService.changeLanguage(langKey);
        } else {
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch(err => {
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }

  /**
   * The current user is authenticated
   */
  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isIdentityResolved(): boolean {
    return this.userIdentity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): string {
    return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
  }
}
