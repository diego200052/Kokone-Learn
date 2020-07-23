import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selplantilla',
  templateUrl: './selplantilla.component.html',
  styleUrls: ['./selplantilla.component.css']
})
export class SelplantillaComponent implements OnInit {

  public cursoID:string = "";
  public claseID:string = "";

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      /* Recibe el parámetro idCurso e idClase desde la URL */
      this.cursoID = params['idCurso'];
      this.claseID = params['idClase'];
      //console.log(this.cursoID);

    });
  }

}
