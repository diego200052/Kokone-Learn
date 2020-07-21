import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL:string = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /* Registro de usuario */
  signUp(user){
    return this.http.post<any>(this.URL+'/signup', user);
  }

  /* Iniciar sesión */
  signIn(user){
    return this.http.post<any>(this.URL+'/signin', user)
  }

  /* ¿está logeado? */
  loggedIn(){
    return !!localStorage.getItem('token') //Si existe retorna true, si no false
  }

  /* Obtener el token del usuario almacenado en su navegador */
  getToken(){
    return localStorage.getItem('token')
  }

  /* Cerrar sesión */
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
