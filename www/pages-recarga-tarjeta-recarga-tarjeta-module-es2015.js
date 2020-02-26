(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recarga-tarjeta-recarga-tarjeta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n      Recargar Tarjeta\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n<p><b>Seleccionar aliados</b></p>\r\n<div *ngFor=\"let item of cuentas\">\r\n  <ion-card style=\"background: white;\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"3\"><img src=\"../../../assets/imgs/{{item.imagen}}\" style=\"width: 70%;\"></ion-col>\r\n        <ion-col size=\"6\" style=\"text-align: left;\">\r\n          <ion-label><b>{{item.nameAliado}}</b></ion-label> \r\n          <input [(ngModel)]=\"selec\" (input)=\"getPoints($event, item.aliado)\" type=\"number\" placeholder=\"Cantidad\" style=\"border-bottom: 1px solid #0093E9;width: 70%;\"></ion-col>\r\n        <ion-col size=\"3\" style=\"color: #0093E9;\">\r\n          <br><b>{{item.cantidad}} Pts</b>\r\n          <br><b>$ {{item.dinero | number}}</b>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</div>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" id=\"tabs-border\" class=\"ion-padding\">\r\n    <img src=\"../../../assets/imgs/credit-card.png\" width=\"84px\">\r\n  </ion-tab-bar>\r\n  <ion-tab-bar slot=\"bottom\">\r\n   <ion-grid fixed>\r\n     <ion-row>\r\n       <ion-col size=\"6\" class=\"text-bold\">Total en pesos</ion-col>\r\n       <ion-col size=\"6\" class=\"text-bold azul\">$ {{total}}</ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n  </ion-tab-bar>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n       <ion-col size=\"6\" class=\"text-bold\">Saldo actual</ion-col>\r\n       <ion-col size=\"6\" class=\"text-bold\">Saldo nuevo</ion-col>\r\n     </ion-row>\r\n    </ion-grid>\r\n   </ion-tab-bar>\r\n   <ion-tab-bar slot=\"bottom\">\r\n    <ion-grid fixed>\r\n     <ion-row>\r\n       <ion-col size=\"6\" class=\"text-bold azul\">$ {{saldo}}</ion-col>\r\n       <ion-col size=\"6\" class=\"text-bold azul\">$ {{dinero}}</ion-col>\r\n     </ion-row>\r\n    </ion-grid>\r\n   </ion-tab-bar>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <button id=\"confirmar\" (click)=\"recargar()\">CONFIRMAR</button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "./src/app/pages/recarga-tarjeta/recarga-tarjeta-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recarga-tarjeta/recarga-tarjeta-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecargaTarjetaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecargaTarjetaPageRoutingModule", function() { return RecargaTarjetaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recarga_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recarga-tarjeta.page */ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.ts");




const routes = [
    {
        path: '',
        component: _recarga_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__["RecargaTarjetaPage"]
    }
];
let RecargaTarjetaPageRoutingModule = class RecargaTarjetaPageRoutingModule {
};
RecargaTarjetaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecargaTarjetaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recarga-tarjeta/recarga-tarjeta.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecargaTarjetaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecargaTarjetaPageModule", function() { return RecargaTarjetaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recarga_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recarga-tarjeta-routing.module */ "./src/app/pages/recarga-tarjeta/recarga-tarjeta-routing.module.ts");
/* harmony import */ var _recarga_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recarga-tarjeta.page */ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.ts");







let RecargaTarjetaPageModule = class RecargaTarjetaPageModule {
};
RecargaTarjetaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recarga_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecargaTarjetaPageRoutingModule"]
        ],
        declarations: [_recarga_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__["RecargaTarjetaPage"]]
    })
], RecargaTarjetaPageModule);



/***/ }),

