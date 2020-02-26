function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>\r\n        Mi perfil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n  <div style=\"width: 100%;\">\r\n    <img src=\"https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg\" style=\"z-index:2;position:absolute; background-color: transparent;margin-top: 5%;margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\" class=\"btn btn-primary btn-circle btn-xl\" (click)=\"uploadFile()\">\r\n\r\n  </div>\r\n  <img src=\"../../../assets/imgs/sound-wave2.png\" style=\"opacity: 1;width: 100%;z-index:0;position:absolute;height: 16%;\">\r\n  <img src=\"../../../assets/imgs/sound-wave.png\" style=\"opacity: 1;width: 100%;z-index:1;position:absolute;height: 14%;\">\r\n\r\n  <div style=\"width: 100%;text-align: center;\">\r\n    <h1 style=\"background-color: transparent;margin-top: 40%;font-family: 'Roboto', sans-serif;font-size: 24px;\">{{name}} </h1>\r\n    <p style=\"text-align: center;\r\n    font: Light 15px/24px Roboto;\r\n    letter-spacing: 0;\r\n    color: #777777;\r\n    opacity: 1;\">Presiona en las casillas para editar los campos</p>\r\n  </div>\r\n  <div style=\"margin: 16px;text-align: center;\">\r\n    <div class=\"input-group mb-3 content\">\r\n        <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control material\" placeholder=\"Nombres\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"input-group mb-3 content\">\r\n      <input type=\"text\" [(ngModel)]=\"lastname\" class=\"form-control material\" placeholder=\"Apellidos\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n  </div>\r\n    <div class=\"input-group mb-3 content\">\r\n        <input type=\"number\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cedula\" disabled>\r\n        <div class=\"input-group-prepend\" style=\" background-color: transparent;\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"input-group mb-3 content\">\r\n        <input type=\"number\"  class=\"form-control material\" [(ngModel)]=\"celular\" placeholder=\"Celular\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"input-group mb-3 content\">\r\n        <input type=\"email\"  class=\"form-control material\" placeholder=\"Correo\" [(ngModel)]=\"correo\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div>\r\n   <!--  <div class=\"input-group mb-3 content\">\r\n        <input type=\"password\"  class=\"form-control material\" placeholder=\"Password\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"input-group mb-3 content\">\r\n        <input type=\"text\"  [(ngModel)]=\"direccion\" class=\"form-control material\" placeholder=\"Dirección\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3 content\">\r\n<ion-label> Fecha de Nacimiento</ion-label>\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3 content\">\r\n    \r\n        <input type=\"date\"  class=\"form-control material\" [(ngModel)]=\"fecha\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n   <!--  <div class=\"input-group mb-3 content\">\r\n        <ion-select placeholder=\"Estado civil\" class=\"form-control material\" >\r\n            <ion-select-option value=\"s\">Soltero/a</ion-select-option>\r\n            <ion-select-option value=\"c\">Casado/a</ion-select-option>\r\n            <ion-select-option value=\"u\">Union Libre</ion-select-option>\r\n            <ion-select-option value=\"v\">Viudo/a</ion-select-option>\r\n          </ion-select>\r\n          <div class=\"input-group-text icon-style\" style=\"background-color: transparent;\">\r\n            <i class=\"fa fa-genderless\" aria-hidden=\"true\"></i>\r\n        </div>\r\n    </div> -->\r\n\r\n    <button class=\"btn-save\" (click)=\"registrar()\">GUARDAR</button>\r\n  </div>\r\n    \r\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
  /*!***************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
    \***************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/map */
    "./node_modules/rxjs-compat/_esm2015/operator/map.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"]; //# sourceMappingURL=map.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
    \***********************************************************/

  /*! exports provided: map */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function map(project, thisArg) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
    } //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./src/app/pages/perfil/perfil-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.module.ts ***!
    \***********************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/pages/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.my-custom-menu {\n  --width: 500px;\n}\n.header {\n  text-align: center;\n}\n::-webkit-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\n.btn-circle.btn-xl {\n  width: calc(0% + 100px);\n  height: calc(0% + 100px);\n  padding: 0 0;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33;\n  background: transparent;\n}\n.btn-circle {\n  border: none;\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857;\n  background: transparent -webkit-gradient(linear, left top, left bottom, from(#481B75), to(#0093E9)) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(180deg, #481B75 0%, #0093E9 100%) 0% 0% no-repeat padding-box;\n}\n.btn-save {\n  width: 100%;\n  height: 50px;\n  background: #69B850 100% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcSU9OSUNcXHN3YXBwaS1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBFQUFBO0FBQ1I7RUFDSSxjQUFBO0FDQ0o7QURFQTtFQUNJLGtCQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURKQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURKQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURKQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDQ0o7QURFQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwrSEFBQTtFQUFBLHFHQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG4ubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzAwOTNFOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlLmJ0bi14bCB7XHJcbiAgICB3aWR0aDogY2FsYygwJSArIDEwMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygwJSArIDEwMHB4KTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDgxQjc1IDAlLCAjMDA5M0U5IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4uYnRuLXNhdmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM2OUI4NTAgMTAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOTNFOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcbiAgd2lkdGg6IGNhbGMoMCUgKyAxMDBweCk7XG4gIGhlaWdodDogY2FsYygwJSArIDEwMHB4KTtcbiAgcGFkZGluZzogMCAwO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ4MUI3NSAwJSwgIzAwOTNFOSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5idG4tc2F2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICM2OUI4NTAgMTAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAjMDA5M0U5Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.ts ***!
    \*********************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/method-api-service.service */
    "./src/app/services/method-api-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");

    var PerfilPage =
    /*#__PURE__*/
    function () {
      function PerfilPage(_methodsApiRestService, navCtrl, file) {
        _classCallCheck(this, PerfilPage);

        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.file = file;
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.name = localStorage.getItem('name');
          this.lastname = localStorage.getItem('lastNames');
          /*    this.correo=localStorage.getItem('email');
          
              this.celular=localStorage.getItem('celular');
              */

          this.idUser = localStorage.getItem('idUser');

          this._methodsApiRestService.GetMethod('/user/' + this.idUser + "/profile").subscribe(function (response) {
            var data = JSON.stringify(response);
            console.log("DATOS DE USUARIO" + data);
            _this.direccion = response['address'];
            _this.fecha = response['birthDate'];
            _this.cedula = response['user']['documentId'];
            _this.correo = response['user']['email'];
            _this.celular = response['user']['cellPhone'];
            _this.name = response['user']['names'];
            _this.lastname = response['user']['lastNames'];
          }, function (error) {
            _this.cedula = localStorage.getItem('cedula');
            _this.correo = localStorage.getItem('email');
            _this.celular = localStorage.getItem('celular');
            _this.name = localStorage.getItem('name');
            _this.lastname = localStorage.getItem('lastNames');
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          /*  let reader = new FileReader();
           if(event.target.files && event.target.files.length > 0) {
             let file = event.target.files[0];
             reader.readAsDataURL(file);
             reader.onload = () => {
               this.form.get('avatar').setValue({
                 filename: file.name,
                 filetype: file.type,
                 value: reader.result
               })
             };
           }
          */
        }
      }, {
        key: "registrar",
        value: function registrar() {
          var datos = {
            "address": this.direccion,
            "email": this.correo,
            "birthDate": this.fecha,
            "user": {
              "id": this.idUser,
              "names": this.name,
              "lastNames": this.lastname,
              "email": this.correo,
              "cellPhone": this.celular
            }
          };

          this._methodsApiRestService.PostMethod('/profile', datos).subscribe(function (r) {
            var resultado = r;
            console.log(resultado);
          });
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: src_app_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }];
    };

    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/pages/perfil/perfil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]])], PerfilPage);
    /***/
  },

  /***/
  "./src/app/services/method-api-service.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/method-api-service.service.ts ***!
    \********************************************************/

  /*! exports provided: MethodApiServiceService */

  /***/
  function srcAppServicesMethodApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MethodApiServiceService", function () {
      return MethodApiServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

    var MethodApiServiceService =
    /*#__PURE__*/
    function () {
      function MethodApiServiceService(http) {
        _classCallCheck(this, MethodApiServiceService);

        this.http = http; //domain="http://44.228.37.182:8080/api/v1"; //Produccion

        this.domain = "http://192.168.2.153:8083/api"; //Desarrollo
      }

      _createClass(MethodApiServiceService, [{
        key: "PostMethod",
        value: function PostMethod(endpoint, params) {
          var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.domain;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
          }); //console.log(domain+endpoint);

          return this.http.post(domain + endpoint, JSON.stringify(params), {
            headers: headers
          }).map(function (res) {
            return res;
          });
        }
      }, {
        key: "PutMethod",
        value: function PutMethod(endpoint, params) {
          var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.domain;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
          }); //console.log(domain+endpoint);

          return this.http.put(domain + endpoint, JSON.stringify(params), {
            headers: headers
          }).map(function (res) {
            return res;
          });
        }
      }, {
        key: "PostXHTML",
        value: function PostXHTML(endpoint, params) {
          var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.domain;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            // 'Authorization': 'Basic '+params.password,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
          });
          return this.http.post(domain + endpoint, params, {
            headers: headers
          }).map(function (res) {
            return res;
          });
        }
      }, {
        key: "GetMethod",
        value: function GetMethod(endpoint) {
          var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.domain;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
          });
          return this.http.get(domain + endpoint, {
            headers: headers
          }).map(function (res) {
            return res;
          });
        }
      }]);

      return MethodApiServiceService;
    }();

    MethodApiServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MethodApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MethodApiServiceService);
    /***/
  }
}]);
//# sourceMappingURL=pages-perfil-perfil-module-es5.js.map