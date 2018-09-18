import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriaEquiposComponent } from './auditoria-equipos.component';

const routes: Routes = [
    {
        path: '', component: AuditoriaEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class auditoriaEquiposRoutingModule {
}
