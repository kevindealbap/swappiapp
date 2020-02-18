(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-registrar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar/registrar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar/registrar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div style=\"margin: 16px;text-align: center;margin-top: 35%;\">\n        <h1 class=\"type-text\">Regístrate</h1>\n        <p class=\"type-text\">Ingresa todos los datos requeridos</p>\n        <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control material\" placeholder=\"Nombre\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n        \n          <div class=\"input-group mb-3 content\">\n              <input type=\"number\" [(ngModel)]=\"celular\" class=\"form-control material\" placeholder=\"Celular\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n            </div>\n    \n        <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cédula\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                    <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n        </div>\n    \n        <div class=\"input-group mb-3 content\">\n            <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control material\" placeholder=\"Correo eletrónico\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n    \n        <div class=\"input-group mb-3 content\">\n                <input type=\"password\" [(ngModel)]=\"password\" style=\"background: #F5F5F5 0% 0% no-repeat padding-box;\" class=\"form-control material\" placeholder=\"Contraseña\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n        </div>\n        <button id=\"btn-Sesion\" (click)=\"sendRegistro()\">CONTINUAR</button>\n    </div>\n</ion-content>");

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

/***/ "./src/app/pages/registrar/registrar-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/registrar/registrar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageRoutingModule", function() { return RegistrarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar.page */ "./src/app/pages/registrar/registrar.page.ts");




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarPage"]
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registrar/registrar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/registrar/registrar.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function() { return RegistrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-routing.module */ "./src/app/pages/registrar/registrar-routing.module.ts");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar.page */ "./src/app/pages/registrar/registrar.page.ts");







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarPageRoutingModule"]
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
    })
], RegistrarPageModule);



/***/ }),

/***/ "./src/app/pages/registrar/registrar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/registrar/registrar.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n  font-weight: bold;\n}\np {\n  font-size: 15px;\n  color: #777777;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  height: auto;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  width: 100%;\n  height: 50px;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: #F5F5F5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\nion-content {\n  --background: transparent url('fondo-registrer.png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmFyL0M6XFxVc2Vyc1xca2V2eW4uREVTS1RPUC1GSDVOVDU3XFxEb2N1bWVudHNcXEJhY2t1cCBNb3ZpbFxcU3dhcHBpL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cmFyXFxyZWdpc3RyYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXIvcmVnaXN0cmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUNSO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNHSjtBRERBO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDR0o7QUROQTtFQUNJLFdBQUE7RUFFQSxpQ0FBQTtBQ0dKO0FETkE7RUFDSSxXQUFBO0VBRUEsaUNBQUE7QUNHSjtBRE5BO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDR0o7QUREQTtFQUNJLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxpQ0FBQTtBQ0dKO0FEREE7RUFDSSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFHQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0E7QURIQTtFQUNJLGlDQUFBO0FDTUo7QURKQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ09KO0FETEE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ1FKO0FETkE7RUFDSSxnRkFBQTtFQUNBLFVBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcbi5pbWctbG9nb3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWF0ZXJpYWx7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pY29uLXN0eWxle1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbiNidG4tU2VzaW9ue1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6ICNGNUY1RjU7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxub3V0bGluZTpub25lO1xyXG59XHJcbi50eXBlLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxpbmstY3VlbnRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGhlaWdodDogMTAlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2ZvbmRvLXJlZ2lzdHJlci5wbmcnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAxMiU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0ZXJpYWwge1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbi1zdHlsZSB7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbiNidG4tU2VzaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBBQkYwNCAwJSwgIzA5QTYwMyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjRjVGNUY1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnR5cGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubGluay1jdWVudGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwOTNFOTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9mb25kby1yZWdpc3RyZXIucG5nXCIpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/registrar/registrar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registrar/registrar.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPage", function() { return RegistrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





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
        var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["genSaltSync"](10);
        var hash = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hashSync"](this.password, salt);
        let datos = {
            "name": this.name,
            "celular": this.celular,
            "cedula": this.cedula,
            "email": this.email,
            "password": hash
        };
        this._methodsApiRestService.PostMethod('/users/create', datos)
            .subscribe(response => {
            if (response) {
                localStorage.setItem('name', this.name);
                localStorage.setItem('email', this.email);
                localStorage.setItem('cedula', this.cedula.toString());
                localStorage.setItem('celular', this.celular.toString());
                this.navCtrl.navigateRoot('/inicio');
            }
            else {
            }
        }, error => {
            //console.log(error);
            if (!error.ok) {
            }
        });
    }
};
RegistrarPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RegistrarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registrar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar/registrar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registrar.page.scss */ "./src/app/pages/registrar/registrar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_3__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], RegistrarPage);



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
    //domain="http://localhost/api/v1";  //Desarrollo
    constructor(http) {
        this.http = http;
        this.domain = "http://44.228.37.182:8080/api/v1"; //Produccion
    }
    PostMethod(endpoint, params, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        //console.log(domain+endpoint);
        return this.http.post(domain + endpoint, JSON.stringify(params), { headers })
            .map(res => res);
    }
    GetMethod(endpoint, domain = this.domain) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
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
//# sourceMappingURL=pages-registrar-registrar-module-es2015.js.map