function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-aliado-service-aliado-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesServiceAliadoServiceAliadoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"arrow-back\" defaultHref=\"inicio\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Puntos Saludables</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding\">\n    <div style=\"margin-left: auto;margin-right: auto;text-align: center;\">\n      <img src=\"../../assets/imgs/puntossaludables@2x.png\" width=\"200\">\n    </div>\n    <div style=\"margin-left: auto;margin-right: auto;text-align: center;\">\n      <p>Ingresa correctamente los datos requeridos</p>\n      <div class=\"input-group mb-3\">\n          <input type=\"number\" [(ngModel)]=\"cedula\" class=\"form-control material\" placeholder=\"Cedula\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n                  <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n    </div>\n    <button id=\"btn-Sesion\" (click)=\"vincular()\">VINCULAR ALIADO</button>\n    <p>Activa tu cuenta de Puntos<br> Colombia registrándote (Aquí)</p>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/service-aliado/service-aliado-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/service-aliado/service-aliado-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ServiceAliadoPageRoutingModule */

  /***/
  function srcAppPagesServiceAliadoServiceAliadoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceAliadoPageRoutingModule", function () {
      return ServiceAliadoPageRoutingModule;
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


    var _service_aliado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-aliado.page */
    "./src/app/pages/service-aliado/service-aliado.page.ts");

    var routes = [{
      path: '',
      component: _service_aliado_page__WEBPACK_IMPORTED_MODULE_3__["ServiceAliadoPage"]
    }];

    var ServiceAliadoPageRoutingModule = function ServiceAliadoPageRoutingModule() {
      _classCallCheck(this, ServiceAliadoPageRoutingModule);
    };

    ServiceAliadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServiceAliadoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/service-aliado/service-aliado.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/service-aliado/service-aliado.module.ts ***!
    \***************************************************************/

  /*! exports provided: ServiceAliadoPageModule */

  /***/
  function srcAppPagesServiceAliadoServiceAliadoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceAliadoPageModule", function () {
      return ServiceAliadoPageModule;
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


    var _service_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service-aliado-routing.module */
    "./src/app/pages/service-aliado/service-aliado-routing.module.ts");
    /* harmony import */


    var _service_aliado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service-aliado.page */
    "./src/app/pages/service-aliado/service-aliado.page.ts");

    var ServiceAliadoPageModule = function ServiceAliadoPageModule() {
      _classCallCheck(this, ServiceAliadoPageModule);
    };

    ServiceAliadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _service_aliado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceAliadoPageRoutingModule"]],
      declarations: [_service_aliado_page__WEBPACK_IMPORTED_MODULE_6__["ServiceAliadoPage"]]
    })], ServiceAliadoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/service-aliado/service-aliado.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/service-aliado/service-aliado.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesServiceAliadoServiceAliadoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.img-logo {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30%;\n  margin-bottom: 10%;\n}\nh1 {\n  margin-top: 12%;\n  font-size: 30px;\n  font-weight: bold;\n}\np {\n  font-size: 15px;\n  color: #777777;\n  font-family: \"Roboto\", sans-serif;\n}\n::-webkit-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.material {\n  width: 10%;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  border-right-style: none;\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n}\n.icon-style {\n  border-left-style: none;\n  background: #F5F5F5 0% 0% no-repeat padding-box;\n  color: #000;\n}\n#btn-Sesion {\n  margin-top: 10%;\n  margin-bottom: 8%;\n  width: 100%;\n  height: 50px;\n  background: transparent -webkit-gradient(linear, right top, left top, from(#0ABF04), to(#09A603)) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: #F5F5F5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n}\n.type-text {\n  font-family: \"Roboto\", sans-serif;\n}\n.link-cuenta {\n  text-align: center;\n  letter-spacing: 0;\n  color: #0093E9;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS1hbGlhZG8vQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxJT05JQ1xcc3dhcHBpLWFwcC9zcmNcXGFwcFxccGFnZXNcXHNlcnZpY2UtYWxpYWRvXFxzZXJ2aWNlLWFsaWFkby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2UtYWxpYWRvL3NlcnZpY2UtYWxpYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUNSO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FDR0o7QUREQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtBQ0lKO0FETkE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7QUNJSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0FDSUo7QUROQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtBQ0lKO0FERkE7RUFDSSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ0tKO0FESEE7RUFDSSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQ01KO0FESkE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZIQUFBO0VBQUEscUdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNPQTtBREpBO0VBQ0ksaUNBQUE7QUNPSjtBRExBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlLWFsaWFkby9zZXJ2aWNlLWFsaWFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1hdGVyaWFse1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pY29uLXN0eWxle1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbiNidG4tU2VzaW9ue1xyXG5tYXJnaW4tdG9wOiAxMCU7XHJcbm1hcmdpbi1ib3R0b206IDglO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm94LXNoYWRvdzogMHB4IDNweCAxNnB4ICMwMDkzRTkyOTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6ICNGNUY1RjU7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxub3V0bGluZTpub25lO1xyXG59XHJcblxyXG4udHlwZS10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5saW5rLWN1ZW50YXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgY29sb3I6ICMwMDkzRTk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0ZXJpYWwge1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmljb24tc3R5bGUge1xuICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4jYnRuLVNlc2lvbiB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwQUJGMDQgMCUsICMwOUE2MDMgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI0Y1RjVGNTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50eXBlLXRleHQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxpbmstY3VlbnRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDkzRTk7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/service-aliado/service-aliado.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/service-aliado/service-aliado.page.ts ***!
    \*************************************************************/

  /*! exports provided: ServiceAliadoPage */

  /***/
  function srcAppPagesServiceAliadoServiceAliadoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceAliadoPage", function () {
      return ServiceAliadoPage;
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


    var _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/method-api-service.service */
    "./src/app/services/method-api-service.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ServiceAliadoPage =
    /*#__PURE__*/
    function () {
      function ServiceAliadoPage(_methodsApiRestService, navCtrl, routes) {
        _classCallCheck(this, ServiceAliadoPage);

        this._methodsApiRestService = _methodsApiRestService;
        this.navCtrl = navCtrl;
        this.routes = routes;
      }

      _createClass(ServiceAliadoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cedula = localStorage.getItem('cedula').toString();
        }
      }, {
        key: "vincular",
        value: function vincular() {
          /*let datos={
            "cedula":this.cedula,
            "aliado_id":1,
            "ca_cantPuntos":564,
          }
          this.service('/cuentas/create',datos);*/
          var datos = {
            "partner": {
              "id": 1
            },
            "user": {
              "documentId": localStorage.getItem('cedula').toString()
            },
            "numberOfPoints": Math.floor(Math.random() * 10 + 100)
          };
          this.service('/partner-account', datos);
        }
      }, {
        key: "service",
        value: function service(endpoint, params) {
          this._methodsApiRestService.PostMethod(endpoint, params).subscribe(function (response) {
            if (response) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Evento de Aplicacion", ' Vinculacion del aliado exitosa ', "success");
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
          }, function (error) {
            if (!error.ok && error.status === 400) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Ya existe una cuenta vinculada", "error");
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ups!", "Error en Petición", "error");
            }
          });
        }
      }]);

      return ServiceAliadoPage;
    }();

    ServiceAliadoPage.ctorParameters = function () {
      return [{
        type: _services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ServiceAliadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-aliado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-aliado.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/service-aliado/service-aliado.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-aliado.page.scss */
      "./src/app/pages/service-aliado/service-aliado.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_method_api_service_service__WEBPACK_IMPORTED_MODULE_2__["MethodApiServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ServiceAliadoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-service-aliado-service-aliado-module-es5.js.map