import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServiceAliadoPageRoutingModule } from './service-aliado-routing.module';
import { ServiceAliadoPage } from './service-aliado.page';
let ServiceAliadoPageModule = class ServiceAliadoPageModule {
};
ServiceAliadoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ServiceAliadoPageRoutingModule
        ],
        declarations: [ServiceAliadoPage]
    })
], ServiceAliadoPageModule);
export { ServiceAliadoPageModule };
//# sourceMappingURL=service-aliado.module.js.map