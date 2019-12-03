webpackHotUpdate(0,{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/element-registry");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nstudio/nativescript-cardview/cardview.js");
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/nativescript-clipboard/clipboard.js");
/* harmony import */ var nativescript_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/tns-core-modules/timer/timer.js");
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(timer__WEBPACK_IMPORTED_MODULE_12__);



 // used to describe at what accuracy the location should be get



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__["registerElement"])('CardView', function () { return _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__["CardView"]; });
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__["registerElement"])("PullToRefresh", function () { return __webpack_require__("../node_modules/@nstudio/nativescript-pulltorefresh/pulltorefresh.js").PullToRefresh; });

var localStorage = __webpack_require__("tns-core-modules/application-settings");


// import { timer } from 'rxjs/observable/timer';




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_game, zone, cd, router, page) {
        this._game = _game;
        this.zone = zone;
        this.cd = cd;
        this.router = router;
        this.page = page;
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
        // Tab Contents and Properties
        this.tabContainer = {
            backgroundColor: '#F1F1F1',
            focusColor: '#F1F1F1'
        };
        this.tabList = [
            { text: String.fromCharCode(0xf555), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf46d), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf441), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf007), backgroundColor: '#FFF', color: '#DC7905' },
            { text: String.fromCharCode(0xf79c), backgroundColor: '#FFF', color: '#DC7905' }
        ];
        this.currentTabIndex = 2;
        this.defaultSelected = 2;
        this.locations = [];
        this.watchIds = [];
        this.buyGrabs = 0;
        this.buySlaps = 0;
        this.buySneaks = 0;
        this.math = Math;
        this.$game = _game;
        this.$gType = 'global';
        this.showBuyTools = false;
        this.showCreate = false;
        this.liveGame = 0;
    }
    // --------------------------------------------------------------------
    // Hooks
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.initializeTabBar();
    };
    HomeComponent.prototype.geo = function () {
        var _this = this;
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["isEnabled"]().then(function (isEnabled) {
            if (!isEnabled) {
                nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["enableLocationRequest"](true, true).then(function () {
                    console.log("User Enabled Location Service");
                }, function (e) {
                    _this.pop(e.message, 'error');
                    console.log("Error: " + (e.message || e));
                }).catch(function (ex) {
                    console.log("Unable to Enable Location", ex);
                });
            }
        }, function (e) {
            _this.pop(e.message, 'error');
            console.log("Error: " + (e.message || e));
        });
    };
    HomeComponent.prototype.bGeo = function () {
        var _this = this;
        var that = this;
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["getCurrentLocation"]({
            desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_3__["Accuracy"].high,
            maximumAge: 5000,
            timeout: 10000
        }).then(function (loc) {
            if (loc) {
                that.locations.push(loc);
                _this.lat = loc.latitude;
                _this.lng = loc.longitude;
                localStorage.setString('lat', JSON.stringify(_this.lat));
                localStorage.setString('lng', JSON.stringify(_this.lng));
                _this.gStorage();
                // console.log(loc)
            }
            else {
                _this.bGAMES();
                console.log('no loc');
            }
        }, function (e) {
            _this.pop(e.message, 'error');
            console.log("Error: " + (e.message || e));
        });
    };
    // --------------------------------------------------------------------
    // get stored  info
    HomeComponent.prototype.gStorage = function () {
        this.token = localStorage.getString('token');
        this.name = localStorage.getString('name');
        this.user = localStorage.getString('user');
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["isAndroid"]) {
            console.log("android");
            this.device = "android495775qafef4bi9";
        }
        else {
            console.log("ios");
            this.device = "anfeoboeuab30r3u";
        }
        // this.device = getUUID();
        if (this.user) {
            console.log("got user id stored");
            this.gUSER();
            this.bGAMES();
        }
        else {
            console.log("no users");
            this.bGAMES();
        }
    };
    // --------------------------------------------------------------------
    // get user
    HomeComponent.prototype.gUSER = function () {
        var _this = this;
        console.log("getting the user");
        this.$game.gUSER(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    var USER = jordi.payload[0];
                    _this.WINS = jordi.payload[2];
                    _this.DUSER = USER;
                    // console.log(USER)
                    _this.name = USER.profile.name || 'no user name set';
                    _this.avatar = USER.profile.avatar || '~/assets/imgs/avatars/alien_02.png';
                    _this.wins = USER.profile.wins || 0;
                    _this.practiceCount = USER.profile.practice || 0;
                    _this.gamesPlayed = USER.profile.plays || 0;
                    _this.email = USER.profile.email || 'no email set';
                    _this.admin = USER.profile.admin;
                    _this.btc_value = jordi.btc_value;
                    _this.btc_fee_usd = jordi.btc_fee_usd;
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.zone.run(function () {
                    _this.name = 'n/a';
                    _this.avatar = '~/assets/imgs/avatars/alien_02.png';
                    _this.wins = '0';
                    _this.practiceCount = '0';
                    _this.cd.detectChanges();
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    // --------------------------------------------------------------------
    // set avataqr
    HomeComponent.prototype.onAvatar = function (avatar) {
        var _this = this;
        if (!this.user) {
            this.pop("log in to set your avatar", "error");
        }
        else {
            this.$game.onAvatar(this.token, this.user, avatar)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.zone.run(function () {
                        _this.pop(jordi.message, 'success');
                        _this.gUSER();
                        _this.cd.detectChanges();
                    });
                }
                else {
                    _this.pop(jordi.message, 'error');
                }
            });
        }
    };
    HomeComponent.prototype.onEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["action"]({
                    message: "Edit Profile",
                    cancelButtonText: "cancel",
                    actions: ["edit user name", "edit email"]
                }).then(function (result) {
                    // console.log("Dialog result: " + result);
                    if (result == "edit user name") {
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["prompt"]({
                            title: "Edit User Name",
                            message: "choose a suitable user name",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["inputType"].text
                        }).then(function (r) {
                            if (r.result) {
                                _this.onEditComplete(r.text, 1);
                            }
                        });
                    }
                    else if (result == "edit email") {
                        //Do action2
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["prompt"]({
                            title: "Edit Email",
                            message: "a confirmation code will be sent to your email address",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["inputType"].text
                        }).then(function (r) {
                            if (r.result) {
                                _this.onEditComplete(r.text, 2);
                            }
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.onBuyTools = function () {
        var _this = this;
        if (this.buySlaps < 1 && this.buyGrabs < 1 && this.buySneaks < 1) {
            this.pop("must buy 1 or more tools", 'error');
        }
        else {
            var ACTIONS = ["pay with bitcoin", "pay with owo"];
            var payType_1;
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["action"]({
                message: "Payment Options",
                cancelButtonText: "cancel",
                actions: ACTIONS
            }).then(function (result) {
                if (result == 'pay with  bitcoin') {
                    payType_1 = 1;
                }
                else if (result == 'pay with  owo') {
                    payType_1 = 2;
                }
                _this.$game.onPay(_this.token, _this.user, _this.buyGrabs, _this.buySlaps, _this.buySneaks, payType_1)
                    .subscribe(function (jordi) {
                    if (jordi.success) {
                        _this.zone.run(function () {
                            _this.pop(jordi.message, 'success');
                            _this.gUSER();
                            _this.cd.detectChanges();
                        });
                    }
                    else {
                        _this.pop(jordi.message, 'error');
                    }
                });
            });
        }
    };
    HomeComponent.prototype.onCreate = function (type) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/create/' + type], {
                animated: true,
                clearHistory: false
            });
        }, 300);
    };
    HomeComponent.prototype.onMenu = function () {
        var _this = this;
        var ACTIONS;
        if (this.user) {
            if (this.admin > 0) {
                ACTIONS = ["admin", "chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"];
            }
            else {
                ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"];
            }
        }
        else {
            ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy"];
        }
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["action"]({
            message: "Menu",
            cancelButtonText: "cancel",
            actions: ACTIONS
        }).then(function (result) {
            if (result == 'logout') {
                localStorage.remove("user");
                localStorage.remove('token');
                localStorage.remove('name');
                setTimeout(function () {
                    _this.pop("you are logged not out", 'success');
                });
            }
            else if (result == 'about us') {
                setTimeout(function () {
                    console.log("about clicked");
                    _this.router.navigate(['/about'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
        });
    };
    HomeComponent.prototype.onEditComplete = function (text, type) {
        var _this = this;
        this.$game.onEdit(this.token, this.user, text, type)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.pop(jordi.message, 'success');
                    _this.gUSER();
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.pop(jordi.message, 'error');
            }
        });
    };
    // --------------------------------------------------------------------
    // bring global game
    HomeComponent.prototype.bGAMES = function () {
        var _this = this;
        this.$game.bGAMES(this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.DGAMES = jordi.payload[0];
                    // console.log(this.DGAMES.length)
                    // if (!this.DGAMES) {
                    //   this.bGAMES()
                    // }
                    _this.GLOBALGAMES = _this.DGAMES;
                    console.log(_this.GLOBALGAMES.length);
                    // console.log(jordi.payload[1])
                    _this.LOCALGAMES = jordi.payload[0] || '[]';
                    _this.Dgame = _this.DGAMES[Math.floor(Math.random() * _this.DGAMES.length)];
                    // console.log(this.Dgame)
                    _this.$gID = _this.Dgame.game;
                    _this.title = _this.Dgame.details.title;
                    _this.image = _this.Dgame.details.images[0].url;
                    _this.playersMax = _this.Dgame.details.playersMax;
                    _this.playersMin = _this.Dgame.details.playersMin;
                    _this.playersReady = _this.Dgame.details.playersReady;
                    // console.log(this.$gID)
                    _this.runTimer = true;
                    _this.onTimer();
                    _this.cd.detectChanges();
                });
            }
            else {
                console.log('no games available yets');
            }
        });
    };
    // --------------------------------------------------------------------
    // Game  Action
    HomeComponent.prototype.onTimer = function () {
        var _this = this;
        if (this.OTIMER) {
            timer__WEBPACK_IMPORTED_MODULE_12__["clearTimeout"](this.OTIMER);
        }
        this.OTIMER = timer__WEBPACK_IMPORTED_MODULE_12__["setInterval"](function () {
            _this.$game.onTimer(_this.token, _this.user, _this.$gID)
                .subscribe(function (jordi) {
                if (jordi.success) {
                    _this.zone.run(function () {
                        _this.Dgame = jordi.payload[0];
                        if (_this.Dgame) {
                            // console.log(this.Dgame, this.$gID)
                            _this.title = _this.Dgame.details.title;
                            _this.image = _this.Dgame.details.images[0].url;
                            _this.playersMax = _this.Dgame.details.playersMax;
                            _this.playersMin = _this.Dgame.details.playersMin;
                            _this.playersReady = _this.Dgame.details.playersReady;
                            _this.GAMEFULL = _this.Dgame.details.full;
                            _this.GAMESTARTED = _this.Dgame.details.started;
                            _this.GAMECOMPLETE = _this.Dgame.details.completed;
                            _this.liveGame = jordi.liveGame;
                            _this.PLAYERS = _this.Dgame.players;
                            _this.playersHeight = (_this.PLAYERS.length * 150) + 900;
                            _this.USERINGAME = _this.PLAYERS.find(function (x) { return x.user == _this.user; });
                            _this.gameTime = jordi.timer;
                            console.log(_this.$gID);
                        }
                        else {
                            // this.Dgame = this.DGAMES[Math.floor(Math.random() * this.DGAMES.length)];
                            // this.$gID = this.Dgame.game
                            // console.log(this.Dgame, this.$gID)
                        }
                        // console.log(jordi.timer)
                        _this.cd.detectChanges();
                    })
                        , console.log("timer running");
                }
                else {
                    console.log("timer error");
                }
            });
        }, 1000);
    };
    HomeComponent.prototype.onPlay = function () {
        var _this = this;
        this.$game.play(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.pop(jordi.message, 'success');
                    _this.cd.detectChanges();
                });
            }
            else {
                if (jordi.type == 1) {
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["prompt"]({
                        title: "Login/Signup",
                        message: "register or login securely  via sms. enter your phone number",
                        okButtonText: "send sms",
                        cancelButtonText: "cancel",
                        inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["inputType"].number
                    }).then(function (r) {
                        if (r.text) {
                            _this.login(r.text);
                        }
                        else {
                        }
                        // console.log("Dialog result: " + r.result + ", text: " + r.text);
                    });
                }
                ///user profile is  not complete
                if (jordi.type == 2) {
                    _this.pop(jordi.message, 'error');
                    _this.zone.run(function () {
                        setTimeout(function () {
                            _this.gUSER();
                            _this.onBottomNavTap(3);
                            _this.cd.detectChanges();
                        }, 2000);
                    });
                }
                ///user is already in this  game
                if (jordi.type == 3) {
                    _this.pop(jordi.message, 'error');
                }
            }
        });
    };
    HomeComponent.prototype.onGrab = function () {
        var _this = this;
        this.$game.onGrab(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    HomeComponent.prototype.onSlap = function () {
        var _this = this;
        this.$game.onSlap(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    HomeComponent.prototype.onSneak = function () {
        var _this = this;
        this.$game.onSneak(this.token, this.user, this.$gID)
            .subscribe(function (jordi) {
            _this.zone.run(function () {
                if (jordi.success) {
                    _this.message = jordi.message;
                }
                else {
                    _this.message = jordi.message;
                }
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
                _this.cd.detectChanges();
            });
        });
    };
    // --------------------------------------------------------------------
    // login/register
    HomeComponent.prototype.login = function (number) {
        var _this = this;
        this.$game.login(number, this.device, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["prompt"]({
                        title: "verify account",
                        message: "enter your login code",
                        okButtonText: "log me in",
                        cancelButtonText: "cancel",
                        inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["inputType"].text
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
    };
    HomeComponent.prototype.loginComplete = function (code) {
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
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["prompt"]({
                            title: "verify account",
                            message: "enter your login code",
                            okButtonText: "log me in",
                            cancelButtonText: "cancel",
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["inputType"].text
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
    HomeComponent.prototype.onCalculate = function () {
        this.buyTotal = (this.buySlaps + this.buyGrabs);
        return this.buyTotal;
    };
    // --------------------------------------------------------------------
    // User Interaction
    // MY: Tabs selected index is changed, e.g. when swipe to navigate.
    HomeComponent.prototype.onSelectedIndexChanged = function (args) {
        var _this = this;
        this.zone.run(function () {
            if (args.newIndex !== _this.currentTabIndex) {
                _this.onBottomNavTap(args.newIndex);
            }
            _this.cd.detectChanges();
        });
    };
    // Tap on a one of the tabs
    HomeComponent.prototype.onBottomNavTap = function (index, duration) {
        var _this = this;
        if (duration === void 0) { duration = 300; }
        this.zone.run(function () {
            if (_this.currentTabIndex !== index) {
                var tabContentsArr = _this.tabContents.toArray();
                // set unfocus to previous index
                tabContentsArr[_this.currentTabIndex].nativeElement.animate(_this.getUnfocusAnimation(_this.currentTabIndex, duration));
                // set focus to current index
                tabContentsArr[index].nativeElement.animate(_this.getFocusAnimation(index, duration));
            }
            // MY: Change the selected index of Tabs when tap on tab strip
            if (_this.tabs.nativeElement.selectedIndex !== index) {
                _this.tabs.nativeElement.selectedIndex = index;
            }
            _this.centerCircle.nativeElement.animate(_this.getSlideAnimation(index, duration));
            _this.leftTabs.nativeElement.animate(_this.getSlideAnimation(index, duration));
            _this.rightTabs.nativeElement.animate(_this.getSlideAnimation(index, duration));
            _this.centerPatch.nativeElement.animate(_this.getSlideAnimation(index, duration));
            _this.dragCircle.nativeElement.animate(_this.getSlideAnimation(index, duration));
            // set current index to new index
            _this.currentTabIndex = index;
            console.log(index);
            if (index != 2) {
                timer__WEBPACK_IMPORTED_MODULE_12__["clearTimeout"](_this.OTIMER);
            }
            else {
                _this.onTimer();
            }
            _this.cd.detectChanges();
        });
    };
    // Drag the focus circle to one of the tabs
    HomeComponent.prototype.onCenterCirclePan = function (args) {
        var grdLayout = args.object;
        var newX = grdLayout.translateX + args.deltaX - this.prevDeltaX;
        if (args.state === 0) {
            // finger down
            this.prevDeltaX = 0;
        }
        else if (args.state === 2) {
            // finger moving
            grdLayout.translateX = newX;
            this.leftTabs.nativeElement.translateX = newX;
            this.rightTabs.nativeElement.translateX = newX;
            this.centerPatch.nativeElement.translateX = newX;
            this.centerCircle.nativeElement.translateX = newX;
            this.prevDeltaX = args.deltaX;
        }
        else if (args.state === 3) {
            // finger up
            this.prevDeltaX = 0;
            var tabWidth = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs / this.tabList.length;
            var tabSelected = Math.round(Math.abs(newX / tabWidth));
            var translateX = tabSelected * tabWidth;
            if (newX < 0) {
                // pan left
                this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
                // MY: Change the selected index of Tabs when pan left
                this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
            }
            else {
                // pan right
                this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
                // MY: Change the selected index of Tabs when pan right
                this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
            }
        }
    };
    // --------------------------------------------------------------------
    // Tab bar helpers
    HomeComponent.prototype.initializeTabBar = function () {
        // set up base layer
        this.leftTabs.nativeElement.width = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
        // set default selected tab
        var tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
        this.currentTabIndex = this.defaultSelected;
        this.geo();
        this.bGeo();
    };
    HomeComponent.prototype.getSlideAnimation = function (index, duration) {
        return {
            translate: { x: this.getTabTranslateX(index), y: 0 },
            curve: this.animationCurve,
            duration: duration
        };
    };
    HomeComponent.prototype.getFocusAnimation = function (index, duration) {
        return {
            scale: { x: 1.5, y: 1.5 },
            translate: { x: 0, y: -15 },
            duration: duration
        };
    };
    HomeComponent.prototype.getUnfocusAnimation = function (index, duration) {
        return {
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration
        };
    };
    HomeComponent.prototype.getTabTranslateX = function (index) {
        return index * tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs / this.tabList.length - (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_8__["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    HomeComponent.prototype.setGameId = function (gID) {
        var _this = this;
        this.zone.run(function () {
            setTimeout(function () {
                _this.$gID = gID;
                _this.onBottomNavTap(2);
                _this.cd.detectChanges();
            }, 500);
        });
    };
    HomeComponent.prototype.pop = function (message, type) {
        var options = {
            title: type,
            message: message,
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["confirm"])(options).then(function () {
            // console.log("Race chosen!");
        });
    };
    HomeComponent.prototype.onType = function (value) {
        var _this = this;
        this.zone.run(function () {
            if (_this.$gType == 'local') {
                _this.$gType = 'global';
            }
            else {
                _this.$gType = 'local';
            }
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onCopy = function (text) {
        var _this = this;
        Object(nativescript_clipboard__WEBPACK_IMPORTED_MODULE_11__["setText"])(text)
            .then(function () { return _this.pop("copied  to  clipboard", 'success'); })
            .catch(function (err) { return _this.pop("error copying, try again", 'error'); });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.runTimer = false;
        if (this.OTIMER) {
            timer__WEBPACK_IMPORTED_MODULE_12__["clearTimeout"](this.OTIMER);
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_game__WEBPACK_IMPORTED_MODULE_7__["GameProvider"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterExtensions"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_10__["Page"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dragCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "dragCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('leftTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "leftTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rightTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "rightTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerPatch', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerPatch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabBGContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabBGContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tabContents', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeComponent.prototype, "tabContents", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_game__WEBPACK_IMPORTED_MODULE_7__["GameProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_10__["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUduSDtBQUVjO0FBQ0gsQ0FBQywrREFBK0Q7QUFDL0Q7QUFFa0I7QUFDZDtBQUMxRCw2RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLDhFQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsNkZBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBTSwwQkFBTyxDQUFDLHNFQUFxQyxDQUFDLENBQUMsYUFBYSxFQUE1RCxDQUE0RCxDQUFDLENBQUM7QUFHOUM7QUFJdkQsSUFBTSxZQUFZLEdBQUcsbUJBQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ3RCO0FBQzZCO0FBQzdFLGlEQUFpRDtBQUNjO0FBQ2Y7QUFDb0M7QUFDckQ7QUFVL0I7SUFvR0UsdUJBQW1CLEtBQW1CLEVBQVUsSUFBWSxFQUFVLEVBQXFCLEVBQVUsTUFBd0IsRUFBVSxJQUFVO1FBQTlILFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUF4RmpKLGFBQWE7UUFDYixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsdURBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsOEJBQThCO1FBQzlCLGlCQUFZLEdBQUc7WUFDYixlQUFlLEVBQUUsU0FBUztZQUMxQixVQUFV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UUFBbEQsa0VBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsd0RBQVUsRUFBRSxDQUFDO2tDQUFjLHVEQUFTO3NEQUFhO0lBVjNFLGFBQWE7UUFQekIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQztZQUVwQyxlQUFlLEVBQUUscUVBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQzt5Q0FxRzBCLDJEQUFZLEVBQWdCLG9EQUFNLEVBQWMsK0RBQWlCLEVBQWtCLDRFQUFnQixFQUFnQiw4REFBSTtPQXBHdEksYUFBYSxDQW1nQ3pCO0lBQUQsb0JBQUM7Q0FBQTtBQW5nQ3lCIiwiZmlsZSI6IjAuZDMyZDE2ZWQ0NzRkMWVlMWJkNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVN0YXRlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7IC8vIHVzZWQgdG8gZGVzY3JpYmUgYXQgd2hhdCBhY2N1cmFjeSB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIGdldFxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFRlbGVwaG9ueSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcGhvbnknO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XG5cbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcblxuaW1wb3J0IHsgZ2V0VVVJRCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11dWlkJztcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IGdldFRleHQsIHNldFRleHQsIGdldFRleHRTeW5jLCBzZXRUZXh0U3luYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCI7XG5pbXBvcnQgKiBhcyB0aW1lciBmcm9tIFwidGltZXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEsIExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJIb21lXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgndGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlckNpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlckNpcmNsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJhZ0NpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRyYWdDaXJjbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xlZnRUYWJzJywgeyBzdGF0aWM6IHRydWUgfSkgbGVmdFRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JpZ2h0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHJpZ2h0VGFiczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2VudGVyUGF0Y2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJQYXRjaDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiQkdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJCR0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCd0YWJDb250ZW50cycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIC8vIFBhbiBIZWxwZXJcbiAgcHJldkRlbHRhWDogbnVtYmVyID0gMDtcblxuICBhbmltYXRpb25DdXJ2ZSA9IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC4zOCwgLjQ3LCAwLCAxKTtcblxuICAvLyBUYWIgQ29udGVudHMgYW5kIFByb3BlcnRpZXNcbiAgdGFiQ29udGFpbmVyID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLFxuICAgIGZvY3VzQ29sb3I6ICcjRjFGMUYxJ1xuICB9O1xuICB0YWJMaXN0OiB7IHRleHQ6IHN0cmluZywgaWNvbj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBmYWRlQ29sb3I/OiBzdHJpbmcgfVtdID0gW1xuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY1NTUpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY0NmQpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY0NDEpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMDcpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY3OWMpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9XG4gIF07XG5cbiAgY3VycmVudFRhYkluZGV4OiBudW1iZXIgPSAyO1xuICBkZWZhdWx0U2VsZWN0ZWQ6IG51bWJlciA9IDI7XG5cblxuICAkZ2FtZTogYW55XG4gICRnVHlwZTogc3RyaW5nXG4gICRnSUQ6IHN0cmluZ1xuXG4gIHRva2VuOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHVzZXI6IHN0cmluZ1xuICBhdmF0YXI6IHN0cmluZ1xuICBwcmFjdGljZUNvdW50OiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICB3aW5zOiBzdHJpbmdcbiAgY291bnRyeTogc3RyaW5nXG4gIGNpdHk6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgZ2FtZXNQbGF5ZWQ6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcblxuICBsYXQ6IHN0cmluZ1xuICBsbmc6IHN0cmluZ1xuXG4gIERVU0VSOiBhbnlcbiAgREdBTUVTOiBhbnlcbiAgUExBWUVSUzogYW55XG4gIERnYW1lOiBhbnlcbiAgVVNFUklOR0FNRTogYW55XG4gIEdBTUVGVUxMOiBhbnlcbiAgR0FNRVNUQVJURUQ6IGFueVxuICBHQU1FQ09NUExFVEU6IGFueVxuXG4gIEdMT0JBTEdBTUVTOiBbXVxuICBMT0NBTEdBTUVTOiBbXVxuICBXSU5TOiBbXVxuXG4gIE9USU1FUjogYW55XG4gIHRpbWVyOiBhbnlcbiAgZ2FtZVRpbWU6IGFueVxuICBydW5UaW1lcjogYm9vbGVhblxuXG4gIGxvY2F0aW9ucyA9IFtdO1xuICB3YXRjaElkcyA9IFtdO1xuXG4gIHRpdGxlOiBhbnlcbiAgaW1hZ2U6IGFueVxuICBwbGF5ZXJzTWluOiBzdHJpbmdcbiAgcGxheWVyc1JlYWR5OiBzdHJpbmdcbiAgcGxheWVyc01heDogc3RyaW5nXG5cbiAgZGV2aWNlOiBhbnlcbiAgYWRtaW46IGFueVxuXG4gIHBsYXllcnNIZWlnaHQ6IGFueVxuXG4gIHNob3dCdXlUb29sczogYm9vbGVhblxuICBzaG93Q3JlYXRlOiBib29sZWFuXG4gIGxpdmVHYW1lOiBhbnlcblxuICBidXlHcmFicyA9IDBcbiAgYnV5U2xhcHMgPSAwXG4gIGJ1eVNuZWFrcyA9IDBcbiAgYnV5VG90YWw6IGFueVxuICBidGNfdmFsdWU6IHN0cmluZ1xuICBidGNfZmVlOiBzdHJpbmdcbiAgYnRjX2ZlZV91c2Q6IHN0cmluZ1xuXG4gIG1hdGggPSBNYXRoXG5cbiAgY29uc3RydWN0b3IocHVibGljIF9nYW1lOiBHYW1lUHJvdmlkZXIsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgdGhpcy4kZ2FtZSA9IF9nYW1lXG4gICAgdGhpcy4kZ1R5cGUgPSAnZ2xvYmFsJ1xuICAgIHRoaXMuc2hvd0J1eVRvb2xzID0gZmFsc2VcbiAgICB0aGlzLnNob3dDcmVhdGUgPSBmYWxzZVxuICAgIHRoaXMubGl2ZUdhbWUgPSAwXG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEhvb2tzXG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5pbml0aWFsaXplVGFiQmFyKCk7XG5cbiAgfVxuXG4gIHB1YmxpYyBnZW8oKSB7XG5cbiAgICBnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKChpc0VuYWJsZWQpID0+IHtcbiAgICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCh0cnVlLCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgRW5hYmxlZCBMb2NhdGlvbiBTZXJ2aWNlXCIpO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMucG9wKGUubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgIH0pLmNhdGNoKGV4ID0+IHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIEVuYWJsZSBMb2NhdGlvblwiLCBleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIChlKSA9PiB7XG4gICAgICB0aGlzLnBvcChlLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGJHZW8oKSB7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcbiAgICAgIG1heGltdW1BZ2U6IDUwMDAsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pLnRoZW4oKGxvYzogYW55KSA9PiB7XG4gICAgICBpZiAobG9jKSB7XG5cbiAgICAgICAgdGhhdC5sb2NhdGlvbnMucHVzaChsb2MpO1xuICAgICAgICB0aGlzLmxhdCA9IGxvYy5sYXRpdHVkZVxuICAgICAgICB0aGlzLmxuZyA9IGxvYy5sb25naXR1ZGVcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygnbGF0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXQpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCdsbmcnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxuZykpXG5cbiAgICAgICAgdGhpcy5nU3RvcmFnZSgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvYylcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5iR0FNRVMoKVxuICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jJylcblxuICAgICAgfVxuICAgIH0sIChlKSA9PiB7XG5cbiAgICAgIHRoaXMucG9wKGUubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCBzdG9yZWQgIGluZm9cbiAgZ1N0b3JhZ2UoKSB7XG5cbiAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndG9rZW4nKVxuICAgIHRoaXMubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ25hbWUnKVxuICAgIHRoaXMudXNlciA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3VzZXInKVxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZFwiKVxuICAgICAgdGhpcy5kZXZpY2UgPSBcImFuZHJvaWQ0OTU3NzVxYWZlZjRiaTlcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW9zXCIpXG5cbiAgICAgIHRoaXMuZGV2aWNlID0gXCJhbmZlb2JvZXVhYjMwcjN1XCJcblxuICAgIH1cblxuICAgIC8vIHRoaXMuZGV2aWNlID0gZ2V0VVVJRCgpO1xuXG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJnb3QgdXNlciBpZCBzdG9yZWRcIilcbiAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgdGhpcy5iR0FNRVMoKVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc29sZS5sb2coXCJubyB1c2Vyc1wiKVxuXG4gICAgICB0aGlzLmJHQU1FUygpXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlclwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCBVU0VSID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICB0aGlzLldJTlMgPSBqb3JkaS5wYXlsb2FkWzJdXG4gICAgICAgICAgICAgIHRoaXMuRFVTRVIgPSBVU0VSXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFVTRVIpXG5cbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gVVNFUi5wcm9maWxlLm5hbWUgfHwgJ25vIHVzZXIgbmFtZSBzZXQnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gVVNFUi5wcm9maWxlLmF2YXRhciB8fCAnfi9hc3NldHMvaW1ncy9hdmF0YXJzL2FsaWVuXzAyLnBuZydcbiAgICAgICAgICAgICAgdGhpcy53aW5zID0gVVNFUi5wcm9maWxlLndpbnMgfHwgMFxuICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlQ291bnQgPSBVU0VSLnByb2ZpbGUucHJhY3RpY2UgfHwgMFxuICAgICAgICAgICAgICB0aGlzLmdhbWVzUGxheWVkID0gVVNFUi5wcm9maWxlLnBsYXlzIHx8IDBcbiAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IFVTRVIucHJvZmlsZS5lbWFpbCB8fCAnbm8gZW1haWwgc2V0J1xuICAgICAgICAgICAgICB0aGlzLmFkbWluID0gVVNFUi5wcm9maWxlLmFkbWluXG4gICAgICAgICAgICAgIHRoaXMuYnRjX3ZhbHVlID0gam9yZGkuYnRjX3ZhbHVlXG4gICAgICAgICAgICAgIHRoaXMuYnRjX2ZlZV91c2QgPSBqb3JkaS5idGNfZmVlX3VzZFxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSAnbi9hJ1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9ICd+L2Fzc2V0cy9pbWdzL2F2YXRhcnMvYWxpZW5fMDIucG5nJ1xuICAgICAgICAgICAgICB0aGlzLndpbnMgPSAnMCdcbiAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZUNvdW50ID0gJzAnXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgfSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBzZXQgYXZhdGFxclxuXG4gIG9uQXZhdGFyKGF2YXRhcjogc3RyaW5nKSB7XG5cbiAgICBpZiAoIXRoaXMudXNlcikge1xuXG4gICAgICB0aGlzLnBvcChcImxvZyBpbiB0byBzZXQgeW91ciBhdmF0YXJcIiwgXCJlcnJvclwiKVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy4kZ2FtZS5vbkF2YXRhcih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIGF2YXRhcilcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgb25FZGl0KCkge1xuXG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgbWVzc2FnZTogXCJFZGl0IFByb2ZpbGVcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBhY3Rpb25zOiBbXCJlZGl0IHVzZXIgbmFtZVwiLCBcImVkaXQgZW1haWxcIl1cbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdCA9PSBcImVkaXQgdXNlciBuYW1lXCIpIHtcblxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgdGl0bGU6IFwiRWRpdCBVc2VyIE5hbWVcIixcbiAgICAgICAgICBtZXNzYWdlOiBcImNob29zZSBhIHN1aXRhYmxlIHVzZXIgbmFtZVwiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJzYXZlXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICBkZWZhdWx0VGV4dDogbnVsbCxcbiAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfSkudGhlbigocikgPT4ge1xuXG4gICAgICAgICAgaWYgKHIucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLm9uRWRpdENvbXBsZXRlKHIudGV4dCwgMSlcblxuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJlZGl0IGVtYWlsXCIpIHtcbiAgICAgICAgLy9EbyBhY3Rpb24yXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICB0aXRsZTogXCJFZGl0IEVtYWlsXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJhIGNvbmZpcm1hdGlvbiBjb2RlIHdpbGwgYmUgc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3NcIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwic2F2ZVwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IG51bGwsXG4gICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICBpZiAoci5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMub25FZGl0Q29tcGxldGUoci50ZXh0LCAyKVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBvbkJ1eVRvb2xzKCkge1xuXG4gICAgaWYgKHRoaXMuYnV5U2xhcHMgPCAxICYmIHRoaXMuYnV5R3JhYnMgPCAxICYmIHRoaXMuYnV5U25lYWtzIDwgMSkge1xuXG4gICAgICB0aGlzLnBvcChcIm11c3QgYnV5IDEgb3IgbW9yZSB0b29sc1wiLCAnZXJyb3InKVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGxldCBBQ1RJT05TID0gW1wicGF5IHdpdGggYml0Y29pblwiLCBcInBheSB3aXRoIG93b1wiXVxuICAgICAgbGV0IHBheVR5cGU7XG5cbiAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgbWVzc2FnZTogXCJQYXltZW50IE9wdGlvbnNcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgYWN0aW9uczogQUNUSU9OU1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ3BheSB3aXRoICBiaXRjb2luJykge1xuICAgICAgICAgIHBheVR5cGUgPSAxXG5cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ3BheSB3aXRoICBvd28nKSB7XG5cbiAgICAgICAgICBwYXlUeXBlID0gMlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZ2FtZS5vblBheSh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuYnV5R3JhYnMsIHRoaXMuYnV5U2xhcHMsIHRoaXMuYnV5U25lYWtzLCBwYXlUeXBlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIG9uQ3JlYXRlKHR5cGU6IGFueSkge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZS8nICsgdHlwZV0sIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIG9uTWVudSgpIHtcbiAgICBsZXQgQUNUSU9OUztcblxuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGlmICh0aGlzLmFkbWluID4gMCkge1xuICAgICAgICBBQ1RJT05TID0gW1wiYWRtaW5cIiwgXCJjaGF0XCIsIFwiaG93IHRvIHBsYXlcIiwgXCJzdXBwb3J0XCIsIFwiYWJvdXQgdXNcIiwgXCJ1c2VyIGFncmVlbWVudFwiLCBcInByaXZhY3kgcG9saWN5XCIsIFwibG9nb3V0XCJdXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFDVElPTlMgPSBbXCJjaGF0XCIsIFwiaG93IHRvIHBsYXlcIiwgXCJzdXBwb3J0XCIsIFwiYWJvdXQgdXNcIiwgXCJ1c2VyIGFncmVlbWVudFwiLCBcInByaXZhY3kgcG9saWN5XCIsIFwibG9nb3V0XCJdXG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgQUNUSU9OUyA9IFtcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIl1cbiAgICB9XG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgbWVzc2FnZTogXCJNZW51XCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgYWN0aW9uczogQUNUSU9OU1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAnbG9nb3V0Jykge1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoXCJ1c2VyXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoJ25hbWUnKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9wKFwieW91IGFyZSBsb2dnZWQgbm90IG91dFwiLCAnc3VjY2VzcycpXG4gICAgICAgIH0pXG5cbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09ICdhYm91dCB1cycpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IGNsaWNrZWRcIilcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Fib3V0J10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG9uRWRpdENvbXBsZXRlKHRleHQ6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uRWRpdCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRleHQsIHR5cGUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGJyaW5nIGdsb2JhbCBnYW1lXG4gIGJHQU1FUygpIHtcblxuICAgIHRoaXMuJGdhbWUuYkdBTUVTKHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuREdBTUVTID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkRHQU1FUy5sZW5ndGgpXG4gICAgICAgICAgICAgIC8vIGlmICghdGhpcy5ER0FNRVMpIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmJHQU1FUygpXG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICB0aGlzLkdMT0JBTEdBTUVTID0gdGhpcy5ER0FNRVNcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5HTE9CQUxHQU1FUy5sZW5ndGgpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnBheWxvYWRbMV0pXG4gICAgICAgICAgICAgIHRoaXMuTE9DQUxHQU1FUyA9IGpvcmRpLnBheWxvYWRbMF0gfHwgJ1tdJ1xuICAgICAgICAgICAgICB0aGlzLkRnYW1lID0gdGhpcy5ER0FNRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ER0FNRVMubGVuZ3RoKV07XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUpXG5cbiAgICAgICAgICAgICAgdGhpcy4kZ0lEID0gdGhpcy5EZ2FtZS5nYW1lXG4gICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLkRnYW1lLmRldGFpbHMudGl0bGVcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuRGdhbWUuZGV0YWlscy5pbWFnZXNbMF0udXJsXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc01heCA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWF4XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc01pbiA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWluXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc1JlYWR5ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNSZWFkeVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRnSUQpXG4gICAgICAgICAgICAgIHRoaXMucnVuVGltZXIgPSB0cnVlXG4gICAgICAgICAgICAgIHRoaXMub25UaW1lcigpXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZ2FtZXMgYXZhaWxhYmxlIHlldHMnKVxuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHYW1lICBBY3Rpb25cblxuICBvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLk9USU1FUikge1xuICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KHRoaXMuT1RJTUVSKTtcbiAgICB9XG4gICAgdGhpcy5PVElNRVIgPSB0aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICAgIHRoaXMuJGdhbWUub25UaW1lcih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuRGdhbWUgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuRGdhbWUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUsIHRoaXMuJGdJRClcbiAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLkRnYW1lLmRldGFpbHMudGl0bGVcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLkRnYW1lLmRldGFpbHMuaW1hZ2VzWzBdLnVybFxuICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzTWF4ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNNYXhcbiAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc01pbiA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWluXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNSZWFkeSA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzUmVhZHlcbiAgICAgICAgICAgICAgICAgIHRoaXMuR0FNRUZVTEwgPSB0aGlzLkRnYW1lLmRldGFpbHMuZnVsbFxuICAgICAgICAgICAgICAgICAgdGhpcy5HQU1FU1RBUlRFRCA9IHRoaXMuRGdhbWUuZGV0YWlscy5zdGFydGVkXG4gICAgICAgICAgICAgICAgICB0aGlzLkdBTUVDT01QTEVURSA9IHRoaXMuRGdhbWUuZGV0YWlscy5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZUdhbWUgPSBqb3JkaS5saXZlR2FtZVxuICAgICAgICAgICAgICAgICAgdGhpcy5QTEFZRVJTID0gdGhpcy5EZ2FtZS5wbGF5ZXJzXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNIZWlnaHQgPSAodGhpcy5QTEFZRVJTLmxlbmd0aCAqIDE1MCkgKyA5MDBcbiAgICAgICAgICAgICAgICAgIHRoaXMuVVNFUklOR0FNRSA9IHRoaXMuUExBWUVSUy5maW5kKCh4OiBhbnkpID0+IHgudXNlciA9PSB0aGlzLnVzZXIpXG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbWUgPSBqb3JkaS50aW1lclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kZ0lEKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5EZ2FtZSA9IHRoaXMuREdBTUVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuREdBTUVTLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZ0lEID0gdGhpcy5EZ2FtZS5nYW1lXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUsIHRoaXMuJGdJRClcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnRpbWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLCBjb25zb2xlLmxvZyhcInRpbWVyIHJ1bm5pbmdcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lciBlcnJvclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvblBsYXkoKSB7XG5cbiAgICB0aGlzLiRnYW1lLnBsYXkodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnR5cGUgPT0gMSkge1xuXG4gICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMb2dpbi9TaWdudXBcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInJlZ2lzdGVyIG9yIGxvZ2luIHNlY3VyZWx5ICB2aWEgc21zLiBlbnRlciB5b3VyIHBob25lIG51bWJlclwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJzZW5kIHNtc1wiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS5udW1iZXJcbiAgICAgICAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbihyLnRleHQpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vdXNlciBwcm9maWxlIGlzICBub3QgY29tcGxldGVcbiAgICAgICAgICAgIGlmIChqb3JkaS50eXBlID09IDIpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCgzKVxuICAgICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgICAgICB9LCAyMDAwKVxuXG5cbiAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy91c2VyIGlzIGFscmVhZHkgaW4gdGhpcyAgZ2FtZVxuICAgICAgICAgICAgaWYgKGpvcmRpLnR5cGUgPT0gMykge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gIH1cblxuICBvbkdyYWIoKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uR3JhYih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJ1xuXG5cbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICB9XG5cbiAgb25TbGFwKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5vblNsYXAodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcblxuXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIG9uU25lYWsoKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uU25lYWsodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcblxuXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGxvZ2luL3JlZ2lzdGVyXG5cbiAgbG9naW4obnVtYmVyOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuJGdhbWUubG9naW4obnVtYmVyLCB0aGlzLmRldmljZSwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwidmVyaWZ5IGFjY291bnRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImVudGVyIHlvdXIgbG9naW4gY29kZVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJsb2cgbWUgaW5cIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQ29tcGxldGUoci50ZXh0KVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCd3aGF0IGlzICB5b3VyIHBob25lIG51bWJlcj8nLCAnZXJyb3InKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICB9XG5cbiAgbG9naW5Db21wbGV0ZShjb2RlOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuJGdhbWUubG9naW5Db21wbGV0ZShjb2RlLCB0aGlzLmRldmljZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IGpvcmRpLnRva2VuXG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IGpvcmRpLnVzZXJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygndG9rZW4nLCBqb3JkaS50b2tlbilcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygndXNlcicsIGpvcmRpLnVzZXIpXG4gICAgICAgICAgICAgIHRoaXMucG9wKFwieW91IGFyZSBsb2dnZWQgaW5cIiwgXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInZlcmlmeSBhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImVudGVyIHlvdXIgbG9naW4gY29kZVwiLFxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImxvZyBtZSBpblwiLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQ29tcGxldGUoci50ZXh0KVxuXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgnd2hhdCBpcyAgeW91ciBwaG9uZSBudW1iZXI/JywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gIH1cblxuICBvbkNhbGN1bGF0ZSgpIHtcblxuICAgIHRoaXMuYnV5VG90YWwgPSAodGhpcy5idXlTbGFwcyArIHRoaXMuYnV5R3JhYnMpXG4gICAgcmV0dXJuIHRoaXMuYnV5VG90YWxcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVXNlciBJbnRlcmFjdGlvblxuXG4gIC8vIE1ZOiBUYWJzIHNlbGVjdGVkIGluZGV4IGlzIGNoYW5nZWQsIGUuZy4gd2hlbiBzd2lwZSB0byBuYXZpZ2F0ZS5cbiAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKGFyZ3MubmV3SW5kZXggIT09IHRoaXMuY3VycmVudFRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoYXJncy5uZXdJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIFRhcCBvbiBhIG9uZSBvZiB0aGUgdGFic1xuICBvbkJvdHRvbU5hdlRhcChpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcblxuICAgICAgICAvLyBzZXQgdW5mb2N1cyB0byBwcmV2aW91cyBpbmRleFxuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmN1cnJlbnRUYWJJbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0VW5mb2N1c0FuaW1hdGlvbih0aGlzLmN1cnJlbnRUYWJJbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAvLyBzZXQgZm9jdXMgdG8gY3VycmVudCBpbmRleFxuICAgICAgICB0YWJDb250ZW50c0FycltpbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0Rm9jdXNBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiB0YXAgb24gdGFiIHN0cmlwXG4gICAgICBpZiAodGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLmRyYWdDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgIC8vIHNldCBjdXJyZW50IGluZGV4IHRvIG5ldyBpbmRleFxuICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSBpbmRleDtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuXG4gICAgICBpZiAoaW5kZXggIT0gMikge1xuXG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dCh0aGlzLk9USU1FUik7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25UaW1lcigpXG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICAvLyBEcmFnIHRoZSBmb2N1cyBjaXJjbGUgdG8gb25lIG9mIHRoZSB0YWJzXG4gIG9uQ2VudGVyQ2lyY2xlUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpOiB2b2lkIHtcbiAgICBsZXQgZ3JkTGF5b3V0OiBHcmlkTGF5b3V0ID0gPEdyaWRMYXlvdXQ+YXJncy5vYmplY3Q7XG4gICAgbGV0IG5ld1g6IG51bWJlciA9IGdyZExheW91dC50cmFuc2xhdGVYICsgYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVg7XG5cbiAgICBpZiAoYXJncy5zdGF0ZSA9PT0gMCkge1xuICAgICAgLy8gZmluZ2VyIGRvd25cbiAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgfSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAyKSB7XG4gICAgICAvLyBmaW5nZXIgbW92aW5nXG4gICAgICBncmRMYXlvdXQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcblxuICAgICAgdGhpcy5wcmV2RGVsdGFYID0gYXJncy5kZWx0YVg7XG4gICAgfSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAzKSB7XG4gICAgICAvLyBmaW5nZXIgdXBcbiAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgICBjb25zdCB0YWJXaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIHRoaXMudGFiTGlzdC5sZW5ndGg7XG4gICAgICBjb25zdCB0YWJTZWxlY3RlZDogbnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLmFicyhuZXdYIC8gdGFiV2lkdGgpKTtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVg6IG51bWJlciA9IHRhYlNlbGVjdGVkICogdGFiV2lkdGg7XG4gICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgLy8gcGFuIGxlZnRcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gbGVmdFxuICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBhbiByaWdodFxuICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKHRoaXMuZGVmYXVsdFNlbGVjdGVkICsgdGFiU2VsZWN0ZWQsIDUwKTtcbiAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiByaWdodFxuICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBUYWIgYmFyIGhlbHBlcnNcblxuICBpbml0aWFsaXplVGFiQmFyKCk6IHZvaWQge1xuICAgIC8vIHNldCB1cCBiYXNlIGxheWVyXG4gICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LndpZHRoID0gMTAwO1xuXG4gICAgdGhpcy50YWJCR0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSAtICg4MCAvIDIpO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgc2VsZWN0ZWQgdGFiXG4gICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcbiAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC5zY2FsZVggPSAxLjU7XG4gICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVZID0gMS41O1xuICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSAtIDE1O1xuICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQ7XG5cbiAgICB0aGlzLmdlbygpXG4gICAgdGhpcy5iR2VvKClcbiAgfVxuXG4gIGdldFNsaWRlQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNsYXRlOiB7IHg6IHRoaXMuZ2V0VGFiVHJhbnNsYXRlWChpbmRleCksIHk6IDAgfSxcbiAgICAgIGN1cnZlOiB0aGlzLmFuaW1hdGlvbkN1cnZlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGdldEZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6IHsgeDogMS41LCB5OiAxLjUgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMTUgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRVbmZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRUYWJUcmFuc2xhdGVYKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIHRoaXMudGFiTGlzdC5sZW5ndGggLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgKyAoODAgLyAyKVxuICB9XG5cbiAgc2V0R2FtZUlkKGdJRCkge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICB0aGlzLiRnSUQgPSBnSURcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCgyKVxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgfSwgNTAwKVxuICAgIH0pXG4gIH1cbiAgcG9wKG1lc3NhZ2U6IGFueSwgdHlwZTogYW55KSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0eXBlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcblxuICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJhY2UgY2hvc2VuIVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uVHlwZSh2YWx1ZSkge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBpZiAodGhpcy4kZ1R5cGUgPT0gJ2xvY2FsJykge1xuICAgICAgICB0aGlzLiRnVHlwZSA9ICdnbG9iYWwnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRnVHlwZSA9ICdsb2NhbCdcblxuICAgICAgfVxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBwdWJsaWMgb25Db3B5KHRleHQ6IGFueSk6IHZvaWQge1xuICAgIHNldFRleHQodGV4dClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucG9wKFwiY29waWVkICB0byAgY2xpcGJvYXJkXCIsICdzdWNjZXNzJykpXG4gICAgICAuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB0aGlzLnBvcChcImVycm9yIGNvcHlpbmcsIHRyeSBhZ2FpblwiLCAnZXJyb3InKSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICB0aGlzLnJ1blRpbWVyID0gZmFsc2VcbiAgICBpZiAodGhpcy5PVElNRVIpIHtcblxuICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KHRoaXMuT1RJTUVSKTtcblxuICAgIH1cblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9