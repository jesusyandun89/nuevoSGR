import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buscarEquiposRoutingModule } from './buscar-equipos.routing.module';
import { BuscarEquiposComponent } from './buscar-equipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    buscarEquiposRoutingModule,
    PageHeaderModule
  ],
  declarations: [BuscarEquiposComponent]
})
export class BuscarEquiposModule { }
