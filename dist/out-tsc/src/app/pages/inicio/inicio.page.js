import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';
let InicioPage = class InicioPage {
    constructor(menu, navCtrl, _methodsApiRestService) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this._methodsApiRestService = _methodsApiRestService;
        this.cuentas = [];
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.cedula = localStorage.getItem('cedula');
        this.celular = localStorage.getItem('celular');
        this.extraer();
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.toggle();
    }
    logout() {
        localStorage.setItem('name', null);
        localStorage.setItem('email', null);
        localStorage.setItem('cedula', null);
        localStorage.setItem('celular', null);
        this.navCtrl.navigateRoot('/login');
    }
    extraer() {
        this.service('/cuentas/cuentasList/' + this.cedula);
    }
    service(endpoint) {
        this._methodsApiRestService.GetMethod(endpoint)
            .subscribe(response => {
            if (typeof response[0] === 'undefined' || response[0] === null) {
                //swal.fire("Ups!", "Usuario no encontrado", "error");
            }
            else {
                for (let x in response) {
                    var plata;
                    this._methodsApiRestService.GetMethod('/aliados/valuePunto/' + response[x].aliado_id)
                        .subscribe(data => {
                        plata = parseInt(response[x].ca_cantPuntos) * parseInt(data[0].al_valueCompre);
                        let datos = {
                            id: response[x].id,
                            name: data[0].al_name,
                            imagen: data[0].al_image,
                            cedula: response[x].us_cedula,
                            aliado: response[x].aliado_id,
                            status: response[x].ca_status,
                            cantidad: response[x].ca_cantPuntos,
                            dinero: plata
                        };
                        this.cuentas.push(datos);
                    });
                }
            }
        });
    }
};
InicioPage = tslib_1.__decorate([
    Component({
        selector: 'app-inicio',
        templateUrl: './inicio.page.html',
        styleUrls: ['./inicio.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController,
        NavController,
        MethodApiServiceService])
], InicioPage);
export { InicioPage };
//# sourceMappingURL=inicio.page.js.map