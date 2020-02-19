import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecargaTarjetaPage } from './recarga-tarjeta.page';
const routes = [
    {
        path: '',
        component: RecargaTarjetaPage
    }
];
let RecargaTarjetaPageRoutingModule = class RecargaTarjetaPageRoutingModule {
};
RecargaTarjetaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RecargaTarjetaPageRoutingModule);
export { RecargaTarjetaPageRoutingModule };
//# sourceMappingURL=recarga-tarjeta-routing.module.js.map