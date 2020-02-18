(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seleccion-aliado-seleccion-aliado-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      Seleccionar Aliados\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div style=\"margin: 16px;text-align: center;\">\n      <div class=\"input-group mb-3 content\">\n          <input type=\"text\"  class=\"form-control material\" placeholder=\"Buscar\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n      </div>\n    </div>\n    <ion-grid *ngIf=\"aliados.length > 0\" class=\"ion-padding\">\n      <ion-row *ngFor=\"let item of aliados\">\n        <ion-col size=\"6\">\n          <ion-card class=\"color-card\" [routerLink]=\"['/service-aliado']\" routerDirection=\"root\">\n            <ion-card-header>\n              <ion-card-subtitle class=\"grises\"><img src=\"../../../assets/imgs/{{item.al_image}}\"></ion-card-subtitle>\n              <ion-card-title style=\"font-size: 13px;font-weight: bold;\" >{{item.al_name}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts ***!
          \***************************************************************************/
        /*! exports provided: SeleccionAliadoPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPageRoutingModule", function () { return SeleccionAliadoPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seleccion-aliado.page */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts");
            var routes = [
                {
                    path: '',
                    component: _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_3__["SeleccionAliadoPage"]
                }
            ];
            var SeleccionAliadoPageRoutingModule = /** @class */ (function () {
                function SeleccionAliadoPageRoutingModule() {
                }
                return SeleccionAliadoPageRoutingModule;
            }());
            SeleccionAliadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], SeleccionAliadoPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.module.ts ***!
          \*******************************************************************/
        /*! exports provided: SeleccionAliadoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPageModule", function () { return SeleccionAliadoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _seleccion_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seleccion-aliado-routing.module */ "./src/app/pages/seleccion-aliado/seleccion-aliado-routing.module.ts");
            /* harmony import */ var _seleccion_aliado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seleccion-aliado.page */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts");
            var SeleccionAliadoPageModule = /** @class */ (function () {
                function SeleccionAliadoPageModule() {
                }
                return SeleccionAliadoPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n@charset \"UTF-8\";\n.header {\n  text-align: center;\n}\n::-webkit-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\n.material {\n  width: 10%;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: #0093E9;\n}\nion-content {\n  --background: rgb(248, 244, 244);\n}\n.color-card {\n  --background:#fff;\n}\n.grises img {\n  filter: url(\"#grayscale\");\n  /* Versión SVG para IE10, Chrome 17, FF3.5, Safari 5.2 and Opera 11.6 */\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  /* Para cuando es estándar funcione en todos */\n  -webkit-filter: Gray();\n          filter: Gray();\n  /* IE4-8 and 9 */\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWNjaW9uLWFsaWFkby9DOlxcVXNlcnNcXGtldnluLkRFU0tUT1AtRkg1TlQ1N1xcRG9jdW1lbnRzXFxCYWNrdXAgTW92aWxcXFN3YXBwaS9zcmNcXGFwcFxccGFnZXNcXHNlbGVjY2lvbi1hbGlhZG9cXHNlbGVjY2lvbi1hbGlhZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY2Npb24tYWxpYWRvL3NlbGVjY2lvbi1hbGlhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSwwRUFBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNJLGtCQUFBO0FDRUo7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRUo7QURMQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRUo7QURMQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRUo7QURMQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRUo7QURBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDR0o7QURBQTtFQUNJLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNHSjtBREFBO0VBQ0ksdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7QUNHSjtBRERBO0VBQ0ksZ0NBQUE7QUNJSjtBREZBO0VBQ0MsaUJBQUE7QUNLRDtBREhBO0VBQ0kseUJBQUE7RUFBMkIsdUVBQUE7RUFDM0IsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUF5Qiw4Q0FBQTtFQUN6QixzQkFBQTtVQUFBLGNBQUE7RUFBZ0IsZ0JBQUE7RUFNaEIseUJBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjY2lvbi1hbGlhZG8vc2VsZWNjaW9uLWFsaWFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWx7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDkzRTk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmljb24tc3R5bGV7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6ICMwMDkzRTk7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDgsIDI0NCwgMjQ0KTtcclxufVxyXG4uY29sb3ItY2FyZHtcclxuIC0tYmFja2dyb3VuZDojZmZmO1xyXG59XHJcbi5ncmlzZXMgaW1nIHtcclxuICAgIGZpbHRlcjogdXJsKCcjZ3JheXNjYWxlJyk7IC8qIFZlcnNpw7NuIFNWRyBwYXJhIElFMTAsIENocm9tZSAxNywgRkYzLjUsIFNhZmFyaSA1LjIgYW5kIE9wZXJhIDExLjYgKi9cclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogUGFyYSBjdWFuZG8gZXMgZXN0w6FuZGFyIGZ1bmNpb25lIGVuIHRvZG9zICovXHJcbiAgICBmaWx0ZXI6IEdyYXkoKTsgLyogSUU0LTggYW5kIDkgKi9cclxuICAgIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIH1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOTNFOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLm1hdGVyaWFsIHtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBjb2xvcjogIzAwOTNFOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbi1zdHlsZSB7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgY29sb3I6ICMwMDkzRTk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDQsIDI0NCk7XG59XG5cbi5jb2xvci1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmY7XG59XG5cbi5ncmlzZXMgaW1nIHtcbiAgZmlsdGVyOiB1cmwoXCIjZ3JheXNjYWxlXCIpO1xuICAvKiBWZXJzacOzbiBTVkcgcGFyYSBJRTEwLCBDaHJvbWUgMTcsIEZGMy41LCBTYWZhcmkgNS4yIGFuZCBPcGVyYSAxMS42ICovXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAvKiBQYXJhIGN1YW5kbyBlcyBlc3TDoW5kYXIgZnVuY2lvbmUgZW4gdG9kb3MgKi9cbiAgZmlsdGVyOiBHcmF5KCk7XG4gIC8qIElFNC04IGFuZCA5ICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/seleccion-aliado/seleccion-aliado.page.ts ***!
          \*****************************************************************/
        /*! exports provided: SeleccionAliadoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionAliadoPage", function () { return SeleccionAliadoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
            var SeleccionAliadoPage = /** @class */ (function () {
                function SeleccionAliadoPage(_methodsApiRestService, navCtrl) {
                    this._methodsApiRestService = _methodsApiRestService;
                    this.navCtrl = navCtrl;
                    this.aliados = [];
                }
                SeleccionAliadoPage.prototype.ngOnInit = function () {
                    this.getAliados('/aliados/aliadosList');
                };
                SeleccionAliadoPage.prototype.getAliados = function (endpoint) {
                    var _this = this;
                    this._methodsApiRestService.GetMethod(endpoint)
                        .subscribe(function (response) {
                        _this.aliados = response;
                    }, function (error) {
                        if (!error.ok) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Ups!", "Error en Petición", "error");
                        }
                    });
                };
                return SeleccionAliadoPage;
            }());
            SeleccionAliadoPage.ctorParameters = function () { return [
                { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
            ]; };
            SeleccionAliadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-seleccion-aliado',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seleccion-aliado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-aliado/seleccion-aliado.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seleccion-aliado.page.scss */ "./src/app/pages/seleccion-aliado/seleccion-aliado.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
            ], SeleccionAliadoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-seleccion-aliado-seleccion-aliado-module-es2015.js.map
//# sourceMappingURL=pages-seleccion-aliado-seleccion-aliado-module-es5.js.map
//# sourceMappingURL=pages-seleccion-aliado-seleccion-aliado-module-es5.js.map