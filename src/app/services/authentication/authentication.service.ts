import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Authenticated } from 'src/app/model/authenticated';
import { environment } from 'src/environments/environment';
import { authenticated } from '../../mock/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  token = null;

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private http: HttpClient,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('TOKEN').then((response) => {
      if (response) {
        this.authState.next(true);
        this.token = response.apiToken;
      }
    });
  }

  login(user): Promise<any> {
    return this.http.post(`${environment.BASE_URL}/login`, user).toPromise();
  }

  setTokenStorage(token) {
    this.storage.set('TOKEN', token).then((response) => {
      this.router.navigate(['home']);
      this.authState.next(true);
      this.token = response.apiToken;
    });
  }

  logout() {
    this.storage.remove('TOKEN').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
      this.token = null;
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  getToken() {
    return this.token;
  }
}
