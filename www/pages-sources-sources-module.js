(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sources-sources-module"],{

/***/ "./src/app/pages/sources/sources.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.module.ts ***!
  \*************************************************/
/*! exports provided: SourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPageModule", function() { return SourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources.page */ "./src/app/pages/sources/sources.page.ts");







var routes = [
    {
        path: '',
        component: _sources_page__WEBPACK_IMPORTED_MODULE_6__["SourcesPage"]
    }
];
var SourcesPageModule = /** @class */ (function () {
    function SourcesPageModule() {
    }
    SourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sources_page__WEBPACK_IMPORTED_MODULE_6__["SourcesPage"]]
        })
    ], SourcesPageModule);
    return SourcesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sources/sources.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>sources</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sources/sources.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvdXJjZXMvc291cmNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/sources/sources.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sources/sources.page.ts ***!
  \***********************************************/
/*! exports provided: SourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPage", function() { return SourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SourcesPage = /** @class */ (function () {
    function SourcesPage() {
    }
    SourcesPage.prototype.ngOnInit = function () {
    };
    SourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sources',
            template: __webpack_require__(/*! ./sources.page.html */ "./src/app/pages/sources/sources.page.html"),
            styles: [__webpack_require__(/*! ./sources.page.scss */ "./src/app/pages/sources/sources.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SourcesPage);
    return SourcesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sources-sources-module.js.map