(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seleccion-aliado-seleccion-aliado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n      Seleccionar Aliados\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"margin: 16px;text-align: center;\">\r\n      <div class=\"input-group mb-3 content\">\r\n          <input type=\"text\"  class=\"form-control material\" placeholder=\"Buscar\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <ion-grid *ngIf=\"aliados.length > 0\" class=\"ion-padding\">\r\n      <ion-row *ngFor=\"let item of aliados\">\r\n        <ion-col size=\"6\">\r\n          <ion-card class=\"color-card\" [routerLink]=\"['/service-aliado']\" routerDirection=\"root\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"grises\"><img src=\"../../../assets/imgs/puntossaludables.png\"></ion-card-subtitle>\r\n              <ion-card-title style=\"font-size: 13px;font-weight: bold;\" >{{item.name}}</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SeleccionAliadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPageRoutingModule", function() { return SeleccionAliadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seleccion-aliado.page */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts");




const routes = [
    {
        path: '',
        component: _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_3__["SeleccionAliadoPage"]
    }
];
let SeleccionAliadoPageRoutingModule = class SeleccionAliadoPageRoutingModule {
};
SeleccionAliadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeleccionAliadoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.module.ts ***!
  \*******************************************************************/
/*! exports provided: SeleccionAliadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPageModule", function() { return SeleccionAliadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seleccion_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seleccion-aliado-routing.module */ "./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts");
/* harmony import */ var _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seleccion-aliado.page */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts");







let SeleccionAliadoPageModule = class SeleccionAliadoPageModule {
};
SeleccionAliadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seleccion_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeleccionAliadoPageRoutingModule"]
        ],
        declarations: [_seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_6__["SeleccionAliadoPage"]]
    })
], SeleccionAliadoPageModule);



/***/ }),

/***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n@charset \"UTF-8\";\n.header {\n  text-align: center;\n}\n::-webkit-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\n.material {\n  width: 10%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: #0093E9;\n}\nion-content {\n  --background: rgb(248, 244, 244);\n}\n.color-card {\n  --background:#fff;\n}\n.grises img {\n  filter: url(\"#grayscale\");\n  /* Versión SVG para IE10, Chrome 17, FF3.5, Safari 5.2 and Opera 11.6 */\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  /* Para cuando es estándar funcione en todos */\n  -webkit-filter: Gray();\n          filter: Gray();\n  /* IE4-8 and 9 */\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWNjaW9uLWFsaWFkby9jOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXElPTklDXFxzd2FwcGktYXBwL3NyY1xcYXBwXFxwYWdlc1xcc2VsZWNjaW9uLWFsaWFkb1xcc2VsZWNjaW9uLWFsaWFkby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbGVjY2lvbi1hbGlhZG8vc2VsZWNjaW9uLWFsaWFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLDBFQUFBO0FDQVIsZ0JBQWdCO0FEQ2hCO0VBQ0ksa0JBQUE7QUNFSjtBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNFSjtBRExBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNFSjtBRExBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNFSjtBRExBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNFSjtBREFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNHSjtBREFBO0VBQ0ksVUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0dKO0FEQUE7RUFDSSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREE7RUFDSSxnQ0FBQTtBQ0lKO0FERkE7RUFDQyxpQkFBQTtBQ0tEO0FESEE7RUFDSSx5QkFBQTtFQUEyQix1RUFBQTtFQUMzQiwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQXlCLDhDQUFBO0VBQ3pCLHNCQUFBO1VBQUEsY0FBQTtFQUFnQixnQkFBQTtFQUVoQixpQ0FBQTtFQUlBLHlCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY2Npb24tYWxpYWRvL3NlbGVjY2lvbi1hbGlhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLm1hdGVyaWFse1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pY29uLXN0eWxle1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDQsIDI0NCk7XHJcbn1cclxuLmNvbG9yLWNhcmR7XHJcbiAtLWJhY2tncm91bmQ6I2ZmZjtcclxufVxyXG4uZ3Jpc2VzIGltZyB7XHJcbiAgICBmaWx0ZXI6IHVybCgnI2dyYXlzY2FsZScpOyAvKiBWZXJzacOzbiBTVkcgcGFyYSBJRTEwLCBDaHJvbWUgMTcsIEZGMy41LCBTYWZhcmkgNS4yIGFuZCBPcGVyYSAxMS42ICovXHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIFBhcmEgY3VhbmRvIGVzIGVzdMOhbmRhciBmdW5jaW9uZSBlbiB0b2RvcyAqL1xyXG4gICAgZmlsdGVyOiBHcmF5KCk7IC8qIElFNC04IGFuZCA5ICovXHJcbiAgICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDkzRTk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5tYXRlcmlhbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwMDkzRTk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmljb24tc3R5bGUge1xuICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGNvbG9yOiAjMDA5M0U5O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ0LCAyNDQpO1xufVxuXG4uY29sb3ItY2FyZCB7XG4gIC0tYmFja2dyb3VuZDojZmZmO1xufVxuXG4uZ3Jpc2VzIGltZyB7XG4gIGZpbHRlcjogdXJsKFwiI2dyYXlzY2FsZVwiKTtcbiAgLyogVmVyc2nDs24gU1ZHIHBhcmEgSUUxMCwgQ2hyb21lIDE3LCBGRjMuNSwgU2FmYXJpIDUuMiBhbmQgT3BlcmEgMTEuNiAqL1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAtbXMtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgLyogUGFyYSBjdWFuZG8gZXMgZXN0w6FuZGFyIGZ1bmNpb25lIGVuIHRvZG9zICovXG4gIGZpbHRlcjogR3JheSgpO1xuICAvKiBJRTQtOCBhbmQgOSAqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts ***!
  \*****************************************************************/
/*! exports provided: SeleccionAliadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPage", function() { return SeleccionAliadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
};
SeleccionAliadoPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SeleccionAliadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccion-aliado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seleccion-aliado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seleccion-aliado.page.scss */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], SeleccionAliadoPage);



/***/ })

}]);
//# sourceMappingURL=pages-seleccion-aliado-seleccion-aliado-module-es2015.js.map