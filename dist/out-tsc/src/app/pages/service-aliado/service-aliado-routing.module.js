import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceAliadoPage } from './service-aliado.page';
const routes = [
    {
        path: '',
        component: ServiceAliadoPage
    }
];
let ServiceAliadoPageRoutingModule = class ServiceAliadoPageRoutingModule {
};
ServiceAliadoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ServiceAliadoPageRoutingModule);
export { ServiceAliadoPageRoutingModule };
//# sourceMappingURL=service-aliado-routing.module.js.map