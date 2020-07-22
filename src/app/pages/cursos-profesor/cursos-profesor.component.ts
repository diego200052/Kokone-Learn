import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css']
})
export class CursosProfesorComponent implements OnInit {

  cantidadCursos: number = 0;
  public cursos = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getCursos()
      .subscribe(
        res => {
          console.log(res)
          this.cursos = res['cursos'];
        },
        err => console.log(err)
      )
  }

  /* Hacer una función para obtener los cursos asociados a este profesor */

}
