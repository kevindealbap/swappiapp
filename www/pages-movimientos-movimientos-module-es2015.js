(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movimientos-movimientos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"color: #0093E9;\">\n    <ion-title>Movimientos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"--background: rgb(247, 241, 241);\">\n  <div class=\"col-md-12\"> \n    <p style=\"font-size: 12px;color: gray;margin: 0;\">4/10/2019</p>\n  <p style=\"color: #0093E9;font-weight: bold;margin: 0;\">21:30</p>\n  </div>\n  <ion-card style=\"margin: 0;background: white;color: gray;font-weight: normal;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">Transacción #000</ion-col>\n        <ion-col size=\"12\">Transferencia de puntos cuenta Nª 586121584d</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <br>\n  <div class=\"col-md-12\"> \n    <p style=\"font-size: 12px;color: gray;margin: 0;\">4/10/2019</p>\n  <p style=\"color: #0093E9;font-weight: bold;margin: 0;\">21:30</p>\n  </div>\n  <ion-card style=\"margin: 0;background: white;color: gray;font-weight: normal;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">Transacción #000</ion-col>\n        <ion-col size=\"12\">Transferencia de puntos cuenta Nª 586121584d</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <br>\n  <div class=\"col-md-12\"> \n    <p style=\"font-size: 12px;color: gray;margin: 0;\">4/10/2019</p>\n  <p style=\"color: #0093E9;font-weight: bold;margin: 0;\">21:30</p>\n  </div>\n  <ion-card style=\"margin: 0;background: white;color: gray;font-weight: normal;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">Transacción #000</ion-col>\n        <ion-col size=\"12\">Transferencia de puntos cuenta Nª 586121584d</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/movimientos/movimientos-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MovimientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPageRoutingModule", function() { return MovimientosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movimientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movimientos.page */ "./src/app/pages/movimientos/movimientos.page.ts");




const routes = [
    {
        path: '',
        component: _movimientos_page__WEBPACK_IMPORTED_MODULE_3__["MovimientosPage"]
    }
];
let MovimientosPageRoutingModule = class MovimientosPageRoutingModule {
};
MovimientosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MovimientosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.module.ts ***!
  \*********************************************************/
/*! exports provided: MovimientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPageModule", function() { return MovimientosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movimientos-routing.module */ "./src/app/pages/movimientos/movimientos-routing.module.ts");
/* harmony import */ var _movimientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movimientos.page */ "./src/app/pages/movimientos/movimientos.page.ts");







let MovimientosPageModule = class MovimientosPageModule {
};
MovimientosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MovimientosPageRoutingModule"]
        ],
        declarations: [_movimientos_page__WEBPACK_IMPORTED_MODULE_6__["MovimientosPage"]]
    })
], MovimientosPageModule);



/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmltaWVudG9zL21vdmltaWVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/movimientos/movimientos.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/movimientos/movimientos.page.ts ***!
  \*******************************************************/
/*! exports provided: MovimientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosPage", function() { return MovimientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovimientosPage = class MovimientosPage {
    constructor() { }
    ngOnInit() {
    }
};
MovimientosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movimientos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movimientos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movimientos/movimientos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movimientos.page.scss */ "./src/app/pages/movimientos/movimientos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MovimientosPage);



/***/ })

}]);
//# sourceMappingURL=pages-movimientos-movimientos-module-es2015.js.map