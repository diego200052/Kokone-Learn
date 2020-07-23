import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router'
declare var jQuery: any;

@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css']
})
export class CursosProfesorComponent implements OnInit {

  public cursos = [];
  public curso = {
    nombreCurso: "",
    nivel: "",
    escuela: "",
    descripcion: "",
    password: ""
  }

  constructor(
        private tasksService: TasksService,
        private router: Router
      ) { }

  ngOnInit(): void {

    (function ($) {
        $(document).ready(function(){
          $('.modal').modal();
          $('select').formSelect();
        });
      })(jQuery);

      this.updateCursos();
  }

  updateCursos()
  { 
    /* Obtiene la lista de cursos asociados a la cuenta del profesor */
    this.tasksService.getCursos()
      .subscribe(
        res => {
          console.log(res)
          this.cursos = res['cursos'];
        },
        err => console.log(err)
      );}

  /* Hacer una función para obtener los cursos asociados a este profesor */
  agregarCurso(){
    console.log(this.curso);
    this.tasksService.crearCurso(this.curso)
      .subscribe(
        res =>{
          console.log(res)
          /* Actualiza la cuadrícula de cursos */
          this.updateCursos();
      },
        error => console.log(error))
  }

  ingresarCurso(cursoID){
    console.log("Botón de ingresar al curso seleccionado: " + cursoID);
  }
}
