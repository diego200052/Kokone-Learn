import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.component.html',
  styleUrls: ['./cursos-alumno.component.css']
})
export class CursosAlumnoComponent implements OnInit {
  //Arreglo que contiene todos los cursos a los que esta inscrito el alumno
  cursos: Curso[];

  constructor() {
    //Inicializamos el arreglo
    this.cursos= [];
   }

  ngOnInit(): void {
  }

  //Funciòn para guardar el curso y despuès mostrarlo 
  guardar(nombre:string, clave:string, profesor:string, avance:string, temAct:string):boolean {
    this.cursos.push(new Curso(nombre,clave, profesor, avance, temAct));
    console.log(this.cursos);
    return false;
  }


}
