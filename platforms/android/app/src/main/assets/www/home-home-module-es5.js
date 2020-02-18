(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <div class=\"content\">\n    <img id=\"block-img\" src=\"../../assets/imgs/img-intro-1.png\">\n    <h5 id=\"text-welcome\">Con <b>Swappi</b> tu decides<br>que hacer contigo</h5>\n    <p id=\"subtxt\">Transfiere, carga, recarga y compra<br> tus puntos al mejor precio</p>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"success\" routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function () { return HomePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
            var HomePageModule = /** @class */ (function () {
                function HomePageModule() {
                }
                return HomePageModule;
            }());
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            {
                                path: '',
                                component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                            }
                        ])
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
                })
            ], HomePageModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.page.scss": 
        /*!*************************************!*\
          !*** ./src/app/home/home.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.content {\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 812px;\n  background: transparent linear-gradient(180deg, #0ABF04 0%, #09A603 100%) 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n#block-img {\n  left: -23px;\n  width: 100%;\n  height: 50%;\n  opacity: 1;\n}\n#text-welcome {\n  width: 100%;\n  height: 59px;\n  font-size: 1.4em;\n  text-align: center;\n  letter-spacing: 0;\n  color: #FFFFFF;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n}\n#subtxt {\n  font-size: 15px;\n  left: 40px;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 0;\n  color: #FFFFFF;\n  opacity: 1;\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGtldnluLkRFU0tUT1AtRkg1TlQ1N1xcRG9jdW1lbnRzXFxCYWNrdXAgTW92aWxcXFN3YXBwaS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFDUjtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxR0FBQTtFQUNBLFVBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUNHSjtBRERBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcbi5jb250ZW50e1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgxMnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwQUJGMDQgMCUsICMwOUE2MDMgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIG9wYWNpdHk6IDE7XG59XG4jYmxvY2staW1ne1xuICAgIGxlZnQ6IC0yM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG59XG4jdGV4dC13ZWxjb21le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTlweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbiNzdWJ0eHR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uY29udGVudCB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMEFCRjA0IDAlLCAjMDlBNjAzIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2Jsb2NrLWltZyB7XG4gIGxlZnQ6IC0yM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiN0ZXh0LXdlbGNvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OXB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNzdWJ0eHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.page.ts": 
        /*!***********************************!*\
          !*** ./src/app/home/home.page.ts ***!
          \***********************************/
        /*! exports provided: HomePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function () { return HomePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePage = /** @class */ (function () {
                function HomePage() {
                }
                return HomePage;
            }());
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HomePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map