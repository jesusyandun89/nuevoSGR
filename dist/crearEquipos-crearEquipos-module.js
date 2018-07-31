(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crearEquipos-crearEquipos-module"],{

/***/ "./src/app/layout/crearEquipos/crearEquipos-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/crearEquipos/crearEquipos-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: crearEquiposRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crearEquiposRoutingModule", function() { return crearEquiposRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crearEquipos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crearEquipos.component */ "./src/app/layout/crearEquipos/crearEquipos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _crearEquipos_component__WEBPACK_IMPORTED_MODULE_2__["crearEquiposComponent"]
    }
];
var crearEquiposRoutingModule = /** @class */ (function () {
    function crearEquiposRoutingModule() {
    }
    crearEquiposRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], crearEquiposRoutingModule);
    return crearEquiposRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/crearEquipos/crearEquipos.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/crearEquipos/crearEquipos.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'crearEquipos'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        \r\n            <fieldset class=\"form-group\">\r\n                <label>Bodega</label>\r\n                <select class=\"form-control\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                    <option>3</option>\r\n                    <option>4</option>\r\n                    <option>5</option>\r\n                </select>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>Empresa</label>\r\n                <select class=\"form-control\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                </select>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>Tipo</label>\r\n                <select class=\"form-control\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                </select>\r\n            </fieldset>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <fieldset class=\"form-group\">\r\n                <label>Tipo</label>\r\n                <select class=\"form-control\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                </select>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>Tipo</label>\r\n                <select class=\"form-control\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                </select>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>Cargar equipos</label>\r\n                <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\r\n            </fieldset>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/crearEquipos/crearEquipos.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/crearEquipos/crearEquipos.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/crearEquipos/crearEquipos.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/crearEquipos/crearEquipos.component.ts ***!
  \***************************************************************/
/*! exports provided: crearEquiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crearEquiposComponent", function() { return crearEquiposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var crearEquiposComponent = /** @class */ (function () {
    function crearEquiposComponent() {
    }
    crearEquiposComponent.prototype.ngOnInit = function () {
    };
    crearEquiposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crearEquipos',
            template: __webpack_require__(/*! ./crearEquipos.component.html */ "./src/app/layout/crearEquipos/crearEquipos.component.html"),
            styles: [__webpack_require__(/*! ./crearEquipos.component.scss */ "./src/app/layout/crearEquipos/crearEquipos.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], crearEquiposComponent);
    return crearEquiposComponent;
}());



/***/ }),

/***/ "./src/app/layout/crearEquipos/crearEquipos.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/crearEquipos/crearEquipos.module.ts ***!
  \************************************************************/
/*! exports provided: crearEquiposModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crearEquiposModule", function() { return crearEquiposModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crearEquipos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crearEquipos-routing.module */ "./src/app/layout/crearEquipos/crearEquipos-routing.module.ts");
/* harmony import */ var _crearEquipos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crearEquipos.component */ "./src/app/layout/crearEquipos/crearEquipos.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var crearEquiposModule = /** @class */ (function () {
    function crearEquiposModule() {
    }
    crearEquiposModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crearEquipos_routing_module__WEBPACK_IMPORTED_MODULE_2__["crearEquiposRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_crearEquipos_component__WEBPACK_IMPORTED_MODULE_3__["crearEquiposComponent"]]
        })
    ], crearEquiposModule);
    return crearEquiposModule;
}());



/***/ })

}]);
//# sourceMappingURL=crearEquipos-crearEquipos-module.js.map