import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  /* Obtener todos los cursos asociados a un profesor */
  getCursos(){
    return this.http.get<any>(this.URL+ '/cursos', {
      params: {
        token : this.getToken()
      }
    });
  }

  /* Crear un nuevo curso asociado a un profesor */
  crearCurso(curso){
    return this.http.post<any>(this.URL+ '/addCurso', {
      nombreCurso: curso.nombreCurso,
      nivel: curso.nivel,
      escuela: curso.escuela,
      descripcion: curso.descripcion,
      password: curso.password,
      token: this.getToken()
    });
  }

  /* Obtener el token del usuario almacenado en su navegador */
  getToken():string{
    return localStorage.getItem('token')
  }

  /* Pruebas */
  getTasks(){
    return this.http.get<any>(this.URL+ '/task');
  }

  getPrivateTasks(){
    return this.http.get<any>(this.URL+ '/private-task');
  }
}
