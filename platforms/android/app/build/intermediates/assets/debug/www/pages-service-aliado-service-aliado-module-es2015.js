(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-aliado-service-aliado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\" defaultHref=\"inicio\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Puntos Saludables</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\">\n    <div style=\"margin-left: auto;margin-right: auto;text-align: center;\">\n      <img src=\"../../assets/imgs/puntossaludables@2x.png\" width=\"200\">\n    </div>\n    <div style=\"margin-left: auto;margin-right: auto;text-align: center;\">\n      <p>Ingresa correctamente los datos requeridos</p>\n      <div class=\"input-group mb-3\">\n          <input type=\"number\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cedula\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n    </div>\n    <button id=\"btn-Sesion\" (click)=\"vincular()\">VINCULAR ALIADO</button>\n    <p>Activa tu cuenta de Puntos<br> Colombia registrándote (Aquí)</p>\n    </div>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/service-aliado/service-aliado-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/service-aliado/service-aliado-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceAliadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAliadoPageRoutingModule", function() { return ServiceAliadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_aliado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-aliado.page */ "./src/app/pages/service-aliado/service-aliado.page.ts");




const routes = [
    {
        path: '',
        component: _service_aliado_page__WEBPACK_IMPORTED_MODULE_3__["ServiceAliadoPage"]
    }
];
let ServiceAliadoPageRoutingModule = class ServiceAliadoPageRoutingModule {
};
ServiceAliadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceAliadoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/service-aliado/service-aliado.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/service-aliado/service-aliado.module.ts ***!
  \***************************************************************/
/*! exports provided: ServiceAliadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAliadoPageModule", function() { return ServiceAliadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-aliado-routing.module */ "./src/app/pages/service-aliado/service-aliado-routing.module.ts");
/* harmony import */ var _service_aliado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-aliado.page */ "./src/app/pages/service-aliado/service-aliado.page.ts");







let ServiceAliadoPageModule = class ServiceAliadoPageModule {
};
ServiceAliadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceAliadoPageRoutingModule"]
        ],
        declarations: [_service_aliado_page__WEBPACK_IMPORTED_MODULE_6__["ServiceAliadoPage"]]
    })
], ServiceAliadoPageModule);



/***/ }),

/***/ "./src/app/pages/service-aliado/service-aliado.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/service-aliado/service-aliado.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30%;\n  margin-bottom: 10%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n  font-weight: bold;\n}\np {\n  font-size: 15px;\n  color: #777777;\n  font-family: \"Roboto\", sans-serif;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  margin-top: 10%;\n  margin-bottom: 8%;\n  width: 100%;\n  height: 50px;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: #F5F5F5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS1hbGlhZG8vQzpcXFVzZXJzXFxrZXZ5bi5ERVNLVE9QLUZINU5UNTdcXERvY3VtZW50c1xcQmFja3VwIE1vdmlsXFxTd2FwcGkvc3JjXFxhcHBcXHBhZ2VzXFxzZXJ2aWNlLWFsaWFkb1xcc2VydmljZS1hbGlhZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlLWFsaWFkby9zZXJ2aWNlLWFsaWFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFDUjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ0dKO0FEREE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7QUNJSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0FDSUo7QUROQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtBQ0lKO0FETkE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7QUNJSjtBREZBO0VBQ0ksVUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNLSjtBREhBO0VBQ0ksdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7QUNNSjtBREpBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxR0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ09BO0FESkE7RUFDSSxpQ0FBQTtBQ09KO0FETEE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2UtYWxpYWRvL3NlcnZpY2UtYWxpYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG4uaW1nLWxvZ297XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWF0ZXJpYWx7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmljb24tc3R5bGV7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuI2J0bi1TZXNpb257XHJcbm1hcmdpbi10b3A6IDEwJTtcclxubWFyZ2luLWJvdHRvbTogOCU7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwQUJGMDQgMCUsICMwOUE2MDMgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5vcGFjaXR5OiAxO1xyXG5jb2xvcjogI0Y1RjVGNTtcclxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcbi50eXBlLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxpbmstY3VlbnRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuLmltZy1sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMTIlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXRlcmlhbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbi1zdHlsZSB7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbiNidG4tU2VzaW9uIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBBQkYwNCAwJSwgIzA5QTYwMyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjRjVGNUY1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnR5cGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubGluay1jdWVudGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwOTNFOTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/service-aliado/service-aliado.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/service-aliado/service-aliado.page.ts ***!
  \*************************************************************/
/*! exports provided: ServiceAliadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAliadoPage", function() { return ServiceAliadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






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
            "ca_cantPuntos": 574,
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
        }, error => {
            if (!error.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
        });
    }
};
ServiceAliadoPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ServiceAliadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-aliado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-aliado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-aliado.page.scss */ "./src/app/pages/service-aliado/service-aliado.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ServiceAliadoPage);



/***/ })

}]);
//# sourceMappingURL=pages-service-aliado-service-aliado-module-es2015.js.map