import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crearEquiposRoutingModule } from './crearEquipos-routing.module';
import { crearEquiposComponent } from './crearEquipos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, crearEquiposRoutingModule, PageHeaderModule],
    declarations: [crearEquiposComponent]
})
export class crearEquiposModule { }
