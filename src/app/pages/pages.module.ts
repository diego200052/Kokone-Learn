import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

/* Componentes del sitio */
import { ComponentsModule } from '../components/components.module';

/* Páginas del sitio */
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SignupAluComponent } from './signup-alu/signup-alu.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { LogInComponent } from './log-in/log-in.component';

import { FormsModule } from '@angular/forms';
import { CursosProfesorComponent } from './cursos-profesor/cursos-profesor.component';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';
import { CursoVistaComponent } from './curso-vista/curso-vista.component';
import { CursoEspProfesorComponent } from './curso-esp-profesor/curso-esp-profesor.component';
import { CursoEspAlumnoComponent } from './curso-esp-alumno/curso-esp-alumno.component';
import { EstudioAlumnoComponent } from './estudio-alumno/estudio-alumno.component';

@NgModule({
  declarations: [
    /* Declaración de componentes dentro de la carpeta pages */
    HomeComponent,
    Error404Component,
    SignupAluComponent,
    SignupProfComponent,
    LogInComponent,
    CursosProfesorComponent,
    CursoVistaComponent,
    CursosAlumnoComponent,
    CursoEspProfesorComponent,
    CursoEspAlumnoComponent,
    EstudioAlumnoComponent
  ],
  imports: [
    /* Módulos de biblioteca */
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    SignupAluComponent,
    SignupProfComponent,
    LogInComponent,
    CursosProfesorComponent,
    CursoVistaComponent, CursosAlumnoComponent
  ]
})
export class PagesModule { }
