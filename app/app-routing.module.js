"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: function () { return Promise.resolve().then(function () { return require("./home/home.module"); }).then(function (m) { return m.HomeModule; }); } },
    { path: "about", loadChildren: function () { return Promise.resolve().then(function () { return require("./about/about.module"); }).then(function (m) { return m.AboutModule; }); } },
    { path: "chat", loadChildren: function () { return Promise.resolve().then(function () { return require("./chat/chat.module"); }).then(function (m) { return m.ChatModule; }); } },
    { path: "legals", loadChildren: function () { return Promise.resolve().then(function () { return require("./legals/legals.module"); }).then(function (m) { return m.LegalsModule; }); } },
    { path: "support", loadChildren: function () { return Promise.resolve().then(function () { return require("./support/support.module"); }).then(function (m) { return m.SupportModule; }); } }


];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
