import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { crearEquiposComponent } from './crearEquipos.component';

const routes: Routes = [
    {
        path: '', component: crearEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class crearEquiposRoutingModule {
}
