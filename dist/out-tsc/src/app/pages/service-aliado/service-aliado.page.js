import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
let ServiceAliadoPage = class ServiceAliadoPage {
    constructor(_methodsApiRestService, navCtrl, routes) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.routes = routes;
    }
    ngOnInit() {
    }
    vincular() {
        let datos = {
            "cedula": this.cedula,
            "aliado_id": 1,
            "ca_cantPuntos": 564,
        };
        this.service('/cuentas/create', datos);
    }
    service(endpoint, params) {
        this._methodsApiRestService.PostMethod(endpoint, params)
            .subscribe(response => {
            if (response) {
                this.routes.navigate(['/inicio']);
            }
            else {
                swal.fire("Ups!", "Error en Petición", "error");
            }
        }, error => {
            if (!error.ok) {
                swal.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
};
ServiceAliadoPage = tslib_1.__decorate([
    Component({
        selector: 'app-service-aliado',
        templateUrl: './service-aliado.page.html',
        styleUrls: ['./service-aliado.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MethodApiServiceService,
        NavController,
        Router])
], ServiceAliadoPage);
export { ServiceAliadoPage };
//# sourceMappingURL=service-aliado.page.js.map