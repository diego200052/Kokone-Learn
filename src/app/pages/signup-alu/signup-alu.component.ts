import { Component, OnInit ,  ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
//Importamos la clase alumno para poder guardar
import { Alumno } from '../models/alumno.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-alu',
  templateUrl: './signup-alu.component.html',
  styleUrls: ['./signup-alu.component.css']
})
export class SignupAluComponent implements OnInit {

  //Alumnos registrados
  alumnos: Alumno[];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
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
            correo:string, password: string, escuela: string){

        //Agregamos al alumno
        this.alumnos.push(new Alumno(n, apPaterno, apMaterno, username,
          correo, password, escuela));
        console.log(this.alumnos);

        this.authService.signUpAlumno(this.alumnos[0])
        .subscribe(
          res =>{
            console.log(res)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/alumno']);
          },
          err => console.log(err)
        )

        //Para no recargar la pagina y no perder los valores
        //return false;
        /* Los valores ahora se guardan en la base de datos, son envíados al Backend */
    }

}
