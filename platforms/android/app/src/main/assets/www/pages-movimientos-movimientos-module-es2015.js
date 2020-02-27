(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movimientos-movimientos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"color: #0093E9;\">\n    <ion-title>Movimientos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"--background: rgb(247, 241, 241);\">\n\n  <div *ngFor=\"let c of arregloDatos\">\n\n    <br>\n    <div class=\"col-md-12\">\n      <p style=\"font-size: 12px;color: gray;margin: 0;\">{{ c.fecha }}</p>\n      <p style=\"color: #0093E9;font-weight: bold;margin: 0;\">{{ c.hora }}</p>\n    </div>\n\n    <ion-card style=\"margin: 0;background: white;color: gray;font-weight: normal;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">Transacción {{ c.ntransaccion }}</ion-col>\n        <ion-col size=\"12\">Transferencia de puntos cuenta Nª {{c.ntarjeta}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-card>\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/pages/movimientos/movimientos-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MovimientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPageRoutingModule", function() { return MovimientosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movimientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movimientos.page */ "./src/app/pages/movimientos/movimientos.page.ts");




const routes = [
    {
        path: '',
        component: _movimientos_page__WEBPACK_IMPORTED_MODULE_3__["MovimientosPage"]
    }
];
let MovimientosPageRoutingModule = class MovimientosPageRoutingModule {
};
MovimientosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MovimientosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.module.ts ***!
  \*********************************************************/
/*! exports provided: MovimientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPageModule", function() { return MovimientosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movimientos-routing.module */ "./src/app/pages/movimientos/movimientos-routing.module.ts");
/* harmony import */ var _movimientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movimientos.page */ "./src/app/pages/movimientos/movimientos.page.ts");







let MovimientosPageModule = class MovimientosPageModule {
};
MovimientosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MovimientosPageRoutingModule"]
        ],
        declarations: [_movimientos_page__WEBPACK_IMPORTED_MODULE_6__["MovimientosPage"]]
    })
], MovimientosPageModule);



/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmltaWVudG9zL21vdmltaWVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.page.ts ***!
  \*******************************************************/
/*! exports provided: MovimientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPage", function() { return MovimientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");




let MovimientosPage = class MovimientosPage {
    constructor(navCtrl, _methodApi) {
        this.navCtrl = navCtrl;
        this._methodApi = _methodApi;
        this.data = [];
        this.arregloDatos = [];
    }
    ngOnInit() {
        this.service('/recharge-list');
    }
    service(endpoint) {
        this._methodApi.GetMethod(endpoint).subscribe(r => {
            if (r != null) {
                for (let c in r) {
                    let fecha = r[c].createdOn;
                    fecha = fecha.split('T');
                    let hora = fecha[1];
                    hora = hora.split(':');
                    hora = hora[0] + ':' + hora[1];
                    fecha = fecha[0];
                    fecha = fecha.split('-');
                    fecha = fecha[2] + '/' + fecha[1] + '/' + fecha[0];
                    let datos = {
                        ntransaccion: r[c].id,
                        ntarjeta: r[c].card.number,
                        cantidad: r[c].quantity,
                        fecha: fecha,
                        hora: hora
                    };
                    this.arregloDatos.push(datos);
                }
                console.log(this.arregloDatos);
            }
        });
    }
};
MovimientosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__["MethodApiServiceService"] }
];
MovimientosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movimientos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movimientos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movimientos.page.scss */ "./src/app/pages/movimientos/movimientos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__["MethodApiServiceService"]])
], MovimientosPage);



/***/ }),

/***/ "./src/app/services/method-api-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/method-api-service.service.ts ***!
  \********************************************************/
/*! exports provided: MethodApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodApiServiceService", function() { return MethodApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");




let MethodApiServiceService = class MethodApiServiceService {
    constructor(http) {
        this.http = http;
        //domain="http://44.228.37.182:8080/api/v1"; //Produccion
        this.domain = "http://192.168.2.153:8084/api"; //Desarrollo
    }
    PostMethod(endpoint, params, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        //console.log(domain+endpoint);
        return this.http.post(domain + endpoint, JSON.stringify(params), { headers })
            .map(res => res);
    }
    PutMethod(endpoint, params, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        //console.log(domain+endpoint);
        return this.http.put(domain + endpoint, JSON.stringify(params), { headers })
            .map(res => res);
    }
    PostXHTML(endpoint, params, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        return this.http.post(domain + endpoint, (params), { headers })
            .map(res => res);
    }
    GetMethod(endpoint, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        return this.http.get(domain + endpoint, { headers })
            .map(res => res);
    }
};
MethodApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MethodApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MethodApiServiceService);



/***/ })

}]);
//# sourceMappingURL=pages-movimientos-movimientos-module-es2015.js.map