/***/ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#0F215929;\n}\n\n#tabs-border {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 24px #0093E91F;\n  border-radius: 36px 36px 0px 0px;\n  opacity: 1;\n}\n\n#confirmar {\n  top: 721px;\n  left: 16px;\n  width: 343px;\n  height: 50px;\n  background: transparent -webkit-gradient(linear, right top, left top, from(#0ABF04), to(#09A603)) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n}\n\n.text-bold {\n  font-weight: bold;\n  color: black;\n}\n\n.azul {\n  color: #0093E9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjYXJnYS10YXJqZXRhL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcSU9OSUNcXHN3YXBwaS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWNhcmdhLXRhcmpldGFcXHJlY2FyZ2EtdGFyamV0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlY2FyZ2EtdGFyamV0YS9yZWNhcmdhLXRhcmpldGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURDQTtFQUNJLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDSixVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2SEFBQTtFQUFBLHFHQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDR0E7O0FEREE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2FyZ2EtdGFyamV0YS9yZWNhcmdhLXRhcmpldGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IzBGMjE1OTI5O1xyXG59XHJcbiN0YWJzLWJvcmRlcntcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4ICMwMDkzRTkxRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHggMzZweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4jY29uZmlybWFye1xyXG4gICAgdG9wOiA3MjFweDtcclxubGVmdDogMTZweDtcclxud2lkdGg6IDM0M3B4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBBQkYwNCAwJSwgIzA5QTYwMyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGV4dC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmF6dWx7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiMwRjIxNTkyOTtcbn1cblxuI3RhYnMtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAjMDA5M0U5MUY7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHggMzZweCAwcHggMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4jY29uZmlybWFyIHtcbiAgdG9wOiA3MjFweDtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDM0M3B4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwQUJGMDQgMCUsICMwOUE2MDMgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYXp1bCB7XG4gIGNvbG9yOiAjMDA5M0U5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.ts ***!
  \***************************************************************/
/*! exports provided: RecargaTarjetaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecargaTarjetaPage", function() { return RecargaTarjetaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let RecargaTarjetaPage = class RecargaTarjetaPage {
    constructor(_methodsApiRestService, navCtrl) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.cuentas = [];
        this.cedula = null;
        this.dinero = 0;
        this.activeBtn = 0;
        this.saldo = 0;
        this.total = 0;
    }
    ngOnInit() {
        this.cedula = localStorage.getItem('cedula');
        this.service('/partner-account-list?cedula=' + this.cedula);
    }
    service(endpoint) {
        this._methodsApiRestService.GetMethod(endpoint)
            .subscribe(response => {
            var id = localStorage.getItem('idUser');
            if (typeof response === 'undefined' || response === null) {
                //swal.fire("Ups!", "Usuario no encontrado", "error");
            }
            else {
                for (let x in response) {
                    var plata;
                    plata = (response[x].numberOfPoints) * parseInt(response[x].partner.purchaseValue);
                    let datos = {
                        id: response[x].id,
                        cedula: response[x].user.documentId,
                        nameAliado: response[x].partner.name,
                        aliado: response[x].partner.id,
                        status: response[x].status,
                        cantidad: response[x].numberOfPoints,
                        imagen: 'puntossaludables.png',
                        dinero: plata,
                        valorCompra: response[x].partner.purchaseValue
                    };
                    this.cuentas.push(datos);
                }
                this._methodsApiRestService.GetMethod('/user/' + id + '/card')
                    .subscribe(data => {
                    if (data === null || data === undefined) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "El usuario no tiene una tarjeta.", "error");
                        this.navCtrl.navigateRoot('/tarjeta-swappi');
                    }
                    this.saldo = data['amount'];
                    this.idcard = data['id'];
                }, error => {
                    if (!error.ok) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Ocurrió un error obteniendo información de la tarjeta.", "error");
                    }
                });
            }
        }, error => {
            if (!error.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
    getPoints(event, aliadoId) {
        let index = this.cuentas.findIndex(c => c.aliado === aliadoId);
        var cuenta = this.cuentas[index];
        if (event.target.value != undefined && event.target.value !== "") {
            let numberOfPoints = parseInt(event.target.value, 10);
            let purchaseValue = parseFloat(this.cuentas[index].valorCompra);
            this.total = numberOfPoints * purchaseValue;
            this.dinero = this.total + this.saldo;
        }
        else {
            this.total = 0;
            this.dinero = 0;
        }
    }
    recargar() {
        if (this.selec > this.dinero) {
        }
        else {
            console.log(this.selec);
            let datos = {
                "card": {
                    "id": this.idcard
                },
                "user": {
                    "documentId": this.cedula
                },
                "quantity": this.dinero
            };
            this._methodsApiRestService.PostMethod('/recharge', datos)
                .subscribe(response => {
                console.log(response);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Exito!", "Tarjeta recargada con éxito", "success");
            }, error => {
                if (!error.ok) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", error, "error");
                }
            });
        }
    }
};
RecargaTarjetaPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RecargaTarjetaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recarga-tarjeta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recarga-tarjeta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recarga-tarjeta.page.scss */ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], RecargaTarjetaPage);



/***/ })

}]);
//# sourceMappingURL=pages-recarga-tarjeta-recarga-tarjeta-module-es2015.js.map