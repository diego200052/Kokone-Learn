import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from '../models/profesor.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup-prof',
  templateUrl: './signup-prof.component.html',
  styleUrls: ['./signup-prof.component.css']
})
export class SignupProfComponent implements OnInit {

  //Alumnos registrados
  profesores: Profesor[];
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    //Se inicializa el arreglo
    this.profesores = [];
   }

  ngOnInit(): void {
  }
  
  guardar ( n:string, apPaterno: string, apMaterno: string, username: string,
          correo: string, password:string) {

        //Agregamos al profesor
        this.profesores.push(new Profesor(n, apPaterno, apMaterno, username, correo, password));
        console.log(this.profesores);

        this.authService.signUpProfesor(this.profesores[0])
        .subscribe(
          res =>{
            console.log(res)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/profesor']);
          },
          err => console.log(err)
        )

        //Para no recargar la pagina y no perder los valores
        //return false;
        /* Los valores ahora se guardan en la base de datos, son envíados al Backend */
    }

}

