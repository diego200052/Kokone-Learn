import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-curso-esp-profesor',
  templateUrl: './curso-esp-profesor.component.html',
  styleUrls: ['./curso-esp-profesor.component.css']
})
export class CursoEspProfesorComponent implements OnInit {

  cursoID:string = "";
  cursos = [];
  public clases = [];
  public diapositivas = [];
  public ejercicios = []
  public preguntas = [];
  public curso = {
    nombreCurso: "",
    nivel: "",
    escuela: "",
    descripcion: "",
    password: ""
  }
  public respuesta:string = "";

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      /* Recibe el parámetro idCurso desde la URL */
      this.cursoID = params['idCurso'];
      //console.log(this.cursoID);

      /* Obtiene la información del curso asociados a la cuenta del profesor */
      this.tasksService.getCursos()
      .subscribe(
        res => {
          this.cursos = res['cursos'];
          for (var i = 0; i < this.cursos.length; i++) {
            if(this.cursos[i]["_id"] == this.cursoID)
              this.curso = this.cursos[i];
          }
          console.log(this.curso);
        },
        err => console.log(err)
      );

    });
  }

  agregarPregunta(){

  }

  actualizaContenedorClase(){
    console.log("Actualizando clase...");
  }

}
