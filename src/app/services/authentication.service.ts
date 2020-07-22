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

  /* Registro de un profesor */
  signUpProfesor(user){
    return this.http.post<any>(this.URL+'/signupProfesor', user);
  }

  /* Registro de un alumno */
  signUpAlumno(user){
    return this.http.post<any>(this.URL+'/signupAlumno', user);
  }

  /* Iniciar sesión */
  signIn(user){
    return this.http.post<any>(this.URL+'/signin', user)
  }

  /* ¿está logeado? */
  loggedIn(){
    return !!localStorage.getItem('token') //Si existe retorna true, si no false
  }

  isProfesor(){
    return this.http.post<any>(this.URL+'/isProfesor', {token:this.getToken()})
  }

  isAlumno(){
    return this.http.post<any>(this.URL+'/isAlumno', {token:this.getToken()})
  }

  /* Obtener el token del usuario almacenado en su navegador */
  getToken():string{
    return localStorage.getItem('token')
  }

  /* Cerrar sesión */
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
