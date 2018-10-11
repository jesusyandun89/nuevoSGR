import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEquiposRoutingModule } from './crearEquipos-routing.module';
import { CrearEquiposComponent } from './crear-equipos.component';
import { PageHeaderModule } from '../../shared';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    CrearEquiposRoutingModule,
    PageHeaderModule,
    NgxPaginationModule
  ],
  declarations: [CrearEquiposComponent]
})
export class CrearEquiposModule { }
