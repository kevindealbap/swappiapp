import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeleccionAliadoPage } from './seleccion-aliado.page';
const routes = [
    {
        path: '',
        component: SeleccionAliadoPage
    }
];
let SeleccionAliadoPageRoutingModule = class SeleccionAliadoPageRoutingModule {
};
SeleccionAliadoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SeleccionAliadoPageRoutingModule);
export { SeleccionAliadoPageRoutingModule };
//# sourceMappingURL=seleccion-aliado-routing.module.js.map