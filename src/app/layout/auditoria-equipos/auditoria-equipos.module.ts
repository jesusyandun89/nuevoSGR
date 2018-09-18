import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { auditoriaEquiposRoutingModule } from './auditoria-equipos.routing.module';
import { AuditoriaEquiposComponent } from './auditoria-equipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    auditoriaEquiposRoutingModule,
    PageHeaderModule
  ],
  declarations: [AuditoriaEquiposComponent]
})
export class AuditoriaEquiposModule { }
