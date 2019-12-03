webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQ1A7QUFDcEI7QUFFMUI7QUFHakI7Ozs7O0VBS0U7QUFJRjtJQUVFLHNCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pDLGdEQUFnRDtJQUNsRCxDQUFDO0lBRUQsU0FBUztJQUNULDRCQUFLLEdBQUwsVUFBTSxLQUFVLEVBQUUsSUFBUyxFQUFFLEdBQVEsRUFBRSxHQUFRO1FBQzdDLElBQUksSUFBSSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDVDtRQUVELElBQU0sV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLGdFQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7YUFDeEUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBWTtJQUNaLDhCQUFPLEdBQVAsVUFBUSxLQUFhLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEdBQVEsRUFBRSxHQUFRO1FBQ25KLElBQUksSUFBSSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxL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LENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFxQjtRQUN2QyxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN4QixNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7U0FDL0Q7YUFBTTtZQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0Q7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sdURBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBN1V3QiwrREFBVTs7SUFGeEIsWUFBWTtRQUh4QixnRUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHeUIsK0RBQVU7T0FGeEIsWUFBWSxDQWlWeEI7SUFBRCxtQkFBQztDQUFBO0FBalZ3QiIsImZpbGUiOiJidW5kbGUuOGZmYmQ4MmNiM2U3ODkyM2M4MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IEVycm9yT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTZXNzaW9uUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2FtZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xuICAgIC8vY29uc29sZS5sb2coJ0hlbGxvIFNlc3Npb25Qcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgLy8vL2d1c2VyXG4gIGdVU0VSKHRva2VuOiBhbnksIHVzZXI6IGFueSwgbGF0OiBhbnksIGxuZzogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2dVU0VSJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vYnVzaW5lc3NcbiAgYml6U0FWRSh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGJpem5hbWU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBzdG9yeTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBiVHlwZTogc3RyaW5nLCBsYXQ6IGFueSwgbG5nOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBiaXpOYW1lOiBiaXpuYW1lLFxuICAgICAgcGhvbmU6IHBob25lLFxuICAgICAgc3Rvcnk6IHN0b3J5LFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgYlR5cGU6IGJUeXBlLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JTQVZFJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvLy8vZ2FtZVxuICBiR0FNRVMobGF0LCBsbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIC8vIHRva2VuOiB1c2VyX3Rva2VuLFxuICAgICAgLy8gdXNlcl9pZDogdXNlcl9pZCxcbiAgICAgIC8vIGdUeXBlOiBnVHlwZSxcbiAgICAgIC8vIGdJRDogZ0lELFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JHQU1FUycsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgb25HcmFiKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ2FtZTogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9ncmFiJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblNsYXAodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NsYXAnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIG9uU25lYWsodG9rZW46IGFueSwgdXNlcjogYW55LCBnYW1lOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL3NuZWFrJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkF2YXRhcih0b2tlbjogYW55LCB1c2VyOiBhbnksIGF2YXRhcjogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgYXZhdGFyOiBhdmF0YXIsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYXZhdGFyJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvbkVkaXQodG9rZW46IGFueSwgdXNlcjogYW55LCB0ZXh0OiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcHJvZmlsZS9lZGl0JywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBvblRpbWVyKHRva2VuOiBhbnksIHVzZXI6IGFueSwgZ0lEOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBnSUQ6IGdJRCxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC90aW1lcicsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcGxheSh0b2tlbjogYW55LCB1c2VyOiBhbnksIGdJRDogYW55KSB7XG4gICAgbGV0IERBVEEgPSB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgZ0lEOiBnSUQsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvcGxheScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgbG9naW4obnVtYmVyOiBzdHJpbmcsIGRldmljZTogc3RyaW5nLCBsYXQ6IHN0cmluZywgbG5nOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgZGV2aWNlOiBkZXZpY2UsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvbG9naW4nLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGxvZ2luQ29tcGxldGUoY29kZTogc3RyaW5nLCBkZXZpY2U6IHN0cmluZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIGRldmljZTogZGV2aWNlLFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2xvZ2luQ29tcGxldGUnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGJZRUxQKHRva2VuOiBzdHJpbmcsIHVzZXI6IHN0cmluZywgbGF0OiBzdHJpbmcsIGxuZzogc3RyaW5nLCB5ZWxwOiBzdHJpbmcpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB5ZWxwOiB5ZWxwLFxuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZ1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2JZZWxwJywgREFUQSwgaHR0cE9wdGlvbnMpXG4gICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICB2WUVMUCh0b2tlbjogc3RyaW5nLCB1c2VyOiBzdHJpbmcsIGNvZGU6IHN0cmluZykge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgfVxuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvdlllbHAnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdDUkVBVEUodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBwcml6ZVR5cGU6IHN0cmluZywgZ2FtZVRpdGxlOiBzdHJpbmcsIG1heFBsYXllcnM6IGFueSwgcHJpemU6IHN0cmluZywgcHJpemUyOiBzdHJpbmcsIHByaWNlOiBhbnksIHRvdGFsOiBhbnkpIHtcbiAgICBsZXQgREFUQSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBwcml6ZVR5cGU6IHByaXplVHlwZSxcbiAgICAgIGdhbWVUaXRpbGU6IGdhbWVUaXRsZSxcbiAgICAgIG1heFBsYXllcnM6IG1heFBsYXllcnMsXG4gICAgICBwcml6ZTogcHJpemUsXG4gICAgICBwcml6ZTI6IHByaXplMixcbiAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgIHRvdGFsOiB0b3RhbFxuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL2FwcC5ncmFiYml0LmNoZWFwL2dDcmVhdGUnLCBEQVRBLCBodHRwT3B0aW9ucylcbiAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG5cbiAgb25QYXkodG9rZW46IHN0cmluZywgdXNlcjogc3RyaW5nLCBncmFiczogc3RyaW5nLCBzbGFwczogc3RyaW5nLCBzbmVha3M6IHN0cmluZywgcGF5VHlwZSkge1xuICAgIGxldCBEQVRBID0ge1xuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIGdyYWJzOiBncmFicyxcbiAgICAgIHNsYXBzOiBzbGFwcyxcbiAgICAgIHNuZWFrczogc25lYWtzLFxuICAgICAgcGF5VHlwZTogcGF5VHlwZSxcbiAgICB9XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9hcHAuZ3JhYmJpdC5jaGVhcC9vblBheScsIERBVEEsIGh0dHBPcHRpb25zKVxuICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG4gICAgbGV0IGJvZHkgPSByZXM7XG4gICAgcmV0dXJuIGJvZHkgfHwge307XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgIGxldCBlcnJNc2c6IHN0cmluZztcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgY29uc3QgZXJyID0gZXJyb3IgfHwgJyc7XG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyTXNnKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9