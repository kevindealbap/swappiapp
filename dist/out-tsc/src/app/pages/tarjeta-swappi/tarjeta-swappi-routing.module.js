import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TarjetaSwappiPage } from './tarjeta-swappi.page';
const routes = [
    {
        path: '',
        component: TarjetaSwappiPage
    }
];
let TarjetaSwappiPageRoutingModule = class TarjetaSwappiPageRoutingModule {
};
TarjetaSwappiPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TarjetaSwappiPageRoutingModule);
export { TarjetaSwappiPageRoutingModule };
//# sourceMappingURL=tarjeta-swappi-routing.module.js.map