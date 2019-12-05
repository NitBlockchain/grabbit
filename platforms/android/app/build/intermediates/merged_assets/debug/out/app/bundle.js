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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./about/about.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./create/create.component.ts");
/* harmony import */ var _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./create-business/create-business.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./support/support.component.ts");
/* harmony import */ var _legals_legals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./legals/legals.component.ts");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_13__);














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_13__["NativeScriptHttpClientModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _create_business_create_business_component__WEBPACK_IMPORTED_MODULE_10__["CreateBusinessComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_11__["SupportComponent"],
                _legals_legals_component__WEBPACK_IMPORTED_MODULE_12__["LegalsComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);







var localStorage = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
var FileSystem = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var BackgroundHttp = __webpack_require__("../node_modules/nativescript-background-http/background-http.js");
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

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<ScrollView class=\"page\">\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showBizForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n          <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n          <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n          <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showGameForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"creating {{prizeType}} game for\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n        <Label [text]=\"BIZ[0].profile[0].name\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].address\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].phone\" class=\"h3 text-center  p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n      </StackLayout>\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *, 80\" class=\"form\">\n\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border p-t-20\" maxLength=\"24\"></TextField>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"maxPlayers\" hint=\"max players\" class=\"input input-border p-t-20\" keyboardType=\"number\" maxLength=\"2\"></TextField>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"prize\" hint=\"winner gets a 25% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"prize2\" hint=\"none winners get a 10% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\" *ngIf=\"prizeType=='everyone wins'\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"price\" hint=\"buy $30 item\" class=\"input input-border p-t-20\"  maxLength=\"24\" *ngIf=\"prizeType=='free item  with  purchase'\"></TextField>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"details\" hint=\"prize details\" class=\"input input-border p-t-20\"  maxLength=\"150\"></TextField>\n\n          <Button row=\"6\" col='1' text=\"create local game\" (tap)=\"gCreateCoupon()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"4\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"total USD: ${{maxPlayers*playerFee || 0 | number : '1.2-2'}}\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"1 btc = ${{btc_value}}\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n\n        <Label text=\"Winner(s) must redeem coupon within 72  hours\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"If less than the max number of players play your game, the difference will be returned to your wallet\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"21\"></Label>\n\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"!showBizForm\">\n    <GridLayout rows=\"*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"0\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='coupon'\">\n\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*\" columns=\"*\">\n\n          <StackLayout class=\"p-20\" row=\"0\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Grabbit is an awesome way to engage locals with deals and discounts. It costs as little as $0.65 per player competing for your coupon. Games are geo fenced to locals within 10 miles. Locals play FREE to win your coupon\"\n                  class=\"h3 p-20 text-center\" textWrap=\"true\" lineHeight='12'></Label>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"Game Types\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"2\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"1 Winner\" class=\"m-b-10 h3\" />\n                <Label text=\"only one player wins\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$0.65 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('1 winner')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"3\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Everyone Wins\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a 50% off coupon, all other players get a 15% off coupon (example)\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1.75 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('everyone wins')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"4\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Winner Must Bring A Friend\" class=\"m-b-10 h3\" />\n                <Label text=\"winner must bring a friend to redeem the coupon\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('winner must bring a friend')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"5\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Free item with purchase\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a free item, with purchase\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('free item  with  purchase')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"6\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"FAQ's\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"7\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Explain per player pricing\" class=\"m-b-10 h2\" />\n                <Label text=\"when creating your game, you choose the max number of players for your game. If you choose 10 max players for a 1 winner game, it will cost $6.50\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n                <Label text=\"if less than 10 players join the game, the difference will be returned to your bitcoin wallet\" class=\"m-b-10 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"8\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Whats the incentive for players to redeem their coupons?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Players are rewarded when they redeem their coupons, from reward points to free tools and to other perks. Players may also be penalized for not redeeming their wins\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"9\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Can I extend the local radius to 20 miles?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Yes, with a premium feature\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='bitcoin'\">\n\n        <GridLayout rows=\"*,*\" columns=\"*\">\n          <StackLayout orientation=\"vertical\" row=\"0\">\n\n              <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *, 80\" class=\"form\">\n\n                <TextField row=\"0\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border p-t-20\" maxLength=\"24\"></TextField>\n                <TextField row=\"1\" col=\"1\" [(ngModel)]=\"prize\" hint=\"prize in btc (.001)\" class=\"input input-border p-t-20\" keyboardType=\"number\" maxLength=\"6\"></TextField>\n                <TextField row=\"2\" col=\"1\" [(ngModel)]=\"details\" hint=\"prize details\" class=\"input input-border p-t-20\"  maxLength=\"150\"></TextField>\n                <TextField row=\"3\" col=\"1\" [(ngModel)]=\"gameLat\" hint=\"geo fence to latitude\" class=\"input input-border p-t-20\"  maxLength=\"150\" *ngIf=\"admin>0\"></TextField>\n                <TextField row=\"4\" col=\"1\" [(ngModel)]=\"gameLng\" hint=\"geo fence to longitude\" class=\"input input-border p-t-20\"  maxLength=\"150\" *ngIf=\"admin>0\"></TextField>\n\n                <Button row=\"5\" col='1' text=\"create bitcoin game\" (tap)=\"gCreateBTC()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\" *ngIf=\"user\"></Button>\n                <Button row=\"5\" col='1' text=\"login/signup\" (tap)=\"login()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\" *ngIf=\"!user\"></Button>\n\n              </GridLayout>\n          </StackLayout>\n\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n            <Label text=\"prize value: ${{btc_value*prize || 0 | number : '1.2-2'}}\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" *ngIf=\"user\"></Label>\n\n            <Label text=\"How This works\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n            <Label text=\"When you create a bitcoin game, you are offering $5 in bitcoin (for example) as a prize up for grabs. Your game will require a minimum of 10 players, with a play fee of 2 grabs (or $0.50). Like inserting quarters into an arcade. Players get x number of free grabs, slaps and sneaks to play\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n\n            <Label text=\"10 x  $0.50 covers your $5 in bitcoin. If 20 players join the game,  there's an overage of $5. 75% of that is yours. \" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n            <Label text=\"If your game is not successful, cancel it and your bitcoins are sent back to your wallet.\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n            <Label text=\"max players 25, max prize amount $25\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n\n          </StackLayout>\n\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n\n  </GridLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/nativescript-uuid/index.js");
/* harmony import */ var nativescript_uuid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_uuid__WEBPACK_IMPORTED_MODULE_11__);







var localStorage = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");



var FileSystem = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var BackgroundHttp = __webpack_require__("../node_modules/nativescript-background-http/background-http.js");
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
            _this.device = Object(nativescript_uuid__WEBPACK_IMPORTED_MODULE_11__["getUUID"])();
            if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_7__["isAndroid"]) {
                // console.log("android")
                // this.device = "android495775qafef4bi9"
            }
            else {
                // console.log("ios")
                //
                // this.device = "anfeoboeuab30r3u"
            }
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
    CreateComponent.prototype.gCreateCoupon = function (type) {
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
            this.$game.gCREATECOUPON(this.token, this.user, this.prizeType, this.gameTitle, this.maxPlayers, this.prize, this.prize2, this.price, total)
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
    CreateComponent.prototype.gCreateBTC = function () {
        var _this = this;
        if (!this.gameTitle) {
            this.pop("whats the game title?", "error");
        }
        else if (!this.prize) {
            this.pop("whats the  prize?", "error");
        }
        else if (!this.details) {
            this.pop("whats the prize details?", "error");
        }
        else if ((this.btc_value * this.prize) > 25) {
            this.pop("$25 max prize value", "error");
        }
        else {
            this.$game.gCREATEBTC(this.token, this.user, this.gameTitle, this.prize, this.details, this.gameLat, this.gameLng)
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
        nativescript_camera__WEBPACK_IMPORTED_MODULE_9__["takePicture"]({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
            picture.saveToFile(path, ui_enums__WEBPACK_IMPORTED_MODULE_8__["ImageFormat"].png, 60);
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
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__["Observable"](function (observer) {
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
    // --------------------------------------------------------------------
    // login/register
    CreateComponent.prototype.login = function () {
        var _this = this;
        console.log("working");
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"]({
            title: "Login/Signup",
            message: "register or login securely  via sms. enter your phone number",
            okButtonText: "send sms",
            cancelButtonText: "cancel",
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].number
        }).then(function (r) {
            if (r.text) {
                _this.$game.login(r.text, _this.device, _this.lat, _this.lng)
                    .subscribe(function (jordi) {
                    if (jordi.success) {
                        _this.zone.run(function () {
                            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"]({
                                title: "verify account",
                                message: "enter your login code",
                                okButtonText: "log me in",
                                cancelButtonText: "cancel",
                                inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text
                            }).then(function (r) {
                                if (r.text) {
                                    _this.loginComplete(r.text);
                                }
                                else {
                                    _this.pop('what is  your phone number?', 'error');
                                }
                                // console.log("Dialog result: " + r.result + ", text: " + r.text);
                            });
                            _this.cd.detectChanges();
                        });
                    }
                    else {
                    }
                });
            }
            else {
            }
            // console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
    };
    CreateComponent.prototype.loginComplete = function (code) {
        var _this = this;
        this.$game.loginComplete(code, this.device)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.token = jordi.token;
                    _this.user = jordi.user;
                    localStorage.setString('token', jordi.token);
                    localStorage.setString('user', jordi.user);
                    _this.pop("you are logged in", "success");
                    _this.gUSER();
                });
                _this.cd.detectChanges();
            }
            else {
                _this.pop(jordi.message, "error");
                setTimeout(function () {
                    _this.zone.run(function () {
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"]({
                            title: "verify account",
                            message: "enter your login code",
                            okButtonText: "log me in",
                            cancelButtonText: "cancel",
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text
                        }).then(function (r) {
                            if (r.text) {
                                _this.loginComplete(r.text);
                            }
                            else {
                                _this.pop('what is  your phone number?', 'error');
                            }
                            // console.log("Dialog result: " + r.result + ", text: " + r.text);
                        });
                        _this.cd.detectChanges();
                    });
                }, 2000);
            }
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

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"Privacy Policy\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"type=='privacy'\"></Label>\n        <Label text=\"User Agreement\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"type!='privacy'\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,\" columns=\"*\">\n          <Label row=\"0\" *ngIf=\"type=='privacy'\" text=\"Grabbit.cheap ('Grabbit') is a service provided by ProducTanks LLC. We acknowledge and respect your personal privacy. This Privacy Policy describes all aspects relating to gathering information while you're visiting Grabbit. Please read this Privacy Policy before using the Grabbit app/website or submitting any personal information. By using the Grabbit app/website, you accept and consent to the practices described in this Privacy Policy. By your continued use you expressly consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy. If you do not agree with these practices you are free to discontinue your use of the Grabbit app/website at any time. If you have questions about our privacy policy, please email us at support@grabbit.cheap.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"1\" *ngIf=\"type=='privacy'\" text=\"You may visit Grabbit at any time without intentionally revealing any personal information about yourself. However, when you visit our website, we may collect and store your computer and connection information, statistics on page views, traffic to and from Grabbit, advertisement data, IP address and standard web log information and information from other companies, such as demographic and navigation data. For you to actively participate in Grabbit we do need some of your personal information. Once you provide us with your required personal information, you are no longer anonymous. In providing us with your personal information, you consent to the transfer and storage of such information on our servers. When you register on Grabbit, we will collect the following required information: email address, first and last name, date of birth, and password; all transactional information based on your activities on Grabbit; shipping, billing and other information relating to any purchase or shipping; any correspondence sent to us; financial information, such as your credit card information; and other supplemental information from third parties.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"2\" *ngIf=\"type=='privacy'\" text=\"Our purpose for collecting personal information is to provide you with a safe, efficient, and customized experience. By signing up, you agree that we may use your personal information to: provide the services and customer support you request; resolve disputes, collect fees, and troubleshoot problems; prevent potentially prohibited or illegal activities, and enforce our Terms & Conditions; customize, measure and improve our services, content and advertising; inform you about our services, targeted marketing, service updates, and promotions; and compare information and verify it with third parties for accuracy.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"3\"  *ngIf=\"type=='privacy'\" text=\"We may disclose personal information to respond to legal requirements, enforce our Terms & Conditions and Privacy Policy, respond to claims that a listing or other content violates the rights of others, or protect anyone's rights, property, or safety. This information will be disclosed under applicable laws and regulations.\nWe may also share your personal information with third parties assisting our business operations under contract, including but not limited to fraud investigations and debt collection, with law enforcement or other governmental officials if required by law, and with other business entities, should we plan to merge with or be acquired by that business entity.\nWe do not share your personal information with third party advertisers.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"4\" *ngIf=\"type=='privacy'\" text=\"Once you have been approved as a registered user with Grabbit, you will be required to choose a user name. This user name will be displayed throughout Grabbit and therefore provided to the public. If you win an auction, Grabbit will display the number of bids and dollar value of those bids when the auction ends. Unless you associate your user name with your personal information, other users will not be able to personally identify your activities on Grabbit. When visiting Grabbit from a public or shared computer, certain information about you, such as your user name, may also be visible to others who may use that computer after your use. It is your responsibility to ensure private information is removed from the public or shared computer should you choose to use one.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n          <Label row=\"5\" *ngIf=\"type=='privacy'\" text=\"Upon closing your account, Grabbit will remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law. We do retain personal information from closed accounts to comply with law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations, enforce our Terms & Conditions, and take other actions otherwise permitted by law.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"6\" *ngIf=\"type=='privacy'\" text=\"Your Grabbit account and profile and the information contained therein are password protected. Please note that you are not permitted to provide your password to anyone else. Grabbit will never ask for your password in e-mail or over the phone. Please remember to log out of your account and to close your Internet browser window when you leave the Grabbit site; this is especially important if you use a PC in public locations. We assume no liability for the abuse of login data and passwords used.\n\nGrabbit treats data as an asset that must be highly protected. We use security measures to protect your personal information against unauthorized access and disclosure. However, although we work very hard to protect your privacy, we do not promise, and you should not expect, that your personal information or private communications will always remain private.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n\n          <Label row=\"7\" *ngIf=\"type=='privacy'\" text=\"You can access, review and change most of your personal information by logging on to  at any time. However, some of your personal information can only be changed by contacting our Customer Service. Accurate information is required for billing and delivery purposes. You are required to promptly update your personal information if changes occur or information is inaccurate.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n\n          <Label row=\"8\" *ngIf=\"type!='privacy'\" text=\"Give us  a call 24/7 if you need help (415-509-4812)\" class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n        </GridLayout>\n\n          </StackLayout>\n    </GridLayout>\n  </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ "./legals/legals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalsComponent", function() { return LegalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");




