import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service'



@Component({
  selector: 'app-curso-esp-alumno',
  templateUrl: './curso-esp-alumno.component.html',
  styleUrls: ['./curso-esp-alumno.component.css']
})
export class CursoEspAlumnoComponent implements OnInit {

  public cursoID:string = "";
  public claseID:string = "";
  public plantillaID:string = "";

  public diapositivas = [];
  //Número de la diapositiva en la que se quedó - TODO: guardar progreso
  public numDiapositiva = 0;


  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    public router: Router
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      /* Recibe el parámetro idCurso, idClase e idPlantilla desde la URL */
      this.cursoID = params['idCurso'];
      this.claseID = params['idClase'];
      this.plantillaID = params['idCurso'];

      /* Obtiene la información de las diapositivas asociadas a los cursos */
      this.tasksService.getDiapositivas(this.claseID)
      .subscribe(
        res => {
          this.diapositivas = res['diapositivas'];
          console.log(this.diapositivas);
        },
        err => console.log(err)
      );
    });
  }

  anteriorDiapositiva()
  { 
    this.numDiapositiva -= 1;
  }

  siguienteDiapositiva()
  { 
    this.numDiapositiva += 1;
  }

  finalizarClase()
  {
    this.router.navigate(['alumno/cursos/'+this.cursoID]);
  }

}
