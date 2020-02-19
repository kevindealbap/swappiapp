import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert2';
let SeleccionAliadoPage = class SeleccionAliadoPage {
    constructor(_methodsApiRestService, navCtrl) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.aliados = [];
    }
    ngOnInit() {
        this.getAliados('/partner-list');
    }
    getAliados(endpoint) {
        this._methodsApiRestService.GetMethod(endpoint)
            .subscribe(response => {
            this.aliados = response;
        }, error => {
            if (!error.ok) {
                swal.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
};
SeleccionAliadoPage = tslib_1.__decorate([
    Component({
        selector: 'app-seleccion-aliado',
        templateUrl: './seleccion-aliado.page.html',
        styleUrls: ['./seleccion-aliado.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MethodApiServiceService,
        NavController])
], SeleccionAliadoPage);
export { SeleccionAliadoPage };
//# sourceMappingURL=seleccion-aliado.page.js.map