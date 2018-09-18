import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarEquiposRoutingModule } from './eliminar-equipos.routing.module';
import { EliminarEquiposComponent } from './eliminar-equipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    EliminarEquiposRoutingModule,
    PageHeaderModule
  ],
  declarations: [EliminarEquiposComponent]
})
export class EliminarEquiposModule { }
