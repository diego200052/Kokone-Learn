import { Component, OnInit ,  ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
//Importamos la clase alumno para poder guardar
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-signup-alu',
  templateUrl: './signup-alu.component.html',
  styleUrls: ['./signup-alu.component.css']
})
export class SignupAluComponent implements OnInit {

  //Alumnos registrados
  alumnos: Alumno[];

  constructor() {
    //Se inicializa el arreglo
    this.alumnos = [];
   }

  ngOnInit(): void {
  }

    
    @ViewChild('alert', { static: true }) alert: ElementRef;

    closeAlert() {
      this.alert.nativeElement.classList.remove('show');
    }

  guardar ( n:string, apPaterno: string, apMaterno: string, username: string,
           contr:string, escuela: string,correo: string): boolean{

        //Agregamos al alumno
        this.alumnos.push(new Alumno(n, apPaterno, apMaterno, username,
          contr, escuela, correo));
        console.log(this.alumnos);

          //Para no recargar la pagina y no perder los valores
          return false;
    }

}
