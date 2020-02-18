(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"Atrás\" icon=\"arrow-back\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n        Mi perfil\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n  <div style=\"width: 100%;\">\n    <img src=\"https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg\" style=\"z-index:2;position:absolute; background-color: transparent;margin-top: 5%;margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\" class=\"btn btn-primary btn-circle btn-xl\">\n  </div>\n  <img src=\"../../../assets/imgs/sound-wave2.png\" style=\"opacity: 1;width: 100%;z-index:0;position:absolute;height: 16%;\">\n  <img src=\"../../../assets/imgs/sound-wave.png\" style=\"opacity: 1;width: 100%;z-index:1;position:absolute;height: 14%;\">\n\n  <div style=\"width: 100%;text-align: center;\">\n    <h1 style=\"background-color: transparent;margin-top: 40%;font-family: 'Roboto', sans-serif;font-size: 24px;\">Kevyn Taylor</h1>\n    <p style=\"text-align: center;\n    font: Light 15px/24px Roboto;\n    letter-spacing: 0;\n    color: #777777;\n    opacity: 1;\">Presiona en las casillas para editar los campos</p>\n  </div>\n  <div style=\"margin: 16px;text-align: center;\">\n    <div class=\"input-group mb-3 content\">\n        <input type=\"text\"  class=\"form-control material\" placeholder=\"Nombre completo\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"number\"  class=\"form-control material\" placeholder=\"Celular\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"number\"  class=\"form-control material\" placeholder=\"Cedula\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"email\"  class=\"form-control material\" placeholder=\"Correo\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"password\"  class=\"form-control material\" placeholder=\"Password\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"text\"  class=\"form-control material\" placeholder=\"Dirección\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <input type=\"date\"  class=\"form-control material\" placeholder=\"Fecha Nacimiento\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text icon-style\" style=\"border-radius: 0px 8px 8px 0px;\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n    <div class=\"input-group mb-3 content\">\n        <ion-select placeholder=\"Estado civil\" class=\"form-control material\">\n            <ion-select-option value=\"s\">Soltero/a</ion-select-option>\n            <ion-select-option value=\"c\">Casado/a</ion-select-option>\n            <ion-select-option value=\"u\">Union Libre</ion-select-option>\n            <ion-select-option value=\"v\">Viudo/a</ion-select-option>\n          </ion-select>\n    </div>\n\n    <button class=\"btn-save\">GUARDAR</button>\n  </div>\n    \n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.my-custom-menu {\n  --width: 500px;\n}\n.header {\n  text-align: center;\n}\n::-webkit-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-moz-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::-ms-input-placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n::placeholder {\n  color: #0093E9;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n.content {\n  margin-top: 7%;\n  height: 10%;\n}\n.btn-circle.btn-xl {\n  width: calc(0% + 100px);\n  height: calc(0% + 100px);\n  padding: 0 0;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33;\n  background: transparent;\n}\n.btn-circle {\n  border: none;\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857;\n  background: transparent linear-gradient(180deg, #481B75 0%, #0093E9 100%) 0% 0% no-repeat padding-box;\n}\n.btn-save {\n  width: 100%;\n  height: 50px;\n  background: transparent linear-gradient(270deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 16px #0093E929;\n  border-radius: 50px;\n  opacity: 1;\n  color: white;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xca2V2eW4uREVTS1RPUC1GSDVOVDU3XFxEb2N1bWVudHNcXEJhY2t1cCBNb3ZpbFxcU3dhcHBpL3NyY1xcYXBwXFxwYWdlc1xccGVyZmlsXFxwZXJmaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUNSO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FESkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FESkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FESkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUdBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxR0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcbi5teS1jdXN0b20tbWVudSB7XHJcbiAgICAtLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjMDA5M0U5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcclxuICAgIHdpZHRoOiBjYWxjKDAlICsgMTAwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDAlICsgMTAwcHgpO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAgIFxyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0ODFCNzUgMCUsICMwMDkzRTkgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5idG4tc2F2ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzBBQkYwNCAwJSwgIzA5QTYwMyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOTNFOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcbiAgd2lkdGg6IGNhbGMoMCUgKyAxMDBweCk7XG4gIGhlaWdodDogY2FsYygwJSArIDEwMHB4KTtcbiAgcGFkZGluZzogMCAwO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ4MUI3NSAwJSwgIzAwOTNFOSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5idG4tc2F2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwQUJGMDQgMCUsICMwOUE2MDMgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggIzAwOTNFOTI5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PerfilPage = class PerfilPage {
    constructor() { }
    ngOnInit() {
    }
};
PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module-es2015.js.map