import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgresosRoutingModule } from './egresos-routing.module';
import { PageHeaderModule } from '../../shared';
import { EgresosComponent } from './egresos.component';

@NgModule({
  imports: [
    CommonModule,
    EgresosRoutingModule,
    PageHeaderModule
  ],
  declarations: [EgresosComponent]
})
export class EgresosModule { }
