import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiapositivaComponent } from './components/diapositiva/diapositiva.component';
import { SelplantillaComponent } from './components/selplantilla/selplantilla.component';
import { Error404Component } from './pages/error404/error404.component';

/* 
  Este archivo se encarga de establecer las rutas dependiendo de la
  página que querramos cargar
*/

const routes: Routes = [

  //Si un usuario escribe la ruta /home carga el HomeComponent
  { path: 'home', component: HomeComponent },
  { path: 'error404', component: Error404Component },

  { path: 'agregarDiapositiva', component: DiapositivaComponent },
  { path: 'seleccionarPlantilla', component: SelplantillaComponent },
  
  //Página principal redirecciona a homedir
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //Si no encuentra la ruta, redirecciona a error404
  { path: '**', pathMatch: 'full', redirectTo: 'error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
