require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ "./about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\" *ngIf=\"!DUSER\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"About Us\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n    </GridLayout>\n    </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ "./about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


var AboutComponent = /** @class */ (function () {
    function AboutComponent(zone, cd, location) {
        this.zone = zone;
        this.cd = cd;
        this.location = location;
    }
    AboutComponent.prototype.ngAfterViewInit = function () {
    };
    AboutComponent.prototype.goBack = function () {
        this.location.back();
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "About",
            template: __importDefault(__webpack_require__("./about/about.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./about/about.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./about/about.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./create/create.component.ts");
/* harmony import */ var _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./create-business/create-business.component.ts");





var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: function () { return Promise.all(/* import() */[__webpack_require__.e("vendor"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "./home/home.module.ts")).then(function (m) { return m.HomeModule; }); } },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: "create/:type", component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: "create-business", component: _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_4__["CreateBusinessComponent"] }
];
// export const navigatableComponents = [
//   AboutComponent,
// ];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".body"],"declarations":[{"type":"declaration","property":"background-color","value":"#000"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app.component.ts");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./about/about.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./create/create.component.ts");
/* harmony import */ var _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./create-business/create-business.component.ts");











var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_9__["CreateBusinessComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./create-business/create-business.component.css":
/***/ (function(module, exports) {

module.exports = ".close {\n    font-size: 20;\n    color: rgb(226, 229, 229);\n    margin: 15 0 0 15;\n}\n\nTextView {\n    border-width: 1;\n    border-color: #ffffff;\n}\n\n.description-text {\n    font-size: 14;\n    font-weight: bold;\n    color: black;\n}\n\n.description-icon {\n    font-size: 16;\n    font-weight: bold;\n    color: #3e9edb;\n    margin-right: 8;\n    vertical-align: center;\n}\n\n.description-value {\n    font-size: 14;\n    color: black;\n}\n\n.rate {\n    padding-top: 3;\n    margin: 0;\n    color: #FFE900;\n    font-size: 18;\n}\n\n.rating-value {\n    margin-left: 5;\n}\n\n.liked-active {\n    color: #4080FF;\n}\n\n.heart-active {\n    color: #b51213;\n}\n\n.default {\n    color: #828282;\n}\n\n.layout {\n    vertical-align: bottom;\n    color: #828282;\n    font-size: 14;\n    height: 30;\n    padding: 5 0 5 0;\n}\n\n.like-icon {\n    vertical-align: bottom;\n    height: 30;\n    font-size: 16;\n    margin-right: 2;\n    padding: 5 5 5 5;\n}\n\n.item-name {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.item-category {\n    font-size: 14;\n    color: #000;\n}\n\n.category-icon {\n    text-align: center;\n    padding-top: 5;\n    color: white;\n    vertical-align: center;\n    font-size: 25;\n    border-width: 1;\n    border-color: #ffffff;\n    border-radius: 50%;\n    margin-top: 4;\n    margin-right: 15;\n    width: 40;\n    height: 40;\n}\n\n.content {\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 3;\n    /* margin-top: 16; */\n}\n\n.card-img {\n    width: 100%;\n    height: 250;\n    margin-bottom: 5;\n}\n\n.card-img-thumb {\n    background-color: #828282;\n    vertical-align: center;\n    border-radius: 5;\n    width: 130;\n    height: 70;\n    margin-left: 5;\n}\n\n.line {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n\n.lineBreak {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n\n.anim-page {\n    background-color: #d4d6d8;\n    animation-name: key-page;\n    animation-duration: 2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-page {\n    0% {\n        background-color: #dadada;\n    }\n\n    20% {\n        background-color: #dbd2d5;\n    }\n\n    100% {\n        background-color: white;\n    }\n}\n\n.anim-cover {\n    opacity: 0;\n    animation-name: key-cover;\n    animation-duration: 1;\n    animation-delay: 0.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-cover {\n    0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-images {\n    opacity: 0;\n    animation-name: key-images;\n    animation-duration: 1;\n    animation-delay: 0.7;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-images {\n    0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-itemInfo {\n    opacity: 0;\n    animation-name: key-itemInfo;\n    animation-duration: 1;\n    animation-delay: 1.2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-itemInfo {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-likes {\n    opacity: 0;\n    animation-name: key-likes;\n    animation-duration: 1;\n    animation-delay: 1.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-likes {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-content {\n    opacity: 0;\n    animation-name: key-content;\n    animation-duration: 1;\n    animation-delay: 1.8;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-content {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n.picker {\n    background-color: blanchedalmond;\n    color: red;\n    border-color: brown;\n    border-radius: 20;\n    border-width: 2;\n    width: 200;\n    height: 100;\n    vertical-align: middle;\n}\n"

/***/ }),

/***/ "./create-business/create-business.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"!showBizForm\">\n\n    <GridLayout class=\"anim-cover\" rows=\"auto,auto,auto\" columns=\"*\">\n        <Image row=\"0\" col=\"0\" marginTop=\"-40\" height=\"180\" stretch=\"aspectFill\"\n            class=\"card-img\" [src]=\"image\"></Image>\n\n            <GridLayout class=\"anim-itemInfo p-l-4\" marginTop=\"15\" row=\"1\"\n                width=\"100%\" columns=\"auto,*\" rows=\"*,*,*,*,*,*\"\n                verticalAlignment=\"center\"  *ngIf=\"BIZ\">\n                <Label row=\"0\" col=\"0\" class=\"item-name\" textwrap=\"true\"\n                    verticalAlignment=\"bottom\" horizontalAlignment=\"left\" text=\"business name\"></Label>\n                <Label row=\"1\" col=\"0\" class=\"item-category\" text=\"{{BIZ.profile.name  || 'business category'}}\"></Label>\n                <Label row=\"3\" col=\"0\" class=\"item-category\" text=\"{{BIZ.profile.address  || 'business address'}}\"></Label>\n                <Label row=\"4\" col=\"0\" class=\"item-category\" text=\"{{BIZ.profile.phone  || 'business phone'}}\"></Label>\n                <Label row=\"5\" col=\"0\" class=\"item-category\" text=\"{{BIZ.profile.email  || 'business email'}}\"></Label>\n\n            </GridLayout>\n            <GridLayout class=\"anim-itemInfo p-l-4\" marginTop=\"15\" row=\"1\"\n                width=\"100%\" columns=\"auto,*\" rows=\"*,*,*,*,*,*\"\n                verticalAlignment=\"center\"  *ngIf=\"!BIZ\">\n                <Label row=\"0\" col=\"0\" class=\"item-name\" textwrap=\"true\"\n                    verticalAlignment=\"bottom\" horizontalAlignment=\"left\" text=\"business name\"></Label>\n                <Label row=\"1\" col=\"0\" class=\"item-category\" text=\"business category\"></Label>\n                <Label row=\"3\" col=\"0\" class=\"item-category\" text=\"business address\"></Label>\n                <Label row=\"4\" col=\"0\" class=\"item-category\" text=\"business phone\"></Label>\n                <Label row=\"5\" col=\"0\" class=\"item-category\" text=\"business email\"></Label>\n\n            </GridLayout>\n            <StackLayout row=\"2\">\n              <Button text=\"Add business info\" (tap)=\"showBizForm=true\" horizontalAlignment=\"stretch\" class=\"-primary\"></Button>\n\n            </StackLayout>\n    </GridLayout>\n\n</StackLayout>\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"showBizForm\">\n\n  <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n    <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n      <Label text=\"creating your business profile\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n    </StackLayout>\n\n    <StackLayout row=\"1\">\n      <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n        <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n        <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n        <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n      </GridLayout>\n    </StackLayout>\n    <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n      <GridLayout rows=\"*, auto, auto\">\n          <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n              <ng-template let-image=\"item\" let-i=\"index\">\n                  <GridLayout columns=\"auto, *\">\n                      <Image\n                          [width]=\"thumbSize\"\n                          [height]=\"thumbSize\"\n                          [src]=\"image\" stretch=\"aspectFill\"></Image>\n                      <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                  </GridLayout>\n              </ng-template>\n          </ListView>\n          <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n      </GridLayout>\n    </StackLayout>\n  </GridLayout>\n\n</StackLayout>\n"

/***/ }),

/***/ "./create-business/create-business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBusinessComponent", function() { return CreateBusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rxjs/Observable");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__);







var localStorage = __webpack_require__("tns-core-modules/application-settings");


var FileSystem = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var BackgroundHttp = __webpack_require__("nativescript-background-http");
var MD5 = __webpack_require__("../node_modules/blueimp-md5/js/md5.js");

var CreateBusinessComponent = /** @class */ (function () {
    function CreateBusinessComponent(_game, zone, cd, location, router, route, formBuilder) {
        this._game = _game;
        this.zone = zone;
        this.cd = cd;
        this.location = location;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.bizType = ['restaurant', 'retail', 'spa', 'bar', 'cafe', 'food truck', 'tourism', 'salon', 'hair stylist', 'website'];
        this.image = "http://cdn.cnn.com/cnnnext/dam/assets/190710135245-12-waterfront-restaurants.jpg";
        this.images = [];
    }
    CreateBusinessComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.token = localStorage.getString('token');
            _this.name = localStorage.getString('name');
            _this.user = localStorage.getString('user');
            _this.lat = localStorage.getString('lat');
            _this.lng = localStorage.getString('lng');
            _this.showBizForm = false;
            _this.gUSER();
            _this.cd.detectChanges();
        });
    };
    // --------------------------------------------------------------------
    // get user
    CreateBusinessComponent.prototype.gUSER = function () {
        var _this = this;
        console.log("getting the user");
        this.$game.gUSER(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    var USER = jordi.payload[0];
                    _this.BIZ = jordi.payload[1];
                    _this.USER = USER;
                    // console.log(this.BIZ)
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.BIZ = [];
                _this.USER = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateBusinessComponent.prototype.gSAVE = function () {
        var _this = this;
        if (!this.bizName) {
            this.pop("whats your business  name?", "error");
        }
        else if (!this.address) {
            this.pop("whats your business address?", "error");
        }
        else if (!this.phone) {
            this.pop("whats your business phone?", "error");
        }
        else if (!this.story) {
            this.pop("whats your business story?", "error");
        }
        else {
            this.$game.bizSAVE(this.token, this.user, this.bizName, this.address, this.phone, this.story, this.email, this.bType, this.lat, this.lng)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.zone.run(function () {
                        _this.BIZ = jordi.payload[0];
                        _this.pop(jordi.message, "success");
                        _this.cd.detectChanges();
                    });
                    _this.BIZ = jordi.payload[0];
                    _this.pop(jordi.message, "success");
                }
                else {
                    _this.pop(jordi.message, "error");
                }
            });
        }
    };
    CreateBusinessComponent.prototype.takePicture = function () {
        var _this = this;
        nativescript_camera__WEBPACK_IMPORTED_MODULE_8__["takePicture"]({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
            picture.saveToFile(path, ui_enums__WEBPACK_IMPORTED_MODULE_7__["ImageFormat"].png, 60);
            _this.upload("https://app.grabbit.cheap/upload", "upload", path)
                .subscribe(function (result) {
                _this.zone.run(function () {
                    _this.images.push(path.replace(/^.*[\\\/]/, ''));
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    CreateBusinessComponent.prototype.upload = function (destination, filevar, filepath) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
            var session = BackgroundHttp.session("file-upload");
            var request = {
                url: destination,
                method: "POST"
            };
            var params = [{ "name": filevar, "filename": filepath, "mimeType": "image/png" }];
            var task = session.multipartUpload(params, request);
            task.on("complete", function (event) {
                var file = FileSystem.File.fromPath(filepath);
                file.remove().then(function (result) {
                    observer.next("Uploaded `" + filepath + "`");
                    observer.complete();
                }, function (error) {
                    observer.error("Could not delete `" + filepath + "`");
                });
            });
            task.on("error", function (event) {
                console.log(event);
                observer.error("Could not upload `" + filepath + "`. " + event.eventName);
            });
        });
    };
    CreateBusinessComponent.prototype.onSelectedIndexChanged = function (args) {
        var picker = args.object;
        this.bType = this.bizType[picker.selectedIndex];
        // console.log(this.bType);
    };
    CreateBusinessComponent.prototype.pop = function (message, type) {
        var options = {
            title: type,
            message: message,
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    CreateBusinessComponent.prototype.createForm = function () {
        this._create = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hashtags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    CreateBusinessComponent.ctorParameters = function () { return [
        { type: _services_game__WEBPACK_IMPORTED_MODULE_5__["GameProvider"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    CreateBusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Create",
            template: __importDefault(__webpack_require__("./create-business/create-business.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./create-business/create-business.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_game__WEBPACK_IMPORTED_MODULE_5__["GameProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreateBusinessComponent);
    return CreateBusinessComponent;
}());



/***/ }),

/***/ "./create/create.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n.cardStyle {\n    background-color: #fff;\n    color: rgb(43, 43, 43);\n}\n\n.cardContent {\n    padding: 20;\n    font-weight: bold;\n    font-size: 30;\n}\n.picker {\n    background-color: blanchedalmond;\n    color: red;\n    border-color: brown;\n    border-radius: 20;\n    border-width: 2;\n    width: 200;\n    height: 100;\n    vertical-align: middle;\n}\n"

/***/ }),

/***/ "./create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<ScrollView class=\"page\">\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showBizForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n          <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n          <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n          <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n      <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n        <GridLayout rows=\"*, auto, auto\">\n            <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n                <ng-template let-image=\"item\" let-i=\"index\">\n                    <GridLayout columns=\"auto, *\">\n                        <Image\n                            [width]=\"thumbSize\"\n                            [height]=\"thumbSize\"\n                            [src]=\"image\" stretch=\"aspectFill\"></Image>\n                        <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                    </GridLayout>\n                </ng-template>\n            </ListView>\n            <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showGameForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create {{prizeType}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n          <Label row=\"1\" col=\"0\" text=\"Title\" horizontalAlignment=\"right\" class=\"label\" ></Label>\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border\" maxLength=\"24\"></TextField>\n          <Label row=\"2\" col=\"0\" text=\"Max Players\" horizontalAlignment=\"right\" class=\"label\" ></Label>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"maxPlayers\" hint=\"max players\" class=\"input input-border\" keyboardType=\"number\" maxLength=\"2\"></TextField>\n          <Label row=\"3\" col=\"0\" text=\"Prize\" horizontalAlignment=\"right\" class=\"label\" ></Label>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"prize\" hint=\"15% off coupon\" class=\"input input-border\" keyboardType=\"number\" maxLength=\"2\"></TextField>\n\n          <Label row=\"4\" col=\"0\" text=\"2nd Prize\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"prizeType=='everyone wins'\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"prize2\" hint=\"10% off coupon\" class=\"input input-border\" keyboardType=\"number\" maxLength=\"2\" *ngIf=\"prizeType=='everyone wins'\"></TextField>\n\n          <Label row=\"4\" col=\"0\" text=\"Item Price\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"prizeType=='free item  with  purchase'\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"price\" hint=\"buy $30 item\" class=\"input input-border\"  maxLength=\"24\" *ngIf=\"prizeType=='free item  with  purchase'\"></TextField>\n\n          <Button row=\"6\" colSpan=2 text=\"create game\" (tap)=\"gCreate()\" horizontalAlignment=\"stretch\" class=\"-primary\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n      <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n        <GridLayout rows=\"*, auto, auto\">\n            <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n                <ng-template let-image=\"item\" let-i=\"index\">\n                    <GridLayout columns=\"auto, *\">\n                        <Image\n                            [width]=\"thumbSize\"\n                            [height]=\"thumbSize\"\n                            [src]=\"image\" stretch=\"aspectFill\"></Image>\n                        <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                    </GridLayout>\n                </ng-template>\n            </ListView>\n            <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"!showBizForm\">\n    <GridLayout rows=\"*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"0\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='coupon'\">\n\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*\" columns=\"*\">\n\n          <StackLayout class=\"p-20\" row=\"0\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Grabbit is an awesome way to engage locals with deals and discounts. It costs as little as $0.65 per player competing for your coupon. Games are geo fenced to locals within 10 miles. Locals play FREE to win your coupon\"\n                  class=\"h3 p-20 text-center\" textWrap=\"true\" lineHeight='12'></Label>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"Game Types\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"2\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"1 Winner\" class=\"m-b-10 h3\" />\n                <Label text=\"only one player wins\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$0.65 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('1 winner')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"3\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Everyone Wins\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a 50% off coupon, all other players get a 15% off coupon (example)\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1.75 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('everyone wins')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"4\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Winner Must Bring A Friend\" class=\"m-b-10 h3\" />\n                <Label text=\"winner must bring a friend to redeem the coupon\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('winner must bring a friend')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"5\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Free item with purchase\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a free item, with purchase\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('free item  with  purchase')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"6\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"FAQ's\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"7\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Explain per player pricing\" class=\"m-b-10 h2\" />\n                <Label text=\"when creating your game, you choose the max number of players for your game. If you choose 10 max players for a 1 winner game, it will cost $6.50\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n                <Label text=\"if less than 10 players join the game, the difference will be returned to your bitcoin wallet\" class=\"m-b-10 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"8\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Whats the incentive for players to redeem their coupons?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Players are rewarded when they redeem their coupons, from reward points to free tools and to other perks. Players may also be penalized for not redeeming their wins\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"9\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Can I extend the local radius to 20 miles?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Yes, with a premium feature\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='bitcoin'\">\n\n        <GridLayout rows=\"*,*\" columns=\"*\">\n          <StackLayout orientation=\"vertical\" row=\"0\">\n\n            <Label text=\"creating bitcoin game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n\n  </GridLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rxjs/Observable");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__);







var localStorage = __webpack_require__("tns-core-modules/application-settings");


var FileSystem = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var BackgroundHttp = __webpack_require__("nativescript-background-http");
var MD5 = __webpack_require__("../node_modules/blueimp-md5/js/md5.js");

var CreateComponent = /** @class */ (function () {
    function CreateComponent(_game, zone, cd, location, router, route, formBuilder) {
        this._game = _game;
        this.zone = zone;
        this.cd = cd;
        this.location = location;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.bizType = ['restaurant', 'retail', 'spa', 'bar', 'cafe', 'food truck', 'tourism', 'salon', 'hair stylist', 'website'];
        this.locations = [];
        this.$game = _game;
        this.images = [];
    }
    CreateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.token = localStorage.getString('token');
            _this.name = localStorage.getString('name');
            _this.user = localStorage.getString('user');
            _this.lat = localStorage.getString('lat');
            _this.lng = localStorage.getString('lng');
            _this.showBizForm = false;
            _this.showGameForm = false;
            _this.type = _this.route.snapshot.params.type;
            if (_this.user) {
                _this.gUSER();
            }
            _this.cd.detectChanges();
        });
    };
    // --------------------------------------------------------------------
    // get user
    CreateComponent.prototype.gUSER = function () {
        var _this = this;
        console.log("getting the user");
        this.$game.gUSER(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    var USER = jordi.payload[0];
                    _this.BIZ = jordi.payload[1];
                    _this.USER = USER;
                    console.log(_this.BIZ);
                    _this.name = USER.profile.name || 'no user name set';
                    _this.avatar = USER.profile.avatar || '~/assets/imgs/avatars/alien_02.png';
                    _this.admin = USER.profile.admin;
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.zone.run(function () {
                    _this.name = 'n/a';
                    _this.avatar = '~/assets/imgs/avatars/alien_02.png';
                    _this.cd.detectChanges();
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateComponent.prototype.gSAVE = function () {
        var _this = this;
        if (!this.bizName) {
            this.pop("whats your business  name?", "error");
        }
        else if (!this.address) {
            this.pop("whats your business address?", "error");
        }
        else if (!this.phone) {
            this.pop("whats your business phone?", "error");
        }
        else if (!this.story) {
            this.pop("whats your business story?", "error");
        }
        else {
            this.$game.bizSAVE(this.token, this.user, this.bizName, this.address, this.phone, this.story, this.email, this.bType, this.lat, this.lng)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.pop(jordi.message, "success");
                }
                else {
                    _this.pop(jordi.message, "error");
                }
            });
        }
    };
    CreateComponent.prototype.onCreate = function (prizeType) {
        var _this = this;
        this.zone.run(function () {
            _this.prizeType = prizeType;
            if (_this.BIZ && _this.BIZ.length < 1) {
                // console.log(this.showBizForm)
                _this.pop("lets create your business profile 1st", "error");
                setTimeout(function () {
                    _this.router.navigate(['/create-business/'], {
                        animated: false,
                        clearHistory: false
                    });
                }, 300);
                // this.showBizForm = true
            }
            else if (_this.BIZ && _this.BIZ.length > 0) {
                _this.showGameForm = true;
            }
            else if (!_this.user) {
                _this.pop("log in to create a game", "error");
            }
            _this.cd.detectChanges();
        });
    };
    CreateComponent.prototype.takePicture = function () {
        var _this = this;
        nativescript_camera__WEBPACK_IMPORTED_MODULE_8__["takePicture"]({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
            picture.saveToFile(path, ui_enums__WEBPACK_IMPORTED_MODULE_7__["ImageFormat"].png, 60);
            _this.upload("https://app.grabbit.cheap/upload", "upload", path)
                .subscribe(function (result) {
                _this.zone.run(function () {
                    _this.images.push(path.replace(/^.*[\\\/]/, ''));
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    CreateComponent.prototype.upload = function (destination, filevar, filepath) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
            var session = BackgroundHttp.session("file-upload");
            var request = {
                url: destination,
                method: "POST"
            };
            var params = [{ "name": filevar, "filename": filepath, "mimeType": "image/png" }];
            var task = session.multipartUpload(params, request);
            task.on("complete", function (event) {
                var file = FileSystem.File.fromPath(filepath);
                file.remove().then(function (result) {
                    observer.next("Uploaded `" + filepath + "`");
                    observer.complete();
                }, function (error) {
                    observer.error("Could not delete `" + filepath + "`");
                });
            });
            task.on("error", function (event) {
                console.log(event);
                observer.error("Could not upload `" + filepath + "`. " + event.eventName);
            });
        });
    };
    CreateComponent.prototype.onSelectedIndexChanged = function (args) {
        var picker = args.object;
        this.bType = this.bizType[picker.selectedIndex];
        console.log(this.bType);
    };
    CreateComponent.prototype.pop = function (message, type) {
        var options = {
            title: type,
            message: message,
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    CreateComponent.prototype.createForm = function () {
        this._create = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hashtags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _services_game__WEBPACK_IMPORTED_MODULE_5__["GameProvider"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Create",
            template: __importDefault(__webpack_require__("./create/create.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./create/create.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_game__WEBPACK_IMPORTED_MODULE_5__["GameProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./services/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameProvider", function() { return GameProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/Rx");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);




/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GameProvider = /** @class */ (function () {
    function GameProvider(http) {
        this.http = http;
        //console.log('Hello SessionProvider Provider');
    }
    ////guser
    GameProvider.prototype.gUSER = function (token, user, lat, lng) {
        var DATA = {
            token: token,
            user: user,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/gUSER', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ////business
    GameProvider.prototype.bizSAVE = function (token, user, bizname, address, phone, story, email, bType, lat, lng) {
        var DATA = {
            token: token,
            user: user,
            bizName: bizname,
            phone: phone,
            story: story,
            email: email,
            bType: bType,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/bSAVE', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ////game
    GameProvider.prototype.bGAMES = function (lat, lng) {
        var DATA = {
            // token: user_token,
            // user_id: user_id,
            // gType: gType,
            // gID: gID,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/bGAMES', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onGrab = function (token, user, game) {
        var DATA = {
            token: token,
            user: user,
            game: game,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/grab', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onSlap = function (token, user, game) {
        var DATA = {
            token: token,
            user: user,
            game: game,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/slap', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onSneak = function (token, user, game) {
        var DATA = {
            token: token,
            user: user,
            game: game,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/sneak', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onAvatar = function (token, user, avatar) {
        var DATA = {
            token: token,
            user: user,
            avatar: avatar,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/avatar', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onEdit = function (token, user, text, type) {
        var DATA = {
            token: token,
            user: user,
            text: text,
            type: type
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/profile/edit', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onTimer = function (token, user, gID) {
        var DATA = {
            token: token,
            user: user,
            gID: gID,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/timer', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.play = function (token, user, gID) {
        var DATA = {
            token: token,
            user: user,
            gID: gID,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/play', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.login = function (number, device, lat, lng) {
        var DATA = {
            number: number,
            device: device,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/login', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.loginComplete = function (code, device) {
        var DATA = {
            code: code,
            device: device,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/loginComplete', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    GameProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    };
    GameProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GameProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameProvider);
    return GameProvider;
}());



/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nativescript/core/file-system/file-system":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/file-system/file-system");

/***/ }),

/***/ "@nativescript/core/timer/timer":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/timer/timer");

/***/ }),

/***/ "@nativescript/core/ui/enums/enums":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/enums/enums");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/element-registry":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/element-registry");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-background-http":
/***/ (function(module, exports) {

module.exports = require("nativescript-background-http");

/***/ }),

/***/ "nativescript-camera":
/***/ (function(module, exports) {

module.exports = require("nativescript-camera");

/***/ }),

/***/ "nativescript-geolocation":
/***/ (function(module, exports) {

module.exports = require("nativescript-geolocation");

/***/ }),

/***/ "nativescript-ui-autocomplete/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-autocomplete/angular");

/***/ }),

/***/ "nativescript-ui-calendar/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/angular");

/***/ }),

/***/ "nativescript-ui-chart/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/angular");

/***/ }),

/***/ "nativescript-ui-dataform/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-dataform/angular");

/***/ }),

/***/ "nativescript-ui-gauge/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-gauge/angular");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),

/***/ "rxjs/Rx":
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/application-settings":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application-settings");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/enums":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/enums");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb24vaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90aW1lci90aW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9lbnVtcy9lbnVtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSw4QkFBOEIsNkJBQTZCLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLHVEQUF1RCxxQkFBcUIsR0FBRyxjQUFjLGdCQUFnQixtQkFBbUIsMkJBQTJCLDJCQUEyQixtQ0FBbUMsZ0NBQWdDLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxVQUFVLHFDQUFxQyx1QkFBdUIsY0FBYyxvQkFBb0IsY0FBYyxpQkFBaUIsVUFBVSxxQ0FBcUMsdUJBQXVCLGdCQUFnQixvQkFBb0IsT0FBTyxTQUFTLHFDQUFxQyx1QkFBdUIsZ0JBQWdCLG9CQUFvQixPQUFPLFdBQVcsMERBQTBELGNBQWMsa0JBQWtCLEc7Ozs7Ozs7QUNBdDVCLGdjOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUVsSDtBQVMzQztJQUVFLHdCQUFvQixJQUFZLEVBQVUsRUFBcUIsRUFBVSxRQUFrQjtRQUF2RSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzNGLENBQUM7SUFFRCx3Q0FBZSxHQUFmO0lBR0EsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQVp5QixvREFB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RSxNQUFNO1NBQ25CLENBQUM7eUNBR3lCLCtEQUFVO09BRnhCLFlBQVksQ0E2UHhCO0lBQUQsbUJBQUM7Q0FBQTtBQTdQd0I7Ozs7Ozs7O0FDakJ6Qiw0Qzs7Ozs7OztBQ0FBLGlEOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLDRDOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxrRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxnRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxpQzs7Ozs7OztBQ0FBLDRDOzs7Ozs7O0FDQUEsb0M7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGtFOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdhbWVJbWFnZSB7XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XFxufVxcblxcbi50ZXh0Qm9sZHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JhYntcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyNTIyMjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjp3aGl0ZTtcXG5mb250LXdlaWdodDogYm9sZDtcXG53aWR0aDoxMDBweDtcXG5oZWlnaHQ6MjAwcHhcXG59XFxuXFxuLnNsYXB7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6I0YyRjAyMjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLnNuZWFre1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiMyMkYyMjc7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5hdmF0YXJze1xcbiAgLyogdXNlcjogKi9cXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApO1xcbmhlaWdodDphdXRvO1xcbndpZHRoOjIwMHB4XFxuXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiAqbmdJZj1cXFwiIURVU0VSXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWJvdXQgVXNcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJBYm91dFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hYm91dC5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcblxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cblxuICB9XG5cbiAgZ29CYWNrKCk6IHZvaWQge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnRcIlxuaW1wb3J0IHsgQ3JlYXRlQnVzaW5lc3NDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoXCIuL2hvbWUvaG9tZS5tb2R1bGVcIikudGhlbihtID0+IG0uSG9tZU1vZHVsZSkgfSxcbiAgeyBwYXRoOiBcImFib3V0XCIsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcImNyZWF0ZS86dHlwZVwiLCBjb21wb25lbnQ6IENyZWF0ZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiY3JlYXRlLWJ1c2luZXNzXCIsIGNvbXBvbmVudDogQ3JlYXRlQnVzaW5lc3NDb21wb25lbnQgfVxuXG5dO1xuXG4vLyBleHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuLy8gICBBYm91dENvbXBvbmVudCxcbi8vIF07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvZHlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiOyAvLyB1c2VkIHRvIGRlc2NyaWJlIGF0IHdoYXQgYWNjdXJhY3kgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBnZXRcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50XCJcblxuQE5nTW9kdWxlKHtcblxuICBib290c3RyYXA6IFtcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgIENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XFxuICAgIG1hcmdpbjogMTUgMCAwIDE1O1xcbn1cXG5cXG5UZXh0VmlldyB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjM2U5ZWRiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJhdGUge1xcbiAgICBwYWRkaW5nLXRvcDogMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogI0ZGRTkwMDtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnJhdGluZy12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG5cXG4ubGlrZWQtYWN0aXZlIHtcXG4gICAgY29sb3I6ICM0MDgwRkY7XFxufVxcblxcbi5oZWFydC1hY3RpdmUge1xcbiAgICBjb2xvcjogI2I1MTIxMztcXG59XFxuXFxuLmRlZmF1bHQge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuXFxuLmxheW91dCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG5cXG4ubGlrZS1pY29uIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jYXRlZ29yeS1pY29uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiA0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4uY2FyZC1pbWctdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB3aWR0aDogMTMwO1xcbiAgICBoZWlnaHQ6IDcwO1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmxpbmVCcmVhayB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYW5pbS1wYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktcGFnZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICAgIH1cXG5cXG4gICAgMjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1jb3ZlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXI7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktY292ZXIge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0taW1hZ2VzIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcblxcbi5hbmltLWl0ZW1JbmZvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mbztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mbyB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1saWtlcyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktbGlrZXMge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0tY29udGVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcbi5waWNrZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMjtcXG4gICAgd2lkdGg6IDIwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwiIXNob3dCaXpGb3JtXFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImFuaW0tY292ZXJcXFwiIHJvd3M9XFxcImF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgbWFyZ2luVG9wPVxcXCItNDBcXFwiIGhlaWdodD1cXFwiMTgwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJjYXJkLWltZ1xcXCIgW3NyY109XFxcImltYWdlXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWl0ZW1JbmZvIHAtbC00XFxcIiBtYXJnaW5Ub3A9XFxcIjE1XFxcIiByb3c9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCpcXFwiIHJvd3M9XFxcIiosKiwqLCosKiwqXFxcIlxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiAgKm5nSWY9XFxcIkJJWlxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tbmFtZVxcXCIgdGV4dHdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiB0ZXh0PVxcXCJidXNpbmVzcyBuYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJ7e0JJWi5wcm9maWxlLm5hbWUgIHx8ICdidXNpbmVzcyBjYXRlZ29yeSd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVoucHJvZmlsZS5hZGRyZXNzICB8fCAnYnVzaW5lc3MgYWRkcmVzcyd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVoucHJvZmlsZS5waG9uZSAgfHwgJ2J1c2luZXNzIHBob25lJ319XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJ7e0JJWi5wcm9maWxlLmVtYWlsICB8fCAnYnVzaW5lc3MgZW1haWwnfX1cXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWl0ZW1JbmZvIHAtbC00XFxcIiBtYXJnaW5Ub3A9XFxcIjE1XFxcIiByb3c9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCpcXFwiIHJvd3M9XFxcIiosKiwqLCosKiwqXFxcIlxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiAgKm5nSWY9XFxcIiFCSVpcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLW5hbWVcXFwiIHRleHR3cmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgdGV4dD1cXFwiYnVzaW5lc3MgbmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwiYnVzaW5lc3MgY2F0ZWdvcnlcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcImJ1c2luZXNzIGFkZHJlc3NcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcImJ1c2luZXNzIHBob25lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJidXNpbmVzcyBlbWFpbFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCI+XFxuICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFkZCBidXNpbmVzcyBpbmZvXFxcIiAodGFwKT1cXFwic2hvd0JpekZvcm09dHJ1ZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW5cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICpuZ0lmPVxcXCJzaG93Qml6Rm9ybVxcXCI+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGluZyB5b3VyIGJ1c2luZXNzIHByb2ZpbGVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCI+XFxuICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICA8TGlzdFBpY2tlciAgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJiaXpUeXBlXFxcIiBzZWxlY3RlZEluZGV4PVxcXCIwXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+PC9MaXN0UGlja2VyPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJOYW1lXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYml6TmFtZVxcXCIgaGludD1cXFwiYnVzaW5lc3MgbmFtZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiQWRkcmVzc1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZHJlc3NcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIGFkZHJlcnNzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInBob25lXFxcIiBoaW50PVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiRW1haWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBlbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiU3RvcnlcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJzdG9yeVxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBzdG9yeVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcImdTQVZFKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIgKm5nSWY9XFxcInN0b3J5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiICpuZ0lmPVxcXCJiVHlwZT09J3NleCdcXFwiPlxcbiAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaW1hZ2VBc3NldHNcXFwiICpuZ0lmPVxcXCJpbWFnZUFzc2V0cyAmJiBpbWFnZUFzc2V0cy5sZW5ndGg+MFxcXCI+XFxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWltYWdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcInRodW1iU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cXFwiaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIFt0ZXh0XT1cXFwiJ2ltYWdlICcgKyBpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwic2F2ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbnZhciBGaWxlU3lzdGVtID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xudmFyIEJhY2tncm91bmRIdHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgTUQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkNyZWF0ZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1idXNpbmVzcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgX2NyZWF0ZTogRm9ybUdyb3VwXG4gICRnYW1lOiBhbnlcblxuICBwdWJsaWMgYml6VHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncmVzdGF1cmFudCcsICdyZXRhaWwnLCAnc3BhJywgJ2JhcicsICdjYWZlJywgJ2Zvb2QgdHJ1Y2snLCAndG91cmlzbScsICdzYWxvbicsICdoYWlyIHN0eWxpc3QnLCAnd2Vic2l0ZSddO1xuICBiaXpOYW1lOiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIHBob25lOiBzdHJpbmdcbiAgc3Rvcnk6IHN0cmluZ1xuICBiVHlwZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcHVibGljIGltYWdlczogQXJyYXk8c3RyaW5nPjtcblxuICB0b2tlbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgYXZhdGFyOiBzdHJpbmdcbiAgbGF0OiBhbnlcbiAgbG5nOiBhbnlcblxuICBzaG93Qml6Rm9ybTogYm9vbGVhblxuXG4gIEJJWjogYW55XG4gIFVTRVI6IGFueVxuICBpbWFnZSA9IFwiaHR0cDovL2Nkbi5jbm4uY29tL2Nubm5leHQvZGFtL2Fzc2V0cy8xOTA3MTAxMzUyNDUtMTItd2F0ZXJmcm9udC1yZXN0YXVyYW50cy5qcGdcIlxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZ2FtZTogR2FtZVByb3ZpZGVyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCApIHtcblxuICAgIHRoaXMuaW1hZ2VzID0gW11cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd0b2tlbicpXG4gICAgICB0aGlzLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCduYW1lJylcbiAgICAgIHRoaXMudXNlciA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3VzZXInKVxuICAgICAgdGhpcy5sYXQgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsYXQnKVxuICAgICAgdGhpcy5sbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsbmcnKVxuXG4gICAgICB0aGlzLnNob3dCaXpGb3JtID0gZmFsc2VcbiAgICAgIHRoaXMuZ1VTRVIoKVxuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgdXNlclxuICBnVVNFUigpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIHVzZXJcIilcbiAgICB0aGlzLiRnYW1lLmdVU0VSKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpKSA9PiB7XG5cbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBsZXQgVVNFUiA9IGpvcmRpLnBheWxvYWRbMF1cbiAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzFdXG5cbiAgICAgICAgICAgICAgdGhpcy5VU0VSID0gVVNFUlxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJJWilcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLkJJWiA9IFtdXG4gICAgICAgICAgICB0aGlzLlVTRVIgPSBbXVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ1NBVkUoKSB7XG5cbiAgICBpZiAoIXRoaXMuYml6TmFtZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzICBuYW1lP1wiLCBcImVycm9yXCIpXG4gICAgfSBlbHNlIGlmICghdGhpcy5hZGRyZXNzKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgYWRkcmVzcz9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5waG9uZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIHBob25lP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0b3J5KSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3Mgc3Rvcnk/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuJGdhbWUuYml6U0FWRSh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuYml6TmFtZSwgdGhpcy5hZGRyZXNzLCB0aGlzLnBob25lLCB0aGlzLnN0b3J5LCB0aGlzLmVtYWlsLCB0aGlzLmJUeXBlLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGpvcmRpKSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcblxuICAgIENhbWVyYS50YWtlUGljdHVyZSh7IHNhdmVUb0dhbGxlcnk6IGZhbHNlLCB3aWR0aDogMzIwLCBoZWlnaHQ6IDI0MCB9KS50aGVuKChwaWN0dXJlOiBhbnkpID0+IHtcbiAgICAgIGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgIGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIE1ENShuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcbiAgICAgIHBpY3R1cmUuc2F2ZVRvRmlsZShwYXRoLCBJbWFnZUZvcm1hdC5wbmcsIDYwKTtcbiAgICAgIHRoaXMudXBsb2FkKFwiaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC91cGxvYWRcIiwgXCJ1cGxvYWRcIiwgcGF0aClcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChwYXRoLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxldmFyOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBzZXNzaW9uID0gQmFja2dyb3VuZEh0dHAuc2Vzc2lvbihcImZpbGUtdXBsb2FkXCIpO1xuICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgIHVybDogZGVzdGluYXRpb24sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICAgIH07XG4gICAgICBsZXQgcGFyYW1zID0gW3sgXCJuYW1lXCI6IGZpbGV2YXIsIFwiZmlsZW5hbWVcIjogZmlsZXBhdGgsIFwibWltZVR5cGVcIjogXCJpbWFnZS9wbmdcIiB9XTtcbiAgICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgICAgIHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGZpbGUgPSBGaWxlU3lzdGVtLkZpbGUuZnJvbVBhdGgoZmlsZXBhdGgpO1xuICAgICAgICBmaWxlLnJlbW92ZSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KFwiVXBsb2FkZWQgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IGRlbGV0ZSBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgdXBsb2FkIGBcIiArIGZpbGVwYXRoICsgXCJgLiBcIiArIGV2ZW50LmV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuYlR5cGUgPSB0aGlzLmJpelR5cGVbcGlja2VyLnNlbGVjdGVkSW5kZXhdXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5iVHlwZSk7XG4gIH1cblxuICBwb3AobWVzc2FnZTogYW55LCB0eXBlOiBhbnkpIHtcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHR5cGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuXG4gICAgY29uZmlybShvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmFjZSBjaG9zZW4hXCIpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpIHtcblxuICAgIHRoaXMuX2NyZWF0ZSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBoYXNodGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRldGFpbHM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjYXRlZ29yeTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXG4gICAgfSk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4uZmEtcmVndWxhciB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtc29saWQtOTAwJztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5nYW1lSW1hZ2Uge1xcbiAgICB3aWR0aDoyNSU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOjVweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbn1cXG5cXG4udGV4dEJvbGR7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmdyYWJ7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjUyMjI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6d2hpdGU7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxud2lkdGg6MTAwcHg7XFxuaGVpZ2h0OjIwMHB4XFxufVxcblxcbi5zbGFwe1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiNGMkYwMjI7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5zbmVha3tcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojMjJGMjI3O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uYXZhdGFyc3tcXG4gIC8qIHVzZXI6ICovXFxuYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjUwKTtcXG5oZWlnaHQ6YXV0bztcXG53aWR0aDoyMDBweFxcblxcbn1cXG4uY2FyZFN0eWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmNhcmRDb250ZW50IHtcXG4gICAgcGFkZGluZzogMjA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDMwO1xcbn1cXG4ucGlja2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYnJvd247XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbiAgICBib3JkZXItd2lkdGg6IDI7XFxuICAgIHdpZHRoOiAyMDA7XFxuICAgIGhlaWdodDogMTAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJHcmFiYml0XFxcIiBjbGFzcz1cXFwiaDFcXFwiPlxcblxcbjwvQWN0aW9uQmFyPlxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgKm5nSWY9XFxcInNob3dCaXpGb3JtXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0ZSB5b3VyIGJ1c2luZXNzIHByb2ZpbGVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCAqLCAqLCAqLCAqLCosKlxcXCIgY29sdW1ucz1cXFwiODAsICpcXFwiIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG5cXG4gICAgICAgICAgPExpc3RQaWNrZXIgIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW2l0ZW1zXT1cXFwiYml6VHlwZVxcXCIgc2VsZWN0ZWRJbmRleD1cXFwiMFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiPjwvTGlzdFBpY2tlcj5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJOYW1lXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJiaXpOYW1lXFxcIiBoaW50PVxcXCJidXNpbmVzcyBuYW1lXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkFkZHJlc3NcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZHJlc3NcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIGFkZHJlcnNzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIlBob25lXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwaG9uZVxcXCIgaGludD1cXFwicGhvbmVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiRW1haWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImVtYWlsXFxcIiBoaW50PVxcXCJ5b3VyIGJ1c2luZXNzIGVtYWlsXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIlN0b3J5XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJzdG9yeVxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBzdG9yeVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjZcXFwiIGNvbFNwYW49MiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwiZ1NBVkUoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwic3RvcnlcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiM1xcXCIgKm5nSWY9XFxcImJUeXBlPT0nc2V4J1xcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaW1hZ2VBc3NldHNcXFwiICpuZ0lmPVxcXCJpbWFnZUFzc2V0cyAmJiBpbWFnZUFzc2V0cy5sZW5ndGg+MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaW1hZ2U9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3dpZHRoXT1cXFwidGh1bWJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cXFwidGh1bWJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cXFwiaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgW3RleHRdPVxcXCInaW1hZ2UgJyArIGlcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcInNhdmUoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvR3JpZExheW91dD5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgKm5nSWY9XFxcInNob3dHYW1lRm9ybVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGUge3twcml6ZVR5cGV9fSBnYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiVGl0bGVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiID48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZ2FtZVRpdGxlXFxcIiBoaW50PVxcXCJnYW1lIHRpdGxlXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiBtYXhMZW5ndGg9XFxcIjI0XFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJNYXggUGxheWVyc1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJtYXhQbGF5ZXJzXFxcIiBoaW50PVxcXCJtYXggcGxheWVyc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIG1heExlbmd0aD1cXFwiMlxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiUHJpemVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiID48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicHJpemVcXFwiIGhpbnQ9XFxcIjE1JSBvZmYgY291cG9uXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgbWF4TGVuZ3RoPVxcXCIyXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIybmQgUHJpemVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdldmVyeW9uZSB3aW5zJ1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInByaXplMlxcXCIgaGludD1cXFwiMTAlIG9mZiBjb3Vwb25cXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIiBtYXhMZW5ndGg9XFxcIjJcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdldmVyeW9uZSB3aW5zJ1xcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiSXRlbSBQcmljZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcInByaXplVHlwZT09J2ZyZWUgaXRlbSAgd2l0aCAgcHVyY2hhc2UnXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicHJpY2VcXFwiIGhpbnQ9XFxcImJ1eSAkMzAgaXRlbVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgIG1heExlbmd0aD1cXFwiMjRcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJ1xcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwiY3JlYXRlIGdhbWVcXFwiICh0YXApPVxcXCJnQ3JlYXRlKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiAqbmdJZj1cXFwiYlR5cGU9PSdzZXgnXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJpbWFnZUFzc2V0c1xcXCIgKm5nSWY9XFxcImltYWdlQXNzZXRzICYmIGltYWdlQXNzZXRzLmxlbmd0aD4wXFxcIj5cXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pbWFnZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbd2lkdGhdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVxcXCJpbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiBbdGV4dF09XFxcIidpbWFnZSAnICsgaVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwic2F2ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcblxcbiAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiAqbmdJZj1cXFwiIXNob3dCaXpGb3JtXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHt7dHlwZX19IGdhbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGUge3t0eXBlfX0gZ2FtZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiICpuZ0lmPVxcXCJ0eXBlPT0nY291cG9uJ1xcXCI+XFxuXFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqLCosKiwqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJHcmFiYml0IGlzIGFuIGF3ZXNvbWUgd2F5IHRvIGVuZ2FnZSBsb2NhbHMgd2l0aCBkZWFscyBhbmQgZGlzY291bnRzLiBJdCBjb3N0cyBhcyBsaXR0bGUgYXMgJDAuNjUgcGVyIHBsYXllciBjb21wZXRpbmcgZm9yIHlvdXIgY291cG9uLiBHYW1lcyBhcmUgZ2VvIGZlbmNlZCB0byBsb2NhbHMgd2l0aGluIDEwIG1pbGVzLiBMb2NhbHMgcGxheSBGUkVFIHRvIHdpbiB5b3VyIGNvdXBvblxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaDMgcC0yMCB0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9JzEyJz48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR2FtZSBUeXBlc1xcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCIyXFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMSBXaW5uZXJcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJvbmx5IG9uZSBwbGF5ZXIgd2luc1xcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMC42NSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCcxIHdpbm5lcicpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCIzXFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXZlcnlvbmUgV2luc1xcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIndpbm5lciBnZXRzIGEgNTAlIG9mZiBjb3Vwb24sIGFsbCBvdGhlciBwbGF5ZXJzIGdldCBhIDE1JSBvZmYgY291cG9uIChleGFtcGxlKVxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMS43NSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCdldmVyeW9uZSB3aW5zJylcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSAtcm91bmRlZC1sZ1xcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjRcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXaW5uZXIgTXVzdCBCcmluZyBBIEZyaWVuZFxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIndpbm5lciBtdXN0IGJyaW5nIGEgZnJpZW5kIHRvIHJlZGVlbSB0aGUgY291cG9uXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiQxIHBlciBwbGF5ZXJcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiY3JlYXRlXFxcIiAodGFwKT1cXFwib25DcmVhdGUoJ3dpbm5lciBtdXN0IGJyaW5nIGEgZnJpZW5kJylcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSAtcm91bmRlZC1sZ1xcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjVcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGcmVlIGl0ZW0gd2l0aCBwdXJjaGFzZVxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIndpbm5lciBnZXRzIGEgZnJlZSBpdGVtLCB3aXRoIHB1cmNoYXNlXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiQxIHBlciBwbGF5ZXJcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiY3JlYXRlXFxcIiAodGFwKT1cXFwib25DcmVhdGUoJ2ZyZWUgaXRlbSAgd2l0aCAgcHVyY2hhc2UnKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IC1yb3VuZGVkLWxnXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjZcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZBUSdzXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjdcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJFeHBsYWluIHBlciBwbGF5ZXIgcHJpY2luZ1xcXCIgY2xhc3M9XFxcIm0tYi0xMCBoMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIndoZW4gY3JlYXRpbmcgeW91ciBnYW1lLCB5b3UgY2hvb3NlIHRoZSBtYXggbnVtYmVyIG9mIHBsYXllcnMgZm9yIHlvdXIgZ2FtZS4gSWYgeW91IGNob29zZSAxMCBtYXggcGxheWVycyBmb3IgYSAxIHdpbm5lciBnYW1lLCBpdCB3aWxsIGNvc3QgJDYuNTBcXFwiIGNsYXNzPVxcXCJtLWItMjAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcImlmIGxlc3MgdGhhbiAxMCBwbGF5ZXJzIGpvaW4gdGhlIGdhbWUsIHRoZSBkaWZmZXJlbmNlIHdpbGwgYmUgcmV0dXJuZWQgdG8geW91ciBiaXRjb2luIHdhbGxldFxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjEyXFxcIiAvPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI4XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2hhdHMgdGhlIGluY2VudGl2ZSBmb3IgcGxheWVycyB0byByZWRlZW0gdGhlaXIgY291cG9ucz9cXFwiIGNsYXNzPVxcXCJtLWItMTAgaDJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUGxheWVycyBhcmUgcmV3YXJkZWQgd2hlbiB0aGV5IHJlZGVlbSB0aGVpciBjb3Vwb25zLCBmcm9tIHJld2FyZCBwb2ludHMgdG8gZnJlZSB0b29scyBhbmQgdG8gb3RoZXIgcGVya3MuIFBsYXllcnMgbWF5IGFsc28gYmUgcGVuYWxpemVkIGZvciBub3QgcmVkZWVtaW5nIHRoZWlyIHdpbnNcXFwiIGNsYXNzPVxcXCJtLWItMjAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxMlxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiOVxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhbiBJIGV4dGVuZCB0aGUgbG9jYWwgcmFkaXVzIHRvIDIwIG1pbGVzP1xcXCIgY2xhc3M9XFxcIm0tYi0xMCBoMlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJZZXMsIHdpdGggYSBwcmVtaXVtIGZlYXR1cmVcXFwiIGNsYXNzPVxcXCJtLWItMjAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxMlxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIxXFxcIiAqbmdJZj1cXFwidHlwZT09J2JpdGNvaW4nXFxcIj5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0aW5nIGJpdGNvaW4gZ2FtZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgPC9HcmlkTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBHYW1lUHJvdmlkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgSW1hZ2VGb3JtYXQgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xudmFyIEZpbGVTeXN0ZW0gPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XG52YXIgQmFja2dyb3VuZEh0dHAgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiKTtcbnZhciBNRDUgPSByZXF1aXJlKFwiYmx1ZWltcC1tZDVcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQ3JlYXRlXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jcmVhdGUuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgX2NyZWF0ZTogRm9ybUdyb3VwXG4gIHB1YmxpYyBiaXpUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydyZXN0YXVyYW50JywgJ3JldGFpbCcsICdzcGEnLCAnYmFyJywgJ2NhZmUnLCAnZm9vZCB0cnVjaycsICd0b3VyaXNtJywgJ3NhbG9uJywgJ2hhaXIgc3R5bGlzdCcsICd3ZWJzaXRlJ107XG4gIGJpek5hbWU6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgcGhvbmU6IHN0cmluZ1xuICBzdG9yeTogc3RyaW5nXG4gIGJUeXBlOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwdWJsaWMgaW1hZ2VzOiBBcnJheTxzdHJpbmc+O1xuICBsb2NhdGlvbnMgPSBbXTtcblxuICBnYW1lVGl0bGU6IHN0cmluZ1xuICBtYXhQbGF5ZXJzOiBzdHJpbmdcbiAgcHJpemU6IHN0cmluZ1xuICBwcml6ZTI6IHN0cmluZ1xuICBwcmljZTogc3RyaW5nXG5cbiAgdG9rZW46IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXNlcjogc3RyaW5nXG4gIGF2YXRhcjogc3RyaW5nXG4gIGxhdDogYW55XG4gIGxuZzogYW55XG4gIHR5cGU6IGFueVxuICBwcml6ZVR5cGU6IGFueVxuICBzaG93R2FtZUZvcm06IGJvb2xlYW5cbiAgc2hvd0JpekZvcm06IGJvb2xlYW5cbiAgJGdhbWU6IGFueVxuICBhZG1pbjogYW55XG4gIEJJWjogYW55XG4gIFVTRVI6IGFueVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgKSB7XG5cbiAgICB0aGlzLiRnYW1lID0gX2dhbWVcbiAgICB0aGlzLmltYWdlcyA9IFtdXG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndG9rZW4nKVxuICAgICAgdGhpcy5uYW1lID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbmFtZScpXG4gICAgICB0aGlzLnVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd1c2VyJylcbiAgICAgIHRoaXMubGF0ID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbGF0JylcbiAgICAgIHRoaXMubG5nID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbG5nJylcblxuICAgICAgdGhpcy5zaG93Qml6Rm9ybSA9IGZhbHNlXG4gICAgICB0aGlzLnNob3dHYW1lRm9ybSA9IGZhbHNlXG5cbiAgICAgIHRoaXMudHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnR5cGVcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcblxuICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlclwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCBVU0VSID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICB0aGlzLkJJWiA9IGpvcmRpLnBheWxvYWRbMV1cblxuICAgICAgICAgICAgICB0aGlzLlVTRVIgPSBVU0VSXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQklaKVxuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9IFVTRVIucHJvZmlsZS5uYW1lIHx8ICdubyB1c2VyIG5hbWUgc2V0J1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9IFVTRVIucHJvZmlsZS5hdmF0YXIgfHwgJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG4gICAgICAgICAgICAgIHRoaXMuYWRtaW4gPSBVU0VSLnByb2ZpbGUuYWRtaW5cblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSAnbi9hJ1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9ICd+L2Fzc2V0cy9pbWdzL2F2YXRhcnMvYWxpZW5fMDIucG5nJ1xuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ1NBVkUoKSB7XG5cbiAgICBpZiAoIXRoaXMuYml6TmFtZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzICBuYW1lP1wiLCBcImVycm9yXCIpXG4gICAgfSBlbHNlIGlmICghdGhpcy5hZGRyZXNzKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgYWRkcmVzcz9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5waG9uZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIHBob25lP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0b3J5KSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3Mgc3Rvcnk/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuJGdhbWUuYml6U0FWRSh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuYml6TmFtZSwgdGhpcy5hZGRyZXNzLCB0aGlzLnBob25lLCB0aGlzLnN0b3J5LCB0aGlzLmVtYWlsLCB0aGlzLmJUeXBlLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGpvcmRpKSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgb25DcmVhdGUocHJpemVUeXBlKSB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMucHJpemVUeXBlID0gcHJpemVUeXBlXG5cbiAgICAgIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPCAxKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaG93Qml6Rm9ybSlcbiAgICAgICAgdGhpcy5wb3AoXCJsZXRzIGNyZWF0ZSB5b3VyIGJ1c2luZXNzIHByb2ZpbGUgMXN0XCIsIFwiZXJyb3JcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGUtYnVzaW5lc3MvJ10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApO1xuICAgICAgICAvLyB0aGlzLnNob3dCaXpGb3JtID0gdHJ1ZVxuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCkge1xuXG5cbiAgICAgICAgdGhpcy5zaG93R2FtZUZvcm0gPSB0cnVlXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudXNlcikge1xuXG4gICAgICAgIHRoaXMucG9wKFwibG9nIGluIHRvIGNyZWF0ZSBhIGdhbWVcIiwgXCJlcnJvclwiKVxuXG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIHB1YmxpYyB0YWtlUGljdHVyZSgpIHtcblxuICAgIENhbWVyYS50YWtlUGljdHVyZSh7IHNhdmVUb0dhbGxlcnk6IGZhbHNlLCB3aWR0aDogMzIwLCBoZWlnaHQ6IDI0MCB9KS50aGVuKChwaWN0dXJlOiBhbnkpID0+IHtcbiAgICAgIGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgIGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIE1ENShuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcbiAgICAgIHBpY3R1cmUuc2F2ZVRvRmlsZShwYXRoLCBJbWFnZUZvcm1hdC5wbmcsIDYwKTtcbiAgICAgIHRoaXMudXBsb2FkKFwiaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC91cGxvYWRcIiwgXCJ1cGxvYWRcIiwgcGF0aClcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChwYXRoLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxldmFyOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBzZXNzaW9uID0gQmFja2dyb3VuZEh0dHAuc2Vzc2lvbihcImZpbGUtdXBsb2FkXCIpO1xuICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgIHVybDogZGVzdGluYXRpb24sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICAgIH07XG4gICAgICBsZXQgcGFyYW1zID0gW3sgXCJuYW1lXCI6IGZpbGV2YXIsIFwiZmlsZW5hbWVcIjogZmlsZXBhdGgsIFwibWltZVR5cGVcIjogXCJpbWFnZS9wbmdcIiB9XTtcbiAgICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgICAgIHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGZpbGUgPSBGaWxlU3lzdGVtLkZpbGUuZnJvbVBhdGgoZmlsZXBhdGgpO1xuICAgICAgICBmaWxlLnJlbW92ZSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KFwiVXBsb2FkZWQgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IGRlbGV0ZSBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgdXBsb2FkIGBcIiArIGZpbGVwYXRoICsgXCJgLiBcIiArIGV2ZW50LmV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuYlR5cGUgPSB0aGlzLmJpelR5cGVbcGlja2VyLnNlbGVjdGVkSW5kZXhdXG4gICAgY29uc29sZS5sb2codGhpcy5iVHlwZSk7XG4gIH1cblxuICBwb3AobWVzc2FnZTogYW55LCB0eXBlOiBhbnkpIHtcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHR5cGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuXG4gICAgY29uZmlybShvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmFjZSBjaG9zZW4hXCIpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpIHtcblxuICAgIHRoaXMuX2NyZWF0ZSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBoYXNodGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRldGFpbHM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjYXRlZ29yeTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXG4gICAgfSk7XG4gIH1cblxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsIlxuaW1wb3J0IHsgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IEVycm9yT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTZXNzaW9uUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2FtZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xuICAgIC8vY29uc29sZS5sb2coJ0hlbGxvIFNlc3Npb25Qcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgLy8vL2d1c2VyXG4gIGdVU0VSKHRva2VuOiBhbnksIHVzZXI6IGFueSwgbGF0OiBhbnksIGxuZzogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2dVU0VSJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vYnVzaW5lc3NcbiAgYml6U0FWRSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGJpem5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBzdG9yeTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBiVHlwZTogc3RyaW5nLCBsYXQ6IGFueSwgbG5nOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBiaXpOYW1lOiBiaXpuYW1lLFxuICAgICAgcGhvbmU6IHBob25lLFxuICAgICAgc3Rvcnk6IHN0b3J5LFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgYlR5cGU6IGJUeXBlLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JTQVZFJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vZ2FtZVxuICBiR0FNRVMobGF0LCBsbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIC8vIHRva2VuOiB1c2VyX3Rva2VuLFxuICAgICAgLy8gdXNlcl9pZDogdXNlcl9pZCxcbiAgICAgIC8vIGdUeXBlOiBnVHlwZSxcbiAgICAgIC8vIGdJRDogZ0lELFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JHQU1FUycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25HcmFiKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ2FtZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9ncmFiJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblNsYXAodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NsYXAnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uU25lYWsodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NuZWFrJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkF2YXRhcih0b2tlbjogYW55LCB1c2VyOiBhbnksIGF2YXRhcjogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgYXZhdGFyOiBhdmF0YXIsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYXZhdGFyJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkVkaXQodG9rZW46IGFueSwgdXNlcjogYW55LCB0ZXh0OiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcHJvZmlsZS9lZGl0JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblRpbWVyKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ0lEOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnSUQ6IGdJRCxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC90aW1lcicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcGxheSh0b2tlbjogYW55LCB1c2VyOiBhbnksIGdJRDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ0lEOiBnSUQsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcGxheScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgbG9naW4obnVtYmVyOiBzdHJpbmcsIGRldmljZTogc3RyaW5nLCBsYXQ6IHN0cmluZywgbG5nOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgZGV2aWNlOiBkZXZpY2UsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvbG9naW4nLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGxvZ2luQ29tcGxldGUoY29kZTogc3RyaW5nLCBkZXZpY2U6IHN0cmluZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIGRldmljZTogZGV2aWNlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2xvZ2luQ29tcGxldGUnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzO1xuICAgIHJldHVybiBib2R5IHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGVyciA9IGVycm9yIHx8ICcnO1xuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVyck1zZyk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGltZXIvdGltZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2VudW1zL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9