import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as Bcryptjs from "bcryptjs";
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
let RegistrarPage = class RegistrarPage {
    //fin variables
    constructor(_methodsApiRestService, navCtrl) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.verifyStatus = null;
    }
    ngOnInit() {
    }
    sendRegistro() {
        var salt = Bcryptjs.genSaltSync(10);
        var hash = Bcryptjs.hashSync(this.password, salt);
        let datos = {
            "names": this.name,
            "lastNames": this.lastname,
            "cellPhone": this.celular.toString(),
            "documentId": this.cedula.toString(),
            "email": this.email,
            "password": hash
        };
        this._methodsApiRestService.PostMethod('/user-registration', datos)
            .subscribe(response => {
            if (response) {
                localStorage.setItem('name', this.name);
                localStorage.setItem('lastName', this.lastname);
                localStorage.setItem('email', this.email);
                localStorage.setItem('cedula', this.cedula.toString());
                localStorage.setItem('celular', this.celular.toString());
                this.navCtrl.navigateRoot('/inicio');
            }
            else {
            }
        });
    }
};
RegistrarPage = tslib_1.__decorate([
    Component({
        selector: 'app-registrar',
        templateUrl: './registrar.page.html',
        styleUrls: ['./registrar.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MethodApiServiceService,
        NavController])
], RegistrarPage);
export { RegistrarPage };
//# sourceMappingURL=registrar.page.js.map