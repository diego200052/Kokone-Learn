import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';

/* Componentes del sitio */
import { DiapositivaComponent } from './diapositiva/diapositiva.component';
import { SelplantillaComponent } from './selplantilla/selplantilla.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    /* Declaración de componentes dentro de la carpeta components */
    DiapositivaComponent,
    SelplantillaComponent,
    NavbarComponent,
    FooterComponent],
  imports: [
    /* Módulos de biblioteca */
    CommonModule,
    DragDropModule,
    HttpClientModule,
    AngularEditorModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    /* Componentes del sitio para ser utilizados dentro de pages */
    DiapositivaComponent,
    SelplantillaComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
