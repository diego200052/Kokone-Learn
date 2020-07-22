import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject } from "rxjs";

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

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {

    var subject = new Subject<boolean>();
    const tipoUsuario:string = route.data.role;

    if(tipoUsuario == "profesor")
    {
      this.authService.isProfesor()
          .subscribe(
            res =>{
              console.log(res)
              if(res['status'] == "ok")
                subject.next(true);
              else
              {
                subject.next(false);
                /* Si el usuario no ha iniciado sesión lo mandamos a la página de inicio de sesión */
                this.router.navigate(['/login'])
              }
            },
            err => console.log(err)
          )
    }
    else
    {
      this.authService.isAlumno()
          .subscribe(
            res =>{
              console.log(res)
              if(res['status'] == "ok")
                subject.next(true);
              else
              {
                subject.next(false);
                /* Si el usuario no ha iniciado sesión lo mandamos a la página de inicio de sesión */
                this.router.navigate(['/login'])
              }
            },
            err => console.log(err)
          )
    }
    /* Si ya inició sesión lo dejamos acceder al sitio */
    /* if(this.authService.loggedIn()){
      return true;
    }*/
    return subject.asObservable().pipe();
  }  
}
