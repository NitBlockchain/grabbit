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

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"askBiz\">\n\n    <GridLayout class=\"anim-cover\" rows=\"auto,auto,auto\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\">\n\n        <Label text=\"use your yelp id\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n        <Image\n            [src]=\"yelpImage\" stretch=\"aspectFill\"  width=\"72%\"></Image>\n\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"2\">\n        <Button text=\"get biz info\" (tap)=\"onYelp()\" class=\"-primary\"></Button>\n\n      </StackLayout>\n\n     </GridLayout>\n\n</StackLayout>\n\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"showBiz\">\n\n    <GridLayout class=\"anim-cover\" rows=\"auto,auto,auto\" columns=\"*\">\n        <Image row=\"0\" col=\"0\" marginTop=\"-40\" height=\"180\" stretch=\"aspectFill\"\n            class=\"card-img\" [src]=\"BIZ[0].profile[0].images[0].url\"></Image>\n\n            <GridLayout class=\"anim-itemInfo p-l-4\" marginTop=\"15\" row=\"1\"\n                width=\"100%\" columns=\"auto,*\" rows=\"*,*,*,*,*,*\"\n                verticalAlignment=\"center\">\n                <Label row=\"0\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].name  || 'business category'}}\"></Label>\n                <Label row=\"1\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].address  || 'business address'}}\"></Label>\n                <Label row=\"2\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].phone  || 'business phone'}}\"></Label>\n                <Label row=\"3\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].email  || 'no email'}}\"></Label>\n\n            </GridLayout>\n\n            <StackLayout row=\"2\" *ngIf=\"BIZ[0].profile[0].verified<1\">\n              <Label class=\"item-category\" text=\"we'll call your business, enter the code you receive to verify this business\" textWrap=\"true\"></Label>\n\n              <Button text=\"verify biz\" (tap)=\"vYELP()\" horizontalAlignment=\"stretch\" class=\"-primary\"></Button>\n\n            </StackLayout>\n    </GridLayout>\n\n</StackLayout>\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"showBizForm\">\n\n  <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n    <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n      <Label text=\"creating your business profile\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n    </StackLayout>\n\n    <StackLayout row=\"1\">\n      <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n        <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n        <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n        <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n      </GridLayout>\n    </StackLayout>\n    <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n      <GridLayout rows=\"*, auto, auto\">\n          <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n              <ng-template let-image=\"item\" let-i=\"index\">\n                  <GridLayout columns=\"auto, *\">\n                      <Image\n                          [width]=\"thumbSize\"\n                          [height]=\"thumbSize\"\n                          [src]=\"image\" stretch=\"aspectFill\"></Image>\n                      <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                  </GridLayout>\n              </ng-template>\n          </ListView>\n          <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n      </GridLayout>\n    </StackLayout>\n  </GridLayout>\n\n</StackLayout>\n"

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
        this.yelpImage = "https://i.imgur.com/hP9GPp3.png";
        this.images = [];
        this.$game = _game;
        this.showBiz = false;
        this.showVerify = false;
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
        console.log("getting the user and biz");
        this.$game.gUSER(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.USER = jordi.payload[0];
                    _this.BIZ = jordi.payload[1];
                    if (_this.BIZ && _this.BIZ.length > 0 && _this.BIZ[0].profile[0].verified < 1) {
                        _this.showVerify = true;
                        _this.showBiz = true;
                        _this.askBiz = false;
                    }
                    else if (_this.BIZ && _this.BIZ.length > 0 && _this.BIZ[0].profile[0].verified > 0) {
                        _this.showVerify = false;
                        _this.showBiz = true;
                        _this.askBiz = false;
                    }
                    else if (_this.BIZ && _this.BIZ.length < 1) {
                        _this.showVerify = false;
                        _this.showBiz = false;
                        _this.askBiz = true;
                    }
                    // console.log(jordi.payload)
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
    CreateBusinessComponent.prototype.onYelp = function () {
        var _this = this;
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"]({
            title: "Yelp",
            message: "enter yelp id",
            okButtonText: "get yelp",
            cancelButtonText: "cancel",
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text
        }).then(function (r) {
            if (r.text) {
                _this.bYELP(r.text);
                // this.loginComplete(r.text)
            }
            else {
                // this.pop('enter yelp id?', 'error')
            }
            // console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
    };
    CreateBusinessComponent.prototype.bYELP = function (yelp) {
        var _this = this;
        this.$game.bYELP(this.token, this.user, this.lat, this.lng, yelp)
            .subscribe(function (jordi) {
            console.log(jordi);
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.BIZ = jordi.payload;
                    _this.showBiz = true;
                    _this.pop(jordi.message, "success");
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.pop(jordi.message, "error");
            }
        });
    };
    CreateBusinessComponent.prototype.vYELP = function (yelp) {
        var _this = this;
        this.$game.vYELP(this.token, this.user, null)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"]({
                        title: "Verify Business",
                        message: "enter verification code",
                        okButtonText: "confirm",
                        cancelButtonText: "cancel",
                        inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text
                    }).then(function (r) {
                        if (r.text) {
                            _this.$game.vYELP(_this.token, _this.user, r.text)
                                .subscribe(function (jordi) {
                                if (jordi.success) {
                                    _this.pop(jordi.message, 'success');
                                }
                                else {
                                    _this.pop(jordi.message, 'error');
                                }
                            });
                        }
                        else {
                            // this.pop('enter verification code', 'error')
                        }
                        // console.log("Dialog result: " + r.result + ", text: " + r.text);
                    });
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.pop(jordi.message, "error");
            }
        });
    };
    // gSAVE() {
    //
    //   if (!this.bizName) {
    //     this.pop("whats your business  name?", "error")
    //   } else if (!this.address) {
    //     this.pop("whats your business address?", "error")
    //
    //   } else if (!this.phone) {
    //     this.pop("whats your business phone?", "error")
    //
    //   } else if (!this.story) {
    //     this.pop("whats your business story?", "error")
    //
    //   } else {
    //
    //     this.$game.bizSAVE(this.token, this.user, this.bizName, this.address, this.phone, this.story, this.email, this.bType, this.lat, this.lng)
    //       .subscribe(
    //         (jordi) => {
    //           if (jordi.success) {
    //
    //             this.zone.run(() => {
    //
    //               this.BIZ = jordi.payload[0]
    //               this.pop(jordi.message, "success")
    //
    //               this.cd.detectChanges();
    //
    //             })
    //
    //             this.BIZ = jordi.payload[0]
    //             this.pop(jordi.message, "success")
    //
    //           } else {
    //             this.pop(jordi.message, "error")
    //
    //           }
    //         })
    //   }
    //
    // }
    //
    // public takePicture() {
    //
    //   Camera.takePicture({ saveToGallery: false, width: 320, height: 240 }).then((picture: any) => {
    //     let folder = FileSystem.knownFolders.documents();
    //     let path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
    //     picture.saveToFile(path, ImageFormat.png, 60);
    //     this.upload("https://app.grabbit.cheap/upload", "upload", path)
    //       .subscribe(result => {
    //         this.zone.run(() => {
    //           this.images.push(path.replace(/^.*[\\\/]/, ''));
    //         });
    //       }, error => {
    //         console.log(error);
    //       });
    //   });
    // }
    //
    // public upload(destination: string, filevar: string, filepath: string) {
    //   return new Observable((observer: any) => {
    //     let session = BackgroundHttp.session("file-upload");
    //     let request = {
    //       url: destination,
    //       method: "POST"
    //     };
    //     let params = [{ "name": filevar, "filename": filepath, "mimeType": "image/png" }];
    //     let task = session.multipartUpload(params, request);
    //     task.on("complete", (event) => {
    //       let file = FileSystem.File.fromPath(filepath);
    //       file.remove().then(result => {
    //         observer.next("Uploaded `" + filepath + "`");
    //         observer.complete();
    //       }, error => {
    //         observer.error("Could not delete `" + filepath + "`");
    //       });
    //     });
    //     task.on("error", event => {
    //       console.log(event);
    //       observer.error("Could not upload `" + filepath + "`. " + event.eventName);
    //     });
    //   });
    // }
    //
    // public onSelectedIndexChanged(args: EventData) {
    //   const picker = <ListPicker>args.object;
    //   this.bType = this.bizType[picker.selectedIndex]
    //   // console.log(this.bType);
    // }
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

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<ScrollView class=\"page\">\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showBizForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n          <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n          <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n          <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n      <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n        <GridLayout rows=\"*, auto, auto\">\n            <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n                <ng-template let-image=\"item\" let-i=\"index\">\n                    <GridLayout columns=\"auto, *\">\n                        <Image\n                            [width]=\"thumbSize\"\n                            [height]=\"thumbSize\"\n                            [src]=\"image\" stretch=\"aspectFill\"></Image>\n                        <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                    </GridLayout>\n                </ng-template>\n            </ListView>\n            <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showGameForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"creating {{prizeType}} game for\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n        <Label [text]=\"BIZ[0].profile[0].name\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].address\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].phone\" class=\"h3 text-center  p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n      </StackLayout>\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *, 80\" class=\"form\">\n\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border p-t-20\" maxLength=\"24\"></TextField>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"maxPlayers\" hint=\"max players\" class=\"input input-border p-t-20\" keyboardType=\"number\" maxLength=\"2\"></TextField>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"prize\" hint=\"winner gets a 25% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"prize2\" hint=\"none winners get a 10% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\" *ngIf=\"prizeType=='everyone wins'\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"price\" hint=\"buy $30 item\" class=\"input input-border p-t-20\"  maxLength=\"24\" *ngIf=\"prizeType=='free item  with  purchase'\"></TextField>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"details\" hint=\"prize details\" class=\"input input-border p-t-20\"  maxLength=\"150\"></TextField>\n\n          <Button row=\"6\" col='1' text=\"create game\" (tap)=\"gCreate()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"4\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"total USD: ${{maxPlayers*playerFee || 0 | number : '1.2-2'}}\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"1 btc = ${{btc_value}}\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n\n        <Label text=\"Winner(s) must redeem coupon within 72  hours\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"If less than the max number of players play your game, the difference will be returned to your wallet\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"21\"></Label>\n\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"!showBizForm\">\n    <GridLayout rows=\"*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"0\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='coupon'\">\n\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*\" columns=\"*\">\n\n          <StackLayout class=\"p-20\" row=\"0\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Grabbit is an awesome way to engage locals with deals and discounts. It costs as little as $0.65 per player competing for your coupon. Games are geo fenced to locals within 10 miles. Locals play FREE to win your coupon\"\n                  class=\"h3 p-20 text-center\" textWrap=\"true\" lineHeight='12'></Label>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"Game Types\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"2\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"1 Winner\" class=\"m-b-10 h3\" />\n                <Label text=\"only one player wins\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$0.65 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('1 winner')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"3\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Everyone Wins\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a 50% off coupon, all other players get a 15% off coupon (example)\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1.75 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('everyone wins')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"4\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Winner Must Bring A Friend\" class=\"m-b-10 h3\" />\n                <Label text=\"winner must bring a friend to redeem the coupon\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('winner must bring a friend')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"5\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Free item with purchase\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a free item, with purchase\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('free item  with  purchase')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"6\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"FAQ's\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"7\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Explain per player pricing\" class=\"m-b-10 h2\" />\n                <Label text=\"when creating your game, you choose the max number of players for your game. If you choose 10 max players for a 1 winner game, it will cost $6.50\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n                <Label text=\"if less than 10 players join the game, the difference will be returned to your bitcoin wallet\" class=\"m-b-10 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"8\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Whats the incentive for players to redeem their coupons?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Players are rewarded when they redeem their coupons, from reward points to free tools and to other perks. Players may also be penalized for not redeeming their wins\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"9\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Can I extend the local radius to 20 miles?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Yes, with a premium feature\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='bitcoin'\">\n\n        <GridLayout rows=\"*,*\" columns=\"*\">\n          <StackLayout orientation=\"vertical\" row=\"0\">\n\n            <Label text=\"creating bitcoin game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n\n  </GridLayout>\n</ScrollView>\n"

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
                console.log(jordi.btc_value);
                _this.zone.run(function () {
                    var USER = jordi.payload[0];
                    _this.BIZ = jordi.payload[1];
                    _this.USER = USER;
                    _this.btc_value = jordi.btc_value;
                    _this.btc_fee = jordi.btc_fee;
                    _this.btc_fee_usd = jordi.btc_fee_usd;
                    // console.log(this.BIZ.profle)
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
    CreateComponent.prototype.gCreate = function () {
        var _this = this;
        if (!this.gameTitle) {
            this.pop("whats the game title?", "error");
        }
        else if (!this.maxPlayers) {
            this.pop("whats the max number of players?", "error");
        }
        else if (!this.prize) {
            this.pop("whats the prize?", "error");
        }
        else if (this.prizeType == 'everyone wins' && !this.prize2) {
            this.pop("whats the  prize  for none winners?", "error");
        }
        else if (this.prizeType == 'free item  with  purchase' && !this.price) {
            this.pop("whats the price of the  item to purchase?", "error");
        }
        else if (!this.details) {
            this.pop("whats the prize details?", "error");
        }
        else {
            var total = this.maxPlayers * this.playerFee;
            this.$game.gCREATE(this.token, this.user, this.prizeType, this.gameTitle, this.maxPlayers, this.prize, this.prize2, this.price, total)
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
        else if (!this.details) {
            this.pop("whats the  game  details?", "error");
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
            if (prizeType == '1 winner') {
                _this.playerFee = .65;
            }
            if (prizeType == 'everyone wins') {
                _this.playerFee = 1.75;
            }
            if (prizeType == 'winner must bring a friend') {
                _this.playerFee = 1;
            }
            if (prizeType == 'free item  with  purchase') {
                _this.playerFee = 1;
            }
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
            else if (_this.BIZ && _this.BIZ.length > 0 && _this.BIZ[0].profile[0].verified < 1) {
                _this.pop("please verify business", "error");
                setTimeout(function () {
                    _this.router.navigate(['/create-business/'], {
                        animated: false,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (_this.BIZ && _this.BIZ.length > 0 && _this.BIZ[0].profile[0].verified > 0) {
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

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
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
    GameProvider.prototype.bYELP = function (token, user, lat, lng, yelp) {
        var DATA = {
            user: user,
            token: token,
            yelp: yelp,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/bYelp', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.vYELP = function (token, user, code) {
        var DATA = {
            user: user,
            token: token,
            code: code,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/vYelp', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.gCREATE = function (token, user, prizeType, gameTitle, maxPlayers, prize, prize2, price, total) {
        var DATA = {
            user: user,
            token: token,
            prizeType: prizeType,
            gameTitile: gameTitle,
            maxPlayers: maxPlayers,
            prize: prize,
            prize2: prize2,
            price: price,
            total: total
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/gCreate', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.onPay = function (token, user, grabs, slaps, sneaks, payType) {
        var DATA = {
            user: user,
            token: token,
            grabs: grabs,
            slaps: slaps,
            sneaks: sneaks,
            payType: payType,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/onPay', DATA, httpOptions)
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

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb24vaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90aW1lci90aW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9lbnVtcy9lbnVtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLGlCQUFpQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsdURBQXVELHFCQUFxQixHQUFHLGNBQWMsZ0JBQWdCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxjQUFjLHNCQUFzQixHQUFHLFVBQVUscUNBQXFDLHVCQUF1QixjQUFjLG9CQUFvQixjQUFjLGlCQUFpQixVQUFVLHFDQUFxQyx1QkFBdUIsZ0JBQWdCLG9CQUFvQixPQUFPLFNBQVMscUNBQXFDLHVCQUF1QixnQkFBZ0Isb0JBQW9CLE9BQU8sV0FBVywwREFBMEQsY0FBYyxrQkFBa0IsRzs7Ozs7OztBQ0F0NUIsZ2M7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZKO0FBRWxIO0FBUzNDO0lBRUUsd0JBQW9CLElBQVksRUFBVSxFQUFxQixFQUFVLFFBQWtCO1FBQXZFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFH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RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXNvbGlkLTkwMCc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZ2FtZUltYWdlIHtcXG4gICAgd2lkdGg6MjUlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG59XFxuXFxuLnRleHRCb2xke1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmFie1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjI1MjIyO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOndoaXRlO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbndpZHRoOjEwMHB4O1xcbmhlaWdodDoyMDBweFxcbn1cXG5cXG4uc2xhcHtcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojRjJGMDIyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uc25lYWt7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6IzIyRjIyNztcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLmF2YXRhcnN7XFxuICAvKiB1c2VyOiAqL1xcbmJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC41MCk7XFxuaGVpZ2h0OmF1dG87XFxud2lkdGg6MjAwcHhcXG5cXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCIhRFVTRVJcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBYm91dCBVc1xcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkFib3V0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Fib3V0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuXG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50XCJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIi4vaG9tZS9ob21lLm1vZHVsZVwiKS50aGVuKG0gPT4gbS5Ib21lTW9kdWxlKSB9LFxuICB7IHBhdGg6IFwiYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiY3JlYXRlLzp0eXBlXCIsIGNvbXBvbmVudDogQ3JlYXRlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJjcmVhdGUtYnVzaW5lc3NcIiwgY29tcG9uZW50OiBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCB9XG5cbl07XG5cbi8vIGV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4vLyAgIEFib3V0Q29tcG9uZW50LFxuLy8gXTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9keVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7IC8vIHVzZWQgdG8gZGVzY3JpYmUgYXQgd2hhdCBhY2N1cmFjeSB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIGdldFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWJ1c2luZXNzL2NyZWF0ZS1idXNpbmVzcy5jb21wb25lbnRcIlxuQE5nTW9kdWxlKHtcblxuICBib290c3RyYXA6IFtcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgIENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XFxuICAgIG1hcmdpbjogMTUgMCAwIDE1O1xcbn1cXG5cXG5UZXh0VmlldyB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjM2U5ZWRiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJhdGUge1xcbiAgICBwYWRkaW5nLXRvcDogMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogI0ZGRTkwMDtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnJhdGluZy12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG5cXG4ubGlrZWQtYWN0aXZlIHtcXG4gICAgY29sb3I6ICM0MDgwRkY7XFxufVxcblxcbi5oZWFydC1hY3RpdmUge1xcbiAgICBjb2xvcjogI2I1MTIxMztcXG59XFxuXFxuLmRlZmF1bHQge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuXFxuLmxheW91dCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG5cXG4ubGlrZS1pY29uIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jYXRlZ29yeS1pY29uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiA0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4uY2FyZC1pbWctdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB3aWR0aDogMTMwO1xcbiAgICBoZWlnaHQ6IDcwO1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmxpbmVCcmVhayB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYW5pbS1wYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktcGFnZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICAgIH1cXG5cXG4gICAgMjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1jb3ZlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXI7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktY292ZXIge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0taW1hZ2VzIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcblxcbi5hbmltLWl0ZW1JbmZvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mbztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mbyB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1saWtlcyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktbGlrZXMge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0tY29udGVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcbi5waWNrZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMjtcXG4gICAgd2lkdGg6IDIwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwiYXNrQml6XFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImFuaW0tY292ZXJcXFwiIHJvd3M9XFxcImF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHlvdXIgYnVzaW5lc3MgcHJvZmlsZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInVzZSB5b3VyIHllbHAgaWRcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgW3NyY109XFxcInllbHBJbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgIHdpZHRoPVxcXCI3MiVcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJnZXQgYml6IGluZm9cXFwiICh0YXApPVxcXCJvblllbHAoKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwic2hvd0JpelxcXCI+XFxuXFxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWNvdmVyXFxcIiByb3dzPVxcXCJhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIG1hcmdpblRvcD1cXFwiLTQwXFxcIiBoZWlnaHQ9XFxcIjE4MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY2FyZC1pbWdcXFwiIFtzcmNdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5pbWFnZXNbMF0udXJsXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWl0ZW1JbmZvIHAtbC00XFxcIiBtYXJnaW5Ub3A9XFxcIjE1XFxcIiByb3c9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCpcXFwiIHJvd3M9XFxcIiosKiwqLCosKiwqXFxcIlxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVpbMF0ucHJvZmlsZVswXS5uYW1lICB8fCAnYnVzaW5lc3MgY2F0ZWdvcnknfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0uYWRkcmVzcyAgfHwgJ2J1c2luZXNzIGFkZHJlc3MnfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0ucGhvbmUgIHx8ICdidXNpbmVzcyBwaG9uZSd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVpbMF0ucHJvZmlsZVswXS5lbWFpbCAgfHwgJ25vIGVtYWlsJ319XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiAqbmdJZj1cXFwiQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQ8MVxcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcIndlJ2xsIGNhbGwgeW91ciBidXNpbmVzcywgZW50ZXIgdGhlIGNvZGUgeW91IHJlY2VpdmUgdG8gdmVyaWZ5IHRoaXMgYnVzaW5lc3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ2ZXJpZnkgYml6XFxcIiAodGFwKT1cXFwidllFTFAoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW5cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICpuZ0lmPVxcXCJzaG93Qml6Rm9ybVxcXCI+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGluZyB5b3VyIGJ1c2luZXNzIHByb2ZpbGVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCI+XFxuICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICA8TGlzdFBpY2tlciAgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJiaXpUeXBlXFxcIiBzZWxlY3RlZEluZGV4PVxcXCIwXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+PC9MaXN0UGlja2VyPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJOYW1lXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYml6TmFtZVxcXCIgaGludD1cXFwiYnVzaW5lc3MgbmFtZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiQWRkcmVzc1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZHJlc3NcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIGFkZHJlcnNzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInBob25lXFxcIiBoaW50PVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiRW1haWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBlbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiU3RvcnlcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJzdG9yeVxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBzdG9yeVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcImdTQVZFKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIgKm5nSWY9XFxcInN0b3J5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiICpuZ0lmPVxcXCJiVHlwZT09J3NleCdcXFwiPlxcbiAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaW1hZ2VBc3NldHNcXFwiICpuZ0lmPVxcXCJpbWFnZUFzc2V0cyAmJiBpbWFnZUFzc2V0cy5sZW5ndGg+MFxcXCI+XFxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWltYWdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcInRodW1iU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cXFwiaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIFt0ZXh0XT1cXFwiJ2ltYWdlICcgKyBpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwic2F2ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbnZhciBGaWxlU3lzdGVtID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xudmFyIEJhY2tncm91bmRIdHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgTUQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQ3JlYXRlXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnVzaW5lc3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBfY3JlYXRlOiBGb3JtR3JvdXBcbiAgJGdhbWU6IGFueVxuXG4gIHB1YmxpYyBiaXpUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydyZXN0YXVyYW50JywgJ3JldGFpbCcsICdzcGEnLCAnYmFyJywgJ2NhZmUnLCAnZm9vZCB0cnVjaycsICd0b3VyaXNtJywgJ3NhbG9uJywgJ2hhaXIgc3R5bGlzdCcsICd3ZWJzaXRlJ107XG4gIGJpek5hbWU6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgcGhvbmU6IHN0cmluZ1xuICBzdG9yeTogc3RyaW5nXG4gIGJUeXBlOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwdWJsaWMgaW1hZ2VzOiBBcnJheTxzdHJpbmc+O1xuXG4gIHRva2VuOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHVzZXI6IHN0cmluZ1xuICBhdmF0YXI6IHN0cmluZ1xuICBsYXQ6IGFueVxuICBsbmc6IGFueVxuXG4gIHNob3dCaXpGb3JtOiBib29sZWFuXG4gIHNob3dCaXo6IGJvb2xlYW5cbiAgYXNrQml6OiBib29sZWFuXG4gIHNob3dWZXJpZnk6IGJvb2xlYW5cblxuICBCSVo6IGFueVxuICBVU0VSOiBhbnlcbiAgaW1hZ2UgPSBcImh0dHA6Ly9jZG4uY25uLmNvbS9jbm5uZXh0L2RhbS9hc3NldHMvMTkwNzEwMTM1MjQ1LTEyLXdhdGVyZnJvbnQtcmVzdGF1cmFudHMuanBnXCJcbiAgeWVscEltYWdlID0gXCJodHRwczovL2kuaW1ndXIuY29tL2hQOUdQcDMucG5nXCJcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgKSB7XG5cbiAgICB0aGlzLmltYWdlcyA9IFtdXG4gICAgdGhpcy4kZ2FtZSA9IF9nYW1lXG4gICAgdGhpcy5zaG93Qml6ID0gZmFsc2VcbiAgICB0aGlzLnNob3dWZXJpZnkgPSBmYWxzZVxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3Rva2VuJylcbiAgICAgIHRoaXMubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ25hbWUnKVxuICAgICAgdGhpcy51c2VyID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndXNlcicpXG4gICAgICB0aGlzLmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xhdCcpXG4gICAgICB0aGlzLmxuZyA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xuZycpXG5cbiAgICAgIHRoaXMuc2hvd0JpekZvcm0gPSBmYWxzZVxuICAgICAgdGhpcy5nVVNFUigpXG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlciBhbmQgYml6XCIpXG4gICAgdGhpcy4kZ2FtZS5nVVNFUih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaSkgPT4ge1xuXG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5VU0VSID0gam9yZGkucGF5bG9hZFswXVxuXG4gICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFsxXVxuICAgICAgICAgICAgICBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCAmJiB0aGlzLkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkIDwgMSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0JpeiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPiAwICYmIHRoaXMuQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQgPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWZXJpZnkgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0JpeiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IGZhbHNlXG5cblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA8IDEpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Qml6ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IHRydWVcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coam9yZGkucGF5bG9hZClcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5CSVopXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5CSVogPSBbXVxuICAgICAgICAgICAgdGhpcy5VU0VSID0gW11cbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICB9KTtcbiAgfVxuXG4gIG9uWWVscCgpIHtcblxuXG4gICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgdGl0bGU6IFwiWWVscFwiLFxuICAgICAgbWVzc2FnZTogXCJlbnRlciB5ZWxwIGlkXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiZ2V0IHllbHBcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICBpZiAoci50ZXh0KSB7XG5cbiAgICAgICAgdGhpcy5iWUVMUChyLnRleHQpXG4gICAgICAgIC8vIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMucG9wKCdlbnRlciB5ZWxwIGlkPycsICdlcnJvcicpXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGJZRUxQKHllbHA6IGFueSkge1xuXG4gICAgdGhpcy4kZ2FtZS5iWUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZywgeWVscClcbiAgICAgIC5zdWJzY3JpYmUoKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coam9yZGkpXG4gICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkXG4gICAgICAgICAgICB0aGlzLnNob3dCaXogPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgIH1cclxuICAgICAgfSlcbiAgfVxuXG4gIHZZRUxQKHllbHA6IGFueSkge1xuXG4gICAgdGhpcy4kZ2FtZS52WUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIG51bGwpXG4gICAgICAuc3Vic2NyaWJlKChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJWZXJpZnkgQnVzaW5lc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJlbnRlciB2ZXJpZmljYXRpb24gY29kZVwiLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FtZS52WUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHIudGV4dClcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3AoJ2VudGVyIHZlcmlmaWNhdGlvbiBjb2RlJywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICAvLyBnU0FWRSgpIHtcbiAgLy9cbiAgLy8gICBpZiAoIXRoaXMuYml6TmFtZSkge1xuICAvLyAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzICBuYW1lP1wiLCBcImVycm9yXCIpXG4gIC8vICAgfSBlbHNlIGlmICghdGhpcy5hZGRyZXNzKSB7XG4gIC8vICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgYWRkcmVzcz9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMucGhvbmUpIHtcbiAgLy8gICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBwaG9uZT9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMuc3RvcnkpIHtcbiAgLy8gICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBzdG9yeT9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLiRnYW1lLmJpelNBVkUodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmJpek5hbWUsIHRoaXMuYWRkcmVzcywgdGhpcy5waG9uZSwgdGhpcy5zdG9yeSwgdGhpcy5lbWFpbCwgdGhpcy5iVHlwZSwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAvLyAgICAgICAuc3Vic2NyaWJlKFxuICAvLyAgICAgICAgIChqb3JkaSkgPT4ge1xuICAvLyAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgLy9cbiAgLy8gICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gIC8vXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzBdXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG4gIC8vXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIC8vXG4gIC8vICAgICAgICAgICAgIH0pXG4gIC8vXG4gIC8vICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFswXVxuICAvLyAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcbiAgLy9cbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcbiAgLy9cbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9KVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gfVxuICAvL1xuICAvLyBwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG4gIC8vXG4gIC8vICAgQ2FtZXJhLnRha2VQaWN0dXJlKHsgc2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4oKHBpY3R1cmU6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IGZvbGRlciA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAvLyAgICAgbGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgTUQ1KG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xuICAvLyAgICAgcGljdHVyZS5zYXZlVG9GaWxlKHBhdGgsIEltYWdlRm9ybWF0LnBuZywgNjApO1xuICAvLyAgICAgdGhpcy51cGxvYWQoXCJodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3VwbG9hZFwiLCBcInVwbG9hZFwiLCBwYXRoKVxuICAvLyAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gIC8vICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gIC8vICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHBhdGgucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSwgZXJyb3IgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxldmFyOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgLy8gICAgIGxldCBzZXNzaW9uID0gQmFja2dyb3VuZEh0dHAuc2Vzc2lvbihcImZpbGUtdXBsb2FkXCIpO1xuICAvLyAgICAgbGV0IHJlcXVlc3QgPSB7XG4gIC8vICAgICAgIHVybDogZGVzdGluYXRpb24sXG4gIC8vICAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgLy8gICAgIH07XG4gIC8vICAgICBsZXQgcGFyYW1zID0gW3sgXCJuYW1lXCI6IGZpbGV2YXIsIFwiZmlsZW5hbWVcIjogZmlsZXBhdGgsIFwibWltZVR5cGVcIjogXCJpbWFnZS9wbmdcIiB9XTtcbiAgLy8gICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgLy8gICAgIHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcbiAgLy8gICAgICAgbGV0IGZpbGUgPSBGaWxlU3lzdGVtLkZpbGUuZnJvbVBhdGgoZmlsZXBhdGgpO1xuICAvLyAgICAgICBmaWxlLnJlbW92ZSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgLy8gICAgICAgICBvYnNlcnZlci5uZXh0KFwiVXBsb2FkZWQgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gIC8vICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgLy8gICAgICAgfSwgZXJyb3IgPT4ge1xuICAvLyAgICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IGRlbGV0ZSBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgLy8gICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgdXBsb2FkIGBcIiArIGZpbGVwYXRoICsgXCJgLiBcIiArIGV2ZW50LmV2ZW50TmFtZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBwdWJsaWMgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgLy8gICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgLy8gICB0aGlzLmJUeXBlID0gdGhpcy5iaXpUeXBlW3BpY2tlci5zZWxlY3RlZEluZGV4XVxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYlR5cGUpO1xuICAvLyB9XG5cbiAgcG9wKG1lc3NhZ2U6IGFueSwgdHlwZTogYW55KSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0eXBlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJhY2UgY2hvc2VuIVwiKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKSB7XG5cbiAgICB0aGlzLl9jcmVhdGUgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgaGFzaHRhZ3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXRhaWxzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2F0ZWdvcnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblxuICAgIH0pO1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXNvbGlkLTkwMCc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZ2FtZUltYWdlIHtcXG4gICAgd2lkdGg6MjUlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG59XFxuXFxuLnRleHRCb2xke1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmFie1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjI1MjIyO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOndoaXRlO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbndpZHRoOjEwMHB4O1xcbmhlaWdodDoyMDBweFxcbn1cXG5cXG4uc2xhcHtcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojRjJGMDIyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uc25lYWt7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6IzIyRjIyNztcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLmF2YXRhcnN7XFxuICAvKiB1c2VyOiAqL1xcbmJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC41MCk7XFxuaGVpZ2h0OmF1dG87XFxud2lkdGg6MjAwcHhcXG5cXG59XFxuLmNhcmRTdHlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzMDtcXG59XFxuLnBpY2tlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgICB3aWR0aDogMjAwO1xcbiAgICBoZWlnaHQ6IDEwMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JhYmJpdFxcXCIgY2xhc3M9XFxcImgxXFxcIj5cXG5cXG48L0FjdGlvbkJhcj5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCJzaG93Qml6Rm9ybVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGUgeW91ciBidXNpbmVzcyBwcm9maWxlXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICAgIDxMaXN0UGlja2VyICByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFtpdGVtc109XFxcImJpelR5cGVcXFwiIHNlbGVjdGVkSW5kZXg9XFxcIjBcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj48L0xpc3RQaWNrZXI+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiTmFtZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYml6TmFtZVxcXCIgaGludD1cXFwiYnVzaW5lc3MgbmFtZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGRyZXNzXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiBoaW50PVxcXCJidXNpbmVzcyBhZGRyZXJzc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicGhvbmVcXFwiIGhpbnQ9XFxcInBob25lXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkVtYWlsXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBlbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJTdG9yeVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwic3RvcnlcXFwiIGhpbnQ9XFxcInlvdXIgYnVzaW5lc3Mgc3RvcnlcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcImdTQVZFKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIgKm5nSWY9XFxcInN0b3J5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiICpuZ0lmPVxcXCJiVHlwZT09J3NleCdcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImltYWdlQXNzZXRzXFxcIiAqbmdJZj1cXFwiaW1hZ2VBc3NldHMgJiYgaW1hZ2VBc3NldHMubGVuZ3RoPjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWltYWdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcInRodW1iU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlaWdodF09XFxcInRodW1iU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XFxcImltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIFt0ZXh0XT1cXFwiJ2ltYWdlICcgKyBpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcInNhdmVcXFwiICh0YXApPVxcXCJzYXZlKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCJzaG93R2FtZUZvcm1cXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRpbmcge3twcml6ZVR5cGV9fSBnYW1lIGZvclxcXCIgY2xhc3M9XFxcImg0IHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIkJJWlswXS5wcm9maWxlWzBdLm5hbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5hZGRyZXNzXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5waG9uZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyICBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosICosICosICosICosKiwqXFxcIiBjb2x1bW5zPVxcXCI4MCwgKiwgODBcXFwiIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImdhbWVUaXRsZVxcXCIgaGludD1cXFwiZ2FtZSB0aXRsZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIG1heExlbmd0aD1cXFwiMjRcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwibWF4UGxheWVyc1xcXCIgaGludD1cXFwibWF4IHBsYXllcnNcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgbWF4TGVuZ3RoPVxcXCIyXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInByaXplXFxcIiBoaW50PVxcXCJ3aW5uZXIgZ2V0cyBhIDI1JSBvZmYgY291cG9uXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgbWF4TGVuZ3RoPVxcXCI0NVxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcml6ZTJcXFwiIGhpbnQ9XFxcIm5vbmUgd2lubmVycyBnZXQgYSAxMCUgb2ZmIGNvdXBvblxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIG1heExlbmd0aD1cXFwiNDVcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdldmVyeW9uZSB3aW5zJ1xcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcmljZVxcXCIgaGludD1cXFwiYnV5ICQzMCBpdGVtXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgIG1heExlbmd0aD1cXFwiMjRcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJ1xcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJkZXRhaWxzXFxcIiBoaW50PVxcXCJwcml6ZSBkZXRhaWxzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgIG1heExlbmd0aD1cXFwiMTUwXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjZcXFwiIGNvbD0nMScgdGV4dD1cXFwiY3JlYXRlIGdhbWVcXFwiICh0YXApPVxcXCJnQ3JlYXRlKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSBwLWItMjBcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCI0XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInRvdGFsIFVTRDogJHt7bWF4UGxheWVycypwbGF5ZXJGZWUgfHwgMCB8IG51bWJlciA6ICcxLjItMid9fVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMSBidGMgPSAke3tidGNfdmFsdWV9fVxcXCIgY2xhc3M9XFxcImg0IHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2lubmVyKHMpIG11c3QgcmVkZWVtIGNvdXBvbiB3aXRoaW4gNzIgIGhvdXJzXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJJZiBsZXNzIHRoYW4gdGhlIG1heCBudW1iZXIgb2YgcGxheWVycyBwbGF5IHlvdXIgZ2FtZSwgdGhlIGRpZmZlcmVuY2Ugd2lsbCBiZSByZXR1cm5lZCB0byB5b3VyIHdhbGxldFxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0xMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjIxXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvR3JpZExheW91dD5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgKm5nSWY9XFxcIiFzaG93Qml6Rm9ybVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0ZSB7e3R5cGV9fSBnYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHt7dHlwZX19IGdhbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIxXFxcIiAqbmdJZj1cXFwidHlwZT09J2NvdXBvbidcXFwiPlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKiwqLCosKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR3JhYmJpdCBpcyBhbiBhd2Vzb21lIHdheSB0byBlbmdhZ2UgbG9jYWxzIHdpdGggZGVhbHMgYW5kIGRpc2NvdW50cy4gSXQgY29zdHMgYXMgbGl0dGxlIGFzICQwLjY1IHBlciBwbGF5ZXIgY29tcGV0aW5nIGZvciB5b3VyIGNvdXBvbi4gR2FtZXMgYXJlIGdlbyBmZW5jZWQgdG8gbG9jYWxzIHdpdGhpbiAxMCBtaWxlcy4gTG9jYWxzIHBsYXkgRlJFRSB0byB3aW4geW91ciBjb3Vwb25cXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMjAgdGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PScxMic+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdhbWUgVHlwZXNcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiMlxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIjEgV2lubmVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwib25seSBvbmUgcGxheWVyIHdpbnNcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDAuNjUgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnMSB3aW5uZXInKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IC1yb3VuZGVkLWxnXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiM1xcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkV2ZXJ5b25lIFdpbnNcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgZ2V0cyBhIDUwJSBvZmYgY291cG9uLCBhbGwgb3RoZXIgcGxheWVycyBnZXQgYSAxNSUgb2ZmIGNvdXBvbiAoZXhhbXBsZSlcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDEuNzUgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnZXZlcnlvbmUgd2lucycpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI0XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2lubmVyIE11c3QgQnJpbmcgQSBGcmllbmRcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgbXVzdCBicmluZyBhIGZyaWVuZCB0byByZWRlZW0gdGhlIGNvdXBvblxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCd3aW5uZXIgbXVzdCBicmluZyBhIGZyaWVuZCcpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI1XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRnJlZSBpdGVtIHdpdGggcHVyY2hhc2VcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgZ2V0cyBhIGZyZWUgaXRlbSwgd2l0aCBwdXJjaGFzZVxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJylcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSAtcm91bmRlZC1sZ1xcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCI2XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGQVEnc1xcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI3XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXhwbGFpbiBwZXIgcGxheWVyIHByaWNpbmdcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aGVuIGNyZWF0aW5nIHlvdXIgZ2FtZSwgeW91IGNob29zZSB0aGUgbWF4IG51bWJlciBvZiBwbGF5ZXJzIGZvciB5b3VyIGdhbWUuIElmIHlvdSBjaG9vc2UgMTAgbWF4IHBsYXllcnMgZm9yIGEgMSB3aW5uZXIgZ2FtZSwgaXQgd2lsbCBjb3N0ICQ2LjUwXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJpZiBsZXNzIHRoYW4gMTAgcGxheWVycyBqb2luIHRoZSBnYW1lLCB0aGUgZGlmZmVyZW5jZSB3aWxsIGJlIHJldHVybmVkIHRvIHlvdXIgYml0Y29pbiB3YWxsZXRcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxMlxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiOFxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldoYXRzIHRoZSBpbmNlbnRpdmUgZm9yIHBsYXllcnMgdG8gcmVkZWVtIHRoZWlyIGNvdXBvbnM/XFxcIiBjbGFzcz1cXFwibS1iLTEwIGgyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlBsYXllcnMgYXJlIHJld2FyZGVkIHdoZW4gdGhleSByZWRlZW0gdGhlaXIgY291cG9ucywgZnJvbSByZXdhcmQgcG9pbnRzIHRvIGZyZWUgdG9vbHMgYW5kIHRvIG90aGVyIHBlcmtzLiBQbGF5ZXJzIG1heSBhbHNvIGJlIHBlbmFsaXplZCBmb3Igbm90IHJlZGVlbWluZyB0aGVpciB3aW5zXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjlcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDYW4gSSBleHRlbmQgdGhlIGxvY2FsIHJhZGl1cyB0byAyMCBtaWxlcz9cXFwiIGNsYXNzPVxcXCJtLWItMTAgaDJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiWWVzLCB3aXRoIGEgcHJlbWl1bSBmZWF0dXJlXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgKm5nSWY9XFxcInR5cGU9PSdiaXRjb2luJ1xcXCI+XFxuXFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGluZyBiaXRjb2luIGdhbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gIDwvR3JpZExheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbnZhciBGaWxlU3lzdGVtID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xudmFyIEJhY2tncm91bmRIdHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgTUQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkNyZWF0ZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIF9jcmVhdGU6IEZvcm1Hcm91cFxuICBwdWJsaWMgYml6VHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncmVzdGF1cmFudCcsICdyZXRhaWwnLCAnc3BhJywgJ2JhcicsICdjYWZlJywgJ2Zvb2QgdHJ1Y2snLCAndG91cmlzbScsICdzYWxvbicsICdoYWlyIHN0eWxpc3QnLCAnd2Vic2l0ZSddO1xuICBiaXpOYW1lOiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIHBob25lOiBzdHJpbmdcbiAgc3Rvcnk6IHN0cmluZ1xuICBiVHlwZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcHVibGljIGltYWdlczogQXJyYXk8c3RyaW5nPjtcbiAgbG9jYXRpb25zID0gW107XG5cbiAgZ2FtZVRpdGxlOiBzdHJpbmdcbiAgbWF4UGxheWVyczogYW55XG4gIHByaXplOiBzdHJpbmdcbiAgcHJpemUyOiBzdHJpbmdcbiAgcHJpY2U6IHN0cmluZ1xuICBkZXRhaWxzOiBzdHJpbmdcblxuICB0b2tlbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgYXZhdGFyOiBzdHJpbmdcbiAgbGF0OiBhbnlcbiAgbG5nOiBhbnlcbiAgdHlwZTogYW55XG4gIHByaXplVHlwZTogYW55XG4gIHNob3dHYW1lRm9ybTogYm9vbGVhblxuICBzaG93Qml6Rm9ybTogYm9vbGVhblxuICAkZ2FtZTogYW55XG4gIGFkbWluOiBhbnlcbiAgQklaOiBhbnlcbiAgVVNFUjogYW55XG5cbiAgYnRjX3ZhbHVlOiBzdHJpbmdcbiAgYnRjX2ZlZTogc3RyaW5nXG4gIGJ0Y19mZWVfdXNkOiBzdHJpbmdcbiAgcGxheWVyRmVlOiBhbnlcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgKSB7XG5cbiAgICB0aGlzLiRnYW1lID0gX2dhbWVcbiAgICB0aGlzLmltYWdlcyA9IFtdXG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndG9rZW4nKVxuICAgICAgdGhpcy5uYW1lID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbmFtZScpXG4gICAgICB0aGlzLnVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd1c2VyJylcbiAgICAgIHRoaXMubGF0ID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbGF0JylcbiAgICAgIHRoaXMubG5nID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygnbG5nJylcblxuICAgICAgdGhpcy5zaG93Qml6Rm9ybSA9IGZhbHNlXG4gICAgICB0aGlzLnNob3dHYW1lRm9ybSA9IGZhbHNlXG5cbiAgICAgIHRoaXMudHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnR5cGVcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcblxuICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlclwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqb3JkaS5idGNfdmFsdWUpXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBsZXQgVVNFUiA9IGpvcmRpLnBheWxvYWRbMF1cbiAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzFdXG5cbiAgICAgICAgICAgICAgdGhpcy5VU0VSID0gVVNFUlxuICAgICAgICAgICAgICB0aGlzLmJ0Y192YWx1ZSA9IGpvcmRpLmJ0Y192YWx1ZVxuICAgICAgICAgICAgICB0aGlzLmJ0Y19mZWUgPSBqb3JkaS5idGNfZmVlXG4gICAgICAgICAgICAgIHRoaXMuYnRjX2ZlZV91c2QgPSBqb3JkaS5idGNfZmVlX3VzZFxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJJWi5wcm9mbGUpXG5cbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gVVNFUi5wcm9maWxlLm5hbWUgfHwgJ25vIHVzZXIgbmFtZSBzZXQnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gVVNFUi5wcm9maWxlLmF2YXRhciB8fCAnfi9hc3NldHMvaW1ncy9hdmF0YXJzL2FsaWVuXzAyLnBuZydcbiAgICAgICAgICAgICAgdGhpcy5hZG1pbiA9IFVTRVIucHJvZmlsZS5hZG1pblxuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9ICduL2EnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgfSk7XG4gIH1cblxuICBnQ3JlYXRlKCkge1xuXG4gICAgaWYgKCF0aGlzLmdhbWVUaXRsZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgZ2FtZSB0aXRsZT9cIiwgXCJlcnJvclwiKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMubWF4UGxheWVycykge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgbWF4IG51bWJlciBvZiBwbGF5ZXJzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByaXplKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSBwcml6ZT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnByaXplVHlwZSA9PSAnZXZlcnlvbmUgd2lucycgJiYgIXRoaXMucHJpemUyKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSAgcHJpemUgIGZvciBub25lIHdpbm5lcnM/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAodGhpcy5wcml6ZVR5cGUgPT0gJ2ZyZWUgaXRlbSAgd2l0aCAgcHVyY2hhc2UnICYmICF0aGlzLnByaWNlKSB7XG5cbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIHByaWNlIG9mIHRoZSAgaXRlbSB0byBwdXJjaGFzZT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5kZXRhaWxzKSB7XG5cbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIHByaXplIGRldGFpbHM/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGxldCB0b3RhbCA9IHRoaXMubWF4UGxheWVycyAqIHRoaXMucGxheWVyRmVlXG4gICAgICB0aGlzLiRnYW1lLmdDUkVBVEUodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLnByaXplVHlwZSwgdGhpcy5nYW1lVGl0bGUsIHRoaXMubWF4UGxheWVycywgdGhpcy5wcml6ZSwgdGhpcy5wcml6ZTIsIHRoaXMucHJpY2UsIHRvdGFsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgIH1cblxuICB9XG4gIGdTQVZFKCkge1xuXG4gICAgaWYgKCF0aGlzLmJpek5hbWUpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyAgbmFtZT9cIiwgXCJlcnJvclwiKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYWRkcmVzcykge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIGFkZHJlc3M/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMucGhvbmUpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBwaG9uZT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5zdG9yeSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIHN0b3J5P1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRldGFpbHMpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlICBnYW1lICBkZXRhaWxzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLiRnYW1lLmJpelNBVkUodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmJpek5hbWUsIHRoaXMuYWRkcmVzcywgdGhpcy5waG9uZSwgdGhpcy5zdG9yeSwgdGhpcy5lbWFpbCwgdGhpcy5iVHlwZSwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIG9uQ3JlYXRlKHByaXplVHlwZSkge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnByaXplVHlwZSA9IHByaXplVHlwZVxuICAgICAgaWYgKHByaXplVHlwZSA9PSAnMSB3aW5uZXInKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJGZWUgPSAuNjVcblxuICAgICAgfVxuICAgICAgaWYgKHByaXplVHlwZSA9PSAnZXZlcnlvbmUgd2lucycpIHtcblxuICAgICAgICB0aGlzLnBsYXllckZlZSA9IDEuNzVcblxuICAgICAgfVxuICAgICAgaWYgKHByaXplVHlwZSA9PSAnd2lubmVyIG11c3QgYnJpbmcgYSBmcmllbmQnKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJGZWUgPSAxXG5cbiAgICAgIH1cbiAgICAgIGlmIChwcml6ZVR5cGUgPT0gJ2ZyZWUgaXRlbSAgd2l0aCAgcHVyY2hhc2UnKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJGZWUgPSAxXG5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA8IDEpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNob3dCaXpGb3JtKVxuICAgICAgICB0aGlzLnBvcChcImxldHMgY3JlYXRlIHlvdXIgYnVzaW5lc3MgcHJvZmlsZSAxc3RcIiwgXCJlcnJvclwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZS1idXNpbmVzcy8nXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIC8vIHRoaXMuc2hvd0JpekZvcm0gPSB0cnVlXG5cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPiAwICYmIHRoaXMuQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQgPCAxKSB7XG5cblxuICAgICAgICB0aGlzLnBvcChcInBsZWFzZSB2ZXJpZnkgYnVzaW5lc3NcIiwgXCJlcnJvclwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZS1idXNpbmVzcy8nXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCAmJiB0aGlzLkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkID4gMCkge1xuXG4gICAgICAgIHRoaXMuc2hvd0dhbWVGb3JtID0gdHJ1ZVxuXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnVzZXIpIHtcblxuICAgICAgICB0aGlzLnBvcChcImxvZyBpbiB0byBjcmVhdGUgYSBnYW1lXCIsIFwiZXJyb3JcIilcblxuICAgICAgfVxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG5cbiAgICBDYW1lcmEudGFrZVBpY3R1cmUoeyBzYXZlVG9HYWxsZXJ5OiBmYWxzZSwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAgfSkudGhlbigocGljdHVyZTogYW55KSA9PiB7XG4gICAgICBsZXQgZm9sZGVyID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICBsZXQgcGF0aCA9IEZpbGVTeXN0ZW0ucGF0aC5qb2luKGZvbGRlci5wYXRoLCBNRDUobmV3IERhdGUoKSkgKyBcIi5wbmdcIik7XG4gICAgICBwaWN0dXJlLnNhdmVUb0ZpbGUocGF0aCwgSW1hZ2VGb3JtYXQucG5nLCA2MCk7XG4gICAgICB0aGlzLnVwbG9hZChcImh0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvdXBsb2FkXCIsIFwidXBsb2FkXCIsIHBhdGgpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gocGF0aC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWQoZGVzdGluYXRpb246IHN0cmluZywgZmlsZXZhcjogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgc2Vzc2lvbiA9IEJhY2tncm91bmRIdHRwLnNlc3Npb24oXCJmaWxlLXVwbG9hZFwiKTtcbiAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICB1cmw6IGRlc3RpbmF0aW9uLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgICB9O1xuICAgICAgbGV0IHBhcmFtcyA9IFt7IFwibmFtZVwiOiBmaWxldmFyLCBcImZpbGVuYW1lXCI6IGZpbGVwYXRoLCBcIm1pbWVUeXBlXCI6IFwiaW1hZ2UvcG5nXCIgfV07XG4gICAgICBsZXQgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XG4gICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBmaWxlID0gRmlsZVN5c3RlbS5GaWxlLmZyb21QYXRoKGZpbGVwYXRoKTtcbiAgICAgICAgZmlsZS5yZW1vdmUoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChcIlVwbG9hZGVkIGBcIiArIGZpbGVwYXRoICsgXCJgXCIpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihcIkNvdWxkIG5vdCBkZWxldGUgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IHVwbG9hZCBgXCIgKyBmaWxlcGF0aCArIFwiYC4gXCIgKyBldmVudC5ldmVudE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICB0aGlzLmJUeXBlID0gdGhpcy5iaXpUeXBlW3BpY2tlci5zZWxlY3RlZEluZGV4XVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYlR5cGUpO1xuICB9XG5cbiAgcG9wKG1lc3NhZ2U6IGFueSwgdHlwZTogYW55KSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0eXBlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJhY2UgY2hvc2VuIVwiKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKSB7XG5cbiAgICB0aGlzLl9jcmVhdGUgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgaGFzaHRhZ3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXRhaWxzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2F0ZWdvcnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblxuICAgIH0pO1xuICB9XG5cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJcbmltcG9ydCB7IHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBFcnJvck9ic2VydmFibGUgfSBmcm9tICdyeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlJztcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU2Vzc2lvblByb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVQcm92aWRlciB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdIZWxsbyBTZXNzaW9uUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIC8vLy9ndXNlclxuICBnVVNFUih0b2tlbjogYW55LCB1c2VyOiBhbnksIGxhdDogYW55LCBsbmc6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9nVVNFUicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLy8vL2J1c2luZXNzXG4gIGJpelNBVkUodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBiaXpuYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgcGhvbmU6IHN0cmluZywgc3Rvcnk6IHN0cmluZywgZW1haWw6IHN0cmluZywgYlR5cGU6IHN0cmluZywgbGF0OiBhbnksIGxuZzogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgYml6TmFtZTogYml6bmFtZSxcbiAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgIHN0b3J5OiBzdG9yeSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGJUeXBlOiBiVHlwZSxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9iU0FWRScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLy8vL2dhbWVcbiAgYkdBTUVTKGxhdCwgbG5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICAvLyB0b2tlbjogdXNlcl90b2tlbixcbiAgICAgIC8vIHVzZXJfaWQ6IHVzZXJfaWQsXG4gICAgICAvLyBnVHlwZTogZ1R5cGUsXG4gICAgICAvLyBnSUQ6IGdJRCxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9iR0FNRVMnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uR3JhYih0b2tlbjogYW55LCB1c2VyOiBhbnksIGdhbWU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdhbWU6IGdhbWUsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvZ3JhYicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25TbGFwKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ2FtZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9zbGFwJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblNuZWFrKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ2FtZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9zbmVhaycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25BdmF0YXIodG9rZW46IGFueSwgdXNlcjogYW55LCBhdmF0YXI6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGF2YXRhcjogYXZhdGFyLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2F2YXRhcicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25FZGl0KHRva2VuOiBhbnksIHVzZXI6IGFueSwgdGV4dDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgdHlwZTogdHlwZVxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3Byb2ZpbGUvZWRpdCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25UaW1lcih0b2tlbjogYW55LCB1c2VyOiBhbnksIGdJRDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ0lEOiBnSUQsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvdGltZXInLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHBsYXkodG9rZW46IGFueSwgdXNlcjogYW55LCBnSUQ6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdJRDogZ0lELFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3BsYXknLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGxvZ2luKG51bWJlcjogc3RyaW5nLCBkZXZpY2U6IHN0cmluZywgbGF0OiBzdHJpbmcsIGxuZzogc3RyaW5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgIGRldmljZTogZGV2aWNlLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2xvZ2luJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBsb2dpbkNvbXBsZXRlKGNvZGU6IHN0cmluZywgZGV2aWNlOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBkZXZpY2U6IGRldmljZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9sb2dpbkNvbXBsZXRlJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBiWUVMUCh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGxhdDogc3RyaW5nLCBsbmc6IHN0cmluZywgeWVscDogc3RyaW5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgeWVscDogeWVscCxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9iWWVscCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgdllFTFAodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBjb2RlOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBjb2RlOiBjb2RlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3ZZZWxwJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnQ1JFQVRFKHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgcHJpemVUeXBlOiBzdHJpbmcsIGdhbWVUaXRsZTogc3RyaW5nLCBtYXhQbGF5ZXJzOiBhbnksIHByaXplOiBzdHJpbmcsIHByaXplMjogc3RyaW5nLCBwcmljZTogYW55LCB0b3RhbDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgcHJpemVUeXBlOiBwcml6ZVR5cGUsXG4gICAgICBnYW1lVGl0aWxlOiBnYW1lVGl0bGUsXG4gICAgICBtYXhQbGF5ZXJzOiBtYXhQbGF5ZXJzLFxuICAgICAgcHJpemU6IHByaXplLFxuICAgICAgcHJpemUyOiBwcml6ZTIsXG4gICAgICBwcmljZTogcHJpY2UsXG4gICAgICB0b3RhbDogdG90YWxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9nQ3JlYXRlJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIG9uUGF5KHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgZ3JhYnM6IHN0cmluZywgc2xhcHM6IHN0cmluZywgc25lYWtzOiBzdHJpbmcsIHBheVR5cGUpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBncmFiczogZ3JhYnMsXG4gICAgICBzbGFwczogc2xhcHMsXG4gICAgICBzbmVha3M6IHNuZWFrcyxcbiAgICAgIHBheVR5cGU6IHBheVR5cGUsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvb25QYXknLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzO1xuICAgIHJldHVybiBib2R5IHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGVyciA9IGVycm9yIHx8ICcnO1xuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVyck1zZyk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGltZXIvdGltZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2VudW1zL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==