import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeleccionAliadoPageRoutingModule } from './seleccion-aliado-routing.module';
import { SeleccionAliadoPage } from './seleccion-aliado.page';
let SeleccionAliadoPageModule = class SeleccionAliadoPageModule {
};
SeleccionAliadoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SeleccionAliadoPageRoutingModule
        ],
        declarations: [SeleccionAliadoPage]
    })
], SeleccionAliadoPageModule);
export { SeleccionAliadoPageModule };
//# sourceMappingURL=seleccion-aliado.module.js.map