import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEquiposComponent } from './crear-equipos.component';

const routes: Routes = [
    {
        path: '', component: CrearEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrearEquiposRoutingModule {
}