import { Component, OnInit } from '@angular/core';
import { Profesor } from '../models/profesor.model';

@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {

  
  //Alumnos registrados
  profesores: Profesor[];
  constructor() {
    //Se inicializa el arreglo
    this.profesores = [];
   }

  ngOnInit(): void {
  }


  guardar ( n:string, apPaterno: string, apMaterno: string, username: string,
           contr:string, correo: string): boolean{

        //Agregamos al alumno
        this.profesores.push(new Profesor(n, apPaterno, apMaterno, username,
          contr, correo));
        console.log(this.profesores);

          //Para no recargar la pagina y no perder los valores
          return false;
    }

}

