import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

export const routes:Route[] = [
    {
        path: '', 
        pathMatch: 'full',
        loadComponent: () => import('./components/prod-list/prod-list.component')
        .then(mod => mod.financierosListComponent)
    },
    {
        path: 'list-financieros',
        loadComponent: () => import('./components/prod-list/prod-list.component')
        .then(mod => mod.financierosListComponent)
    },
    {
        path: 'agregar-producto',
        loadComponent: () => import('./components/agregar-producto/agregar-producto.component')
        .then(mod => mod.AgregarProductoComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./components/prod-list/prod-list.component')
        .then(mod => mod.financierosListComponent)
    }
];


@NgModule({
    imports: [RouterModule.forRoot([])],
    exports: [RouterModule]
})

export class AppRoutingModules {
}