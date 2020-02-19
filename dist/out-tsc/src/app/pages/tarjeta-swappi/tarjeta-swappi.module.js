import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TarjetaSwappiPageRoutingModule } from './tarjeta-swappi-routing.module';
import { TarjetaSwappiPage } from './tarjeta-swappi.page';
let TarjetaSwappiPageModule = class TarjetaSwappiPageModule {
};
TarjetaSwappiPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TarjetaSwappiPageRoutingModule
        ],
        declarations: [TarjetaSwappiPage]
    })
], TarjetaSwappiPageModule);
export { TarjetaSwappiPageModule };
//# sourceMappingURL=tarjeta-swappi.module.js.map