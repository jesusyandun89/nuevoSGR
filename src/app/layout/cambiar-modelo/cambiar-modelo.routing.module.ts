import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambiarModeloComponent } from './cambiar-modelo.component';

const routes: Routes = [
    {
        path: '', component: CambiarModeloComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class cambiarModeloRoutingModule {
}
