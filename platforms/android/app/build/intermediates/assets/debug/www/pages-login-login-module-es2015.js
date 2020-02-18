(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div style=\"margin: 16px;text-align: center;\">\n        <img class=\"img-logo\" src=\"../../../assets/imgs/swappi.svg\">\n       <!-- <h1 class=\"type-text\">Iniciar Sesión</h1>-->\n        <!--<p class=\"type-text\">Por favor diligencia el siguiente campo para poder iniciar sesión.</p>-->\n        <div class=\"input-group mb-3\">\n            <input type=\"number\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cédula\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                    <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n        </div>\n    \n        <div class=\"input-group mb-3\">\n                <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control material\" placeholder=\"Contraseña\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n        </div>\n        <button id=\"btn-Sesion\" (click)=\"sendLogin()\">Iniciar Sesión</button><br><br>\n        <p>ó</p>\n        <button id=\"btn-register\" routerLink=\"/registrar\" routerDirection=\"forward\">Registrar</button>\n        \n        <p style=\"margin-top: 10%;\">Al ingresar aceptas los términos y <br>condiciones de la app</p>\n    </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30%;\n  margin-bottom: 10%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n}\np {\n  font-size: 15px;\n  color: #777777;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  width: 100%;\n  height: 50px;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: #F5F5F5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n#btn-register {\n  color: #0ABB04;\n  font-weight: bold;\n  background-color: transparent;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #0ABB04;\n  border-radius: 50px;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\nion-content {\n  --background: transparent url('fondo-login.png') 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxrZXZ5bi5ERVNLVE9QLUZINU5UNTdcXERvY3VtZW50c1xcQmFja3VwIE1vdmlsXFxTd2FwcGkvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFDUjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDRUo7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLFdBQUE7RUFFQSxpQ0FBQTtBQ0VKO0FETEE7RUFDSSxXQUFBO0VBRUEsaUNBQUE7QUNFSjtBRExBO0VBQ0ksV0FBQTtFQUVBLGlDQUFBO0FDRUo7QURMQTtFQUNJLFdBQUE7RUFFQSxpQ0FBQTtBQ0VKO0FEQUE7RUFDSSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFFQSxpQ0FBQTtBQ0VKO0FEQUE7RUFDSSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFHQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSUE7QUREQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDR0o7QURBQTtFQUNJLGlDQUFBO0FDR0o7QUREQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0lKO0FERkE7RUFDSSw0RUFBQTtFQUNBLFVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG4uaW1nLWxvZ297XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgLy9mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIC8vICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWF0ZXJpYWx7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pY29uLXN0eWxle1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbiNidG4tU2VzaW9ue1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6ICNGNUY1RjU7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxub3V0bGluZTpub25lO1xyXG59XHJcblxyXG4jYnRuLXJlZ2lzdGVye1xyXG4gICAgY29sb3I6ICMwQUJCMDQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgIC8vYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQUJCMDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnR5cGUtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubGluay1jdWVudGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9mb25kby1sb2dpbi5wbmcnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdGVyaWFsIHtcbiAgd2lkdGg6IDEwJTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pY29uLXN0eWxlIHtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBjb2xvcjogIzAwMDtcbn1cblxuI2J0bi1TZXNpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNGNUY1RjU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jYnRuLXJlZ2lzdGVyIHtcbiAgY29sb3I6ICMwQUJCMDQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBBQkIwNDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50eXBlLXRleHQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxpbmstY3VlbnRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDkzRTk7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9mb25kby1sb2dpbi5wbmdcIikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

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






let LoginPage = class LoginPage {
    constructor(_methodsApiRestService, navCtrl) {
        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.datos = null;
    }
    ngOnInit() {
        var id = localStorage.getItem('cedula');
        //console.log(id);
        if (id != "null" && id != null) {
            this.navCtrl.navigateRoot('/inicio');
        }
    }
    login(endpoint, params) {
        this._methodsApiRestService.PostMethod(endpoint, params)
            .subscribe(response => {
            if (typeof response[0] === 'undefined' || response[0] === null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ups!", "Usuario no encontrado", "error");
            }
            else {
                var password = response[0]['us_password'];
                if (this.password != null && this.password != "") {
                    var sw = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["compareSync"](this.password, password);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ups!", "Contraseña vacia", "error");
                }
                if (sw) {
                    localStorage.setItem('name', response[0]['us_name']);
                    localStorage.setItem('email', response[0]['us_email']);
                    localStorage.setItem('cedula', response[0]['us_cedula']);
                    localStorage.setItem('celular', response[0]['us_cellphone']);
                    this.navCtrl.navigateRoot('/inicio');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ups!", "Contraseña Incorrecta", "error");
                }
            }
        }, error => {
            if (!error.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ups!", error, "error");
            }
        });
    }
    sendLogin() {
        let datos = {
            "cedula": this.cedula,
        };
        this.login('/users/FindUser', datos);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_4__["MethodApiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_4__["MethodApiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map