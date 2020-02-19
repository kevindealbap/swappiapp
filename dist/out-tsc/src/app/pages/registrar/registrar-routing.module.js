import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrarPage } from './registrar.page';
const routes = [
    {
        path: '',
        component: RegistrarPage
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegistrarPageRoutingModule);
export { RegistrarPageRoutingModule };
//# sourceMappingURL=registrar-routing.module.js.map