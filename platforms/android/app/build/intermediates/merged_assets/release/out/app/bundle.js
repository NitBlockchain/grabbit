require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ 163:
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1","dependencies":{}};

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__(191));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__(191));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__(192));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__(192));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".body"],"declarations":[{"type":"declaration","property":"background-color","value":"#000"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 250:
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
webpackEmptyAsyncContext.id = 250;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ../node_modules/nativescript-angular/nativescript.module.js
var nativescript_module = __webpack_require__(292);

// EXTERNAL MODULE: ../node_modules/@angular/common/fesm5/http.js
var http = __webpack_require__(11);

// CONCATENATED MODULE: ./app.component.ts

var app_component_AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(core["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__(409)).default
        })
    ], AppComponent);
    return AppComponent;
}());


// EXTERNAL MODULE: ../node_modules/nativescript-angular/forms/index.js
var nativescript_angular_forms = __webpack_require__(268);

// EXTERNAL MODULE: ../node_modules/@angular/forms/fesm5/forms.js
var fesm5_forms = __webpack_require__(14);

// EXTERNAL MODULE: ../node_modules/nativescript-angular/router/index.js
var router = __webpack_require__(39);

// EXTERNAL MODULE: ../node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__(5);

// CONCATENATED MODULE: ./about/about.component.ts


var about_component_AboutComponent = /** @class */ (function () {
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
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: common["Location"] }
    ]; };
    AboutComponent = __decorate([
        Object(core["Component"])({
            selector: "About",
            template: __importDefault(__webpack_require__(426)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(427)).default]
        }),
        __metadata("design:paramtypes", [core["NgZone"], core["ChangeDetectorRef"], common["Location"]])
    ], AboutComponent);
    return AboutComponent;
}());


// EXTERNAL MODULE: ../node_modules/@angular/router/fesm5/router.js + 14 modules
var fesm5_router = __webpack_require__(23);

// EXTERNAL MODULE: ./services/game.ts
var game = __webpack_require__(88);

// EXTERNAL MODULE: ../node_modules/tns-core-modules/ui/dialogs/dialogs.js
var dialogs = __webpack_require__(22);

// EXTERNAL MODULE: ../node_modules/tns-core-modules/platform/platform.js
var platform = __webpack_require__(18);

// EXTERNAL MODULE: ../node_modules/tns-core-modules/ui/enums/enums.js
var enums = __webpack_require__(70);

// EXTERNAL MODULE: ../node_modules/nativescript-camera/camera.js
var camera = __webpack_require__(294);

// EXTERNAL MODULE: ../node_modules/rxjs/Observable.js
var Observable = __webpack_require__(295);

// EXTERNAL MODULE: ../node_modules/nativescript-uuid/index.js
var nativescript_uuid = __webpack_require__(274);

// CONCATENATED MODULE: ./create/create.component.ts







var localStorage = __webpack_require__(157);



var FileSystem = __webpack_require__(34);
var BackgroundHttp = __webpack_require__(272);
var MD5 = __webpack_require__(273);



