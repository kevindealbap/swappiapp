import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PerfilPageRoutingModule
        ],
        declarations: [PerfilPage]
    })
], PerfilPageModule);
export { PerfilPageModule };
//# sourceMappingURL=perfil.module.js.map