(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-registrar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar/registrar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar/registrar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div style=\"margin: 16px;text-align: center;margin-top: 35%;\">\n        <h1 class=\"type-text\">Regístrate</h1>\n        <p class=\"type-text\">Ingresa todos los datos requeridos</p>\n        <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control material\" placeholder=\"Nombres\" required maxlength=\"16\"> \n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n        \n          <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"lastname\" class=\"form-control material\" placeholder=\"Apellidos\" maxlength=\"16\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n\n          \n          <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cedula\" required maxlength=\"11\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"input-group mb-3 content\">\n            <input type=\"text\" [(ngModel)]=\"celular\" class=\"form-control material\" placeholder=\"Celular\" required maxlength=\"10\"> \n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n\n          \n\n\n    \n        <div class=\"input-group mb-3 content\">\n            <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control material\" placeholder=\"Correo eletrónico\" required>\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n    \n        <div class=\"input-group mb-3 content\">\n                <input type=\"password\" [(ngModel)]=\"password\" style=\"background: #F5F5F5 0% 0% no-repeat padding-box;\" class=\"form-control material\" placeholder=\"Contraseña\" minlength=\"6\" maxlength=\"14\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\" requr>\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n        </div>\n        \n        <div class=\"input-group mb-3 content\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"termsAgree\"></ion-checkbox>\n            <label style=\"margin-left: 2%;margin-top: 3px;\">Acepto los <u routerLink=\"/terminos\" routerDirection=\"forward\" aria-required=\"true\">Términos y condiciones</u></label> \n             \n      </div>\n      \n        <button id=\"btn-Sesion\" (click)=\"sendRegistro($event)\">CONTINUAR</button>\n    </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n  font-weight: bold;\n}\np {\n  font-size: 15px;\n  color: #777777;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  height: auto;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  width: 100%;\n  height: 50px;\n  background: #69B850 100% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\nion-content {\n  --background: transparent url('fondo-registrer.png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmFyL2M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcSU9OSUNcXHN3YXBwaS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RyYXJcXHJlZ2lzdHJhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBFQUFBO0FBQ1I7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREE7RUFDSSxXQUFBO0VBRUEsaUNBQUE7QUNHSjtBRE5BO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDR0o7QUROQTtFQUNJLFdBQUE7RUFFQSxpQ0FBQTtBQ0dKO0FETkE7RUFDSSxXQUFBO0VBRUEsaUNBQUE7QUNHSjtBRERBO0VBQ0ksVUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlDQUFBO0FDR0o7QUREQTtFQUNJLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0FDSUo7QURGQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNLQTtBREhBO0VBQ0ksaUNBQUE7QUNNSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDT0o7QURMQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDUUo7QUROQTtFQUNJLGdGQUFBO0VBQ0EsVUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmFyL3JlZ2lzdHJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYXRlcmlhbHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmljb24tc3R5bGV7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuI2J0bi1TZXNpb257XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJhY2tncm91bmQ6ICM2OUI4NTAgMTAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5vdXRsaW5lOm5vbmU7XHJcbn1cclxuLnR5cGUtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubGluay1jdWVudGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG8tcmVnaXN0cmVyLnBuZycpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuLmltZy1sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXRlcmlhbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pY29uLXN0eWxlIHtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBjb2xvcjogIzAwMDtcbn1cblxuI2J0bi1TZXNpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjNjlCODUwIDEwMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udHlwZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5saW5rLWN1ZW50YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMDA5M0U5O1xuICBvcGFjaXR5OiAxO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2ZvbmRvLXJlZ2lzdHJlci5wbmdcIikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let RegistrarPage = class RegistrarPage {
    //fin variables
    constructor(_methodsApiRestService, navCtrl) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.verifyStatus = null;
    }
    ngOnInit() {
    }
    sendRegistro($event) {
        if (this.cedula == undefined || this.name == undefined || this.password == undefined || this.celular == undefined) {
            console.log("error");
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Atencion", "Verifique que digitó bien los datos requeridos", 'warning');
        }
        var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["genSaltSync"](10);
        var hash = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hashSync"](this.password, salt);
        error => {
        };
        /*  if(this.name == null || this.celular == null || this.password == null  || this.celular == null){
       
           Swal.fire("Atencion", "Para continuar debe aceptar los terminos",'warning')
         }
        */
        if (this.termsAgree == null || this.termsAgree == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Atencion", "Para continuar debe aceptar los terminos", 'warning');
        }
        var check = this.termsAgree.toString();
        console.log(check);
        if (this.termsAgree == true) {
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Evento de Aplicacion", "Registro exitoso ", 'success');
                    /*  localStorage.setItem('name', this.name);
                     localStorage.setItem('lastNames', this.lastname);
                     localStorage.setItem('email', this.email);
                     localStorage.setItem('cedula', this.cedula.toString());
                     localStorage.setItem('celular', this.celular.toString());
                     localStorage.setItem('idUser', response['id']); */
                    this.navCtrl.navigateRoot('/login');
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Atencion", "Para continuar debe aceptar los terminos", 'warning');
        }
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



/***/ })

}]);
//# sourceMappingURL=pages-registrar-registrar-module-es2015.js.map