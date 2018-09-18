import { Routes, RouterModule } from "../../../../node_modules/@angular/router";
import { EliminarEquiposComponent } from "./eliminar-equipos.component";
import { NgModule } from "../../../../node_modules/@angular/core";

const routes: Routes = [
    {
        path: '', component: EliminarEquiposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EliminarEquiposRoutingModule {
}
