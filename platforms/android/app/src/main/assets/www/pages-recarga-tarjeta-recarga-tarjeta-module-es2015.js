(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recarga-tarjeta-recarga-tarjeta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      Recargar Tarjeta\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<p><b>Seleccionar aliados</b></p>\n<div *ngFor=\"let item of cuentas\">\n  <ion-card style=\"background: white;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"3\"><img src=\"../../../assets/imgs/puntossaludables.png\" style=\"width: 70%;\"></ion-col>\n        <ion-col size=\"6\" style=\"text-align: left;\"><ion-label><b>Puntos Saludables</b></ion-label> <ion-input [(ngModel)]=\"selec\" type=\"number\" placeholder=\"Cantidad\" style=\"border-bottom: 1px solid #0093E9;width: 70%;\"></ion-input></ion-col>\n        <ion-col size=\"3\" style=\"color: #0093E9;\"><br><b>$ {{item.dinero | number}}</b></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" id=\"tabs-border\" class=\"ion-padding\">\n    <img src=\"../../../assets/imgs/credit-card.png\" width=\"84px\">\n  </ion-tab-bar>\n  <ion-tab-bar slot=\"bottom\">\n   <ion-grid fixed>\n     <ion-row>\n       <ion-col size=\"6\" class=\"text-bold\">Total en pesos</ion-col>\n       <ion-col size=\"6\" class=\"text-bold azul\">$ 0</ion-col>\n     </ion-row>\n   </ion-grid>\n  </ion-tab-bar>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-grid fixed>\n      <ion-row>\n       <ion-col size=\"6\" class=\"text-bold\">Saldo actual</ion-col>\n       <ion-col size=\"6\" class=\"text-bold\">Saldo nuevo</ion-col>\n     </ion-row>\n    </ion-grid>\n   </ion-tab-bar>\n   <ion-tab-bar slot=\"bottom\">\n    <ion-grid fixed>\n     <ion-row>\n       <ion-col size=\"6\" class=\"text-bold azul\">$ 0</ion-col>\n       <ion-col size=\"6\" class=\"text-bold azul\">$ {{selec}}</ion-col>\n     </ion-row>\n    </ion-grid>\n   </ion-tab-bar>\n  <ion-tab-bar slot=\"bottom\">\n    <button id=\"confirmar\" (click)=\"recargar()\">CONFIRMAR</button>\n  </ion-tab-bar>\n</ion-tabs>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#0F215929;\n}\n\n#tabs-border {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 24px #0093E91F;\n  border-radius: 36px 36px 0px 0px;\n  opacity: 1;\n}\n\n#confirmar {\n  top: 721px;\n  left: 16px;\n  width: 343px;\n  height: 50px;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n}\n\n.text-bold {\n  font-weight: bold;\n  color: black;\n}\n\n.azul {\n  color: #0093E9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjYXJnYS10YXJqZXRhL0M6XFxVc2Vyc1xca2V2eW4uREVTS1RPUC1GSDVOVDU3XFxEb2N1bWVudHNcXEJhY2t1cCBNb3ZpbFxcU3dhcHBpL3NyY1xcYXBwXFxwYWdlc1xccmVjYXJnYS10YXJqZXRhXFxyZWNhcmdhLXRhcmpldGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWNhcmdhLXRhcmpldGEvcmVjYXJnYS10YXJqZXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0osVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNHQTs7QUREQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVjYXJnYS10YXJqZXRhL3JlY2FyZ2EtdGFyamV0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojMEYyMTU5Mjk7XHJcbn1cclxuI3RhYnMtYm9yZGVye1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI0cHggIzAwOTNFOTFGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzZweCAzNnB4IDBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiNjb25maXJtYXJ7XHJcbiAgICB0b3A6IDcyMXB4O1xyXG5sZWZ0OiAxNnB4O1xyXG53aWR0aDogMzQzcHg7XHJcbmhlaWdodDogNTBweDtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uYXp1bHtcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IzBGMjE1OTI5O1xufVxuXG4jdGFicy1ib3JkZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4ICMwMDkzRTkxRjtcbiAgYm9yZGVyLXJhZGl1czogMzZweCAzNnB4IDBweCAwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNjb25maXJtYXIge1xuICB0b3A6IDcyMXB4O1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogMzQzcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBBQkYwNCAwJSwgIzA5QTYwMyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5henVsIHtcbiAgY29sb3I6ICMwMDkzRTk7XG59Il19 */");

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




let RecargaTarjetaPage = class RecargaTarjetaPage {
    constructor(_methodsApiRestService) {
        this._methodsApiRestService = _methodsApiRestService;
        this.cuentas = [];
        this.cedula = null;
        this.dinero = 0;
    }
    ngOnInit() {
        this.cedula = localStorage.getItem('cedula');
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
                            cedula: response[x].us_cedula,
                            aliado: response[x].aliado_id,
                            status: response[x].ca_status,
                            cantidad: response[x].ca_cantPuntos,
                            dinero: plata
                        };
                        this.dinero += plata;
                        this.cuentas.push(datos);
                    });
                }
            }
        }, error => {
            if (!error.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
    recargar() {
        if (this.selec > this.dinero) {
            console.log("te pasaste");
        }
        else {
            console.log(this.selec);
            let datos = {
                "usuario": this.cedula,
                "monto": this.selec,
            };
            this._methodsApiRestService.PostMethod('/tarjetas/descargar', datos)
                .subscribe(response => {
                console.log(response);
            }, error => {
                if (!error.ok) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", error, "error");
                }
            });
        }
    }
};
RecargaTarjetaPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"] }
];
RecargaTarjetaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recarga-tarjeta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recarga-tarjeta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recarga-tarjeta.page.scss */ "./src/app/pages/recarga-tarjeta/recarga-tarjeta.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"]])
], RecargaTarjetaPage);



/***/ })

}]);
//# sourceMappingURL=pages-recarga-tarjeta-recarga-tarjeta-module-es2015.js.map