import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarEquiposComponent } from './buscar-equipos.component';

const routes: Routes = [
    {
        path: '', component: BuscarEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class buscarEquiposRoutingModule {
}
