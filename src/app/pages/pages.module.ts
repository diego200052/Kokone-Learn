import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { AlumnoComponent } from './alumno/alumno.component';



@NgModule({
  declarations: [HomeComponent, Error404Component, ProfesorComponent, AlumnoComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
