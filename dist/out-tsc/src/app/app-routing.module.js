import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'registrar',
        loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarPageModule)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
    },
    {
        path: 'seleccion-aliado',
        loadChildren: () => import('./pages/seleccion-aliado/seleccion-aliado.module').then(m => m.SeleccionAliadoPageModule)
    },
    {
        path: 'service-aliado',
        loadChildren: () => import('./pages/service-aliado/service-aliado.module').then(m => m.ServiceAliadoPageModule)
    },
    {
        path: 'tarjeta-swappi',
        loadChildren: () => import('./pages/tarjeta-swappi/tarjeta-swappi.module').then(m => m.TarjetaSwappiPageModule)
    },
    {
        path: 'recarga-tarjeta',
        loadChildren: () => import('./pages/recarga-tarjeta/recarga-tarjeta.module').then(m => m.RecargaTarjetaPageModule)
    },
    {
        path: 'terminos',
        loadChildren: () => import('./pages/terminos/terminos.module').then(m => m.TerminosPageModule)
    },
    {
        path: 'movimientos',
        loadChildren: () => import('./pages/movimientos/movimientos.module').then(m => m.MovimientosPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map