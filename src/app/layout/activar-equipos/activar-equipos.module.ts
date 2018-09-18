import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { activarEquiposRoutingModule } from './activar-equipos.routing.module';
import { ActivarEquiposComponent } from './activar-equipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    activarEquiposRoutingModule,
    PageHeaderModule
  ],
  declarations: [ActivarEquiposComponent]
})
export class ActivarEquiposModule { }
