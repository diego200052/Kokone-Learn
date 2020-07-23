import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-curso-vista',
  templateUrl: './curso-vista.component.html',
  styleUrls: ['./curso-vista.component.css']
})
export class CursoVistaComponent implements OnInit {
  //Recibe como argumento un el nombre
  @Input() cur: Curso;
  @HostBinding('attr.class') cssClass= "col-md-4 my-3";

  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
