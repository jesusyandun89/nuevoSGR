import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivarEquiposComponent } from './activar-equipos.component';

const routes: Routes = [
    {
        path: '', component: ActivarEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class activarEquiposRoutingModule {
}
