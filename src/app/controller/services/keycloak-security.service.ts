import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  private _kc;
  constructor() { }

  init() {
    return new Promise((resolve, reject) => {
      console.log('Security intialisations...');
      const kcCredentials = {
        url: 'http://localhost:8080/auth',
        realm: 'ecom-realm',
        clientId: 'ecom-front',
      };
      this._kc = new Keycloak(kcCredentials);
      this._kc.init({ onLoad: 'check-sso', promiseType: 'native' }).then((authenticated) => {
        console.log(authenticated);
        resolve({ auth: authenticated, token: this.kc.token });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  get kc() { return this._kc; }

  isManager() {
    return this.kc.hasRealmRole('app-manager');
  }
}
