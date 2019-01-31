(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to my {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n<app-test></app-test><app-game></app-game>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Password Generator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  background-color: #0074D9;\r\n}\r\n.myStyle{\r\n  background-color: lime;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzREOTtcclxufVxyXG4ubXlTdHlsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"games\">\r\n  <ul>\r\n    <li *ngFor=\"let game of games\">\r\n      <h1 [class.myStyle]=\"isShown\">Title: {{game.title}}</h1>\r\n      <br>\r\n      <h5 class=\"myStyle\">Price: {{game.price}}</h5>\r\n      <br>\r\n      <img [src]=\"game.image\" alt=\"picture\">\r\n    </li>\r\n  </ul>\r\n  <button (click)=\"showContacts()\">Show contacts</button>\r\n</div>\r\n<div *ngIf=\"isShown\">\r\n <h1> Our contacts......</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.isShown = false;
        this.games = [{
                id: 1, title: 'Game1',
                image: 'data:image/jpeg;base64,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',
                price: 21
            }, {
                id: 2,
                title: 'test2',
                image: 'data:image/jpeg;base64,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',
                price: 12
            }];
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.showContacts = function () {
        this.isShown = !this.isShown;
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Form test component</h1>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jdavi\Desktop\PasswordGenerator\password_generator\frontend\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map