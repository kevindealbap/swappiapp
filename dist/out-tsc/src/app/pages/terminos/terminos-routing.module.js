import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerminosPage } from './terminos.page';
const routes = [
    {
        path: '',
        component: TerminosPage
    }
];
let TerminosPageRoutingModule = class TerminosPageRoutingModule {
};
TerminosPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TerminosPageRoutingModule);
export { TerminosPageRoutingModule };
//# sourceMappingURL=terminos-routing.module.js.map