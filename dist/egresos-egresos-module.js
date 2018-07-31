(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["egresos-egresos-module"],{

/***/ "./src/app/layout/egresos/egresos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/egresos/egresos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  egresos works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/egresos/egresos.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/egresos/egresos.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/egresos/egresos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/egresos/egresos.component.ts ***!
  \*****************************************************/
/*! exports provided: EgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosComponent", function() { return EgresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EgresosComponent = /** @class */ (function () {
    function EgresosComponent() {
    }
    EgresosComponent.prototype.ngOnInit = function () {
    };
    EgresosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-egresos',
            template: __webpack_require__(/*! ./egresos.component.html */ "./src/app/layout/egresos/egresos.component.html"),
            styles: [__webpack_require__(/*! ./egresos.component.scss */ "./src/app/layout/egresos/egresos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EgresosComponent);
    return EgresosComponent;
}());



/***/ }),

/***/ "./src/app/layout/egresos/egresos.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/egresos/egresos.module.ts ***!
  \**************************************************/
/*! exports provided: EgresosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosModule", function() { return EgresosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _egresos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egresos.component */ "./src/app/layout/egresos/egresos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EgresosModule = /** @class */ (function () {
    function EgresosModule() {
    }
    EgresosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_egresos_component__WEBPACK_IMPORTED_MODULE_2__["EgresosComponent"]]
        })
    ], EgresosModule);
    return EgresosModule;
}());



/***/ })

}]);
//# sourceMappingURL=egresos-egresos-module.js.map