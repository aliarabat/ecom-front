import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { KeycloakSecurityService } from './controller/services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecom App';

  constructor(public kcSecurityService: KeycloakSecurityService) {
  }

  ngOnInit() {
  }

  logout() {
    this.kcSecurityService.kc.logout();
  }

  login() {
    this.kcSecurityService.kc.login();
  }

  changePassword() {
    this.kcSecurityService.kc.accountManagement();
  }

  isAppManager() {
    return this.kcSecurityService.isManager();
  }
}
