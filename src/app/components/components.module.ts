import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiapositivaComponent } from './diapositiva/diapositiva.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SelplantillaComponent } from './selplantilla/selplantilla.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DiapositivaComponent, SelplantillaComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    AngularEditorModule,
    RouterModule
  ],
  exports: [
    DiapositivaComponent,
    SelplantillaComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
