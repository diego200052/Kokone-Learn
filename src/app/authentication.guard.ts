import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/* Servicio de autenticación */
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){

  }

  canActivate(): boolean{

    /* Si ya inició sesión lo dejamos acceder al sitio */
    if(this.authService.loggedIn()){
      return true;
    }

    /* Si el usuario no ha iniciado sesión lo mandamos a la página de inicio de sesión */
    this.router.navigate(['/signin'])
    return false;
  }
  
}
