import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { PageHeaderModule } from '../../shared';
import { EmpresasComponent } from './empresas.component';

@NgModule({
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    PageHeaderModule
  ],
  declarations: [EmpresasComponent]
})
export class EmpresasModule { }
