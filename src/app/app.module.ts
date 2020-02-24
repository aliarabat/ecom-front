import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { KeycloakSecurityService } from './controller/services/keycloak-security.service';
import { kcFactory } from './utils/kcfunc';
import { AuthorizationHeaderService } from './interceptors/authorization-header.service';

const kcSecurityService = new KeycloakSecurityService();
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    { provide: KeycloakSecurityService, useValue: kcSecurityService },
    // { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationHeaderService, multi: true }
  ],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    kcSecurityService.init().then((res) => {
      console.log(res);
      appRef.bootstrap(AppComponent);
    }).catch((error) => {
      console.log('Keycloak error', error);
    });
  }
}
