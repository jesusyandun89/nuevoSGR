import { Routes, RouterModule } from "../../../../node_modules/@angular/router";
import { IngresosComponent } from "./ingresos.component";
import { NgModule } from "../../../../node_modules/@angular/core";

const routes: Routes = [
    {
        path: '', component: IngresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IngresosRoutingModule {
}
