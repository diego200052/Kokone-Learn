import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
declare var jQuery: any;

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
  public clase = {
    idCurso: "",
    nombreClase: "",
    descripcion: ""
  }
  public claseFija = {
    i: -1,
    _id: "",
    idCurso: "",
    nombreClase: "",
    descripcion: ""
  }
  public respuesta:string = "";

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    public router: Router
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
            /* Obtenemos la información del curso basado en la id de la URL */
            if(this.cursos[i]["_id"] == this.cursoID)
              this.curso = this.cursos[i];
          }
          console.log(this.curso);
        },
        err => console.log(err)
      );

    });

    (function ($) {
      $(document).ready(function(){
        $('.modal').modal();
      });
    })(jQuery)

    /* Si el usuario intenta crear una nueva clase, lo asociamos al curso en el que se encuentra */
    this.clase.idCurso = this.cursoID;

    this.updateClases();
  }

  agregarPregunta(){

  }

  actualizaContenedorClase(i){
    console.log("Actualizando clase fija...");
    this.claseFija.idCurso = this.clases[i].idCurso;
    this.claseFija.nombreClase = this.clases[i].nombreClase;
    this.claseFija.descripcion = this.clases[i].descripcion;
    this.claseFija.i = i;
    this.claseFija._id = this.clases[i]._id;
    
    /* Actualiza la cantidad de diapositivas */
    this.updateDiapositivas();
  }

  opcionesDiapositiva(i){
    console.log("Actualizando opciones diapositiva...");
  }

  updateDiapositivas()
  { 
    /* Obtiene la lista de cursos asociados a la cuenta del profesor */
    this.tasksService.getDiapositivas(this.claseFija._id)
      .subscribe(
        res => {
          console.log(res)
          this.diapositivas = res['diapositivas'];
        },
        err => console.log(err)
      );}

  updateClases()
  { 
    /* Obtiene la lista de cursos asociados a la cuenta del profesor */
    this.tasksService.getClases(this.cursoID)
      .subscribe(
        res => {
          console.log(res)
          this.clases = res['clases'];
        },
        err => console.log(err)
      );}

  agregarClase(){
    console.log(this.clase);
    this.tasksService.crearClase(this.clase)
      .subscribe(
        res =>{
          console.log(res)
          /* Actualiza la cuadrícula de cursos */
          this.updateClases();
          /* Limpia valores */
          this.clase = {
            idCurso: this.cursoID,
            nombreClase: "",
            descripcion: ""
          }
      },
        error => console.log(error))
  }

}
