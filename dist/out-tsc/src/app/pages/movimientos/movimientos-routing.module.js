import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovimientosPage } from './movimientos.page';
const routes = [
    {
        path: '',
        component: MovimientosPage
    }
];
let MovimientosPageRoutingModule = class MovimientosPageRoutingModule {
};
MovimientosPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MovimientosPageRoutingModule);
export { MovimientosPageRoutingModule };
//# sourceMappingURL=movimientos-routing.module.js.map