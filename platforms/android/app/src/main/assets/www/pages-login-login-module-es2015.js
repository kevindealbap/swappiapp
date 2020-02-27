(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div style=\"margin: 16px;text-align: center;\">\n        <img class=\"img-logo\" src=\"../../../assets/imgs/swappi.svg\">\n       \n        \n       <!-- <h1 class=\"type-text\">Iniciar Sesión</h1>-->\n        <!--<p class=\"type-text\">Por favor diligencia el siguiente campo para poder iniciar sesión.</p>-->\n        <div class=\"input-group mb-3\">\n            <input type=\"number\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cédula\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                    <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n        </div>\n            \n        <div class=\"input-group mb-3\">\n                <input type=\"password\" [(ngModel)]=\"password\"  class=\"form-control material\" placeholder=\"Contraseña\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n        </div>\n        <button id=\"btn-Sesion\" (click)=\"sendLogin()\">Iniciar Sesión</button><br><br>\n        <p>ó</p>\n        <button id=\"btn-register\" routerLink=\"/registrar\" routerDirection=\"forward\">Registrar</button>\n        \n        <p style=\"margin-top: 10%;\">Al ingresar aceptas los términos y <br>condiciones de la app</p>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30%;\n  margin-bottom: 20%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n}\np {\n  font-size: 15px;\n  color: #777777;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  width: 100%;\n  height: 50px;\n  background: #69B850 no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n#btn-register {\n  color: #69B850;\n  font-weight: bold;\n  background-color: transparent;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #69B850;\n  border-radius: 50px;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\nion-content {\n  --background: transparent url('fondo-login.png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vYzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxJT05JQ1xcc3dhcHBpLWFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUNSO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNFSjtBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDRUo7QURMQTtFQUNJLFdBQUE7RUFFQSxpQ0FBQTtBQ0VKO0FETEE7RUFDSSxXQUFBO0VBRUEsaUNBQUE7QUNFSjtBRExBO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDRUo7QURBQTtFQUNJLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUVBLGlDQUFBO0FDRUo7QURBQTtFQUNJLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0FDR0o7QUREQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNJQTtBRERBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUNHSjtBREFBO0VBQ0ksaUNBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDSUo7QURGQTtFQUNJLDRFQUFBO0VBQ0EsVUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcbi5pbWctbG9nb3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgLy8gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYXRlcmlhbHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmljb24tc3R5bGV7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuI2J0bi1TZXNpb257XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJhY2tncm91bmQ6ICAjNjlCODUwICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbmNvbG9yOndoaXRlO1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbm91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuI2J0bi1yZWdpc3RlcntcclxuICAgIGNvbG9yOiAjNjlCODUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAvL2JveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjlCODUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50eXBlLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxpbmstY3VlbnRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG8tbG9naW4ucG5nJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAxMiU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXRlcmlhbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbi1zdHlsZSB7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbiNidG4tU2VzaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzY5Qjg1MCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNidG4tcmVnaXN0ZXIge1xuICBjb2xvcjogIzY5Qjg1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjlCODUwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnR5cGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubGluay1jdWVudGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwOTNFOTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2ZvbmRvLWxvZ2luLnBuZ1wiKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/method-api-service.service */ "./src/app/services/method-api-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");








let LoginPage = class LoginPage {
    constructor(_methodsApiRestService, navCtrl, auth, auth_guard) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.auth_guard = auth_guard;
        this.datos = null;
    }
    ngOnInit() {
        var id = localStorage.getItem('cedula');
        //console.log(id);
        if (id != "null" && id != null) {
            this.navCtrl.navigateRoot('/inicio');
        }
    }
    /*
    
    
      login(endpoint,params){
    
    
        
    
    
        this._methodsApiRestService.PostXHTML(endpoint,params)
          .subscribe(
            response => {
            this.estado = response[0]['enable'];
           
              if(typeof response[0] === 'undefined' || response[0] === null){
                swal.fire("Ups!", "Usuario no encontrado", "error");
              }
              
            if() {
                  swal.fire("Ups!", "Contraseña vacia", "error");
                }
                if(response !== null) {
                
                  this.navCtrl.navigateRoot('/inicio');
                }else{
                  swal.fire("Ups!", "Contraseña Incorrecta", "error");
                }
              },
              
              error => {
                if (!error.ok) {
                  swal.fire("Favor digitar datos correctamente", error, "warning");
                }
              }
          );
          
      } */
    sendLogin() {
        var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["genSaltSync"](10);
        if (this.cedula == undefined || this.password == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Atencion", "Favor digitar correctamente el usuario y/o contraseña", "warning");
        }
        else {
            var cedulaUser = this.cedula.toString() + ":" + this.password.toString();
            var passscrypt = btoa(cedulaUser);
            console.log(cedulaUser);
            console.log(passscrypt);
            let datos = {
                "documentId": this.cedula,
                "password": passscrypt,
            };
            // this.login('/found-user',datos);
            this.auth.authenticate(this.cedula, this.password).subscribe(response => {
                if (response != null) {
                    localStorage.setItem('name', response['user']['names']);
                    localStorage.setItem('idUser', response['user']['id']);
                    localStorage.setItem('lastNames', response['user']['lastNames']);
                    localStorage.setItem('email', response['user']['email']);
                    localStorage.setItem('cedula', response['user']['documentId']);
                    localStorage.setItem('celular', response['user']['cellPhone']);
                    this.navCtrl.navigateRoot('/inicio');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ups!", "Contraseña Incorrecta", "error");
                }
            }, error => {
                if (!error.ok) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Favor digitar datos correctamente", error, "warning");
                }
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_4__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_4__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/auth-gaurd.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-gaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let AuthGaurdService = class AuthGaurdService {
    constructor(router, authService, navCtrl) {
        this.router = router;
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.navCtrl.navigateRoot('/login');
            return false;
        }
    }
};
AuthGaurdService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AuthGaurdService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map