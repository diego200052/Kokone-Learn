import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes del sitio */
import { HomeComponent } from './pages/home/home.component';
import { DiapositivaComponent } from './components/diapositiva/diapositiva.component';
import { SelplantillaComponent } from './components/selplantilla/selplantilla.component';
import { SignupAluComponent } from './pages/signup-alu/signup-alu.component';
import { SignupProfComponent } from './pages/signup-prof/signup-prof.component';
import { LogInComponent } from './pages/log-in/log-in.component';

/* Páginas del sitio */
import { Error404Component } from './pages/error404/error404.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

/* Guard de autenticación */
import { AuthenticationGuard } from './authentication.guard'

/* 
  Este archivo se encarga de establecer las rutas dependiendo de la
  página que querramos cargar
*/

const routes: Routes = [

  //Si un usuario escribe la ruta /home carga el HomeComponent
  { path: 'home', component: HomeComponent },
  { path: 'error404', component: Error404Component },

  /* Páginas Alumno */
  { path: 'regalumno', component: SignupAluComponent },
  { path: 'alumno', component: AlumnoComponent, canActivate: [AuthenticationGuard], data: {role: 'alumno'} },

  /* Páginas Profesor/Mentor */
  { path: 'regprofe', component: SignupProfComponent },
  { path: 'profesor', component: ProfesorComponent, canActivate: [AuthenticationGuard], data: {role: 'profesor'} },

  /* Pruebas */
  { path: 'agregarDiapositiva', component: DiapositivaComponent },
  { path: 'seleccionarPlantilla', component: SelplantillaComponent },

  /* ******** Pagina Log In ******** */
  { path: 'login', component: LogInComponent },

  
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
