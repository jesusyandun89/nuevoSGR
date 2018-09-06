import { Routes, RouterModule } from "../../../../node_modules/@angular/router";
import { EgresosComponent } from "./egresos.component";
import { NgModule } from "../../../../node_modules/@angular/core";

const routes: Routes = [
    {
        path: '', component: EgresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EgresosRoutingModule {
}
