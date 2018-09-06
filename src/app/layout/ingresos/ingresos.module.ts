import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosRoutingModule } from './ingresos-routing.module';
import { PageHeaderModule } from '../../shared';
import { IngresosComponent } from './ingresos.component';

@NgModule({
  imports: [
    CommonModule,
    IngresosRoutingModule,
    PageHeaderModule
  ],
  declarations: [IngresosComponent]
})
export class IngresosModule { }
