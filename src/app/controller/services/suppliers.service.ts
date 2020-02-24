import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient, private kcSecurityService: KeycloakSecurityService) { }

  public getSuppliers(){
    return this.http.get('http://localhost:8083/suppliers');
  }
}
