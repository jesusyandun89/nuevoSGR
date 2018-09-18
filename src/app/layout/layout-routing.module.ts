import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'crearequipos', loadChildren: './crear-equipos/crear-equipos.module#CrearEquiposModule' },
            { path: 'ingresos', loadChildren: './ingresos/ingresos.module#IngresosModule' },
            { path: 'egresos', loadChildren: './egresos/egresos.module#EgresosModule' },
            { path: 'empresas', loadChildren: './empresas/empresas.module#EmpresasModule' },
            { path: 'activarequipos', loadChildren: './activar-equipos/activar-equipos.module#ActivarEquiposModule' },
            { path: 'auditoriaequipos', loadChildren: './auditoria-equipos/auditoria-equipos.module#AuditoriaEquiposModule' },
            { path: 'buscarequipos', loadChildren: './buscar-equipos/buscar-equipos.module#BuscarEquiposModule' },
            { path: 'cambiarmodelo', loadChildren: './cambiar-modelo/cambiar-modelo.module#CambiarModeloModule' },
            { path: 'eliminarequipos', loadChildren: './eliminar-equipos/eliminar-equipos.module#EliminarEquiposModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
