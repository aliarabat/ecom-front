
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { KeycloakSecurityService } from '../controller/services/keycloak-security.service';

@Injectable()
export class AuthorizationHeaderService implements HttpInterceptor {

  constructor(private kcSecurityService: KeycloakSecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (!this.kcSecurityService.kc.authenticated) return next.handle(req);

    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.kcSecurityService.kc.token
      }
    });
    return next.handle(request);
  }
}

