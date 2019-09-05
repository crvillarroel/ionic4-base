import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private servicesEndpoint = environment.graphql.apiUrl;
  private token: string = null;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(async (user) => {
      //TODO move to this.onAuthStateChanged function
      console.log('AuthInterceptor.contructor.afAuth.auth.onAuthStateChanged', user);
      
      if (user) {       
        user.getIdToken(true).then((token) => {
          console.log('AuthInterceptor.contructor.afAuth.auth.onAuthStateChanged.user.getIdToken');

          this.token = token;
        });
      } else {
        this.token = null;
      }
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) &&
        !request.url.startsWith(this.servicesEndpoint))) {
      return next.handle(request);
    }

    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.token
        }
      });
    }
    return next.handle(request);
  }
}
