import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cambiarModeloRoutingModule } from './cambiar-modelo.routing.module';
import { CambiarModeloComponent } from './cambiar-modelo.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    cambiarModeloRoutingModule,
    PageHeaderModule
  ],
  declarations: [CambiarModeloComponent]
})
export class CambiarModeloModule { }
