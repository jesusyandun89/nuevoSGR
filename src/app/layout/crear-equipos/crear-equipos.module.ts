import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEquiposRoutingModule } from './crearEquipos-routing.module';
import { CrearEquiposComponent } from './crear-equipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    CrearEquiposRoutingModule,
    PageHeaderModule
  ],
  declarations: [CrearEquiposComponent]
})
export class CrearEquiposModule { }
