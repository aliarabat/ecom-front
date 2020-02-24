import { KeycloakSecurityService } from '../controller/services/keycloak-security.service';

export function kcFactory(kcSecurity: KeycloakSecurityService) {
    return () => kcSecurity.init();
}
