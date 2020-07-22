import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes del sitio */
import { HomeComponent } from './pages/home/home.component';
import { DiapositivaComponent } from './components/diapositiva/diapositiva.component';
import { SelplantillaComponent } from './components/selplantilla/selplantilla.component';
import { SignupAluComponent } from './pages/signup-alu/signup-alu.component';
import { SignupProfComponent } from './pages/signup-prof/signup-prof.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CursosAlumnoComponent } from './pages/cursos-alumno/cursos-alumno.component';

/* Páginas del sitio */
import { Error404Component } from './pages/error404/error404.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

/* Guard de autenticación */
import { AuthenticationGuard } from './authentication.guard'
import { CursosProfesorComponent } from './pages/cursos-profesor/cursos-profesor.component';

/* 
  Este archivo se encarga de establecer las rutas dependiendo de la
  página que querramos cargar
*/

const routes: Routes = [

  /* Páginas estáticas */
  { path: 'home', component: HomeComponent },
  { path: 'error404', component: Error404Component },

  /* Página de Registros (profesor/alumno) */
  { path: 'regprofe', component: SignupProfComponent },
  { path: 'regalumno', component: SignupAluComponent },

  /* Páginas de acceso al Alumno */
  { path: 'alumno', component: AlumnoComponent, canActivate: [AuthenticationGuard], data: {role: 'alumno'} },

  /* Páginas de acceso al Profesor */
  { path: 'profesor', component: ProfesorComponent, canActivate: [AuthenticationGuard], data: {role: 'profesor'} },
  { path: 'profesor/cursos', component: CursosProfesorComponent, canActivate: [AuthenticationGuard], data: {role: 'profesor'} },
  { path: 'profesor/cursos/:idCurso/clase/:idClase/agregarDiapositiva', component: DiapositivaComponent, canActivate: [AuthenticationGuard], data: {role: 'profesor'} },
  { path: 'profesor/cursos/:idCurso/clase/:idClase/seleccionarPlantilla', component: SelplantillaComponent, canActivate: [AuthenticationGuard], data: {role: 'profesor'} },

  /* ******** Pagina Log In ******** */
  { path: 'login', component: LogInComponent },
  /* ******** Pagina Cursos Alu ******** */
  { path: 'cursosAlumno', component: CursosAlumnoComponent },
  
  /* Página principal */
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  /* Página no encontrada */
  { path: '**', pathMatch: 'full', redirectTo: 'error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
