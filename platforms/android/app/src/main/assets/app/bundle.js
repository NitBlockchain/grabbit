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

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"About Us\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"2\">\n\n        <CardView  class=\"p-t-20\">\n          <StackLayout>\n            <Label text=\"Grabbit is a  fun, fast paced daily deals auction. Slap, Sneak & Grab your way to awesome prizes. Compete against global players for bitcoin and other instantly delivered crypto prizes, or take on locals for coupons to your favorite restaurants and local experiences.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n            <Label text=\"Grabbit solves the problem of boring raffles and local prize engagement. Everyday, dozens of businesses in your area are offering coupons and discounts. Unlike Groupon, Grabbit's auction format requires users pay nothing for amazing discounts.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n            <Label text=\"Businesses want foot traffic, bargin shoppers want great discounts and an easy 24/7 way to get them. Grabbit is fun for the train ride home from work or school,  or a late night binge watch break.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          </StackLayout>\n\n        </CardView>\n      </StackLayout>\n\n    </GridLayout>\n    </ScrollView>\n</GridLayout>\n"

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
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./support/support.component.ts");
/* harmony import */ var _legals_legals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./legals/legals.component.ts");







var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: function () { return Promise.all(/* import() */[__webpack_require__.e("vendor"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "./home/home.module.ts")).then(function (m) { return m.HomeModule; }); } },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: "create/:type", component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: "create-business", component: _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_4__["CreateBusinessComponent"] },
    { path: "support", component: _support_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"] },
    { path: "legals/:type", component: _legals_legals_component__WEBPACK_IMPORTED_MODULE_6__["LegalsComponent"] }
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
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./support/support.component.ts");
/* harmony import */ var _legals_legals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./legals/legals.component.ts");













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
                _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_9__["CreateBusinessComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"],
                _legals_legals_component__WEBPACK_IMPORTED_MODULE_11__["LegalsComponent"]
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

/***/ "./legals/legals.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ "./legals/legals.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./legals/legals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalsComponent", function() { return LegalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


var LegalsComponent = /** @class */ (function () {
    function LegalsComponent(zone, cd, location) {
        this.zone = zone;
        this.cd = cd;
        this.location = location;
    }
    LegalsComponent.prototype.ngAfterViewInit = function () {
    };
    LegalsComponent.prototype.goBack = function () {
        this.location.back();
    };
    LegalsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    LegalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Legals",
            template: __importDefault(__webpack_require__("./legals/legals.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./legals/legals.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LegalsComponent);
    return LegalsComponent;
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
    GameProvider.prototype.bGLOBALGAMES = function () {
        var DATA = {
            token: null,
            user: null,
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/bGLOBALGAMES', DATA, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GameProvider.prototype.bLOCALGAMES = function (token, user, lat, lng) {
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
        return this.http.post('https://app.grabbit.cheap/bLOCALGAMES', DATA, httpOptions)
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

/***/ "./support/support.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ "./support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"Support\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"2\">\n\n        <CardView  class=\"p-t-20\">\n          <StackLayout>\n            <Label text=\"Give us  a call 24/7 if you need help (415-509-4812)\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          </StackLayout>\n\n        </CardView>\n      </StackLayout>\n\n    </GridLayout>\n    </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ "./support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


var SupportComponent = /** @class */ (function () {
    function SupportComponent(zone, cd, location) {
        this.zone = zone;
        this.cd = cd;
        this.location = location;
    }
    SupportComponent.prototype.ngAfterViewInit = function () {
    };
    SupportComponent.prototype.goBack = function () {
        this.location.back();
    };
    SupportComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Support",
            template: __importDefault(__webpack_require__("./support/support.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./support/support.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], SupportComponent);
    return SupportComponent;
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

/***/ "nativescript-social-share":
/***/ (function(module, exports) {

module.exports = require("nativescript-social-share");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2xlZ2Fscy9sZWdhbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9sZWdhbHMvbGVnYWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xlZ2Fscy9sZWdhbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb24vaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90aW1lci90aW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9lbnVtcy9lbnVtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSw4QkFBOEIsNkJBQTZCLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLHVEQUF1RCxxQkFBcUIsR0FBRyxjQUFjLGdCQUFnQixtQkFBbUIsMkJBQTJCLDJCQUEyQixtQ0FBbUMsZ0NBQWdDLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxVQUFVLHFDQUFxQyx1QkFBdUIs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Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLG9DOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxrRTs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXNvbGlkLTkwMCc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZ2FtZUltYWdlIHtcXG4gICAgd2lkdGg6MjUlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG59XFxuXFxuLnRleHRCb2xke1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmFie1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjI1MjIyO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOndoaXRlO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbndpZHRoOjEwMHB4O1xcbmhlaWdodDoyMDBweFxcbn1cXG5cXG4uc2xhcHtcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojRjJGMDIyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uc25lYWt7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6IzIyRjIyNztcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLmF2YXRhcnN7XFxuICAvKiB1c2VyOiAqL1xcbmJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC41MCk7XFxuaGVpZ2h0OmF1dG87XFxud2lkdGg6MjAwcHhcXG5cXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JhYmJpdFxcXCIgY2xhc3M9XFxcImgxXFxcIj5cXG5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFib3V0IFVzXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMlxcXCI+XFxuXFxuICAgICAgICA8Q2FyZFZpZXcgIGNsYXNzPVxcXCJwLXQtMjBcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdyYWJiaXQgaXMgYSAgZnVuLCBmYXN0IHBhY2VkIGRhaWx5IGRlYWxzIGF1Y3Rpb24uIFNsYXAsIFNuZWFrICYgR3JhYiB5b3VyIHdheSB0byBhd2Vzb21lIHByaXplcy4gQ29tcGV0ZSBhZ2FpbnN0IGdsb2JhbCBwbGF5ZXJzIGZvciBiaXRjb2luIGFuZCBvdGhlciBpbnN0YW50bHkgZGVsaXZlcmVkIGNyeXB0byBwcml6ZXMsIG9yIHRha2Ugb24gbG9jYWxzIGZvciBjb3Vwb25zIHRvIHlvdXIgZmF2b3JpdGUgcmVzdGF1cmFudHMgYW5kIGxvY2FsIGV4cGVyaWVuY2VzLlxcXCIgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdyYWJiaXQgc29sdmVzIHRoZSBwcm9ibGVtIG9mIGJvcmluZyByYWZmbGVzIGFuZCBsb2NhbCBwcml6ZSBlbmdhZ2VtZW50LiBFdmVyeWRheSwgZG96ZW5zIG9mIGJ1c2luZXNzZXMgaW4geW91ciBhcmVhIGFyZSBvZmZlcmluZyBjb3Vwb25zIGFuZCBkaXNjb3VudHMuIFVubGlrZSBHcm91cG9uLCBHcmFiYml0J3MgYXVjdGlvbiBmb3JtYXQgcmVxdWlyZXMgdXNlcnMgcGF5IG5vdGhpbmcgZm9yIGFtYXppbmcgZGlzY291bnRzLlxcXCIgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJ1c2luZXNzZXMgd2FudCBmb290IHRyYWZmaWMsIGJhcmdpbiBzaG9wcGVycyB3YW50IGdyZWF0IGRpc2NvdW50cyBhbmQgYW4gZWFzeSAyNC83IHdheSB0byBnZXQgdGhlbS4gR3JhYmJpdCBpcyBmdW4gZm9yIHRoZSB0cmFpbiByaWRlIGhvbWUgZnJvbSB3b3JrIG9yIHNjaG9vbCwgIG9yIGEgbGF0ZSBuaWdodCBiaW5nZSB3YXRjaCBicmVhay5cXFwiIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE1XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPC9DYXJkVmlldz5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQWJvdXRcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9hYm91dC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYWJvdXQuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG5cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWJ1c2luZXNzL2NyZWF0ZS1idXNpbmVzcy5jb21wb25lbnRcIlxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0IHsgU3VwcG9ydENvbXBvbmVudCB9IGZyb20gXCIuL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTGVnYWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vbGVnYWxzL2xlZ2Fscy5jb21wb25lbnRcIlxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KFwiLi9ob21lL2hvbWUubW9kdWxlXCIpLnRoZW4obSA9PiBtLkhvbWVNb2R1bGUpIH0sXG4gIHsgcGF0aDogXCJhYm91dFwiLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJjcmVhdGUvOnR5cGVcIiwgY29tcG9uZW50OiBDcmVhdGVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcImNyZWF0ZS1idXNpbmVzc1wiLCBjb21wb25lbnQ6IENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJzdXBwb3J0XCIsIGNvbXBvbmVudDogU3VwcG9ydENvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwibGVnYWxzLzp0eXBlXCIsIGNvbXBvbmVudDogTGVnYWxzQ29tcG9uZW50IH1cblxuXTtcblxuLy8gZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbi8vICAgQWJvdXRDb21wb25lbnQsXG4vLyBdO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib2R5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjsgLy8gdXNlZCB0byBkZXNjcmliZSBhdCB3aGF0IGFjY3VyYWN5IHRoZSBsb2NhdGlvbiBzaG91bGQgYmUgZ2V0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnRcIlxuaW1wb3J0IHsgQ3JlYXRlQnVzaW5lc3NDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTdXBwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4vc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBMZWdhbHNDb21wb25lbnQgfSBmcm9tIFwiLi9sZWdhbHMvbGVnYWxzLmNvbXBvbmVudFwiXG5cbkBOZ01vZHVsZSh7XG5cbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIENyZWF0ZUNvbXBvbmVudCxcbiAgICBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCxcbiAgICBTdXBwb3J0Q29tcG9uZW50LFxuICAgIExlZ2Fsc0NvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcbiAgICBtYXJnaW46IDE1IDAgMCAxNTtcXG59XFxuXFxuVGV4dFZpZXcge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzNlOWVkYjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdmFsdWUge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5yYXRlIHtcXG4gICAgcGFkZGluZy10b3A6IDM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNGRkU5MDA7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxufVxcblxcbi5yYXRpbmctdmFsdWUge1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuXFxuLmxpa2VkLWFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjNDA4MEZGO1xcbn1cXG5cXG4uaGVhcnQtYWN0aXZlIHtcXG4gICAgY29sb3I6ICNiNTEyMTM7XFxufVxcblxcbi5kZWZhdWx0IHtcXG4gICAgY29sb3I6ICM4MjgyODI7XFxufVxcblxcbi5sYXlvdXQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuXFxuLmxpa2UtaWNvbiB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxuICAgIG1hcmdpbi1yaWdodDogMjtcXG4gICAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaXRlbS1jYXRlZ29yeSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY2F0ZWdvcnktaWNvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogNDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMztcXG4gICAgLyogbWFyZ2luLXRvcDogMTY7ICovXFxufVxcblxcbi5jYXJkLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuXFxuLmNhcmQtaW1nLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyODI4MjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXG4gICAgd2lkdGg6IDEzMDtcXG4gICAgaGVpZ2h0OiA3MDtcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcblxcbi5saW5lIHtcXG4gICAgaGVpZ2h0OiAwLjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNlMGUwZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5saW5lQnJlYWsge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmFuaW0tcGFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbkBrZXlmcmFtZXMga2V5LXBhZ2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgICB9XFxuXFxuICAgIDIwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0tY292ZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbkBrZXlmcmFtZXMga2V5LWNvdmVyIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcblxcbi5hbmltLWltYWdlcyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC43O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbkBrZXlmcmFtZXMga2V5LWltYWdlcyB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1pdGVtSW5mbyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktaXRlbUluZm8ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0tbGlrZXMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMS41O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbkBrZXlmcmFtZXMga2V5LWxpa2VzIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcblxcbi5hbmltLWNvbnRlbnQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjg7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktY29udGVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcbn1cXG4ucGlja2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYnJvd247XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwO1xcbiAgICBib3JkZXItd2lkdGg6IDI7XFxuICAgIHdpZHRoOiAyMDA7XFxuICAgIGhlaWdodDogMTAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJHcmFiYml0XFxcIiBjbGFzcz1cXFwiaDFcXFwiPlxcblxcbjwvQWN0aW9uQmFyPlxcblxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwibWFpblxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgKm5nSWY9XFxcImFza0JpelxcXCI+XFxuXFxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWNvdmVyXFxcIiByb3dzPVxcXCJhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0ZSB5b3VyIGJ1c2luZXNzIHByb2ZpbGVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ1c2UgeW91ciB5ZWxwIGlkXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgIFtzcmNdPVxcXCJ5ZWxwSW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiICB3aWR0aD1cXFwiNzIlXFxcIj48L0ltYWdlPlxcblxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIyXFxcIj5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiZ2V0IGJpeiBpbmZvXFxcIiAodGFwKT1cXFwib25ZZWxwKClcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgIDwvR3JpZExheW91dD5cXG5cXG48L1N0YWNrTGF5b3V0PlxcblxcblxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwibWFpblxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgKm5nSWY9XFxcInNob3dCaXpcXFwiPlxcblxcbiAgICA8R3JpZExheW91dCBjbGFzcz1cXFwiYW5pbS1jb3ZlclxcXCIgcm93cz1cXFwiYXV0byxhdXRvLGF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBtYXJnaW5Ub3A9XFxcIi00MFxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImNhcmQtaW1nXFxcIiBbc3JjXT1cXFwiQklaWzBdLnByb2ZpbGVbMF0uaW1hZ2VzWzBdLnVybFxcXCI+PC9JbWFnZT5cXG5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwiYW5pbS1pdGVtSW5mbyBwLWwtNFxcXCIgbWFyZ2luVG9wPVxcXCIxNVxcXCIgcm93PVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICB3aWR0aD1cXFwiMTAwJVxcXCIgY29sdW1ucz1cXFwiYXV0bywqXFxcIiByb3dzPVxcXCIqLCosKiwqLCosKlxcXCJcXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0ubmFtZSAgfHwgJ2J1c2luZXNzIGNhdGVnb3J5J319XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJ7e0JJWlswXS5wcm9maWxlWzBdLmFkZHJlc3MgIHx8ICdidXNpbmVzcyBhZGRyZXNzJ319XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJ7e0JJWlswXS5wcm9maWxlWzBdLnBob25lICB8fCAnYnVzaW5lc3MgcGhvbmUnfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0uZW1haWwgIHx8ICdubyBlbWFpbCd9fVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCIgKm5nSWY9XFxcIkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkPDFcXFwiPlxcbiAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJpdGVtLWNhdGVnb3J5XFxcIiB0ZXh0PVxcXCJ3ZSdsbCBjYWxsIHlvdXIgYnVzaW5lc3MsIGVudGVyIHRoZSBjb2RlIHlvdSByZWNlaXZlIHRvIHZlcmlmeSB0aGlzIGJ1c2luZXNzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwidmVyaWZ5IGJpelxcXCIgKHRhcCk9XFxcInZZRUxQKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwic2hvd0JpekZvcm1cXFwiPlxcblxcbiAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRpbmcgeW91ciBidXNpbmVzcyBwcm9maWxlXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiPlxcbiAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosICosICosICosICosKiwqXFxcIiBjb2x1bW5zPVxcXCI4MCwgKlxcXCIgY2xhc3M9XFxcImZvcm1cXFwiPlxcblxcbiAgICAgICAgPExpc3RQaWNrZXIgIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW2l0ZW1zXT1cXFwiYml6VHlwZVxcXCIgc2VsZWN0ZWRJbmRleD1cXFwiMFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2UpPVxcXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKCRldmVudClcXFwiPjwvTGlzdFBpY2tlcj5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiTmFtZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImJpek5hbWVcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIG5hbWVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkFkZHJlc3NcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiBoaW50PVxcXCJidXNpbmVzcyBhZGRyZXJzc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiUGhvbmVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwaG9uZVxcXCIgaGludD1cXFwicGhvbmVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkVtYWlsXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIGhpbnQ9XFxcInlvdXIgYnVzaW5lc3MgZW1haWxcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICA8TGFiZWwgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIlN0b3J5XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwic3RvcnlcXFwiIGhpbnQ9XFxcInlvdXIgYnVzaW5lc3Mgc3RvcnlcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICA8QnV0dG9uIHJvdz1cXFwiNlxcXCIgY29sU3Bhbj0yIHRleHQ9XFxcInNhdmVcXFwiICh0YXApPVxcXCJnU0FWRSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJzdG9yeVxcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiAqbmdJZj1cXFwiYlR5cGU9PSdzZXgnXFxcIj5cXG4gICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImltYWdlQXNzZXRzXFxcIiAqbmdJZj1cXFwiaW1hZ2VBc3NldHMgJiYgaW1hZ2VBc3NldHMubGVuZ3RoPjBcXFwiPlxcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pbWFnZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbd2lkdGhdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cXFwidGh1bWJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XFxcImltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiBbdGV4dF09XFxcIidpbWFnZSAnICsgaVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcInNhdmUoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiPjwvQnV0dG9uPlxcbiAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvR3JpZExheW91dD5cXG5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdhbWVQcm92aWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuY29uc3QgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBJbWFnZUZvcm1hdCB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG52YXIgRmlsZVN5c3RlbSA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcbnZhciBCYWNrZ3JvdW5kSHR0cCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCIpO1xudmFyIE1ENSA9IHJlcXVpcmUoXCJibHVlaW1wLW1kNVwiKTtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkNyZWF0ZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1idXNpbmVzcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgX2NyZWF0ZTogRm9ybUdyb3VwXG4gICRnYW1lOiBhbnlcblxuICBwdWJsaWMgYml6VHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncmVzdGF1cmFudCcsICdyZXRhaWwnLCAnc3BhJywgJ2JhcicsICdjYWZlJywgJ2Zvb2QgdHJ1Y2snLCAndG91cmlzbScsICdzYWxvbicsICdoYWlyIHN0eWxpc3QnLCAnd2Vic2l0ZSddO1xuICBiaXpOYW1lOiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIHBob25lOiBzdHJpbmdcbiAgc3Rvcnk6IHN0cmluZ1xuICBiVHlwZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcHVibGljIGltYWdlczogQXJyYXk8c3RyaW5nPjtcblxuICB0b2tlbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgYXZhdGFyOiBzdHJpbmdcbiAgbGF0OiBhbnlcbiAgbG5nOiBhbnlcblxuICBzaG93Qml6Rm9ybTogYm9vbGVhblxuICBzaG93Qml6OiBib29sZWFuXG4gIGFza0JpejogYm9vbGVhblxuICBzaG93VmVyaWZ5OiBib29sZWFuXG5cbiAgQklaOiBhbnlcbiAgVVNFUjogYW55XG4gIGltYWdlID0gXCJodHRwOi8vY2RuLmNubi5jb20vY25ubmV4dC9kYW0vYXNzZXRzLzE5MDcxMDEzNTI0NS0xMi13YXRlcmZyb250LXJlc3RhdXJhbnRzLmpwZ1wiXG4gIHllbHBJbWFnZSA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9oUDlHUHAzLnBuZ1wiXG5cbiAgY29uc3RydWN0b3IocHVibGljIF9nYW1lOiBHYW1lUHJvdmlkZXIsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsICkge1xuXG4gICAgdGhpcy5pbWFnZXMgPSBbXVxuICAgIHRoaXMuJGdhbWUgPSBfZ2FtZVxuICAgIHRoaXMuc2hvd0JpeiA9IGZhbHNlXG4gICAgdGhpcy5zaG93VmVyaWZ5ID0gZmFsc2VcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd0b2tlbicpXG4gICAgICB0aGlzLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCduYW1lJylcbiAgICAgIHRoaXMudXNlciA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3VzZXInKVxuICAgICAgdGhpcy5sYXQgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsYXQnKVxuICAgICAgdGhpcy5sbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsbmcnKVxuXG4gICAgICB0aGlzLnNob3dCaXpGb3JtID0gZmFsc2VcbiAgICAgIHRoaXMuZ1VTRVIoKVxuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgdXNlclxuICBnVVNFUigpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIHVzZXIgYW5kIGJpelwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuVVNFUiA9IGpvcmRpLnBheWxvYWRbMF1cblxuICAgICAgICAgICAgICB0aGlzLkJJWiA9IGpvcmRpLnBheWxvYWRbMV1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA+IDAgJiYgdGhpcy5CSVpbMF0ucHJvZmlsZVswXS52ZXJpZmllZCA8IDEpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCaXogPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5hc2tCaXogPSBmYWxzZVxuXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCAmJiB0aGlzLkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkID4gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCaXogPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5hc2tCaXogPSBmYWxzZVxuXG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPCAxKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWZXJpZnkgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0JpeiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5hc2tCaXogPSB0cnVlXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnBheWxvYWQpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuQklaKVxuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuQklaID0gW11cbiAgICAgICAgICAgIHRoaXMuVVNFUiA9IFtdXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgfSk7XG4gIH1cblxuICBvblllbHAoKSB7XG5cblxuICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIlllbHBcIixcbiAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgeWVscCBpZFwiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcImdldCB5ZWxwXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgfSkudGhlbigocikgPT4ge1xuICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgIHRoaXMuYllFTFAoci50ZXh0KVxuICAgICAgICAvLyB0aGlzLmxvZ2luQ29tcGxldGUoci50ZXh0KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnBvcCgnZW50ZXIgeWVscCBpZD8nLCAnZXJyb3InKVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBiWUVMUCh5ZWxwOiBhbnkpIHtcblxuICAgIHRoaXMuJGdhbWUuYllFTFAodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcsIHllbHApXG4gICAgICAuc3Vic2NyaWJlKChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpvcmRpKVxuICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFxuICAgICAgICAgICAgdGhpcy5zaG93Qml6ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcblxuICAgICAgICB9XHJcbiAgICAgIH0pXG4gIH1cblxuICB2WUVMUCh5ZWxwOiBhbnkpIHtcblxuICAgIHRoaXMuJGdhbWUudllFTFAodGhpcy50b2tlbiwgdGhpcy51c2VyLCBudWxsKVxuICAgICAgLnN1YnNjcmliZSgoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVmVyaWZ5IEJ1c2luZXNzXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgdmVyaWZpY2F0aW9uIGNvZGVcIixcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImNvbmZpcm1cIixcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGdhbWUudllFTFAodGhpcy50b2tlbiwgdGhpcy51c2VyLCByLnRleHQpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9wKCdlbnRlciB2ZXJpZmljYXRpb24gY29kZScsICdlcnJvcicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcblxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgLy8gZ1NBVkUoKSB7XG4gIC8vXG4gIC8vICAgaWYgKCF0aGlzLmJpek5hbWUpIHtcbiAgLy8gICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyAgbmFtZT9cIiwgXCJlcnJvclwiKVxuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMuYWRkcmVzcykge1xuICAvLyAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIGFkZHJlc3M/XCIsIFwiZXJyb3JcIilcbiAgLy9cbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLnBob25lKSB7XG4gIC8vICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgcGhvbmU/XCIsIFwiZXJyb3JcIilcbiAgLy9cbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLnN0b3J5KSB7XG4gIC8vICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3Mgc3Rvcnk/XCIsIFwiZXJyb3JcIilcbiAgLy9cbiAgLy8gICB9IGVsc2Uge1xuICAvL1xuICAvLyAgICAgdGhpcy4kZ2FtZS5iaXpTQVZFKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5iaXpOYW1lLCB0aGlzLmFkZHJlc3MsIHRoaXMucGhvbmUsIHRoaXMuc3RvcnksIHRoaXMuZW1haWwsIHRoaXMuYlR5cGUsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgLy8gICAgICAgLnN1YnNjcmliZShcbiAgLy8gICAgICAgICAoam9yZGkpID0+IHtcbiAgLy8gICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gIC8vXG4gIC8vICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAvL1xuICAvLyAgICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFswXVxuICAvLyAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKVxuICAvL1xuICAvLyAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAvL1xuICAvLyAgICAgICAgICAgICB9KVxuICAvL1xuICAvLyAgICAgICAgICAgICB0aGlzLkJJWiA9IGpvcmRpLnBheWxvYWRbMF1cbiAgLy8gICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG4gIC8vXG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG4gIC8vXG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSlcbiAgLy8gICB9XG4gIC8vXG4gIC8vIH1cbiAgLy9cbiAgLy8gcHVibGljIHRha2VQaWN0dXJlKCkge1xuICAvL1xuICAvLyAgIENhbWVyYS50YWtlUGljdHVyZSh7IHNhdmVUb0dhbGxlcnk6IGZhbHNlLCB3aWR0aDogMzIwLCBoZWlnaHQ6IDI0MCB9KS50aGVuKChwaWN0dXJlOiBhbnkpID0+IHtcbiAgLy8gICAgIGxldCBmb2xkZXIgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgLy8gICAgIGxldCBwYXRoID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIE1ENShuZXcgRGF0ZSgpKSArIFwiLnBuZ1wiKTtcbiAgLy8gICAgIHBpY3R1cmUuc2F2ZVRvRmlsZShwYXRoLCBJbWFnZUZvcm1hdC5wbmcsIDYwKTtcbiAgLy8gICAgIHRoaXMudXBsb2FkKFwiaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC91cGxvYWRcIiwgXCJ1cGxvYWRcIiwgcGF0aClcbiAgLy8gICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAvLyAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAvLyAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChwYXRoLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSk7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0sIGVycm9yID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIHB1YmxpYyB1cGxvYWQoZGVzdGluYXRpb246IHN0cmluZywgZmlsZXZhcjogc3RyaW5nLCBmaWxlcGF0aDogc3RyaW5nKSB7XG4gIC8vICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gIC8vICAgICBsZXQgc2Vzc2lvbiA9IEJhY2tncm91bmRIdHRwLnNlc3Npb24oXCJmaWxlLXVwbG9hZFwiKTtcbiAgLy8gICAgIGxldCByZXF1ZXN0ID0ge1xuICAvLyAgICAgICB1cmw6IGRlc3RpbmF0aW9uLFxuICAvLyAgICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gIC8vICAgICB9O1xuICAvLyAgICAgbGV0IHBhcmFtcyA9IFt7IFwibmFtZVwiOiBmaWxldmFyLCBcImZpbGVuYW1lXCI6IGZpbGVwYXRoLCBcIm1pbWVUeXBlXCI6IFwiaW1hZ2UvcG5nXCIgfV07XG4gIC8vICAgICBsZXQgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XG4gIC8vICAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgKGV2ZW50KSA9PiB7XG4gIC8vICAgICAgIGxldCBmaWxlID0gRmlsZVN5c3RlbS5GaWxlLmZyb21QYXRoKGZpbGVwYXRoKTtcbiAgLy8gICAgICAgZmlsZS5yZW1vdmUoKS50aGVuKHJlc3VsdCA9PiB7XG4gIC8vICAgICAgICAgb2JzZXJ2ZXIubmV4dChcIlVwbG9hZGVkIGBcIiArIGZpbGVwYXRoICsgXCJgXCIpO1xuICAvLyAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gIC8vICAgICAgIH0sIGVycm9yID0+IHtcbiAgLy8gICAgICAgICBvYnNlcnZlci5lcnJvcihcIkNvdWxkIG5vdCBkZWxldGUgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZXZlbnQgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIC8vICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IHVwbG9hZCBgXCIgKyBmaWxlcGF0aCArIFwiYC4gXCIgKyBldmVudC5ldmVudE5hbWUpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogRXZlbnREYXRhKSB7XG4gIC8vICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XG4gIC8vICAgdGhpcy5iVHlwZSA9IHRoaXMuYml6VHlwZVtwaWNrZXIuc2VsZWN0ZWRJbmRleF1cbiAgLy8gICAvLyBjb25zb2xlLmxvZyh0aGlzLmJUeXBlKTtcbiAgLy8gfVxuXG4gIHBvcChtZXNzYWdlOiBhbnksIHR5cGU6IGFueSkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdHlwZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG5cbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJSYWNlIGNob3NlbiFcIik7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKCkge1xuXG4gICAgdGhpcy5fY3JlYXRlID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGhhc2h0YWdzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGV0YWlsczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNhdGVnb3J5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cbiAgICB9KTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdhbWVJbWFnZSB7XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XFxufVxcblxcbi50ZXh0Qm9sZHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JhYntcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyNTIyMjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjp3aGl0ZTtcXG5mb250LXdlaWdodDogYm9sZDtcXG53aWR0aDoxMDBweDtcXG5oZWlnaHQ6MjAwcHhcXG59XFxuXFxuLnNsYXB7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6I0YyRjAyMjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLnNuZWFre1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiMyMkYyMjc7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5hdmF0YXJze1xcbiAgLyogdXNlcjogKi9cXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApO1xcbmhlaWdodDphdXRvO1xcbndpZHRoOjIwMHB4XFxuXFxufVxcbi5jYXJkU3R5bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxufVxcbi5waWNrZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMjtcXG4gICAgd2lkdGg6IDIwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcblxcbiAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiAqbmdJZj1cXFwic2hvd0JpekZvcm1cXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHlvdXIgYnVzaW5lc3MgcHJvZmlsZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosICosICosICosICosKiwqXFxcIiBjb2x1bW5zPVxcXCI4MCwgKlxcXCIgY2xhc3M9XFxcImZvcm1cXFwiPlxcblxcbiAgICAgICAgICA8TGlzdFBpY2tlciAgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJiaXpUeXBlXFxcIiBzZWxlY3RlZEluZGV4PVxcXCIwXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+PC9MaXN0UGlja2VyPlxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIk5hbWVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImJpek5hbWVcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIG5hbWVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiQWRkcmVzc1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgaGludD1cXFwiYnVzaW5lc3MgYWRkcmVyc3NcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiUGhvbmVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInBob25lXFxcIiBoaW50PVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJFbWFpbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW1haWxcXFwiIGhpbnQ9XFxcInlvdXIgYnVzaW5lc3MgZW1haWxcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiU3RvcnlcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInN0b3J5XFxcIiBoaW50PVxcXCJ5b3VyIGJ1c2luZXNzIHN0b3J5XFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiNlxcXCIgY29sU3Bhbj0yIHRleHQ9XFxcInNhdmVcXFwiICh0YXApPVxcXCJnU0FWRSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJzdG9yeVxcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiAqbmdJZj1cXFwiYlR5cGU9PSdzZXgnXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJpbWFnZUFzc2V0c1xcXCIgKm5nSWY9XFxcImltYWdlQXNzZXRzICYmIGltYWdlQXNzZXRzLmxlbmd0aD4wXFxcIj5cXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pbWFnZT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbd2lkdGhdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVxcXCJpbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiBbdGV4dF09XFxcIidpbWFnZSAnICsgaVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwic2F2ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcblxcbiAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiAqbmdJZj1cXFwic2hvd0dhbWVGb3JtXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0aW5nIHt7cHJpemVUeXBlfX0gZ2FtZSBmb3JcXFwiIGNsYXNzPVxcXCJoNCB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5uYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiQklaWzBdLnByb2ZpbGVbMF0uYWRkcmVzc1xcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiQklaWzBdLnByb2ZpbGVbMF0ucGhvbmVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCAqLCAqLCAqLCAqLCosKlxcXCIgY29sdW1ucz1cXFwiODAsICosIDgwXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJnYW1lVGl0bGVcXFwiIGhpbnQ9XFxcImdhbWUgdGl0bGVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiBtYXhMZW5ndGg9XFxcIjI0XFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcIm1heFBsYXllcnNcXFwiIGhpbnQ9XFxcIm1heCBwbGF5ZXJzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIG1heExlbmd0aD1cXFwiMlxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcml6ZVxcXCIgaGludD1cXFwid2lubmVyIGdldHMgYSAyNSUgb2ZmIGNvdXBvblxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIG1heExlbmd0aD1cXFwiNDVcXFwiPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicHJpemUyXFxcIiBoaW50PVxcXCJub25lIHdpbm5lcnMgZ2V0IGEgMTAlIG9mZiBjb3Vwb25cXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiBtYXhMZW5ndGg9XFxcIjQ1XFxcIiAqbmdJZj1cXFwicHJpemVUeXBlPT0nZXZlcnlvbmUgd2lucydcXFwiPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicHJpY2VcXFwiIGhpbnQ9XFxcImJ1eSAkMzAgaXRlbVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiICBtYXhMZW5ndGg9XFxcIjI0XFxcIiAqbmdJZj1cXFwicHJpemVUeXBlPT0nZnJlZSBpdGVtICB3aXRoICBwdXJjaGFzZSdcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGV0YWlsc1xcXCIgaGludD1cXFwicHJpemUgZGV0YWlsc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiICBtYXhMZW5ndGg9XFxcIjE1MFxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2w9JzEnIHRleHQ9XFxcImNyZWF0ZSBnYW1lXFxcIiAodGFwKT1cXFwiZ0NyZWF0ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgcC1iLTIwXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiNFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ0b3RhbCBVU0Q6ICR7e21heFBsYXllcnMqcGxheWVyRmVlIHx8IDAgfCBudW1iZXIgOiAnMS4yLTInfX1cXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIjEgYnRjID0gJHt7YnRjX3ZhbHVlfX1cXFwiIGNsYXNzPVxcXCJoNCB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIldpbm5lcihzKSBtdXN0IHJlZGVlbSBjb3Vwb24gd2l0aGluIDcyICBob3Vyc1xcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSWYgbGVzcyB0aGFuIHRoZSBtYXggbnVtYmVyIG9mIHBsYXllcnMgcGxheSB5b3VyIGdhbWUsIHRoZSBkaWZmZXJlbmNlIHdpbGwgYmUgcmV0dXJuZWQgdG8geW91ciB3YWxsZXRcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIyMVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCIhc2hvd0JpekZvcm1cXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGUge3t0eXBlfX0gZ2FtZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0ZSB7e3R5cGV9fSBnYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgKm5nSWY9XFxcInR5cGU9PSdjb3Vwb24nXFxcIj5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCosKiwqLCosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdyYWJiaXQgaXMgYW4gYXdlc29tZSB3YXkgdG8gZW5nYWdlIGxvY2FscyB3aXRoIGRlYWxzIGFuZCBkaXNjb3VudHMuIEl0IGNvc3RzIGFzIGxpdHRsZSBhcyAkMC42NSBwZXIgcGxheWVyIGNvbXBldGluZyBmb3IgeW91ciBjb3Vwb24uIEdhbWVzIGFyZSBnZW8gZmVuY2VkIHRvIGxvY2FscyB3aXRoaW4gMTAgbWlsZXMuIExvY2FscyBwbGF5IEZSRUUgdG8gd2luIHlvdXIgY291cG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoMyBwLTIwIHRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD0nMTInPjwvTGFiZWw+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIxXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJHYW1lIFR5cGVzXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIxIFdpbm5lclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIm9ubHkgb25lIHBsYXllciB3aW5zXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiQwLjY1IHBlciBwbGF5ZXJcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiY3JlYXRlXFxcIiAodGFwKT1cXFwib25DcmVhdGUoJzEgd2lubmVyJylcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSAtcm91bmRlZC1sZ1xcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjNcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJFdmVyeW9uZSBXaW5zXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwid2lubmVyIGdldHMgYSA1MCUgb2ZmIGNvdXBvbiwgYWxsIG90aGVyIHBsYXllcnMgZ2V0IGEgMTUlIG9mZiBjb3Vwb24gKGV4YW1wbGUpXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiQxLjc1IHBlciBwbGF5ZXJcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiY3JlYXRlXFxcIiAodGFwKT1cXFwib25DcmVhdGUoJ2V2ZXJ5b25lIHdpbnMnKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IC1yb3VuZGVkLWxnXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiNFxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldpbm5lciBNdXN0IEJyaW5nIEEgRnJpZW5kXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwid2lubmVyIG11c3QgYnJpbmcgYSBmcmllbmQgdG8gcmVkZWVtIHRoZSBjb3Vwb25cXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDEgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnd2lubmVyIG11c3QgYnJpbmcgYSBmcmllbmQnKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IC1yb3VuZGVkLWxnXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiNVxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZyZWUgaXRlbSB3aXRoIHB1cmNoYXNlXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwid2lubmVyIGdldHMgYSBmcmVlIGl0ZW0sIHdpdGggcHVyY2hhc2VcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDEgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnZnJlZSBpdGVtICB3aXRoICBwdXJjaGFzZScpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiNlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRkFRJ3NcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiN1xcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkV4cGxhaW4gcGVyIHBsYXllciBwcmljaW5nXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwid2hlbiBjcmVhdGluZyB5b3VyIGdhbWUsIHlvdSBjaG9vc2UgdGhlIG1heCBudW1iZXIgb2YgcGxheWVycyBmb3IgeW91ciBnYW1lLiBJZiB5b3UgY2hvb3NlIDEwIG1heCBwbGF5ZXJzIGZvciBhIDEgd2lubmVyIGdhbWUsIGl0IHdpbGwgY29zdCAkNi41MFxcXCIgY2xhc3M9XFxcIm0tYi0yMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjEyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiaWYgbGVzcyB0aGFuIDEwIHBsYXllcnMgam9pbiB0aGUgZ2FtZSwgdGhlIGRpZmZlcmVuY2Ugd2lsbCBiZSByZXR1cm5lZCB0byB5b3VyIGJpdGNvaW4gd2FsbGV0XFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjhcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXaGF0cyB0aGUgaW5jZW50aXZlIGZvciBwbGF5ZXJzIHRvIHJlZGVlbSB0aGVpciBjb3Vwb25zP1xcXCIgY2xhc3M9XFxcIm0tYi0xMCBoMlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQbGF5ZXJzIGFyZSByZXdhcmRlZCB3aGVuIHRoZXkgcmVkZWVtIHRoZWlyIGNvdXBvbnMsIGZyb20gcmV3YXJkIHBvaW50cyB0byBmcmVlIHRvb2xzIGFuZCB0byBvdGhlciBwZXJrcy4gUGxheWVycyBtYXkgYWxzbyBiZSBwZW5hbGl6ZWQgZm9yIG5vdCByZWRlZW1pbmcgdGhlaXIgd2luc1xcXCIgY2xhc3M9XFxcIm0tYi0yMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjEyXFxcIiAvPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI5XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2FuIEkgZXh0ZW5kIHRoZSBsb2NhbCByYWRpdXMgdG8gMjAgbWlsZXM/XFxcIiBjbGFzcz1cXFwibS1iLTEwIGgyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlllcywgd2l0aCBhIHByZW1pdW0gZmVhdHVyZVxcXCIgY2xhc3M9XFxcIm0tYi0yMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjEyXFxcIiAvPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiICpuZ0lmPVxcXCJ0eXBlPT0nYml0Y29pbidcXFwiPlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIj5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRpbmcgYml0Y29pbiBnYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8L0dyaWRMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdhbWVQcm92aWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuY29uc3QgbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBJbWFnZUZvcm1hdCB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG52YXIgRmlsZVN5c3RlbSA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcbnZhciBCYWNrZ3JvdW5kSHR0cCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCIpO1xudmFyIE1ENSA9IHJlcXVpcmUoXCJibHVlaW1wLW1kNVwiKTtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJDcmVhdGVcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBfY3JlYXRlOiBGb3JtR3JvdXBcbiAgcHVibGljIGJpelR5cGU6IEFycmF5PHN0cmluZz4gPSBbJ3Jlc3RhdXJhbnQnLCAncmV0YWlsJywgJ3NwYScsICdiYXInLCAnY2FmZScsICdmb29kIHRydWNrJywgJ3RvdXJpc20nLCAnc2Fsb24nLCAnaGFpciBzdHlsaXN0JywgJ3dlYnNpdGUnXTtcbiAgYml6TmFtZTogc3RyaW5nXG4gIGFkZHJlc3M6IHN0cmluZ1xuICBwaG9uZTogc3RyaW5nXG4gIHN0b3J5OiBzdHJpbmdcbiAgYlR5cGU6IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIHB1YmxpYyBpbWFnZXM6IEFycmF5PHN0cmluZz47XG4gIGxvY2F0aW9ucyA9IFtdO1xuXG4gIGdhbWVUaXRsZTogc3RyaW5nXG4gIG1heFBsYXllcnM6IGFueVxuICBwcml6ZTogc3RyaW5nXG4gIHByaXplMjogc3RyaW5nXG4gIHByaWNlOiBzdHJpbmdcbiAgZGV0YWlsczogc3RyaW5nXG5cbiAgdG9rZW46IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXNlcjogc3RyaW5nXG4gIGF2YXRhcjogc3RyaW5nXG4gIGxhdDogYW55XG4gIGxuZzogYW55XG4gIHR5cGU6IGFueVxuICBwcml6ZVR5cGU6IGFueVxuICBzaG93R2FtZUZvcm06IGJvb2xlYW5cbiAgc2hvd0JpekZvcm06IGJvb2xlYW5cbiAgJGdhbWU6IGFueVxuICBhZG1pbjogYW55XG4gIEJJWjogYW55XG4gIFVTRVI6IGFueVxuXG4gIGJ0Y192YWx1ZTogc3RyaW5nXG4gIGJ0Y19mZWU6IHN0cmluZ1xuICBidGNfZmVlX3VzZDogc3RyaW5nXG4gIHBsYXllckZlZTogYW55XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9nYW1lOiBHYW1lUHJvdmlkZXIsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsICkge1xuXG4gICAgdGhpcy4kZ2FtZSA9IF9nYW1lXG4gICAgdGhpcy5pbWFnZXMgPSBbXVxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3Rva2VuJylcbiAgICAgIHRoaXMubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ25hbWUnKVxuICAgICAgdGhpcy51c2VyID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndXNlcicpXG4gICAgICB0aGlzLmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xhdCcpXG4gICAgICB0aGlzLmxuZyA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xuZycpXG5cbiAgICAgIHRoaXMuc2hvd0JpekZvcm0gPSBmYWxzZVxuICAgICAgdGhpcy5zaG93R2FtZUZvcm0gPSBmYWxzZVxuXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy50eXBlXG4gICAgICBpZiAodGhpcy51c2VyKSB7XG5cbiAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgdXNlclxuICBnVVNFUigpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIHVzZXJcIilcbiAgICB0aGlzLiRnYW1lLmdVU0VSKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpKSA9PiB7XG5cbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coam9yZGkuYnRjX3ZhbHVlKVxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IFVTRVIgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFsxXVxuXG4gICAgICAgICAgICAgIHRoaXMuVVNFUiA9IFVTRVJcbiAgICAgICAgICAgICAgdGhpcy5idGNfdmFsdWUgPSBqb3JkaS5idGNfdmFsdWVcbiAgICAgICAgICAgICAgdGhpcy5idGNfZmVlID0gam9yZGkuYnRjX2ZlZVxuICAgICAgICAgICAgICB0aGlzLmJ0Y19mZWVfdXNkID0gam9yZGkuYnRjX2ZlZV91c2RcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5CSVoucHJvZmxlKVxuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9IFVTRVIucHJvZmlsZS5uYW1lIHx8ICdubyB1c2VyIG5hbWUgc2V0J1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9IFVTRVIucHJvZmlsZS5hdmF0YXIgfHwgJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG4gICAgICAgICAgICAgIHRoaXMuYWRtaW4gPSBVU0VSLnByb2ZpbGUuYWRtaW5cblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSAnbi9hJ1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9ICd+L2Fzc2V0cy9pbWdzL2F2YXRhcnMvYWxpZW5fMDIucG5nJ1xuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ0NyZWF0ZSgpIHtcblxuICAgIGlmICghdGhpcy5nYW1lVGl0bGUpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIGdhbWUgdGl0bGU/XCIsIFwiZXJyb3JcIilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm1heFBsYXllcnMpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIG1heCBudW1iZXIgb2YgcGxheWVycz9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcml6ZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgcHJpemU/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAodGhpcy5wcml6ZVR5cGUgPT0gJ2V2ZXJ5b25lIHdpbnMnICYmICF0aGlzLnByaXplMikge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgIHByaXplICBmb3Igbm9uZSB3aW5uZXJzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpemVUeXBlID09ICdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJyAmJiAhdGhpcy5wcmljZSkge1xuXG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSBwcmljZSBvZiB0aGUgIGl0ZW0gdG8gcHVyY2hhc2U/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGV0YWlscykge1xuXG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSBwcml6ZSBkZXRhaWxzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBsZXQgdG90YWwgPSB0aGlzLm1heFBsYXllcnMgKiB0aGlzLnBsYXllckZlZVxuICAgICAgdGhpcy4kZ2FtZS5nQ1JFQVRFKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5wcml6ZVR5cGUsIHRoaXMuZ2FtZVRpdGxlLCB0aGlzLm1heFBsYXllcnMsIHRoaXMucHJpemUsIHRoaXMucHJpemUyLCB0aGlzLnByaWNlLCB0b3RhbClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoam9yZGkpID0+IHtcbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICB9XG5cbiAgfVxuICBnU0FWRSgpIHtcblxuICAgIGlmICghdGhpcy5iaXpOYW1lKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgIG5hbWU/XCIsIFwiZXJyb3JcIilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmFkZHJlc3MpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBhZGRyZXNzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnBob25lKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgcGhvbmU/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RvcnkpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBzdG9yeT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5kZXRhaWxzKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSAgZ2FtZSAgZGV0YWlscz9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy4kZ2FtZS5iaXpTQVZFKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5iaXpOYW1lLCB0aGlzLmFkZHJlc3MsIHRoaXMucGhvbmUsIHRoaXMuc3RvcnksIHRoaXMuZW1haWwsIHRoaXMuYlR5cGUsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoam9yZGkpID0+IHtcbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBvbkNyZWF0ZShwcml6ZVR5cGUpIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5wcml6ZVR5cGUgPSBwcml6ZVR5cGVcbiAgICAgIGlmIChwcml6ZVR5cGUgPT0gJzEgd2lubmVyJykge1xuXG4gICAgICAgIHRoaXMucGxheWVyRmVlID0gLjY1XG5cbiAgICAgIH1cbiAgICAgIGlmIChwcml6ZVR5cGUgPT0gJ2V2ZXJ5b25lIHdpbnMnKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJGZWUgPSAxLjc1XG5cbiAgICAgIH1cbiAgICAgIGlmIChwcml6ZVR5cGUgPT0gJ3dpbm5lciBtdXN0IGJyaW5nIGEgZnJpZW5kJykge1xuXG4gICAgICAgIHRoaXMucGxheWVyRmVlID0gMVxuXG4gICAgICB9XG4gICAgICBpZiAocHJpemVUeXBlID09ICdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJykge1xuXG4gICAgICAgIHRoaXMucGxheWVyRmVlID0gMVxuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPCAxKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaG93Qml6Rm9ybSlcbiAgICAgICAgdGhpcy5wb3AoXCJsZXRzIGNyZWF0ZSB5b3VyIGJ1c2luZXNzIHByb2ZpbGUgMXN0XCIsIFwiZXJyb3JcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGUtYnVzaW5lc3MvJ10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApO1xuICAgICAgICAvLyB0aGlzLnNob3dCaXpGb3JtID0gdHJ1ZVxuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCAmJiB0aGlzLkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkIDwgMSkge1xuXG5cbiAgICAgICAgdGhpcy5wb3AoXCJwbGVhc2UgdmVyaWZ5IGJ1c2luZXNzXCIsIFwiZXJyb3JcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGUtYnVzaW5lc3MvJ10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA+IDAgJiYgdGhpcy5CSVpbMF0ucHJvZmlsZVswXS52ZXJpZmllZCA+IDApIHtcblxuICAgICAgICB0aGlzLnNob3dHYW1lRm9ybSA9IHRydWVcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy51c2VyKSB7XG5cbiAgICAgICAgdGhpcy5wb3AoXCJsb2cgaW4gdG8gY3JlYXRlIGEgZ2FtZVwiLCBcImVycm9yXCIpXG5cbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgcHVibGljIHRha2VQaWN0dXJlKCkge1xuXG4gICAgQ2FtZXJhLnRha2VQaWN0dXJlKHsgc2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4oKHBpY3R1cmU6IGFueSkgPT4ge1xuICAgICAgbGV0IGZvbGRlciA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgbGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgTUQ1KG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xuICAgICAgcGljdHVyZS5zYXZlVG9GaWxlKHBhdGgsIEltYWdlRm9ybWF0LnBuZywgNjApO1xuICAgICAgdGhpcy51cGxvYWQoXCJodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3VwbG9hZFwiLCBcInVwbG9hZFwiLCBwYXRoKVxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHBhdGgucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkKGRlc3RpbmF0aW9uOiBzdHJpbmcsIGZpbGV2YXI6IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHNlc3Npb24gPSBCYWNrZ3JvdW5kSHR0cC5zZXNzaW9uKFwiZmlsZS11cGxvYWRcIik7XG4gICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiBkZXN0aW5hdGlvbixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgICAgfTtcbiAgICAgIGxldCBwYXJhbXMgPSBbeyBcIm5hbWVcIjogZmlsZXZhciwgXCJmaWxlbmFtZVwiOiBmaWxlcGF0aCwgXCJtaW1lVHlwZVwiOiBcImltYWdlL3BuZ1wiIH1dO1xuICAgICAgbGV0IHRhc2sgPSBzZXNzaW9uLm11bHRpcGFydFVwbG9hZChwYXJhbXMsIHJlcXVlc3QpO1xuICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgZmlsZSA9IEZpbGVTeXN0ZW0uRmlsZS5mcm9tUGF0aChmaWxlcGF0aCk7XG4gICAgICAgIGZpbGUucmVtb3ZlKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoXCJVcGxvYWRlZCBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgZGVsZXRlIGBcIiArIGZpbGVwYXRoICsgXCJgXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGFzay5vbihcImVycm9yXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihcIkNvdWxkIG5vdCB1cGxvYWQgYFwiICsgZmlsZXBhdGggKyBcImAuIFwiICsgZXZlbnQuZXZlbnROYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XG4gICAgdGhpcy5iVHlwZSA9IHRoaXMuYml6VHlwZVtwaWNrZXIuc2VsZWN0ZWRJbmRleF1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmJUeXBlKTtcbiAgfVxuXG4gIHBvcChtZXNzYWdlOiBhbnksIHR5cGU6IGFueSkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdHlwZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG5cbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJSYWNlIGNob3NlbiFcIik7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKCkge1xuXG4gICAgdGhpcy5fY3JlYXRlID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGhhc2h0YWdzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGV0YWlsczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNhdGVnb3J5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cbiAgICB9KTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdhbWVJbWFnZSB7XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XFxufVxcblxcbi50ZXh0Qm9sZHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JhYntcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyNTIyMjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjp3aGl0ZTtcXG5mb250LXdlaWdodDogYm9sZDtcXG53aWR0aDoxMDBweDtcXG5oZWlnaHQ6MjAwcHhcXG59XFxuXFxuLnNsYXB7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6I0YyRjAyMjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLnNuZWFre1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiMyMkYyMjc7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5hdmF0YXJze1xcbiAgLyogdXNlcjogKi9cXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApO1xcbmhlaWdodDphdXRvO1xcbndpZHRoOjIwMHB4XFxuXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJMZWdhbHNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9sZWdhbHMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xlZ2Fscy5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMZWdhbHNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG5cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsIlxuaW1wb3J0IHsgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IEVycm9yT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTZXNzaW9uUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2FtZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xuICAgIC8vY29uc29sZS5sb2coJ0hlbGxvIFNlc3Npb25Qcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgLy8vL2d1c2VyXG4gIGdVU0VSKHRva2VuOiBhbnksIHVzZXI6IGFueSwgbGF0OiBhbnksIGxuZzogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2dVU0VSJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBiR0xPQkFMR0FNRVMoKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogbnVsbCxcbiAgICAgIHVzZXI6IG51bGwsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYkdMT0JBTEdBTUVTJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBiTE9DQUxHQU1FUyh0b2tlbiwgdXNlciwgbGF0LCBsbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYkxPQ0FMR0FNRVMnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8vLy9idXNpbmVzc1xuICBiaXpTQVZFKHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgYml6bmFtZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIHN0b3J5OiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGJUeXBlOiBzdHJpbmcsIGxhdDogYW55LCBsbmc6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGJpek5hbWU6IGJpem5hbWUsXG4gICAgICBwaG9uZTogcGhvbmUsXG4gICAgICBzdG9yeTogc3RvcnksXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBiVHlwZTogYlR5cGUsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYlNBVkUnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8vLy9nYW1lXG4gIGJHQU1FUyhsYXQsIGxuZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgLy8gdG9rZW46IHVzZXJfdG9rZW4sXG4gICAgICAvLyB1c2VyX2lkOiB1c2VyX2lkLFxuICAgICAgLy8gZ1R5cGU6IGdUeXBlLFxuICAgICAgLy8gZ0lEOiBnSUQsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYkdBTUVTJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkdyYWIodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2dyYWInLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uU2xhcCh0b2tlbjogYW55LCB1c2VyOiBhbnksIGdhbWU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdhbWU6IGdhbWUsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvc2xhcCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25TbmVhayh0b2tlbjogYW55LCB1c2VyOiBhbnksIGdhbWU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdhbWU6IGdhbWUsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvc25lYWsnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uQXZhdGFyKHRva2VuOiBhbnksIHVzZXI6IGFueSwgYXZhdGFyOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBhdmF0YXI6IGF2YXRhcixcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9hdmF0YXInLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uRWRpdCh0b2tlbjogYW55LCB1c2VyOiBhbnksIHRleHQ6IGFueSwgdHlwZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9wcm9maWxlL2VkaXQnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uVGltZXIodG9rZW46IGFueSwgdXNlcjogYW55LCBnSUQ6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdJRDogZ0lELFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3RpbWVyJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwbGF5KHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ0lEOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnSUQ6IGdJRCxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9wbGF5JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBsb2dpbihudW1iZXI6IHN0cmluZywgZGV2aWNlOiBzdHJpbmcsIGxhdDogc3RyaW5nLCBsbmc6IHN0cmluZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICBkZXZpY2U6IGRldmljZSxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9sb2dpbicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgbG9naW5Db21wbGV0ZShjb2RlOiBzdHJpbmcsIGRldmljZTogc3RyaW5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgZGV2aWNlOiBkZXZpY2UsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvbG9naW5Db21wbGV0ZScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYllFTFAodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBsYXQ6IHN0cmluZywgbG5nOiBzdHJpbmcsIHllbHA6IHN0cmluZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHllbHA6IHllbHAsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYlllbHAnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHZZRUxQKHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgY29kZTogc3RyaW5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgY29kZTogY29kZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC92WWVscCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ0NSRUFURSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIHByaXplVHlwZTogc3RyaW5nLCBnYW1lVGl0bGU6IHN0cmluZywgbWF4UGxheWVyczogYW55LCBwcml6ZTogc3RyaW5nLCBwcml6ZTI6IHN0cmluZywgcHJpY2U6IGFueSwgdG90YWw6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHByaXplVHlwZTogcHJpemVUeXBlLFxuICAgICAgZ2FtZVRpdGlsZTogZ2FtZVRpdGxlLFxuICAgICAgbWF4UGxheWVyczogbWF4UGxheWVycyxcbiAgICAgIHByaXplOiBwcml6ZSxcbiAgICAgIHByaXplMjogcHJpemUyLFxuICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgdG90YWw6IHRvdGFsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvZ0NyZWF0ZScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBvblBheSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGdyYWJzOiBzdHJpbmcsIHNsYXBzOiBzdHJpbmcsIHNuZWFrczogc3RyaW5nLCBwYXlUeXBlKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgZ3JhYnM6IGdyYWJzLFxuICAgICAgc2xhcHM6IHNsYXBzLFxuICAgICAgc25lYWtzOiBzbmVha3MsXG4gICAgICBwYXlUeXBlOiBwYXlUeXBlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL29uUGF5JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBsZXQgYm9keSA9IHJlcztcbiAgICByZXR1cm4gYm9keSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBlcnIgPSBlcnJvciB8fCAnJztcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnJNc2cpO1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXNvbGlkLTkwMCc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZ2FtZUltYWdlIHtcXG4gICAgd2lkdGg6MjUlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG59XFxuXFxuLnRleHRCb2xke1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmFie1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjI1MjIyO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOndoaXRlO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbndpZHRoOjEwMHB4O1xcbmhlaWdodDoyMDBweFxcbn1cXG5cXG4uc2xhcHtcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojRjJGMDIyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uc25lYWt7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6IzIyRjIyNztcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLmF2YXRhcnN7XFxuICAvKiB1c2VyOiAqL1xcbmJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC41MCk7XFxuaGVpZ2h0OmF1dG87XFxud2lkdGg6MjAwcHhcXG5cXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JhYmJpdFxcXCIgY2xhc3M9XFxcImgxXFxcIj5cXG5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIlN1cHBvcnRcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIyXFxcIj5cXG5cXG4gICAgICAgIDxDYXJkVmlldyAgY2xhc3M9XFxcInAtdC0yMFxcXCI+XFxuICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR2l2ZSB1cyAgYSBjYWxsIDI0LzcgaWYgeW91IG5lZWQgaGVscCAoNDE1LTUwOS00ODEyKVxcXCIgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTVcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICA8L0NhcmRWaWV3PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiU3VwcG9ydFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3N1cHBvcnQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3N1cHBvcnQuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3VwcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIFVTRVI6IGFueVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG5cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGltZXIvdGltZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2VudW1zL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9