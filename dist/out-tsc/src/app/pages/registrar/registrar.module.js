import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrarPageRoutingModule } from './registrar-routing.module';
import { RegistrarPage } from './registrar.page';
let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RegistrarPageRoutingModule
        ],
        declarations: [RegistrarPage]
    })
], RegistrarPageModule);
export { RegistrarPageModule };
//# sourceMappingURL=registrar.module.js.map