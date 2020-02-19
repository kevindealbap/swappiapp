import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TerminosPageRoutingModule } from './terminos-routing.module';
import { TerminosPage } from './terminos.page';
let TerminosPageModule = class TerminosPageModule {
};
TerminosPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TerminosPageRoutingModule
        ],
        declarations: [TerminosPage]
    })
], TerminosPageModule);
export { TerminosPageModule };
//# sourceMappingURL=terminos.module.js.map