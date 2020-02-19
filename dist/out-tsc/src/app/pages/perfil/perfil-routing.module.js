import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilPage } from './perfil.page';
const routes = [
    {
        path: '',
        component: PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PerfilPageRoutingModule);
export { PerfilPageRoutingModule };
//# sourceMappingURL=perfil-routing.module.js.map