var LegalsComponent = /** @class */ (function () {
    function LegalsComponent(zone, cd, location, router, route) {
        this.zone = zone;
        this.cd = cd;
        this.location = location;
        this.router = router;
        this.route = route;
    }
    LegalsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.type = _this.route.snapshot.params.type;
            _this.cd.detectChanges();
        });
    };
    LegalsComponent.prototype.goBack = function () {
        this.location.back();
    };
    LegalsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    LegalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Legals",
            template: __importDefault(__webpack_require__("./legals/legals.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./legals/legals.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LegalsComponent);
    return LegalsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
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
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        


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

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1","dependencies":{}};

/***/ }),

/***/ "./services/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameProvider", function() { return GameProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);




// const poster = axios.create();
// poster.defaults.headers.post['Content-Type'] = 'application/json';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GameProvider = /** @class */ (function () {
    function GameProvider(http) {
        this.http = http;
        this.serverUrl = "https://app.grabbit.cheap";
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
    GameProvider.prototype.reload = function (token, user, gID, type) {
        var DATA = {
            token: token,
            user: user,
            gID: gID,
            type: type
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/reload', DATA, httpOptions)
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
    GameProvider.prototype.login = function (number, device, lat, lng, countryCode) {
        var DATA = {
            number: number,
            device: device,
            lat: lat,
            lng: lng,
            countryCode: countryCode
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
    GameProvider.prototype.gCREATECOUPON = function (token, user, prizeType, gameTitle, maxPlayers, prize, prize2, price, total) {
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
    GameProvider.prototype.gCREATEBTC = function (token, user, gameTitle, prize, details, lat, lng) {
        var DATA = {
            user: user,
            token: token,
            gameTitle: gameTitle,
            prize: prize,
            details: details,
            lat: lat,
            lng: lng
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://app.grabbit.cheap/gCreateBTC', DATA, httpOptions)
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
    GameProvider.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return headers;
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
        console.error('error  is ' + JSON.stringify(errMsg));
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");


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



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2xlZ2Fscy9sZWdhbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9sZWdhbHMvbGVnYWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xlZ2Fscy9sZWdhbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLGlCQUFpQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsdURBQXVELHFCQUFxQixHQUFHLGNBQWMsZ0JBQWdCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxjQUFjLHNCQUFzQixHQUFHLFVBQVUscUNBQXFDLHVCQUF1QixjQUFjLG9CQUFvQixjQUFjLGlCQUFpQixVQUFVLHFDQUFxQyx1QkFBdUIsZ0JBQWdCLG9CQUFvQixPQUFPLFNBQVMscUNBQXFDLHVCQUF1QixnQkFBZ0Isb0JBQW9CLE9BQU8sV0FBVywwREFBMEQsY0FBYyxrQkFBa0IsRzs7Ozs7OztBQ0F0NUIsNnVEOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTZKO0FBRWxIO0FBUzNDO0lBRUUsd0JBQW9CLElBQVksRUFBVSxFQUFxQixFQUFVLFFBQWtCO1FBQXZFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFHM0YsQ0FBQztJQUVELHdDQUFlLEdBQWY7SUFHQSxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBWnlCLG9EQUFNO2dCQUFjLCtEQUFpQjtnQkFBb0Isd0RBQVE7O0lBRmhGLGNBQWM7UUFQMUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBRWpCLHNGQUFxQztZQUVy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QyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFaeUIsb0RBQU07Z0JBQWMsK0RBQWlCO2dCQUFvQix3REFBUTs7SUFIaEYsZ0JBQWdCO1FBUDVCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUVuQiwwRkFBdUM7WUFFdkMsZUFBZSxFQUFFLHFFQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBSTBCLG9EQUFNLEVBQWMsK0RBQWlCLEVBQW9CLHdEQUFRO09BSGhGLGdCQUFnQixDQWdCNUI7SUFBRCx1QkFBQztDQUFBO0FBaEI0QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdhbWVJbWFnZSB7XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XFxufVxcblxcbi50ZXh0Qm9sZHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JhYntcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyNTIyMjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjp3aGl0ZTtcXG5mb250LXdlaWdodDogYm9sZDtcXG53aWR0aDoxMDBweDtcXG5oZWlnaHQ6MjAwcHhcXG59XFxuXFxuLnNsYXB7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6I0YyRjAyMjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLnNuZWFre1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiMyMkYyMjc7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5hdmF0YXJze1xcbiAgLyogdXNlcjogKi9cXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApO1xcbmhlaWdodDphdXRvO1xcbndpZHRoOjIwMHB4XFxuXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBYm91dCBVc1xcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjJcXFwiPlxcblxcbiAgICAgICAgPENhcmRWaWV3ICBjbGFzcz1cXFwicC10LTIwXFxcIj5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJHcmFiYml0IGlzIGEgIGZ1biwgZmFzdCBwYWNlZCBkYWlseSBkZWFscyBhdWN0aW9uLiBTbGFwLCBTbmVhayAmIEdyYWIgeW91ciB3YXkgdG8gYXdlc29tZSBwcml6ZXMuIENvbXBldGUgYWdhaW5zdCBnbG9iYWwgcGxheWVycyBmb3IgYml0Y29pbiBhbmQgb3RoZXIgaW5zdGFudGx5IGRlbGl2ZXJlZCBjcnlwdG8gcHJpemVzLCBvciB0YWtlIG9uIGxvY2FscyBmb3IgY291cG9ucyB0byB5b3VyIGZhdm9yaXRlIHJlc3RhdXJhbnRzIGFuZCBsb2NhbCBleHBlcmllbmNlcy5cXFwiIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE1XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJHcmFiYml0IHNvbHZlcyB0aGUgcHJvYmxlbSBvZiBib3JpbmcgcmFmZmxlcyBhbmQgbG9jYWwgcHJpemUgZW5nYWdlbWVudC4gRXZlcnlkYXksIGRvemVucyBvZiBidXNpbmVzc2VzIGluIHlvdXIgYXJlYSBhcmUgb2ZmZXJpbmcgY291cG9ucyBhbmQgZGlzY291bnRzLiBVbmxpa2UgR3JvdXBvbiwgR3JhYmJpdCdzIGF1Y3Rpb24gZm9ybWF0IHJlcXVpcmVzIHVzZXJzIHBheSBub3RoaW5nIGZvciBhbWF6aW5nIGRpc2NvdW50cy5cXFwiIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE1XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCdXNpbmVzc2VzIHdhbnQgZm9vdCB0cmFmZmljLCBiYXJnaW4gc2hvcHBlcnMgd2FudCBncmVhdCBkaXNjb3VudHMgYW5kIGFuIGVhc3kgMjQvNyB3YXkgdG8gZ2V0IHRoZW0uIEdyYWJiaXQgaXMgZnVuIGZvciB0aGUgdHJhaW4gcmlkZSBob21lIGZyb20gd29yayBvciBzY2hvb2wsICBvciBhIGxhdGUgbmlnaHQgYmluZ2Ugd2F0Y2ggYnJlYWsuXFxcIiBjbGFzcz1cXFwiaDMgcC0xMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgIDwvQ2FyZFZpZXc+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkFib3V0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Fib3V0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuXG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1idXNpbmVzcy9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50XCJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCJcbmltcG9ydCB7IFN1cHBvcnRDb21wb25lbnQgfSBmcm9tIFwiLi9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50XCJcbmltcG9ydCB7IExlZ2Fsc0NvbXBvbmVudCB9IGZyb20gXCIuL2xlZ2Fscy9sZWdhbHMuY29tcG9uZW50XCJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIi4vaG9tZS9ob21lLm1vZHVsZVwiKS50aGVuKG0gPT4gbS5Ib21lTW9kdWxlKSB9LFxuICB7IHBhdGg6IFwiYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiY3JlYXRlLzp0eXBlXCIsIGNvbXBvbmVudDogQ3JlYXRlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJjcmVhdGUtYnVzaW5lc3NcIiwgY29tcG9uZW50OiBDcmVhdGVCdXNpbmVzc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwic3VwcG9ydFwiLCBjb21wb25lbnQ6IFN1cHBvcnRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcImxlZ2Fscy86dHlwZVwiLCBjb21wb25lbnQ6IExlZ2Fsc0NvbXBvbmVudCB9XG5cbl07XG5cbi8vIGV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4vLyAgIEFib3V0Q29tcG9uZW50LFxuLy8gXTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9keVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7IC8vIHVzZWQgdG8gZGVzY3JpYmUgYXQgd2hhdCBhY2N1cmFjeSB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIGdldFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50XCJcbmltcG9ydCB7IENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWJ1c2luZXNzL2NyZWF0ZS1idXNpbmVzcy5jb21wb25lbnRcIlxuaW1wb3J0IHsgU3VwcG9ydENvbXBvbmVudCB9IGZyb20gXCIuL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTGVnYWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vbGVnYWxzL2xlZ2Fscy5jb21wb25lbnRcIlxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgIENyZWF0ZUJ1c2luZXNzQ29tcG9uZW50LFxuICAgIFN1cHBvcnRDb21wb25lbnQsXG4gICAgTGVnYWxzQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XFxuICAgIG1hcmdpbjogMTUgMCAwIDE1O1xcbn1cXG5cXG5UZXh0VmlldyB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjM2U5ZWRiO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJhdGUge1xcbiAgICBwYWRkaW5nLXRvcDogMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogI0ZGRTkwMDtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLnJhdGluZy12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG5cXG4ubGlrZWQtYWN0aXZlIHtcXG4gICAgY29sb3I6ICM0MDgwRkY7XFxufVxcblxcbi5oZWFydC1hY3RpdmUge1xcbiAgICBjb2xvcjogI2I1MTIxMztcXG59XFxuXFxuLmRlZmF1bHQge1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG59XFxuXFxuLmxheW91dCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBoZWlnaHQ6IDMwO1xcbiAgICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG5cXG4ubGlrZS1pY29uIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzMDtcXG4gICAgZm9udC1zaXplOiAxNjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWNhdGVnb3J5IHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jYXRlZ29yeS1pY29uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiA0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG5cXG4uY2FyZC1pbWctdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1O1xcbiAgICB3aWR0aDogMTMwO1xcbiAgICBoZWlnaHQ6IDcwO1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBoZWlnaHQ6IDAuNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2UwZTBlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmxpbmVCcmVhayB7XFxuICAgIGhlaWdodDogMC41O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTBlMGUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYW5pbS1wYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktcGFnZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICAgIH1cXG5cXG4gICAgMjAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1jb3ZlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXI7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktY292ZXIge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0taW1hZ2VzIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcblxcbi5hbmltLWl0ZW1JbmZvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mbztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mbyB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcbn1cXG5cXG4uYW5pbS1saWtlcyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBrZXktbGlrZXMge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxuICAgIH1cXG59XFxuXFxuLmFuaW0tY29udGVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbiAgICB9XFxufVxcbi5waWNrZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjA7XFxuICAgIGJvcmRlci13aWR0aDogMjtcXG4gICAgd2lkdGg6IDIwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwiYXNrQml6XFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImFuaW0tY292ZXJcXFwiIHJvd3M9XFxcImF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHlvdXIgYnVzaW5lc3MgcHJvZmlsZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInVzZSB5b3VyIHllbHAgaWRcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPEltYWdlXFxuICAgICAgICAgICAgW3NyY109XFxcInllbHBJbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgIHdpZHRoPVxcXCI3MiVcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJnZXQgYml6IGluZm9cXFwiICh0YXApPVxcXCJvblllbHAoKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwic2hvd0JpelxcXCI+XFxuXFxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWNvdmVyXFxcIiByb3dzPVxcXCJhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIG1hcmdpblRvcD1cXFwiLTQwXFxcIiBoZWlnaHQ9XFxcIjE4MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY2FyZC1pbWdcXFwiIFtzcmNdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5pbWFnZXNbMF0udXJsXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJhbmltLWl0ZW1JbmZvIHAtbC00XFxcIiBtYXJnaW5Ub3A9XFxcIjE1XFxcIiByb3c9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCpcXFwiIHJvd3M9XFxcIiosKiwqLCosKiwqXFxcIlxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVpbMF0ucHJvZmlsZVswXS5uYW1lICB8fCAnYnVzaW5lc3MgY2F0ZWdvcnknfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0uYWRkcmVzcyAgfHwgJ2J1c2luZXNzIGFkZHJlc3MnfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcInt7QklaWzBdLnByb2ZpbGVbMF0ucGhvbmUgIHx8ICdidXNpbmVzcyBwaG9uZSd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiaXRlbS1jYXRlZ29yeVxcXCIgdGV4dD1cXFwie3tCSVpbMF0ucHJvZmlsZVswXS5lbWFpbCAgfHwgJ25vIGVtYWlsJ319XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiAqbmdJZj1cXFwiQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQ8MVxcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIml0ZW0tY2F0ZWdvcnlcXFwiIHRleHQ9XFxcIndlJ2xsIGNhbGwgeW91ciBidXNpbmVzcywgZW50ZXIgdGhlIGNvZGUgeW91IHJlY2VpdmUgdG8gdmVyaWZ5IHRoaXMgYnVzaW5lc3NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ2ZXJpZnkgYml6XFxcIiAodGFwKT1cXFwidllFTFAoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuPC9TdGFja0xheW91dD5cXG5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW5cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICpuZ0lmPVxcXCJzaG93Qml6Rm9ybVxcXCI+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGluZyB5b3VyIGJ1c2luZXNzIHByb2ZpbGVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCI+XFxuICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICA8TGlzdFBpY2tlciAgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJiaXpUeXBlXFxcIiBzZWxlY3RlZEluZGV4PVxcXCIwXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KVxcXCI+PC9MaXN0UGlja2VyPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJOYW1lXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYml6TmFtZVxcXCIgaGludD1cXFwiYnVzaW5lc3MgbmFtZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiQWRkcmVzc1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZHJlc3NcXFwiIGhpbnQ9XFxcImJ1c2luZXNzIGFkZHJlcnNzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInBob25lXFxcIiBoaW50PVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiRW1haWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBlbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiU3RvcnlcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJzdG9yeVxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBzdG9yeVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcImdTQVZFKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIgKm5nSWY9XFxcInN0b3J5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiICpuZ0lmPVxcXCJiVHlwZT09J3NleCdcXFwiPlxcbiAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sIGF1dG9cXFwiPlxcbiAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaW1hZ2VBc3NldHNcXFwiICpuZ0lmPVxcXCJpbWFnZUFzc2V0cyAmJiBpbWFnZUFzc2V0cy5sZW5ndGg+MFxcXCI+XFxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWltYWdlPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt3aWR0aF09XFxcInRodW1iU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWlnaHRdPVxcXCJ0aHVtYlNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cXFwiaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIFt0ZXh0XT1cXFwiJ2ltYWdlICcgKyBpXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJzYXZlXFxcIiAodGFwKT1cXFwic2F2ZSgpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCI+PC9CdXR0b24+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9HcmlkTGF5b3V0PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbnZhciBGaWxlU3lzdGVtID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xudmFyIEJhY2tncm91bmRIdHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgTUQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQ3JlYXRlXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJ1c2luZXNzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYnVzaW5lc3MuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnVzaW5lc3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBfY3JlYXRlOiBGb3JtR3JvdXBcbiAgJGdhbWU6IGFueVxuXG4gIHB1YmxpYyBiaXpUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydyZXN0YXVyYW50JywgJ3JldGFpbCcsICdzcGEnLCAnYmFyJywgJ2NhZmUnLCAnZm9vZCB0cnVjaycsICd0b3VyaXNtJywgJ3NhbG9uJywgJ2hhaXIgc3R5bGlzdCcsICd3ZWJzaXRlJ107XG4gIGJpek5hbWU6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgcGhvbmU6IHN0cmluZ1xuICBzdG9yeTogc3RyaW5nXG4gIGJUeXBlOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwdWJsaWMgaW1hZ2VzOiBBcnJheTxzdHJpbmc+O1xuXG4gIHRva2VuOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHVzZXI6IHN0cmluZ1xuICBhdmF0YXI6IHN0cmluZ1xuICBsYXQ6IGFueVxuICBsbmc6IGFueVxuXG4gIHNob3dCaXpGb3JtOiBib29sZWFuXG4gIHNob3dCaXo6IGJvb2xlYW5cbiAgYXNrQml6OiBib29sZWFuXG4gIHNob3dWZXJpZnk6IGJvb2xlYW5cblxuICBCSVo6IGFueVxuICBVU0VSOiBhbnlcbiAgaW1hZ2UgPSBcImh0dHA6Ly9jZG4uY25uLmNvbS9jbm5uZXh0L2RhbS9hc3NldHMvMTkwNzEwMTM1MjQ1LTEyLXdhdGVyZnJvbnQtcmVzdGF1cmFudHMuanBnXCJcbiAgeWVscEltYWdlID0gXCJodHRwczovL2kuaW1ndXIuY29tL2hQOUdQcDMucG5nXCJcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgKSB7XG5cbiAgICB0aGlzLmltYWdlcyA9IFtdXG4gICAgdGhpcy4kZ2FtZSA9IF9nYW1lXG4gICAgdGhpcy5zaG93Qml6ID0gZmFsc2VcbiAgICB0aGlzLnNob3dWZXJpZnkgPSBmYWxzZVxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3Rva2VuJylcbiAgICAgIHRoaXMubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ25hbWUnKVxuICAgICAgdGhpcy51c2VyID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndXNlcicpXG4gICAgICB0aGlzLmxhdCA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xhdCcpXG4gICAgICB0aGlzLmxuZyA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ2xuZycpXG5cbiAgICAgIHRoaXMuc2hvd0JpekZvcm0gPSBmYWxzZVxuICAgICAgdGhpcy5nVVNFUigpXG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlciBhbmQgYml6XCIpXG4gICAgdGhpcy4kZ2FtZS5nVVNFUih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaSkgPT4ge1xuXG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5VU0VSID0gam9yZGkucGF5bG9hZFswXVxuXG4gICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFsxXVxuICAgICAgICAgICAgICBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoID4gMCAmJiB0aGlzLkJJWlswXS5wcm9maWxlWzBdLnZlcmlmaWVkIDwgMSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0JpeiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPiAwICYmIHRoaXMuQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQgPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWZXJpZnkgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0JpeiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IGZhbHNlXG5cblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA8IDEpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Qml6ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFza0JpeiA9IHRydWVcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coam9yZGkucGF5bG9hZClcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5CSVopXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5CSVogPSBbXVxuICAgICAgICAgICAgdGhpcy5VU0VSID0gW11cbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICB9KTtcbiAgfVxuXG4gIG9uWWVscCgpIHtcblxuXG4gICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgdGl0bGU6IFwiWWVscFwiLFxuICAgICAgbWVzc2FnZTogXCJlbnRlciB5ZWxwIGlkXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiZ2V0IHllbHBcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICBpZiAoci50ZXh0KSB7XG5cbiAgICAgICAgdGhpcy5iWUVMUChyLnRleHQpXG4gICAgICAgIC8vIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMucG9wKCdlbnRlciB5ZWxwIGlkPycsICdlcnJvcicpXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGJZRUxQKHllbHA6IGFueSkge1xuXG4gICAgdGhpcy4kZ2FtZS5iWUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZywgeWVscClcbiAgICAgIC5zdWJzY3JpYmUoKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coam9yZGkpXG4gICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkXG4gICAgICAgICAgICB0aGlzLnNob3dCaXogPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgIH1cclxuICAgICAgfSlcbiAgfVxuXG4gIHZZRUxQKHllbHA6IGFueSkge1xuXG4gICAgdGhpcy4kZ2FtZS52WUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIG51bGwpXG4gICAgICAuc3Vic2NyaWJlKChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJWZXJpZnkgQnVzaW5lc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJlbnRlciB2ZXJpZmljYXRpb24gY29kZVwiLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FtZS52WUVMUCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHIudGV4dClcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3AoJ2VudGVyIHZlcmlmaWNhdGlvbiBjb2RlJywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICAvLyBnU0FWRSgpIHtcbiAgLy9cbiAgLy8gICBpZiAoIXRoaXMuYml6TmFtZSkge1xuICAvLyAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzICBuYW1lP1wiLCBcImVycm9yXCIpXG4gIC8vICAgfSBlbHNlIGlmICghdGhpcy5hZGRyZXNzKSB7XG4gIC8vICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgYWRkcmVzcz9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMucGhvbmUpIHtcbiAgLy8gICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBwaG9uZT9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSBpZiAoIXRoaXMuc3RvcnkpIHtcbiAgLy8gICAgIHRoaXMucG9wKFwid2hhdHMgeW91ciBidXNpbmVzcyBzdG9yeT9cIiwgXCJlcnJvclwiKVxuICAvL1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vXG4gIC8vICAgICB0aGlzLiRnYW1lLmJpelNBVkUodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmJpek5hbWUsIHRoaXMuYWRkcmVzcywgdGhpcy5waG9uZSwgdGhpcy5zdG9yeSwgdGhpcy5lbWFpbCwgdGhpcy5iVHlwZSwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAvLyAgICAgICAuc3Vic2NyaWJlKFxuICAvLyAgICAgICAgIChqb3JkaSkgPT4ge1xuICAvLyAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgLy9cbiAgLy8gICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gIC8vXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzBdXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJzdWNjZXNzXCIpXG4gIC8vXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIC8vXG4gIC8vICAgICAgICAgICAgIH0pXG4gIC8vXG4gIC8vICAgICAgICAgICAgIHRoaXMuQklaID0gam9yZGkucGF5bG9hZFswXVxuICAvLyAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcbiAgLy9cbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcbiAgLy9cbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9KVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gfVxuICAvL1xuICAvLyBwdWJsaWMgdGFrZVBpY3R1cmUoKSB7XG4gIC8vXG4gIC8vICAgQ2FtZXJhLnRha2VQaWN0dXJlKHsgc2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4oKHBpY3R1cmU6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IGZvbGRlciA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAvLyAgICAgbGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgTUQ1KG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xuICAvLyAgICAgcGljdHVyZS5zYXZlVG9GaWxlKHBhdGgsIEltYWdlRm9ybWF0LnBuZywgNjApO1xuICAvLyAgICAgdGhpcy51cGxvYWQoXCJodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3VwbG9hZFwiLCBcInVwbG9hZFwiLCBwYXRoKVxuICAvLyAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gIC8vICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gIC8vICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHBhdGgucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSwgZXJyb3IgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcHVibGljIHVwbG9hZChkZXN0aW5hdGlvbjogc3RyaW5nLCBmaWxldmFyOiBzdHJpbmcsIGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgLy8gICAgIGxldCBzZXNzaW9uID0gQmFja2dyb3VuZEh0dHAuc2Vzc2lvbihcImZpbGUtdXBsb2FkXCIpO1xuICAvLyAgICAgbGV0IHJlcXVlc3QgPSB7XG4gIC8vICAgICAgIHVybDogZGVzdGluYXRpb24sXG4gIC8vICAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgLy8gICAgIH07XG4gIC8vICAgICBsZXQgcGFyYW1zID0gW3sgXCJuYW1lXCI6IGZpbGV2YXIsIFwiZmlsZW5hbWVcIjogZmlsZXBhdGgsIFwibWltZVR5cGVcIjogXCJpbWFnZS9wbmdcIiB9XTtcbiAgLy8gICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgLy8gICAgIHRhc2sub24oXCJjb21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcbiAgLy8gICAgICAgbGV0IGZpbGUgPSBGaWxlU3lzdGVtLkZpbGUuZnJvbVBhdGgoZmlsZXBhdGgpO1xuICAvLyAgICAgICBmaWxlLnJlbW92ZSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgLy8gICAgICAgICBvYnNlcnZlci5uZXh0KFwiVXBsb2FkZWQgYFwiICsgZmlsZXBhdGggKyBcImBcIik7XG4gIC8vICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgLy8gICAgICAgfSwgZXJyb3IgPT4ge1xuICAvLyAgICAgICAgIG9ic2VydmVyLmVycm9yKFwiQ291bGQgbm90IGRlbGV0ZSBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRhc2sub24oXCJlcnJvclwiLCBldmVudCA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgLy8gICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgdXBsb2FkIGBcIiArIGZpbGVwYXRoICsgXCJgLiBcIiArIGV2ZW50LmV2ZW50TmFtZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBwdWJsaWMgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgLy8gICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgLy8gICB0aGlzLmJUeXBlID0gdGhpcy5iaXpUeXBlW3BpY2tlci5zZWxlY3RlZEluZGV4XVxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYlR5cGUpO1xuICAvLyB9XG5cbiAgcG9wKG1lc3NhZ2U6IGFueSwgdHlwZTogYW55KSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0eXBlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJhY2UgY2hvc2VuIVwiKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKSB7XG5cbiAgICB0aGlzLl9jcmVhdGUgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgaGFzaHRhZ3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXRhaWxzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2F0ZWdvcnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblxuICAgIH0pO1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuLmZhLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgJ2ZhLXNvbGlkLTkwMCc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZ2FtZUltYWdlIHtcXG4gICAgd2lkdGg6MjUlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MDBweDtcXG59XFxuXFxuLnRleHRCb2xke1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmFie1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjI1MjIyO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOndoaXRlO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbndpZHRoOjEwMHB4O1xcbmhlaWdodDoyMDBweFxcbn1cXG5cXG4uc2xhcHtcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojRjJGMDIyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uc25lYWt7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6IzIyRjIyNztcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLmF2YXRhcnN7XFxuICAvKiB1c2VyOiAqL1xcbmJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC41MCk7XFxuaGVpZ2h0OmF1dG87XFxud2lkdGg6MjAwcHhcXG5cXG59XFxuLmNhcmRTdHlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzMDtcXG59XFxuLnBpY2tlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgICB3aWR0aDogMjAwO1xcbiAgICBoZWlnaHQ6IDEwMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JhYmJpdFxcXCIgY2xhc3M9XFxcImgxXFxcIj5cXG5cXG48L0FjdGlvbkJhcj5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCJzaG93Qml6Rm9ybVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjcmVhdGUgeW91ciBidXNpbmVzcyBwcm9maWxlXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqXFxcIiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuXFxuICAgICAgICAgIDxMaXN0UGlja2VyICByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFtpdGVtc109XFxcImJpelR5cGVcXFwiIHNlbGVjdGVkSW5kZXg9XFxcIjBcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj48L0xpc3RQaWNrZXI+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiTmFtZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiYml6TmFtZVxcXCIgaGludD1cXFwiYnVzaW5lc3MgbmFtZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGRyZXNzXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiBoaW50PVxcXCJidXNpbmVzcyBhZGRyZXJzc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwicGhvbmVcXFwiIGhpbnQ9XFxcInBob25lXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkVtYWlsXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAqbmdJZj1cXFwiYlR5cGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJlbWFpbFxcXCIgaGludD1cXFwieW91ciBidXNpbmVzcyBlbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJTdG9yeVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgKm5nSWY9XFxcImJUeXBlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwic3RvcnlcXFwiIGhpbnQ9XFxcInlvdXIgYnVzaW5lc3Mgc3RvcnlcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiICpuZ0lmPVxcXCJiVHlwZVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxCdXR0b24gcm93PVxcXCI2XFxcIiBjb2xTcGFuPTIgdGV4dD1cXFwic2F2ZVxcXCIgKHRhcCk9XFxcImdTQVZFKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeVxcXCIgKm5nSWY9XFxcInN0b3J5XFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiICpuZ0lmPVxcXCJzaG93R2FtZUZvcm1cXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRpbmcge3twcml6ZVR5cGV9fSBnYW1lIGZvclxcXCIgY2xhc3M9XFxcImg0IHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIkJJWlswXS5wcm9maWxlWzBdLm5hbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5hZGRyZXNzXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJCSVpbMF0ucHJvZmlsZVswXS5waG9uZVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyICBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosICosICosICosICosKiwqXFxcIiBjb2x1bW5zPVxcXCI4MCwgKiwgODBcXFwiIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImdhbWVUaXRsZVxcXCIgaGludD1cXFwiZ2FtZSB0aXRsZVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIG1heExlbmd0aD1cXFwiMjRcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwibWF4UGxheWVyc1xcXCIgaGludD1cXFwibWF4IHBsYXllcnNcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgbWF4TGVuZ3RoPVxcXCIyXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcInByaXplXFxcIiBoaW50PVxcXCJ3aW5uZXIgZ2V0cyBhIDI1JSBvZmYgY291cG9uXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgbWF4TGVuZ3RoPVxcXCI0NVxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcml6ZTJcXFwiIGhpbnQ9XFxcIm5vbmUgd2lubmVycyBnZXQgYSAxMCUgb2ZmIGNvdXBvblxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIG1heExlbmd0aD1cXFwiNDVcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdldmVyeW9uZSB3aW5zJ1xcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI0XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcmljZVxcXCIgaGludD1cXFwiYnV5ICQzMCBpdGVtXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgIG1heExlbmd0aD1cXFwiMjRcXFwiICpuZ0lmPVxcXCJwcml6ZVR5cGU9PSdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJ1xcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJkZXRhaWxzXFxcIiBoaW50PVxcXCJwcml6ZSBkZXRhaWxzXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgIG1heExlbmd0aD1cXFwiMTUwXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjZcXFwiIGNvbD0nMScgdGV4dD1cXFwiY3JlYXRlIGxvY2FsIGdhbWVcXFwiICh0YXApPVxcXCJnQ3JlYXRlQ291cG9uKClcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSBwLWItMjBcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCI0XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInRvdGFsIFVTRDogJHt7bWF4UGxheWVycypwbGF5ZXJGZWUgfHwgMCB8IG51bWJlciA6ICcxLjItMid9fVxcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMSBidGMgPSAke3tidGNfdmFsdWV9fVxcXCIgY2xhc3M9XFxcImg0IHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2lubmVyKHMpIG11c3QgcmVkZWVtIGNvdXBvbiB3aXRoaW4gNzIgIGhvdXJzXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJJZiBsZXNzIHRoYW4gdGhlIG1heCBudW1iZXIgb2YgcGxheWVycyBwbGF5IHlvdXIgZ2FtZSwgdGhlIGRpZmZlcmVuY2Ugd2lsbCBiZSByZXR1cm5lZCB0byB5b3VyIHdhbGxldFxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0xMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjIxXFxcIj48L0xhYmVsPlxcblxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvR3JpZExheW91dD5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgKm5nSWY9XFxcIiFzaG93Qml6Rm9ybVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcImNyZWF0ZSB7e3R5cGV9fSBnYW1lXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiY3JlYXRlIHt7dHlwZX19IGdhbWVcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCIxXFxcIiAqbmdJZj1cXFwidHlwZT09J2NvdXBvbidcXFwiPlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKiwqLCosKiwqLCosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR3JhYmJpdCBpcyBhbiBhd2Vzb21lIHdheSB0byBlbmdhZ2UgbG9jYWxzIHdpdGggZGVhbHMgYW5kIGRpc2NvdW50cy4gSXQgY29zdHMgYXMgbGl0dGxlIGFzICQwLjY1IHBlciBwbGF5ZXIgY29tcGV0aW5nIGZvciB5b3VyIGNvdXBvbi4gR2FtZXMgYXJlIGdlbyBmZW5jZWQgdG8gbG9jYWxzIHdpdGhpbiAxMCBtaWxlcy4gTG9jYWxzIHBsYXkgRlJFRSB0byB3aW4geW91ciBjb3Vwb25cXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMjAgdGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PScxMic+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdhbWUgVHlwZXNcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiMlxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIjEgV2lubmVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwib25seSBvbmUgcGxheWVyIHdpbnNcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDAuNjUgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnMSB3aW5uZXInKVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IC1yb3VuZGVkLWxnXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiM1xcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkV2ZXJ5b25lIFdpbnNcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgZ2V0cyBhIDUwJSBvZmYgY291cG9uLCBhbGwgb3RoZXIgcGxheWVycyBnZXQgYSAxNSUgb2ZmIGNvdXBvbiAoZXhhbXBsZSlcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJDEuNzUgcGVyIHBsYXllclxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJjcmVhdGVcXFwiICh0YXApPVxcXCJvbkNyZWF0ZSgnZXZlcnlvbmUgd2lucycpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI0XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2lubmVyIE11c3QgQnJpbmcgQSBGcmllbmRcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgbXVzdCBicmluZyBhIGZyaWVuZCB0byByZWRlZW0gdGhlIGNvdXBvblxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCd3aW5uZXIgbXVzdCBicmluZyBhIGZyaWVuZCcpXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgLXJvdW5kZWQtbGdcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI1XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRnJlZSBpdGVtIHdpdGggcHVyY2hhc2VcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aW5uZXIgZ2V0cyBhIGZyZWUgaXRlbSwgd2l0aCBwdXJjaGFzZVxcXCIgY2xhc3M9XFxcIm0tYi0xMCBoM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIkMSBwZXIgcGxheWVyXFxcIiBjbGFzcz1cXFwibS1iLTEwIGgzXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcImNyZWF0ZVxcXCIgKHRhcCk9XFxcIm9uQ3JlYXRlKCdmcmVlIGl0ZW0gIHdpdGggIHB1cmNoYXNlJylcXFwiIGNsYXNzPVxcXCItcHJpbWFyeSAtcm91bmRlZC1sZ1xcXCI+PC9CdXR0b24+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93PVxcXCI2XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGMUYxRjFcXFwiPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGQVEnc1xcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMCBwLWItMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yMFxcXCIgcm93PVxcXCI3XFxcIj5cXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXhwbGFpbiBwZXIgcGxheWVyIHByaWNpbmdcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3aGVuIGNyZWF0aW5nIHlvdXIgZ2FtZSwgeW91IGNob29zZSB0aGUgbWF4IG51bWJlciBvZiBwbGF5ZXJzIGZvciB5b3VyIGdhbWUuIElmIHlvdSBjaG9vc2UgMTAgbWF4IHBsYXllcnMgZm9yIGEgMSB3aW5uZXIgZ2FtZSwgaXQgd2lsbCBjb3N0ICQ2LjUwXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJpZiBsZXNzIHRoYW4gMTAgcGxheWVycyBqb2luIHRoZSBnYW1lLCB0aGUgZGlmZmVyZW5jZSB3aWxsIGJlIHJldHVybmVkIHRvIHlvdXIgYml0Y29pbiB3YWxsZXRcXFwiIGNsYXNzPVxcXCJtLWItMTAgaDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxMlxcXCIgLz5cXG5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiIHJvdz1cXFwiOFxcXCI+XFxuICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldoYXRzIHRoZSBpbmNlbnRpdmUgZm9yIHBsYXllcnMgdG8gcmVkZWVtIHRoZWlyIGNvdXBvbnM/XFxcIiBjbGFzcz1cXFwibS1iLTEwIGgyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlBsYXllcnMgYXJlIHJld2FyZGVkIHdoZW4gdGhleSByZWRlZW0gdGhlaXIgY291cG9ucywgZnJvbSByZXdhcmQgcG9pbnRzIHRvIGZyZWUgdG9vbHMgYW5kIHRvIG90aGVyIHBlcmtzLiBQbGF5ZXJzIG1heSBhbHNvIGJlIHBlbmFsaXplZCBmb3Igbm90IHJlZGVlbWluZyB0aGVpciB3aW5zXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIiByb3c9XFxcIjlcXFwiPlxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDYW4gSSBleHRlbmQgdGhlIGxvY2FsIHJhZGl1cyB0byAyMCBtaWxlcz9cXFwiIGNsYXNzPVxcXCJtLWItMTAgaDJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiWWVzLCB3aXRoIGEgcHJlbWl1bSBmZWF0dXJlXFxcIiBjbGFzcz1cXFwibS1iLTIwIGgzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTJcXFwiIC8+XFxuXFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMVxcXCIgKm5nSWY9XFxcInR5cGU9PSdiaXRjb2luJ1xcXCI+XFxuXFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiPlxcblxcbiAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgKiwgKiwgKiwgKiwqLCpcXFwiIGNvbHVtbnM9XFxcIjgwLCAqLCA4MFxcXCIgY2xhc3M9XFxcImZvcm1cXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZ2FtZVRpdGxlXFxcIiBoaW50PVxcXCJnYW1lIHRpdGxlXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyIHAtdC0yMFxcXCIgbWF4TGVuZ3RoPVxcXCIyNFxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJwcml6ZVxcXCIgaGludD1cXFwicHJpemUgaW4gYnRjICguMDAxKVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIiBtYXhMZW5ndGg9XFxcIjZcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGV0YWlsc1xcXCIgaGludD1cXFwicHJpemUgZGV0YWlsc1xcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlciBwLXQtMjBcXFwiICBtYXhMZW5ndGg9XFxcIjE1MFxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIFsobmdNb2RlbCldPVxcXCJnYW1lTGF0XFxcIiBoaW50PVxcXCJnZW8gZmVuY2UgdG8gbGF0aXR1ZGVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiAgbWF4TGVuZ3RoPVxcXCIxNTBcXFwiICpuZ0lmPVxcXCJhZG1pbj4wXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMVxcXCIgWyhuZ01vZGVsKV09XFxcImdhbWVMbmdcXFwiIGhpbnQ9XFxcImdlbyBmZW5jZSB0byBsb25naXR1ZGVcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXIgcC10LTIwXFxcIiAgbWF4TGVuZ3RoPVxcXCIxNTBcXFwiICpuZ0lmPVxcXCJhZG1pbj4wXFxcIj48L1RleHRGaWVsZD5cXG5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjVcXFwiIGNvbD0nMScgdGV4dD1cXFwiY3JlYXRlIGJpdGNvaW4gZ2FtZVxcXCIgKHRhcCk9XFxcImdDcmVhdGVCVEMoKVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5IHAtYi0yMFxcXCIgKm5nSWY9XFxcInVzZXJcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cXFwiNVxcXCIgY29sPScxJyB0ZXh0PVxcXCJsb2dpbi9zaWdudXBcXFwiICh0YXApPVxcXCJsb2dpbigpXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiBjbGFzcz1cXFwiLXByaW1hcnkgcC1iLTIwXFxcIiAqbmdJZj1cXFwiIXVzZXJcXFwiPjwvQnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInByaXplIHZhbHVlOiAke3tidGNfdmFsdWUqcHJpemUgfHwgMCB8IG51bWJlciA6ICcxLjItMid9fVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiICpuZ0lmPVxcXCJ1c2VyXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3cgVGhpcyB3b3Jrc1xcXCIgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIHAtdC0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldoZW4geW91IGNyZWF0ZSBhIGJpdGNvaW4gZ2FtZSwgeW91IGFyZSBvZmZlcmluZyAkNSBpbiBiaXRjb2luIChmb3IgZXhhbXBsZSkgYXMgYSBwcml6ZSB1cCBmb3IgZ3JhYnMuIFlvdXIgZ2FtZSB3aWxsIHJlcXVpcmUgYSBtaW5pbXVtIG9mIDEwIHBsYXllcnMsIHdpdGggYSBwbGF5IGZlZSBvZiAyIGdyYWJzIChvciAkMC41MCkuIExpa2UgaW5zZXJ0aW5nIHF1YXJ0ZXJzIGludG8gYW4gYXJjYWRlLiBQbGF5ZXJzIGdldCB4IG51bWJlciBvZiBmcmVlIGdyYWJzLCBzbGFwcyBhbmQgc25lYWtzIHRvIHBsYXlcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxOFxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMTAgeCAgJDAuNTAgY292ZXJzIHlvdXIgJDUgaW4gYml0Y29pbi4gSWYgMjAgcGxheWVycyBqb2luIHRoZSBnYW1lLCAgdGhlcmUncyBhbiBvdmVyYWdlIG9mICQ1LiA3NSUgb2YgdGhhdCBpcyB5b3Vycy4gXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMThcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIklmIHlvdXIgZ2FtZSBpcyBub3Qgc3VjY2Vzc2Z1bCwgY2FuY2VsIGl0IGFuZCB5b3VyIGJpdGNvaW5zIGFyZSBzZW50IGJhY2sgdG8geW91ciB3YWxsZXQuXFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMThcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIm1heCBwbGF5ZXJzIDI1LCBtYXggcHJpemUgYW1vdW50ICQyNVxcXCIgY2xhc3M9XFxcImgzIHRleHQtY2VudGVyIHAtdC0xMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE4XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gIDwvR3JpZExheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0IH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbnZhciBGaWxlU3lzdGVtID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xudmFyIEJhY2tncm91bmRIdHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgTUQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgZ2V0VVVJRCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11dWlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkNyZWF0ZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIF9jcmVhdGU6IEZvcm1Hcm91cFxuICBwdWJsaWMgYml6VHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncmVzdGF1cmFudCcsICdyZXRhaWwnLCAnc3BhJywgJ2JhcicsICdjYWZlJywgJ2Zvb2QgdHJ1Y2snLCAndG91cmlzbScsICdzYWxvbicsICdoYWlyIHN0eWxpc3QnLCAnd2Vic2l0ZSddO1xuICBiaXpOYW1lOiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIHBob25lOiBzdHJpbmdcbiAgc3Rvcnk6IHN0cmluZ1xuICBiVHlwZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcHVibGljIGltYWdlczogQXJyYXk8c3RyaW5nPjtcbiAgbG9jYXRpb25zID0gW107XG5cbiAgZ2FtZVRpdGxlOiBzdHJpbmdcbiAgbWF4UGxheWVyczogYW55XG4gIHByaXplOiBhbnlcbiAgcHJpemUyOiBzdHJpbmdcbiAgcHJpY2U6IHN0cmluZ1xuICBkZXRhaWxzOiBzdHJpbmdcbiAgZ2FtZUxhdDogYW55XG4gIGdhbWVMbmc6IGFueVxuXG4gIHRva2VuOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHVzZXI6IHN0cmluZ1xuICBhdmF0YXI6IHN0cmluZ1xuICBsYXQ6IGFueVxuICBsbmc6IGFueVxuICB0eXBlOiBhbnlcbiAgcHJpemVUeXBlOiBhbnlcbiAgc2hvd0dhbWVGb3JtOiBib29sZWFuXG4gIHNob3dCaXpGb3JtOiBib29sZWFuXG4gICRnYW1lOiBhbnlcbiAgYWRtaW46IGFueVxuICBCSVo6IGFueVxuICBVU0VSOiBhbnlcblxuICBidGNfdmFsdWU6IGFueVxuICBidGNfZmVlOiBzdHJpbmdcbiAgYnRjX2ZlZV91c2Q6IHN0cmluZ1xuICBwbGF5ZXJGZWU6IGFueVxuXG4gIGRldmljZTogYW55XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZ2FtZTogR2FtZVByb3ZpZGVyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCApIHtcblxuICAgIHRoaXMuJGdhbWUgPSBfZ2FtZVxuICAgIHRoaXMuaW1hZ2VzID0gW11cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd0b2tlbicpXG4gICAgICB0aGlzLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCduYW1lJylcbiAgICAgIHRoaXMudXNlciA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3VzZXInKVxuICAgICAgdGhpcy5sYXQgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsYXQnKVxuICAgICAgdGhpcy5sbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCdsbmcnKVxuICAgICAgdGhpcy5kZXZpY2UgPSBnZXRVVUlEKCk7XG4gICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5kcm9pZFwiKVxuICAgICAgICAvLyB0aGlzLmRldmljZSA9IFwiYW5kcm9pZDQ5NTc3NXFhZmVmNGJpOVwiXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW9zXCIpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuZGV2aWNlID0gXCJhbmZlb2JvZXVhYjMwcjN1XCJcblxuICAgICAgfVxuICAgICAgdGhpcy5zaG93Qml6Rm9ybSA9IGZhbHNlXG4gICAgICB0aGlzLnNob3dHYW1lRm9ybSA9IGZhbHNlXG5cbiAgICAgIHRoaXMudHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnR5cGVcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcblxuICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlclwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqb3JkaS5idGNfdmFsdWUpXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBsZXQgVVNFUiA9IGpvcmRpLnBheWxvYWRbMF1cbiAgICAgICAgICAgICAgdGhpcy5CSVogPSBqb3JkaS5wYXlsb2FkWzFdXG5cbiAgICAgICAgICAgICAgdGhpcy5VU0VSID0gVVNFUlxuICAgICAgICAgICAgICB0aGlzLmJ0Y192YWx1ZSA9IGpvcmRpLmJ0Y192YWx1ZVxuICAgICAgICAgICAgICB0aGlzLmJ0Y19mZWUgPSBqb3JkaS5idGNfZmVlXG4gICAgICAgICAgICAgIHRoaXMuYnRjX2ZlZV91c2QgPSBqb3JkaS5idGNfZmVlX3VzZFxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkJJWi5wcm9mbGUpXG5cbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gVVNFUi5wcm9maWxlLm5hbWUgfHwgJ25vIHVzZXIgbmFtZSBzZXQnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gVVNFUi5wcm9maWxlLmF2YXRhciB8fCAnfi9hc3NldHMvaW1ncy9hdmF0YXJzL2FsaWVuXzAyLnBuZydcbiAgICAgICAgICAgICAgdGhpcy5hZG1pbiA9IFVTRVIucHJvZmlsZS5hZG1pblxuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9ICduL2EnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgfSk7XG4gIH1cblxuICBnQ3JlYXRlQ291cG9uKHR5cGU6IGFueSkge1xuXG4gICAgaWYgKCF0aGlzLmdhbWVUaXRsZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgZ2FtZSB0aXRsZT9cIiwgXCJlcnJvclwiKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMubWF4UGxheWVycykge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgbWF4IG51bWJlciBvZiBwbGF5ZXJzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByaXplKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSBwcml6ZT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnByaXplVHlwZSA9PSAnZXZlcnlvbmUgd2lucycgJiYgIXRoaXMucHJpemUyKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSAgcHJpemUgIGZvciBub25lIHdpbm5lcnM/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAodGhpcy5wcml6ZVR5cGUgPT0gJ2ZyZWUgaXRlbSAgd2l0aCAgcHVyY2hhc2UnICYmICF0aGlzLnByaWNlKSB7XG5cbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIHByaWNlIG9mIHRoZSAgaXRlbSB0byBwdXJjaGFzZT9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5kZXRhaWxzKSB7XG5cbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIHByaXplIGRldGFpbHM/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGxldCB0b3RhbCA9IHRoaXMubWF4UGxheWVycyAqIHRoaXMucGxheWVyRmVlXG4gICAgICB0aGlzLiRnYW1lLmdDUkVBVEVDT1VQT04odGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLnByaXplVHlwZSwgdGhpcy5nYW1lVGl0bGUsIHRoaXMubWF4UGxheWVycywgdGhpcy5wcml6ZSwgdGhpcy5wcml6ZTIsIHRoaXMucHJpY2UsIHRvdGFsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgIH1cblxuICB9XG5cbiAgZ0NyZWF0ZUJUQygpIHtcblxuICAgIGlmICghdGhpcy5nYW1lVGl0bGUpIHtcbiAgICAgIHRoaXMucG9wKFwid2hhdHMgdGhlIGdhbWUgdGl0bGU/XCIsIFwiZXJyb3JcIilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByaXplKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSAgcHJpemU/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGV0YWlscykge1xuXG4gICAgICB0aGlzLnBvcChcIndoYXRzIHRoZSBwcml6ZSBkZXRhaWxzP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCh0aGlzLmJ0Y192YWx1ZSAqIHRoaXMucHJpemUpID4gMjUpIHtcblxuICAgICAgdGhpcy5wb3AoXCIkMjUgbWF4IHByaXplIHZhbHVlXCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuJGdhbWUuZ0NSRUFURUJUQyh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuZ2FtZVRpdGxlLCB0aGlzLnByaXplLCB0aGlzLmRldGFpbHMsIHRoaXMuZ2FtZUxhdCwgdGhpcy5nYW1lTG5nKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcInN1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgfVxuXG4gIH1cbiAgZ1NBVkUoKSB7XG5cbiAgICBpZiAoIXRoaXMuYml6TmFtZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzICBuYW1lP1wiLCBcImVycm9yXCIpXG4gICAgfSBlbHNlIGlmICghdGhpcy5hZGRyZXNzKSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3MgYWRkcmVzcz9cIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5waG9uZSkge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB5b3VyIGJ1c2luZXNzIHBob25lP1wiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0b3J5KSB7XG4gICAgICB0aGlzLnBvcChcIndoYXRzIHlvdXIgYnVzaW5lc3Mgc3Rvcnk/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGV0YWlscykge1xuICAgICAgdGhpcy5wb3AoXCJ3aGF0cyB0aGUgIGdhbWUgIGRldGFpbHM/XCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuJGdhbWUuYml6U0FWRSh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuYml6TmFtZSwgdGhpcy5hZGRyZXNzLCB0aGlzLnBob25lLCB0aGlzLnN0b3J5LCB0aGlzLmVtYWlsLCB0aGlzLmJUeXBlLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGpvcmRpKSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgb25DcmVhdGUocHJpemVUeXBlKSB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMucHJpemVUeXBlID0gcHJpemVUeXBlXG4gICAgICBpZiAocHJpemVUeXBlID09ICcxIHdpbm5lcicpIHtcblxuICAgICAgICB0aGlzLnBsYXllckZlZSA9IC42NVxuXG4gICAgICB9XG4gICAgICBpZiAocHJpemVUeXBlID09ICdldmVyeW9uZSB3aW5zJykge1xuXG4gICAgICAgIHRoaXMucGxheWVyRmVlID0gMS43NVxuXG4gICAgICB9XG4gICAgICBpZiAocHJpemVUeXBlID09ICd3aW5uZXIgbXVzdCBicmluZyBhIGZyaWVuZCcpIHtcblxuICAgICAgICB0aGlzLnBsYXllckZlZSA9IDFcblxuICAgICAgfVxuICAgICAgaWYgKHByaXplVHlwZSA9PSAnZnJlZSBpdGVtICB3aXRoICBwdXJjaGFzZScpIHtcblxuICAgICAgICB0aGlzLnBsYXllckZlZSA9IDFcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5CSVogJiYgdGhpcy5CSVoubGVuZ3RoIDwgMSkge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hvd0JpekZvcm0pXG4gICAgICAgIHRoaXMucG9wKFwibGV0cyBjcmVhdGUgeW91ciBidXNpbmVzcyBwcm9maWxlIDFzdFwiLCBcImVycm9yXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlLWJ1c2luZXNzLyddLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgLy8gdGhpcy5zaG93Qml6Rm9ybSA9IHRydWVcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuQklaICYmIHRoaXMuQklaLmxlbmd0aCA+IDAgJiYgdGhpcy5CSVpbMF0ucHJvZmlsZVswXS52ZXJpZmllZCA8IDEpIHtcblxuXG4gICAgICAgIHRoaXMucG9wKFwicGxlYXNlIHZlcmlmeSBidXNpbmVzc1wiLCBcImVycm9yXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlLWJ1c2luZXNzLyddLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwKTtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLkJJWiAmJiB0aGlzLkJJWi5sZW5ndGggPiAwICYmIHRoaXMuQklaWzBdLnByb2ZpbGVbMF0udmVyaWZpZWQgPiAwKSB7XG5cbiAgICAgICAgdGhpcy5zaG93R2FtZUZvcm0gPSB0cnVlXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudXNlcikge1xuXG4gICAgICAgIHRoaXMucG9wKFwibG9nIGluIHRvIGNyZWF0ZSBhIGdhbWVcIiwgXCJlcnJvclwiKVxuXG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG5cbiAgfVxuXG5cbiAgcHVibGljIHRha2VQaWN0dXJlKCkge1xuXG4gICAgQ2FtZXJhLnRha2VQaWN0dXJlKHsgc2F2ZVRvR2FsbGVyeTogZmFsc2UsIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwIH0pLnRoZW4oKHBpY3R1cmU6IGFueSkgPT4ge1xuICAgICAgbGV0IGZvbGRlciA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgbGV0IHBhdGggPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXIucGF0aCwgTUQ1KG5ldyBEYXRlKCkpICsgXCIucG5nXCIpO1xuICAgICAgcGljdHVyZS5zYXZlVG9GaWxlKHBhdGgsIEltYWdlRm9ybWF0LnBuZywgNjApO1xuICAgICAgdGhpcy51cGxvYWQoXCJodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3VwbG9hZFwiLCBcInVwbG9hZFwiLCBwYXRoKVxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHBhdGgucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkKGRlc3RpbmF0aW9uOiBzdHJpbmcsIGZpbGV2YXI6IHN0cmluZywgZmlsZXBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHNlc3Npb24gPSBCYWNrZ3JvdW5kSHR0cC5zZXNzaW9uKFwiZmlsZS11cGxvYWRcIik7XG4gICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiBkZXN0aW5hdGlvbixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgICAgfTtcbiAgICAgIGxldCBwYXJhbXMgPSBbeyBcIm5hbWVcIjogZmlsZXZhciwgXCJmaWxlbmFtZVwiOiBmaWxlcGF0aCwgXCJtaW1lVHlwZVwiOiBcImltYWdlL3BuZ1wiIH1dO1xuICAgICAgbGV0IHRhc2sgPSBzZXNzaW9uLm11bHRpcGFydFVwbG9hZChwYXJhbXMsIHJlcXVlc3QpO1xuICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgZmlsZSA9IEZpbGVTeXN0ZW0uRmlsZS5mcm9tUGF0aChmaWxlcGF0aCk7XG4gICAgICAgIGZpbGUucmVtb3ZlKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoXCJVcGxvYWRlZCBgXCIgKyBmaWxlcGF0aCArIFwiYFwiKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoXCJDb3VsZCBub3QgZGVsZXRlIGBcIiArIGZpbGVwYXRoICsgXCJgXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGFzay5vbihcImVycm9yXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihcIkNvdWxkIG5vdCB1cGxvYWQgYFwiICsgZmlsZXBhdGggKyBcImAuIFwiICsgZXZlbnQuZXZlbnROYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gbG9naW4vcmVnaXN0ZXJcblxuICBsb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICB0aXRsZTogXCJMb2dpbi9TaWdudXBcIixcbiAgICAgIG1lc3NhZ2U6IFwicmVnaXN0ZXIgb3IgbG9naW4gc2VjdXJlbHkgIHZpYSBzbXMuIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwic2VuZCBzbXNcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLm51bWJlclxuICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICB0aGlzLiRnYW1lLmxvZ2luKHIudGV4dCwgdGhpcy5kZXZpY2UsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInZlcmlmeSBhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgeW91ciBsb2dpbiBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJsb2cgbWUgaW5cIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgnd2hhdCBpcyAgeW91ciBwaG9uZSBudW1iZXI/JywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBsb2dpbkNvbXBsZXRlKGNvZGU6IHN0cmluZykge1xuXG4gICAgdGhpcy4kZ2FtZS5sb2dpbkNvbXBsZXRlKGNvZGUsIHRoaXMuZGV2aWNlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLnRva2VuID0gam9yZGkudG9rZW5cbiAgICAgICAgICAgICAgdGhpcy51c2VyID0gam9yZGkudXNlclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCd0b2tlbicsIGpvcmRpLnRva2VuKVxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCd1c2VyJywgam9yZGkudXNlcilcbiAgICAgICAgICAgICAgdGhpcy5wb3AoXCJ5b3UgYXJlIGxvZ2dlZCBpblwiLCBcInN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwidmVyaWZ5IGFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgeW91ciBsb2dpbiBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwibG9nIG1lIGluXCIsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgICAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCd3aGF0IGlzICB5b3VyIHBob25lIG51bWJlcj8nLCAnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuYlR5cGUgPSB0aGlzLmJpelR5cGVbcGlja2VyLnNlbGVjdGVkSW5kZXhdXG4gICAgY29uc29sZS5sb2codGhpcy5iVHlwZSk7XG4gIH1cblxuICBwb3AobWVzc2FnZTogYW55LCB0eXBlOiBhbnkpIHtcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHR5cGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuXG4gICAgY29uZmlybShvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmFjZSBjaG9zZW4hXCIpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpIHtcblxuICAgIHRoaXMuX2NyZWF0ZSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBoYXNodGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRldGFpbHM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjYXRlZ29yeTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXG4gICAgfSk7XG4gIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4uZmEtcmVndWxhciB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtc29saWQtOTAwJztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5nYW1lSW1hZ2Uge1xcbiAgICB3aWR0aDoyNSU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOjVweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbn1cXG5cXG4udGV4dEJvbGR7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmdyYWJ7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjUyMjI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6d2hpdGU7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxud2lkdGg6MTAwcHg7XFxuaGVpZ2h0OjIwMHB4XFxufVxcblxcbi5zbGFwe1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiNGMkYwMjI7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5zbmVha3tcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyMjI2QjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjojMjJGMjI3O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbn1cXG4uYXZhdGFyc3tcXG4gIC8qIHVzZXI6ICovXFxuYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjUwKTtcXG5oZWlnaHQ6YXV0bztcXG53aWR0aDoyMDBweFxcblxcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJHcmFiYml0XFxcIiBjbGFzcz1cXFwiaDFcXFwiPlxcblxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKlxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCosKiwqLCosKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0YxRjFGMVxcXCI+XFxuXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUHJpdmFjeSBQb2xpY3lcXFwiIGNsYXNzPVxcXCJoMyB0ZXh0LWNlbnRlciBwLXQtMjAgcC1iLTIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiAqbmdJZj1cXFwidHlwZT09J3ByaXZhY3knXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIlVzZXIgQWdyZWVtZW50XFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgKm5nSWY9XFxcInR5cGUhPSdwcml2YWN5J1xcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqLCosKiwqLCosKiwqLCosKiwqLCosKiwqLCosKiwqLCosKiwqLFxcXCIgY29sdW1ucz1cXFwiKlxcXCI+XFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiICpuZ0lmPVxcXCJ0eXBlPT0ncHJpdmFjeSdcXFwiIHRleHQ9XFxcIkdyYWJiaXQuY2hlYXAgKCdHcmFiYml0JykgaXMgYSBzZXJ2aWNlIHByb3ZpZGVkIGJ5IFByb2R1Y1RhbmtzIExMQy4gV2UgYWNrbm93bGVkZ2UgYW5kIHJlc3BlY3QgeW91ciBwZXJzb25hbCBwcml2YWN5LiBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBhbGwgYXNwZWN0cyByZWxhdGluZyB0byBnYXRoZXJpbmcgaW5mb3JtYXRpb24gd2hpbGUgeW91J3JlIHZpc2l0aW5nIEdyYWJiaXQuIFBsZWFzZSByZWFkIHRoaXMgUHJpdmFjeSBQb2xpY3kgYmVmb3JlIHVzaW5nIHRoZSBHcmFiYml0IGFwcC93ZWJzaXRlIG9yIHN1Ym1pdHRpbmcgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uLiBCeSB1c2luZyB0aGUgR3JhYmJpdCBhcHAvd2Vic2l0ZSwgeW91IGFjY2VwdCBhbmQgY29uc2VudCB0byB0aGUgcHJhY3RpY2VzIGRlc2NyaWJlZCBpbiB0aGlzIFByaXZhY3kgUG9saWN5LiBCeSB5b3VyIGNvbnRpbnVlZCB1c2UgeW91IGV4cHJlc3NseSBjb25zZW50IHRvIG91ciBjb2xsZWN0aW9uLCBzdG9yYWdlLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBhcyBkZXNjcmliZWQgaW4gdGhpcyBQcml2YWN5IFBvbGljeS4gSWYgeW91IGRvIG5vdCBhZ3JlZSB3aXRoIHRoZXNlIHByYWN0aWNlcyB5b3UgYXJlIGZyZWUgdG8gZGlzY29udGludWUgeW91ciB1c2Ugb2YgdGhlIEdyYWJiaXQgYXBwL3dlYnNpdGUgYXQgYW55IHRpbWUuIElmIHlvdSBoYXZlIHF1ZXN0aW9ucyBhYm91dCBvdXIgcHJpdmFjeSBwb2xpY3ksIHBsZWFzZSBlbWFpbCB1cyBhdCBzdXBwb3J0QGdyYWJiaXQuY2hlYXAuXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTVcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiICpuZ0lmPVxcXCJ0eXBlPT0ncHJpdmFjeSdcXFwiIHRleHQ9XFxcIllvdSBtYXkgdmlzaXQgR3JhYmJpdCBhdCBhbnkgdGltZSB3aXRob3V0IGludGVudGlvbmFsbHkgcmV2ZWFsaW5nIGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbiBhYm91dCB5b3Vyc2VsZi4gSG93ZXZlciwgd2hlbiB5b3UgdmlzaXQgb3VyIHdlYnNpdGUsIHdlIG1heSBjb2xsZWN0IGFuZCBzdG9yZSB5b3VyIGNvbXB1dGVyIGFuZCBjb25uZWN0aW9uIGluZm9ybWF0aW9uLCBzdGF0aXN0aWNzIG9uIHBhZ2Ugdmlld3MsIHRyYWZmaWMgdG8gYW5kIGZyb20gR3JhYmJpdCwgYWR2ZXJ0aXNlbWVudCBkYXRhLCBJUCBhZGRyZXNzIGFuZCBzdGFuZGFyZCB3ZWIgbG9nIGluZm9ybWF0aW9uIGFuZCBpbmZvcm1hdGlvbiBmcm9tIG90aGVyIGNvbXBhbmllcywgc3VjaCBhcyBkZW1vZ3JhcGhpYyBhbmQgbmF2aWdhdGlvbiBkYXRhLiBGb3IgeW91IHRvIGFjdGl2ZWx5IHBhcnRpY2lwYXRlIGluIEdyYWJiaXQgd2UgZG8gbmVlZCBzb21lIG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uIE9uY2UgeW91IHByb3ZpZGUgdXMgd2l0aCB5b3VyIHJlcXVpcmVkIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB5b3UgYXJlIG5vIGxvbmdlciBhbm9ueW1vdXMuIEluIHByb3ZpZGluZyB1cyB3aXRoIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24sIHlvdSBjb25zZW50IHRvIHRoZSB0cmFuc2ZlciBhbmQgc3RvcmFnZSBvZiBzdWNoIGluZm9ybWF0aW9uIG9uIG91ciBzZXJ2ZXJzLiBXaGVuIHlvdSByZWdpc3RlciBvbiBHcmFiYml0LCB3ZSB3aWxsIGNvbGxlY3QgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBpbmZvcm1hdGlvbjogZW1haWwgYWRkcmVzcywgZmlyc3QgYW5kIGxhc3QgbmFtZSwgZGF0ZSBvZiBiaXJ0aCwgYW5kIHBhc3N3b3JkOyBhbGwgdHJhbnNhY3Rpb25hbCBpbmZvcm1hdGlvbiBiYXNlZCBvbiB5b3VyIGFjdGl2aXRpZXMgb24gR3JhYmJpdDsgc2hpcHBpbmcsIGJpbGxpbmcgYW5kIG90aGVyIGluZm9ybWF0aW9uIHJlbGF0aW5nIHRvIGFueSBwdXJjaGFzZSBvciBzaGlwcGluZzsgYW55IGNvcnJlc3BvbmRlbmNlIHNlbnQgdG8gdXM7IGZpbmFuY2lhbCBpbmZvcm1hdGlvbiwgc3VjaCBhcyB5b3VyIGNyZWRpdCBjYXJkIGluZm9ybWF0aW9uOyBhbmQgb3RoZXIgc3VwcGxlbWVudGFsIGluZm9ybWF0aW9uIGZyb20gdGhpcmQgcGFydGllcy5cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgKm5nSWY9XFxcInR5cGU9PSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiT3VyIHB1cnBvc2UgZm9yIGNvbGxlY3RpbmcgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhIHNhZmUsIGVmZmljaWVudCwgYW5kIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZS4gQnkgc2lnbmluZyB1cCwgeW91IGFncmVlIHRoYXQgd2UgbWF5IHVzZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvOiBwcm92aWRlIHRoZSBzZXJ2aWNlcyBhbmQgY3VzdG9tZXIgc3VwcG9ydCB5b3UgcmVxdWVzdDsgcmVzb2x2ZSBkaXNwdXRlcywgY29sbGVjdCBmZWVzLCBhbmQgdHJvdWJsZXNob290IHByb2JsZW1zOyBwcmV2ZW50IHBvdGVudGlhbGx5IHByb2hpYml0ZWQgb3IgaWxsZWdhbCBhY3Rpdml0aWVzLCBhbmQgZW5mb3JjZSBvdXIgVGVybXMgJiBDb25kaXRpb25zOyBjdXN0b21pemUsIG1lYXN1cmUgYW5kIGltcHJvdmUgb3VyIHNlcnZpY2VzLCBjb250ZW50IGFuZCBhZHZlcnRpc2luZzsgaW5mb3JtIHlvdSBhYm91dCBvdXIgc2VydmljZXMsIHRhcmdldGVkIG1hcmtldGluZywgc2VydmljZSB1cGRhdGVzLCBhbmQgcHJvbW90aW9uczsgYW5kIGNvbXBhcmUgaW5mb3JtYXRpb24gYW5kIHZlcmlmeSBpdCB3aXRoIHRoaXJkIHBhcnRpZXMgZm9yIGFjY3VyYWN5LlxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaDMgcC0xMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE1XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICA8TGFiZWwgcm93PVxcXCIzXFxcIiAgKm5nSWY9XFxcInR5cGU9PSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiV2UgbWF5IGRpc2Nsb3NlIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIHJlc3BvbmQgdG8gbGVnYWwgcmVxdWlyZW1lbnRzLCBlbmZvcmNlIG91ciBUZXJtcyAmIENvbmRpdGlvbnMgYW5kIFByaXZhY3kgUG9saWN5LCByZXNwb25kIHRvIGNsYWltcyB0aGF0IGEgbGlzdGluZyBvciBvdGhlciBjb250ZW50IHZpb2xhdGVzIHRoZSByaWdodHMgb2Ygb3RoZXJzLCBvciBwcm90ZWN0IGFueW9uZSdzIHJpZ2h0cywgcHJvcGVydHksIG9yIHNhZmV0eS4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIGJlIGRpc2Nsb3NlZCB1bmRlciBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLlxcbldlIG1heSBhbHNvIHNoYXJlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gd2l0aCB0aGlyZCBwYXJ0aWVzIGFzc2lzdGluZyBvdXIgYnVzaW5lc3Mgb3BlcmF0aW9ucyB1bmRlciBjb250cmFjdCwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBmcmF1ZCBpbnZlc3RpZ2F0aW9ucyBhbmQgZGVidCBjb2xsZWN0aW9uLCB3aXRoIGxhdyBlbmZvcmNlbWVudCBvciBvdGhlciBnb3Zlcm5tZW50YWwgb2ZmaWNpYWxzIGlmIHJlcXVpcmVkIGJ5IGxhdywgYW5kIHdpdGggb3RoZXIgYnVzaW5lc3MgZW50aXRpZXMsIHNob3VsZCB3ZSBwbGFuIHRvIG1lcmdlIHdpdGggb3IgYmUgYWNxdWlyZWQgYnkgdGhhdCBidXNpbmVzcyBlbnRpdHkuXFxuV2UgZG8gbm90IHNoYXJlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gd2l0aCB0aGlyZCBwYXJ0eSBhZHZlcnRpc2Vycy5cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNFxcXCIgKm5nSWY9XFxcInR5cGU9PSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiT25jZSB5b3UgaGF2ZSBiZWVuIGFwcHJvdmVkIGFzIGEgcmVnaXN0ZXJlZCB1c2VyIHdpdGggR3JhYmJpdCwgeW91IHdpbGwgYmUgcmVxdWlyZWQgdG8gY2hvb3NlIGEgdXNlciBuYW1lLiBUaGlzIHVzZXIgbmFtZSB3aWxsIGJlIGRpc3BsYXllZCB0aHJvdWdob3V0IEdyYWJiaXQgYW5kIHRoZXJlZm9yZSBwcm92aWRlZCB0byB0aGUgcHVibGljLiBJZiB5b3Ugd2luIGFuIGF1Y3Rpb24sIEdyYWJiaXQgd2lsbCBkaXNwbGF5IHRoZSBudW1iZXIgb2YgYmlkcyBhbmQgZG9sbGFyIHZhbHVlIG9mIHRob3NlIGJpZHMgd2hlbiB0aGUgYXVjdGlvbiBlbmRzLiBVbmxlc3MgeW91IGFzc29jaWF0ZSB5b3VyIHVzZXIgbmFtZSB3aXRoIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24sIG90aGVyIHVzZXJzIHdpbGwgbm90IGJlIGFibGUgdG8gcGVyc29uYWxseSBpZGVudGlmeSB5b3VyIGFjdGl2aXRpZXMgb24gR3JhYmJpdC4gV2hlbiB2aXNpdGluZyBHcmFiYml0IGZyb20gYSBwdWJsaWMgb3Igc2hhcmVkIGNvbXB1dGVyLCBjZXJ0YWluIGluZm9ybWF0aW9uIGFib3V0IHlvdSwgc3VjaCBhcyB5b3VyIHVzZXIgbmFtZSwgbWF5IGFsc28gYmUgdmlzaWJsZSB0byBvdGhlcnMgd2hvIG1heSB1c2UgdGhhdCBjb21wdXRlciBhZnRlciB5b3VyIHVzZS4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBlbnN1cmUgcHJpdmF0ZSBpbmZvcm1hdGlvbiBpcyByZW1vdmVkIGZyb20gdGhlIHB1YmxpYyBvciBzaGFyZWQgY29tcHV0ZXIgc2hvdWxkIHlvdSBjaG9vc2UgdG8gdXNlIG9uZS5cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiNVxcXCIgKm5nSWY9XFxcInR5cGU9PSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiVXBvbiBjbG9zaW5nIHlvdXIgYWNjb3VudCwgR3JhYmJpdCB3aWxsIHJlbW92ZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gdmlldyBhcyBzb29uIGFzIHJlYXNvbmFibHkgcG9zc2libGUsIGJhc2VkIG9uIHlvdXIgYWNjb3VudCBhY3Rpdml0eSBhbmQgaW4gYWNjb3JkYW5jZSB3aXRoIGFwcGxpY2FibGUgbGF3LiBXZSBkbyByZXRhaW4gcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBjbG9zZWQgYWNjb3VudHMgdG8gY29tcGx5IHdpdGggbGF3LCBwcmV2ZW50IGZyYXVkLCBjb2xsZWN0IGFueSBmZWVzIG93ZWQsIHJlc29sdmUgZGlzcHV0ZXMsIHRyb3VibGVzaG9vdCBwcm9ibGVtcywgYXNzaXN0IHdpdGggYW55IGludmVzdGlnYXRpb25zLCBlbmZvcmNlIG91ciBUZXJtcyAmIENvbmRpdGlvbnMsIGFuZCB0YWtlIG90aGVyIGFjdGlvbnMgb3RoZXJ3aXNlIHBlcm1pdHRlZCBieSBsYXcuXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgbGluZUhlaWdodD1cXFwiMTVcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjZcXFwiICpuZ0lmPVxcXCJ0eXBlPT0ncHJpdmFjeSdcXFwiIHRleHQ9XFxcIllvdXIgR3JhYmJpdCBhY2NvdW50IGFuZCBwcm9maWxlIGFuZCB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVkIHRoZXJlaW4gYXJlIHBhc3N3b3JkIHByb3RlY3RlZC4gUGxlYXNlIG5vdGUgdGhhdCB5b3UgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gcHJvdmlkZSB5b3VyIHBhc3N3b3JkIHRvIGFueW9uZSBlbHNlLiBHcmFiYml0IHdpbGwgbmV2ZXIgYXNrIGZvciB5b3VyIHBhc3N3b3JkIGluIGUtbWFpbCBvciBvdmVyIHRoZSBwaG9uZS4gUGxlYXNlIHJlbWVtYmVyIHRvIGxvZyBvdXQgb2YgeW91ciBhY2NvdW50IGFuZCB0byBjbG9zZSB5b3VyIEludGVybmV0IGJyb3dzZXIgd2luZG93IHdoZW4geW91IGxlYXZlIHRoZSBHcmFiYml0IHNpdGU7IHRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgaWYgeW91IHVzZSBhIFBDIGluIHB1YmxpYyBsb2NhdGlvbnMuIFdlIGFzc3VtZSBubyBsaWFiaWxpdHkgZm9yIHRoZSBhYnVzZSBvZiBsb2dpbiBkYXRhIGFuZCBwYXNzd29yZHMgdXNlZC5cXG5cXG5HcmFiYml0IHRyZWF0cyBkYXRhIGFzIGFuIGFzc2V0IHRoYXQgbXVzdCBiZSBoaWdobHkgcHJvdGVjdGVkLiBXZSB1c2Ugc2VjdXJpdHkgbWVhc3VyZXMgdG8gcHJvdGVjdCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFnYWluc3QgdW5hdXRob3JpemVkIGFjY2VzcyBhbmQgZGlzY2xvc3VyZS4gSG93ZXZlciwgYWx0aG91Z2ggd2Ugd29yayB2ZXJ5IGhhcmQgdG8gcHJvdGVjdCB5b3VyIHByaXZhY3ksIHdlIGRvIG5vdCBwcm9taXNlLCBhbmQgeW91IHNob3VsZCBub3QgZXhwZWN0LCB0aGF0IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gb3IgcHJpdmF0ZSBjb21tdW5pY2F0aW9ucyB3aWxsIGFsd2F5cyByZW1haW4gcHJpdmF0ZS5cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiN1xcXCIgKm5nSWY9XFxcInR5cGU9PSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiWW91IGNhbiBhY2Nlc3MsIHJldmlldyBhbmQgY2hhbmdlIG1vc3Qgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBieSBsb2dnaW5nIG9uIHRvICBhdCBhbnkgdGltZS4gSG93ZXZlciwgc29tZSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGNhbiBvbmx5IGJlIGNoYW5nZWQgYnkgY29udGFjdGluZyBvdXIgQ3VzdG9tZXIgU2VydmljZS4gQWNjdXJhdGUgaW5mb3JtYXRpb24gaXMgcmVxdWlyZWQgZm9yIGJpbGxpbmcgYW5kIGRlbGl2ZXJ5IHB1cnBvc2VzLiBZb3UgYXJlIHJlcXVpcmVkIHRvIHByb21wdGx5IHVwZGF0ZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlmIGNoYW5nZXMgb2NjdXIgb3IgaW5mb3JtYXRpb24gaXMgaW5hY2N1cmF0ZS5cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG5cXG5cXG4gICAgICAgICAgPExhYmVsIHJvdz1cXFwiOFxcXCIgKm5nSWY9XFxcInR5cGUhPSdwcml2YWN5J1xcXCIgdGV4dD1cXFwiR2l2ZSB1cyAgYSBjYWxsIDI0LzcgaWYgeW91IG5lZWQgaGVscCAoNDE1LTUwOS00ODEyKVxcXCIgY2xhc3M9XFxcImgzIHAtMTBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBsaW5lSGVpZ2h0PVxcXCIxNVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9TY3JvbGxWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJMZWdhbHNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9sZWdhbHMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xlZ2Fscy5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMZWdhbHNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICB0eXBlOiBhbnlcbiAgdXNlcjogYW55XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgKSB7XG5cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIHRoaXMudHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnR5cGVcblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJcbmltcG9ydCB7IHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBFcnJvck9ic2VydmFibGUgfSBmcm9tICdyeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGNvbnN0IHBvc3RlciA9IGF4aW9zLmNyZWF0ZSgpO1xuLy8gcG9zdGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNlc3Npb25Qcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBHYW1lUHJvdmlkZXIge1xuXG4gIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2FwcC5ncmFiYml0LmNoZWFwXCI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdIZWxsbyBTZXNzaW9uUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIC8vLy9ndXNlclxuICBnVVNFUih0b2tlbjogYW55LCB1c2VyOiBhbnksIGxhdDogYW55LCBsbmc6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9nVVNFUicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcmVsb2FkKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ0lEOiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGdJRDogZ0lELFxuICAgICAgdHlwZTogdHlwZVxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3JlbG9hZCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYkdMT0JBTEdBTUVTKCkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IG51bGwsXG4gICAgICB1c2VyOiBudWxsLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JHTE9CQUxHQU1FUycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYkxPQ0FMR0FNRVModG9rZW4sIHVzZXIsIGxhdCwgbG5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JMT0NBTEdBTUVTJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vYnVzaW5lc3NcbiAgYml6U0FWRSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGJpem5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBzdG9yeTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBiVHlwZTogc3RyaW5nLCBsYXQ6IGFueSwgbG5nOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBiaXpOYW1lOiBiaXpuYW1lLFxuICAgICAgcGhvbmU6IHBob25lLFxuICAgICAgc3Rvcnk6IHN0b3J5LFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgYlR5cGU6IGJUeXBlLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JTQVZFJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vZ2FtZVxuICBiR0FNRVMobGF0LCBsbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIC8vIHRva2VuOiB1c2VyX3Rva2VuLFxuICAgICAgLy8gdXNlcl9pZDogdXNlcl9pZCxcbiAgICAgIC8vIGdUeXBlOiBnVHlwZSxcbiAgICAgIC8vIGdJRDogZ0lELFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JHQU1FUycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25HcmFiKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ2FtZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9ncmFiJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblNsYXAodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NsYXAnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uU25lYWsodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NuZWFrJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkF2YXRhcih0b2tlbjogYW55LCB1c2VyOiBhbnksIGF2YXRhcjogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgYXZhdGFyOiBhdmF0YXIsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYXZhdGFyJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkVkaXQodG9rZW46IGFueSwgdXNlcjogYW55LCB0ZXh0OiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcHJvZmlsZS9lZGl0JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblRpbWVyKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ0lEOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnSUQ6IGdJRCxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC90aW1lcicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcGxheSh0b2tlbjogYW55LCB1c2VyOiBhbnksIGdJRDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ0lEOiBnSUQsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcGxheScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgbG9naW4obnVtYmVyOiBzdHJpbmcsIGRldmljZTogc3RyaW5nLCBsYXQ6IHN0cmluZywgbG5nOiBzdHJpbmcsIGNvdW50cnlDb2RlKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgIGRldmljZTogZGV2aWNlLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZyxcbiAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZVxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2xvZ2luJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBsb2dpbkNvbXBsZXRlKGNvZGU6IHN0cmluZywgZGV2aWNlOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBkZXZpY2U6IGRldmljZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9sb2dpbkNvbXBsZXRlJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBiWUVMUCh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGxhdDogc3RyaW5nLCBsbmc6IHN0cmluZywgeWVscDogc3RyaW5nKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgeWVscDogeWVscCxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmdcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9iWWVscCcsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgdllFTFAodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBjb2RlOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBjb2RlOiBjb2RlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3ZZZWxwJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnQ1JFQVRFQ09VUE9OKHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgcHJpemVUeXBlOiBzdHJpbmcsIGdhbWVUaXRsZTogc3RyaW5nLCBtYXhQbGF5ZXJzOiBhbnksIHByaXplOiBzdHJpbmcsIHByaXplMjogc3RyaW5nLCBwcmljZTogYW55LCB0b3RhbDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgcHJpemVUeXBlOiBwcml6ZVR5cGUsXG4gICAgICBnYW1lVGl0aWxlOiBnYW1lVGl0bGUsXG4gICAgICBtYXhQbGF5ZXJzOiBtYXhQbGF5ZXJzLFxuICAgICAgcHJpemU6IHByaXplLFxuICAgICAgcHJpemUyOiBwcml6ZTIsXG4gICAgICBwcmljZTogcHJpY2UsXG4gICAgICB0b3RhbDogdG90YWxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9nQ3JlYXRlJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG4gIGdDUkVBVEVCVEModG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBnYW1lVGl0bGU6IHN0cmluZywgcHJpemU6IHN0cmluZywgZGV0YWlsczogYW55LCBsYXQ6IGFueSwgbG5nOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBnYW1lVGl0bGU6IGdhbWVUaXRsZSxcbiAgICAgIHByaXplOiBwcml6ZSxcbiAgICAgIGRldGFpbHM6IGRldGFpbHMsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvZ0NyZWF0ZUJUQycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBvblBheSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGdyYWJzOiBzdHJpbmcsIHNsYXBzOiBzdHJpbmcsIHNuZWFrczogc3RyaW5nLCBwYXlUeXBlKSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgZ3JhYnM6IGdyYWJzLFxuICAgICAgc2xhcHM6IHNsYXBzLFxuICAgICAgc25lYWtzOiBzbmVha3MsXG4gICAgICBwYXlUeXBlOiBwYXlUeXBlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL29uUGF5JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBsZXQgYm9keSA9IHJlcztcbiAgICByZXR1cm4gYm9keSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBlcnIgPSBlcnJvciB8fCAnJztcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignZXJyb3IgIGlzICcgKyBKU09OLnN0cmluZ2lmeShlcnJNc2cpKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyTXNnKTtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5mYS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1zb2xpZC05MDAnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmdhbWVJbWFnZSB7XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAwcHg7XFxufVxcblxcbi50ZXh0Qm9sZHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JhYntcXG4gIC8qIE92YWw6ICovXFxuYmFja2dyb3VuZDogI0YyNTIyMjtcXG5ib3JkZXItcmFkaXVzOiA1MDBweDtcXG5jb2xvcjp3aGl0ZTtcXG5mb250LXdlaWdodDogYm9sZDtcXG53aWR0aDoxMDBweDtcXG5oZWlnaHQ6MjAwcHhcXG59XFxuXFxuLnNsYXB7XFxuICAvKiBPdmFsOiAqL1xcbmJhY2tncm91bmQ6ICNGMjIyNkI7XFxuYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuY29sb3I6I0YyRjAyMjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5cXG5cXG59XFxuLnNuZWFre1xcbiAgLyogT3ZhbDogKi9cXG5iYWNrZ3JvdW5kOiAjRjIyMjZCO1xcbmJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbmNvbG9yOiMyMkYyMjc7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxufVxcbi5hdmF0YXJze1xcbiAgLyogdXNlcjogKi9cXG5ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApO1xcbmhlaWdodDphdXRvO1xcbndpZHRoOjIwMHB4XFxuXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyYWJiaXRcXFwiIGNsYXNzPVxcXCJoMVxcXCI+XFxuXFxuPC9BY3Rpb25CYXI+XFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIj5cXG4gIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosKiwqLCosKiwqLCpcXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRjFGMUYxXFxcIj5cXG5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTdXBwb3J0XFxcIiBjbGFzcz1cXFwiaDMgdGV4dC1jZW50ZXIgcC10LTIwIHAtYi0yMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCI+PC9MYWJlbD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvdz1cXFwiMlxcXCI+XFxuXFxuICAgICAgICA8Q2FyZFZpZXcgIGNsYXNzPVxcXCJwLXQtMjBcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkdpdmUgdXMgIGEgY2FsbCAyNC83IGlmIHlvdSBuZWVkIGhlbHAgKDQxNS01MDktNDgxMilcXFwiIGNsYXNzPVxcXCJoMyBwLTEwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJzdHJldGNoXFxcIiAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGxpbmVIZWlnaHQ9XFxcIjE1XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPC9DYXJkVmlldz5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlN1cHBvcnRcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdXBwb3J0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zdXBwb3J0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBVU0VSOiBhbnlcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuXG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxuICBnb0JhY2soKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=