var create_component_CreateComponent = /** @class */ (function () {
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
            _this.device = Object(nativescript_uuid["getUUID"])();
            if (platform["isAndroid"]) {
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
        camera["takePicture"]({ saveToGallery: false, width: 320, height: 240 }).then(function (picture) {
            var folder = FileSystem.knownFolders.documents();
            var path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
            picture.saveToFile(path, enums["ImageFormat"].png, 60);
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
        return new Observable["Observable"](function (observer) {
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
        dialogs["prompt"]({
            title: "Login/Signup",
            message: "register or login securely  via sms. enter your phone number",
            okButtonText: "send sms",
            cancelButtonText: "cancel",
            inputType: dialogs["inputType"].number
        }).then(function (r) {
            if (r.text) {
                _this.$game.login(r.text, _this.device, _this.lat, _this.lng)
                    .subscribe(function (jordi) {
                    if (jordi.success) {
                        _this.zone.run(function () {
                            dialogs["prompt"]({
                                title: "verify account",
                                message: "enter your login code",
                                okButtonText: "log me in",
                                cancelButtonText: "cancel",
                                inputType: dialogs["inputType"].text
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
                        dialogs["prompt"]({
                            title: "verify account",
                            message: "enter your login code",
                            okButtonText: "log me in",
                            cancelButtonText: "cancel",
                            inputType: dialogs["inputType"].text
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
        Object(dialogs["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    CreateComponent.prototype.createForm = function () {
        this._create = this.formBuilder.group({
            title: ['', fesm5_forms["Validators"].required],
            hashtags: ['', fesm5_forms["Validators"].required],
            details: ['', fesm5_forms["Validators"].required],
            category: ['', fesm5_forms["Validators"].required]
        });
    };
    CreateComponent.ctorParameters = function () { return [
        { type: game["a" /* GameProvider */] },
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: common["Location"] },
        { type: router["RouterExtensions"] },
        { type: fesm5_router["ActivatedRoute"] },
        { type: fesm5_forms["FormBuilder"] }
    ]; };
    CreateComponent = __decorate([
        Object(core["Component"])({
            selector: "Create",
            template: __importDefault(__webpack_require__(432)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(433)).default]
        }),
        __metadata("design:paramtypes", [game["a" /* GameProvider */], core["NgZone"], core["ChangeDetectorRef"], common["Location"], router["RouterExtensions"], fesm5_router["ActivatedRoute"], fesm5_forms["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());


// CONCATENATED MODULE: ./create-business/create-business.component.ts







var create_business_component_localStorage = __webpack_require__(157);
var create_business_component_FileSystem = __webpack_require__(34);
var create_business_component_BackgroundHttp = __webpack_require__(272);
var create_business_component_MD5 = __webpack_require__(273);

var create_business_component_CreateBusinessComponent = /** @class */ (function () {
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
            _this.token = create_business_component_localStorage.getString('token');
            _this.name = create_business_component_localStorage.getString('name');
            _this.user = create_business_component_localStorage.getString('user');
            _this.lat = create_business_component_localStorage.getString('lat');
            _this.lng = create_business_component_localStorage.getString('lng');
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
        dialogs["prompt"]({
            title: "Yelp",
            message: "enter yelp id",
            okButtonText: "get yelp",
            cancelButtonText: "cancel",
            inputType: dialogs["inputType"].text
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
                    dialogs["prompt"]({
                        title: "Verify Business",
                        message: "enter verification code",
                        okButtonText: "confirm",
                        cancelButtonText: "cancel",
                        inputType: dialogs["inputType"].text
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
        Object(dialogs["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    CreateBusinessComponent.prototype.createForm = function () {
        this._create = this.formBuilder.group({
            title: ['', fesm5_forms["Validators"].required],
            hashtags: ['', fesm5_forms["Validators"].required],
            details: ['', fesm5_forms["Validators"].required],
            category: ['', fesm5_forms["Validators"].required]
        });
    };
    CreateBusinessComponent.ctorParameters = function () { return [
        { type: game["a" /* GameProvider */] },
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: common["Location"] },
        { type: router["RouterExtensions"] },
        { type: fesm5_router["ActivatedRoute"] },
        { type: fesm5_forms["FormBuilder"] }
    ]; };
    CreateBusinessComponent = __decorate([
        Object(core["Component"])({
            selector: "Create",
            template: __importDefault(__webpack_require__(434)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(435)).default]
        }),
        __metadata("design:paramtypes", [game["a" /* GameProvider */], core["NgZone"], core["ChangeDetectorRef"], common["Location"], router["RouterExtensions"], fesm5_router["ActivatedRoute"], fesm5_forms["FormBuilder"]])
    ], CreateBusinessComponent);
    return CreateBusinessComponent;
}());


// CONCATENATED MODULE: ./support/support.component.ts


var support_component_SupportComponent = /** @class */ (function () {
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
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: common["Location"] }
    ]; };
    SupportComponent = __decorate([
        Object(core["Component"])({
            selector: "Support",
            template: __importDefault(__webpack_require__(436)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(437)).default]
        }),
        __metadata("design:paramtypes", [core["NgZone"], core["ChangeDetectorRef"], common["Location"]])
    ], SupportComponent);
    return SupportComponent;
}());


// CONCATENATED MODULE: ./legals/legals.component.ts




var legals_component_LegalsComponent = /** @class */ (function () {
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
        { type: core["NgZone"] },
        { type: core["ChangeDetectorRef"] },
        { type: common["Location"] },
        { type: router["RouterExtensions"] },
        { type: fesm5_router["ActivatedRoute"] }
    ]; };
    LegalsComponent = __decorate([
        Object(core["Component"])({
            selector: "Legals",
            template: __importDefault(__webpack_require__(438)).default,
            changeDetection: core["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(439)).default]
        }),
        __metadata("design:paramtypes", [core["NgZone"], core["ChangeDetectorRef"], common["Location"], router["RouterExtensions"], fesm5_router["ActivatedRoute"]])
    ], LegalsComponent);
    return LegalsComponent;
}());


// CONCATENATED MODULE: ./app-routing.module.ts







var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: function () { return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 478)).then(function (m) { return m.HomeModule; }); } },
    { path: "about", component: about_component_AboutComponent },
    { path: "create/:type", component: create_component_CreateComponent },
    { path: "create-business", component: create_business_component_CreateBusinessComponent },
    { path: "support", component: support_component_SupportComponent },
    { path: "legals/:type", component: legals_component_LegalsComponent }
];
// export const navigatableComponents = [
//   AboutComponent,
// ];
var app_routing_module_AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(core["NgModule"])({
            imports: [router["NativeScriptRouterModule"].forRoot(routes)],
            exports: [router["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());


// CONCATENATED MODULE: ./app.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_module_AppModule; });












var app_module_AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(core["NgModule"])({
            bootstrap: [
                app_component_AppComponent
            ],
            imports: [
                nativescript_module["NativeScriptModule"],
                http["b" /* HttpClientModule */],
                nativescript_angular_forms["NativeScriptFormsModule"],
                fesm5_forms["ReactiveFormsModule"],
                app_routing_module_AppRoutingModule
            ],
            declarations: [
                app_component_AppComponent,
                about_component_AboutComponent,
                create_component_CreateComponent,
                create_business_component_CreateBusinessComponent,
                support_component_SupportComponent,
                legals_component_LegalsComponent
            ],
            schemas: [
                core["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);

        let applicationCheckPlatform = __webpack_require__(12);
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__(54);
__webpack_require__(359);
        }

        
            __webpack_require__(361)();
            
            
        if (false) {}
        
            
        __webpack_require__(364);
        // this import should be first in order to load some required settings (like globals and reflect-metadata)



Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__[/* AppModule */ "a"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"About Us\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"2\">\n\n        <CardView  class=\"p-t-20\">\n          <StackLayout>\n            <Label text=\"Grabbit is a  fun, fast paced daily deals auction. Slap, Sneak & Grab your way to awesome prizes. Compete against global players for bitcoin and other instantly delivered crypto prizes, or take on locals for coupons to your favorite restaurants and local experiences.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n            <Label text=\"Grabbit solves the problem of boring raffles and local prize engagement. Everyday, dozens of businesses in your area are offering coupons and discounts. Unlike Groupon, Grabbit's auction format requires users pay nothing for amazing discounts.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n            <Label text=\"Businesses want foot traffic, bargin shoppers want great discounts and an easy 24/7 way to get them. Grabbit is fun for the train ride home from work or school,  or a late night binge watch break.\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          </StackLayout>\n\n        </CardView>\n      </StackLayout>\n\n    </GridLayout>\n    </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<ScrollView class=\"page\">\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showBizForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n          <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n          <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n          <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n          <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"showGameForm\">\n    <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"creating {{prizeType}} game for\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n        <Label [text]=\"BIZ[0].profile[0].name\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].address\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n        <Label [text]=\"BIZ[0].profile[0].phone\" class=\"h3 text-center  p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n      </StackLayout>\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *, 80\" class=\"form\">\n\n          <TextField row=\"1\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border p-t-20\" maxLength=\"24\"></TextField>\n          <TextField row=\"2\" col=\"1\" [(ngModel)]=\"maxPlayers\" hint=\"max players\" class=\"input input-border p-t-20\" keyboardType=\"number\" maxLength=\"2\"></TextField>\n          <TextField row=\"3\" col=\"1\" [(ngModel)]=\"prize\" hint=\"winner gets a 25% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"prize2\" hint=\"none winners get a 10% off coupon\" class=\"input input-border p-t-20\" maxLength=\"45\" *ngIf=\"prizeType=='everyone wins'\"></TextField>\n\n          <TextField row=\"4\" col=\"1\" [(ngModel)]=\"price\" hint=\"buy $30 item\" class=\"input input-border p-t-20\"  maxLength=\"24\" *ngIf=\"prizeType=='free item  with  purchase'\"></TextField>\n          <TextField row=\"5\" col=\"1\" [(ngModel)]=\"details\" hint=\"prize details\" class=\"input input-border p-t-20\"  maxLength=\"150\"></TextField>\n\n          <Button row=\"6\" col='1' text=\"create local game\" (tap)=\"gCreateCoupon()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\"></Button>\n\n        </GridLayout>\n      </StackLayout>\n\n\n      <StackLayout orientation=\"vertical\" row=\"4\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"total USD: ${{maxPlayers*playerFee || 0 | number : '1.2-2'}}\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"1 btc = ${{btc_value}}\" class=\"h4 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n\n        <Label text=\"Winner(s) must redeem coupon within 72  hours\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n        <Label text=\"If less than the max number of players play your game, the difference will be returned to your wallet\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"21\"></Label>\n\n      </StackLayout>\n    </GridLayout>\n  </GridLayout>\n\n  <GridLayout rows=\"*,*\" columns=\"*\" *ngIf=\"!showBizForm\">\n    <GridLayout rows=\"*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"0\">\n\n        <Label text=\"create {{type}} game\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='coupon'\">\n\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*\" columns=\"*\">\n\n          <StackLayout class=\"p-20\" row=\"0\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Grabbit is an awesome way to engage locals with deals and discounts. It costs as little as $0.65 per player competing for your coupon. Games are geo fenced to locals within 10 miles. Locals play FREE to win your coupon\"\n                  class=\"h3 p-20 text-center\" textWrap=\"true\" lineHeight='12'></Label>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"Game Types\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"2\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"1 Winner\" class=\"m-b-10 h3\" />\n                <Label text=\"only one player wins\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$0.65 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('1 winner')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"3\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Everyone Wins\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a 50% off coupon, all other players get a 15% off coupon (example)\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1.75 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('everyone wins')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"4\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Winner Must Bring A Friend\" class=\"m-b-10 h3\" />\n                <Label text=\"winner must bring a friend to redeem the coupon\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('winner must bring a friend')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"5\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Free item with purchase\" class=\"m-b-10 h3\" />\n                <Label text=\"winner gets a free item, with purchase\" class=\"m-b-10 h3\" textWrap=\"true\" />\n                <Label text=\"$1 per player\" class=\"m-b-10 h3\" />\n                <Button text=\"create\" (tap)=\"onCreate('free item  with  purchase')\" class=\"-primary -rounded-lg\"></Button>\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout orientation=\"vertical\" row=\"6\" backgroundColor=\"#F1F1F1\">\n\n            <Label text=\"FAQ's\" class=\"h2 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"7\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Explain per player pricing\" class=\"m-b-10 h2\" />\n                <Label text=\"when creating your game, you choose the max number of players for your game. If you choose 10 max players for a 1 winner game, it will cost $6.50\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n                <Label text=\"if less than 10 players join the game, the difference will be returned to your bitcoin wallet\" class=\"m-b-10 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n\n          <StackLayout class=\"p-20\" row=\"8\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Whats the incentive for players to redeem their coupons?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Players are rewarded when they redeem their coupons, from reward points to free tools and to other perks. Players may also be penalized for not redeeming their wins\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n          <StackLayout class=\"p-20\" row=\"9\">\n            <Card:CardView class=\"cardStyle\">\n              <StackLayout class=\"cardContent\">\n                <Label text=\"Can I extend the local radius to 20 miles?\" class=\"m-b-10 h2\" textWrap=\"true\" />\n                <Label text=\"Yes, with a premium feature\" class=\"m-b-20 h3\" textWrap=\"true\" lineHeight=\"12\" />\n\n              </StackLayout>\n            </Card:CardView>\n          </StackLayout>\n        </GridLayout>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"1\" *ngIf=\"type=='bitcoin'\">\n\n        <GridLayout rows=\"*,*\" columns=\"*\">\n          <StackLayout orientation=\"vertical\" row=\"0\">\n\n              <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *, 80\" class=\"form\">\n\n                <TextField row=\"0\" col=\"1\" [(ngModel)]=\"gameTitle\" hint=\"game title\" class=\"input input-border p-t-20\" maxLength=\"24\"></TextField>\n                <TextField row=\"1\" col=\"1\" [(ngModel)]=\"prize\" hint=\"prize in btc (.001)\" class=\"input input-border p-t-20\" keyboardType=\"number\" maxLength=\"6\"></TextField>\n                <TextField row=\"2\" col=\"1\" [(ngModel)]=\"details\" hint=\"prize details\" class=\"input input-border p-t-20\"  maxLength=\"150\"></TextField>\n                <TextField row=\"3\" col=\"1\" [(ngModel)]=\"gameLat\" hint=\"geo fence to latitude\" class=\"input input-border p-t-20\"  maxLength=\"150\" *ngIf=\"admin>0\"></TextField>\n                <TextField row=\"4\" col=\"1\" [(ngModel)]=\"gameLng\" hint=\"geo fence to longitude\" class=\"input input-border p-t-20\"  maxLength=\"150\" *ngIf=\"admin>0\"></TextField>\n\n                <Button row=\"5\" col='1' text=\"create bitcoin game\" (tap)=\"gCreateBTC()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\" *ngIf=\"user\"></Button>\n                <Button row=\"5\" col='1' text=\"login/signup\" (tap)=\"login()\" horizontalAlignment=\"stretch\" class=\"-primary p-b-20\" *ngIf=\"!user\"></Button>\n\n              </GridLayout>\n          </StackLayout>\n\n          <StackLayout orientation=\"vertical\" row=\"1\" backgroundColor=\"#F1F1F1\">\n            <Label text=\"prize value: ${{btc_value*prize || 0 | number : '1.2-2'}}\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" *ngIf=\"user\"></Label>\n\n            <Label text=\"How This works\" class=\"h2 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\"></Label>\n            <Label text=\"When you create a bitcoin game, you are offering $5 in bitcoin (for example) as a prize up for grabs. Your game will require a minimum of 10 players, with a play fee of 2 grabs (or $0.50). Like inserting quarters into an arcade. Players get x number of free grabs, slaps and sneaks to play\" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n\n            <Label text=\"10 x  $0.50 covers your $5 in bitcoin. If 20 players join the game,  there's an overage of $5. 75% of that is yours. \" class=\"h3 text-center p-t-20\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n            <Label text=\"If your game is not successful, cancel it and your bitcoins are sent back to your wallet.\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n            <Label text=\"max players 25, max prize amount $25\" class=\"h3 text-center p-t-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"18\"></Label>\n\n          </StackLayout>\n\n        </GridLayout>\n      </StackLayout>\n    </GridLayout>\n\n  </GridLayout>\n</ScrollView>\n"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n.cardStyle {\n    background-color: #fff;\n    color: rgb(43, 43, 43);\n}\n\n.cardContent {\n    padding: 20;\n    font-weight: bold;\n    font-size: 30;\n}\n.picker {\n    background-color: blanchedalmond;\n    color: red;\n    border-color: brown;\n    border-radius: 20;\n    border-width: 2;\n    width: 200;\n    height: 100;\n    vertical-align: middle;\n}\n"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"askBiz\">\n\n    <GridLayout class=\"anim-cover\" rows=\"auto,auto,auto\" columns=\"*\">\n\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"create your business profile\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"1\">\n\n        <Label text=\"use your yelp id\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n        <Image\n            [src]=\"yelpImage\" stretch=\"aspectFill\"  width=\"72%\"></Image>\n\n      </StackLayout>\n      <StackLayout orientation=\"vertical\" row=\"2\">\n        <Button text=\"get biz info\" (tap)=\"onYelp()\" class=\"-primary\"></Button>\n\n      </StackLayout>\n\n     </GridLayout>\n\n</StackLayout>\n\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"showBiz\">\n\n    <GridLayout class=\"anim-cover\" rows=\"auto,auto,auto\" columns=\"*\">\n        <Image row=\"0\" col=\"0\" marginTop=\"-40\" height=\"180\" stretch=\"aspectFill\"\n            class=\"card-img\" [src]=\"BIZ[0].profile[0].images[0].url\"></Image>\n\n            <GridLayout class=\"anim-itemInfo p-l-4\" marginTop=\"15\" row=\"1\"\n                width=\"100%\" columns=\"auto,*\" rows=\"*,*,*,*,*,*\"\n                verticalAlignment=\"center\">\n                <Label row=\"0\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].name  || 'business category'}}\"></Label>\n                <Label row=\"1\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].address  || 'business address'}}\"></Label>\n                <Label row=\"2\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].phone  || 'business phone'}}\"></Label>\n                <Label row=\"3\" col=\"0\" class=\"item-category\" text=\"{{BIZ[0].profile[0].email  || 'no email'}}\"></Label>\n\n            </GridLayout>\n\n            <StackLayout row=\"2\" *ngIf=\"BIZ[0].profile[0].verified<1\">\n              <Label class=\"item-category\" text=\"we'll call your business, enter the code you receive to verify this business\" textWrap=\"true\"></Label>\n\n              <Button text=\"verify biz\" (tap)=\"vYELP()\" horizontalAlignment=\"stretch\" class=\"-primary\"></Button>\n\n            </StackLayout>\n    </GridLayout>\n\n</StackLayout>\n\n<StackLayout class=\"main\" verticalAlignment=\"top\" *ngIf=\"showBizForm\">\n\n  <GridLayout rows=\"*,*,*,*\" columns=\"*\">\n\n    <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n      <Label text=\"creating your business profile\" class=\"h3 text-center\" horizontalAlignment=\"stretch\"></Label>\n    </StackLayout>\n\n    <StackLayout row=\"1\">\n      <GridLayout rows=\"*, *, *, *, *,*,*\" columns=\"80, *\" class=\"form\">\n\n        <ListPicker  row=\"0\" colSpan=\"2\" [items]=\"bizType\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexChanged($event)\"></ListPicker>\n        <Label row=\"1\" col=\"0\" text=\"Name\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"1\" col=\"1\" [(ngModel)]=\"bizName\" hint=\"business name\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"2\" col=\"0\" text=\"Address\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"2\" col=\"1\" [(ngModel)]=\"address\" hint=\"business addrerss\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"3\" col=\"0\" text=\"Phone\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"3\" col=\"1\" [(ngModel)]=\"phone\" hint=\"phone\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Label row=\"4\" col=\"0\" text=\"Email\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"4\" col=\"1\" [(ngModel)]=\"email\" hint=\"your business email\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n\n        <Label row=\"5\" col=\"0\" text=\"Story\" horizontalAlignment=\"right\" class=\"label\" *ngIf=\"bType\"></Label>\n        <TextField row=\"5\" col=\"1\" [(ngModel)]=\"story\" hint=\"your business story\" class=\"input input-border\" *ngIf=\"bType\"></TextField>\n        <Button row=\"6\" colSpan=2 text=\"save\" (tap)=\"gSAVE()\" horizontalAlignment=\"stretch\" class=\"-primary\" *ngIf=\"story\"></Button>\n\n      </GridLayout>\n    </StackLayout>\n    <StackLayout row=\"3\" *ngIf=\"bType=='sex'\">\n      <GridLayout rows=\"*, auto, auto\">\n          <ListView [items]=\"imageAssets\" *ngIf=\"imageAssets && imageAssets.length>0\">\n              <ng-template let-image=\"item\" let-i=\"index\">\n                  <GridLayout columns=\"auto, *\">\n                      <Image\n                          [width]=\"thumbSize\"\n                          [height]=\"thumbSize\"\n                          [src]=\"image\" stretch=\"aspectFill\"></Image>\n                      <Label col=\"1\" [text]=\"'image ' + i\"></Label>\n                  </GridLayout>\n              </ng-template>\n          </ListView>\n          <Button row=\"2\" text=\"save\" (tap)=\"save()\" horizontalAlignment=\"center\" class=\"-primary\"></Button>\n      </GridLayout>\n    </StackLayout>\n  </GridLayout>\n\n</StackLayout>\n"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = ".close {\n    font-size: 20;\n    color: rgb(226, 229, 229);\n    margin: 15 0 0 15;\n}\n\nTextView {\n    border-width: 1;\n    border-color: #ffffff;\n}\n\n.description-text {\n    font-size: 14;\n    font-weight: bold;\n    color: black;\n}\n\n.description-icon {\n    font-size: 16;\n    font-weight: bold;\n    color: #3e9edb;\n    margin-right: 8;\n    vertical-align: center;\n}\n\n.description-value {\n    font-size: 14;\n    color: black;\n}\n\n.rate {\n    padding-top: 3;\n    margin: 0;\n    color: #FFE900;\n    font-size: 18;\n}\n\n.rating-value {\n    margin-left: 5;\n}\n\n.liked-active {\n    color: #4080FF;\n}\n\n.heart-active {\n    color: #b51213;\n}\n\n.default {\n    color: #828282;\n}\n\n.layout {\n    vertical-align: bottom;\n    color: #828282;\n    font-size: 14;\n    height: 30;\n    padding: 5 0 5 0;\n}\n\n.like-icon {\n    vertical-align: bottom;\n    height: 30;\n    font-size: 16;\n    margin-right: 2;\n    padding: 5 5 5 5;\n}\n\n.item-name {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.item-category {\n    font-size: 14;\n    color: #000;\n}\n\n.category-icon {\n    text-align: center;\n    padding-top: 5;\n    color: white;\n    vertical-align: center;\n    font-size: 25;\n    border-width: 1;\n    border-color: #ffffff;\n    border-radius: 50%;\n    margin-top: 4;\n    margin-right: 15;\n    width: 40;\n    height: 40;\n}\n\n.content {\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 3;\n    /* margin-top: 16; */\n}\n\n.card-img {\n    width: 100%;\n    height: 250;\n    margin-bottom: 5;\n}\n\n.card-img-thumb {\n    background-color: #828282;\n    vertical-align: center;\n    border-radius: 5;\n    width: 130;\n    height: 70;\n    margin-left: 5;\n}\n\n.line {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n\n.lineBreak {\n    height: 0.5;\n    border: none;\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n}\n\n.anim-page {\n    background-color: #d4d6d8;\n    animation-name: key-page;\n    animation-duration: 2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-page {\n    0% {\n        background-color: #dadada;\n    }\n\n    20% {\n        background-color: #dbd2d5;\n    }\n\n    100% {\n        background-color: white;\n    }\n}\n\n.anim-cover {\n    opacity: 0;\n    animation-name: key-cover;\n    animation-duration: 1;\n    animation-delay: 0.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-cover {\n    0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-images {\n    opacity: 0;\n    animation-name: key-images;\n    animation-duration: 1;\n    animation-delay: 0.7;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-images {\n    0% {\n        opacity: 0;\n        transform: translate(0, 550) scale(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    30% {\n        opacity: 0.5;\n        transform: scale(0.6, 0.6);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0) scale(1, 1);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-itemInfo {\n    opacity: 0;\n    animation-name: key-itemInfo;\n    animation-duration: 1;\n    animation-delay: 1.2;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-itemInfo {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-likes {\n    opacity: 0;\n    animation-name: key-likes;\n    animation-duration: 1;\n    animation-delay: 1.5;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-likes {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n\n.anim-content {\n    opacity: 0;\n    animation-name: key-content;\n    animation-duration: 1;\n    animation-delay: 1.8;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n\n@keyframes key-content {\n    0% {\n        opacity: 0;\n        transform: translate(50, 50);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0);\n        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n    }\n}\n.picker {\n    background-color: blanchedalmond;\n    color: red;\n    border-color: brown;\n    border-radius: 20;\n    border-width: 2;\n    width: 200;\n    height: 100;\n    vertical-align: middle;\n}\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"Support\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\"></Label>\n      </StackLayout>\n\n      <StackLayout orientation=\"vertical\" row=\"2\">\n\n        <CardView  class=\"p-t-20\">\n          <StackLayout>\n            <Label text=\"Give us  a call 24/7 if you need help (415-509-4812)\" class=\"h3 p-10\" horizontalAlignment=\"stretch\"  textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          </StackLayout>\n\n        </CardView>\n      </StackLayout>\n\n    </GridLayout>\n    </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Grabbit\" class=\"h1\">\n\n</ActionBar>\n<GridLayout rows=\"*,*\" columns=\"*\">\n  <ScrollView orientation=\"vertical\">\n    <GridLayout rows=\"*,*,*,*,*,*,*\" columns=\"*\">\n      <StackLayout orientation=\"vertical\" row=\"0\" backgroundColor=\"#F1F1F1\">\n\n        <Label text=\"Privacy Policy\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"type=='privacy'\"></Label>\n        <Label text=\"User Agreement\" class=\"h3 text-center p-t-20 p-b-20\" horizontalAlignment=\"stretch\" *ngIf=\"type!='privacy'\"></Label>\n      </StackLayout>\n\n      <StackLayout row=\"2\">\n        <GridLayout rows=\"*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,\" columns=\"*\">\n          <Label row=\"0\" *ngIf=\"type=='privacy'\" text=\"Grabbit.cheap ('Grabbit') is a service provided by ProducTanks LLC. We acknowledge and respect your personal privacy. This Privacy Policy describes all aspects relating to gathering information while you're visiting Grabbit. Please read this Privacy Policy before using the Grabbit app/website or submitting any personal information. By using the Grabbit app/website, you accept and consent to the practices described in this Privacy Policy. By your continued use you expressly consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy. If you do not agree with these practices you are free to discontinue your use of the Grabbit app/website at any time. If you have questions about our privacy policy, please email us at support@grabbit.cheap.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"1\" *ngIf=\"type=='privacy'\" text=\"You may visit Grabbit at any time without intentionally revealing any personal information about yourself. However, when you visit our website, we may collect and store your computer and connection information, statistics on page views, traffic to and from Grabbit, advertisement data, IP address and standard web log information and information from other companies, such as demographic and navigation data. For you to actively participate in Grabbit we do need some of your personal information. Once you provide us with your required personal information, you are no longer anonymous. In providing us with your personal information, you consent to the transfer and storage of such information on our servers. When you register on Grabbit, we will collect the following required information: email address, first and last name, date of birth, and password; all transactional information based on your activities on Grabbit; shipping, billing and other information relating to any purchase or shipping; any correspondence sent to us; financial information, such as your credit card information; and other supplemental information from third parties.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"2\" *ngIf=\"type=='privacy'\" text=\"Our purpose for collecting personal information is to provide you with a safe, efficient, and customized experience. By signing up, you agree that we may use your personal information to: provide the services and customer support you request; resolve disputes, collect fees, and troubleshoot problems; prevent potentially prohibited or illegal activities, and enforce our Terms & Conditions; customize, measure and improve our services, content and advertising; inform you about our services, targeted marketing, service updates, and promotions; and compare information and verify it with third parties for accuracy.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"3\"  *ngIf=\"type=='privacy'\" text=\"We may disclose personal information to respond to legal requirements, enforce our Terms & Conditions and Privacy Policy, respond to claims that a listing or other content violates the rights of others, or protect anyone's rights, property, or safety. This information will be disclosed under applicable laws and regulations.\nWe may also share your personal information with third parties assisting our business operations under contract, including but not limited to fraud investigations and debt collection, with law enforcement or other governmental officials if required by law, and with other business entities, should we plan to merge with or be acquired by that business entity.\nWe do not share your personal information with third party advertisers.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"4\" *ngIf=\"type=='privacy'\" text=\"Once you have been approved as a registered user with Grabbit, you will be required to choose a user name. This user name will be displayed throughout Grabbit and therefore provided to the public. If you win an auction, Grabbit will display the number of bids and dollar value of those bids when the auction ends. Unless you associate your user name with your personal information, other users will not be able to personally identify your activities on Grabbit. When visiting Grabbit from a public or shared computer, certain information about you, such as your user name, may also be visible to others who may use that computer after your use. It is your responsibility to ensure private information is removed from the public or shared computer should you choose to use one.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n          <Label row=\"5\" *ngIf=\"type=='privacy'\" text=\"Upon closing your account, Grabbit will remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law. We do retain personal information from closed accounts to comply with law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations, enforce our Terms & Conditions, and take other actions otherwise permitted by law.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n          <Label row=\"6\" *ngIf=\"type=='privacy'\" text=\"Your Grabbit account and profile and the information contained therein are password protected. Please note that you are not permitted to provide your password to anyone else. Grabbit will never ask for your password in e-mail or over the phone. Please remember to log out of your account and to close your Internet browser window when you leave the Grabbit site; this is especially important if you use a PC in public locations. We assume no liability for the abuse of login data and passwords used.\n\nGrabbit treats data as an asset that must be highly protected. We use security measures to protect your personal information against unauthorized access and disclosure. However, although we work very hard to protect your privacy, we do not promise, and you should not expect, that your personal information or private communications will always remain private.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n\n          <Label row=\"7\" *ngIf=\"type=='privacy'\" text=\"You can access, review and change most of your personal information by logging on to  at any time. However, some of your personal information can only be changed by contacting our Customer Service. Accurate information is required for billing and delivery purposes. You are required to promptly update your personal information if changes occur or information is inaccurate.\"\n            class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n\n\n          <Label row=\"8\" *ngIf=\"type!='privacy'\" text=\"Give us  a call 24/7 if you need help (415-509-4812)\" class=\"h3 p-10\" horizontalAlignment=\"stretch\" textWrap=\"true\" lineHeight=\"15\"></Label>\n\n        </GridLayout>\n\n          </StackLayout>\n    </GridLayout>\n  </ScrollView>\n</GridLayout>\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n  font-family: 'Font Awesome 5 Free', 'fa-solid-900';\n  font-weight: 900;\n}\n.gameImage {\n    width:25%;\n    margin: 10px;\n    border:5px solid red;\n    border-radius: 500px;\n    -webkit-border-radius: 500px;\n    -moz-border-radius: 500px;\n}\n\n.textBold{\n  font-weight: bold;\n}\n\n.grab{\n  /* Oval: */\nbackground: #F25222;\nborder-radius: 500px;\ncolor:white;\nfont-weight: bold;\nwidth:100px;\nheight:200px\n}\n\n.slap{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#F2F022;\nfont-weight: bold;\n\n\n}\n.sneak{\n  /* Oval: */\nbackground: #F2226B;\nborder-radius: 500px;\ncolor:#22F227;\nfont-weight: bold;\n\n\n}\n.avatars{\n  /* user: */\nbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);\nheight:auto;\nwidth:200px\n\n}\n"

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpHeaders */ "c"]({
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__[/* throwError */ "a"])(errMsg);
    };
    GameProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpClient */ "a"] }
    ]; };
    GameProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__[/* HttpClient */ "a"]])
    ], GameProvider);
    return GameProvider;
}());



/***/ })

},[[297,2,0]]]);