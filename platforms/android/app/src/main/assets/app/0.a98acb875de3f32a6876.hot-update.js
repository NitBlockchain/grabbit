webpackHotUpdate(0,{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_telephony__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-telephony/telephony.js");
/* harmony import */ var nativescript_telephony__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_telephony__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nstudio/nativescript-cardview/cardview.js");
/* harmony import */ var _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-uuid/index.js");
/* harmony import */ var nativescript_uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_uuid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./services/game.ts");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nativescript_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/nativescript-clipboard/clipboard.js");
/* harmony import */ var nativescript_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_clipboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/tns-core-modules/timer/timer.js");
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(timer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/nativescript-social-share/social-share.js");
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(nativescript_social_share__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");



 // used to describe at what accuracy the location should be get




Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__["registerElement"])('CardView', function () { return _nstudio_nativescript_cardview__WEBPACK_IMPORTED_MODULE_6__["CardView"]; });
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_5__["registerElement"])("PullToRefresh", function () { return __webpack_require__("../node_modules/@nstudio/nativescript-pulltorefresh/pulltorefresh.js").PullToRefresh; });


var localStorage = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");


// import { timer } from 'rxjs/observable/timer';







var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, _game, zone, cd, router, page) {
        this.http = http;
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
        this.LOCALGAMES = [];
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
                    console.log("Unable to Enable Your Device Location", ex);
                });
            }
        }, function (e) {
        });
    };
    HomeComponent.prototype.bGeo = function () {
        var _this = this;
        var that = this;
        nativescript_geolocation__WEBPACK_IMPORTED_MODULE_2__["getCurrentLocation"]({
            desiredAccuracy: ui_enums__WEBPACK_IMPORTED_MODULE_1__["Accuracy"].high,
            maximumAge: 5000,
            timeout: 10000
        }).then(function (loc) {
            if (loc) {
                that.locations.push(loc);
                _this.lat = loc.latitude;
                _this.lng = loc.longitude;
                localStorage.setString('lat', JSON.stringify(_this.lat));
                localStorage.setString('lng', JSON.stringify(_this.lng));
                _this.bLOCALGAMES();
                // console.log(loc)
            }
            else {
                _this.pop('unable to get your location, local games won\'t be available', 'errors');
                // this.bGAMES()
            }
        }, function (e) {
            _this.pop('unable to get your location, local games won\'t be available', 'errors');
        });
    };
    // --------------------------------------------------------------------
    // get stored  info
    HomeComponent.prototype.gStorage = function () {
        var _this = this;
        this.token = localStorage.getString('token');
        this.name = localStorage.getString('name');
        this.user = localStorage.getString('user');
        this.device = Object(nativescript_uuid__WEBPACK_IMPORTED_MODULE_7__["getUUID"])();
        Object(nativescript_telephony__WEBPACK_IMPORTED_MODULE_4__["Telephony"])().then(function (resolved) {
            _this.countryCode = resolved.countryCode;
            _this.pop(_this.countryCode, 'success');
        }).catch(function (error) {
        });
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["isAndroid"]) {
            // console.log("android")
            // this.device = "android495775qafef4bi9"
        }
        else {
            // console.log("ios")
            //
            // this.device = "anfeoboeuab30r3u"
        }
        if (this.user) {
            console.log("got user id stored");
            this.gUSER();
            // this.bGAMES()
        }
        else {
            console.log("no users");
            // this.bGAMES()
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
                tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["action"]({
                    message: "Edit Profile",
                    cancelButtonText: "cancel",
                    actions: ["edit user name", "edit email"]
                }).then(function (result) {
                    // console.log("Dialog result: " + result);
                    if (result == "edit user name") {
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"]({
                            title: "Edit User Name",
                            message: "choose a suitable user name",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].text
                        }).then(function (r) {
                            if (r.result) {
                                _this.onEditComplete(r.text, 1);
                            }
                        });
                    }
                    else if (result == "edit email") {
                        //Do action2
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"]({
                            title: "Edit Email",
                            message: "a confirmation code will be sent to your email address",
                            okButtonText: "save",
                            cancelButtonText: "Cancel",
                            defaultText: null,
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].text
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
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["action"]({
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
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["action"]({
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
                    _this.router.navigate(['/about'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (result == 'chat') {
                _this.pop("chat  is coming soon", 'error');
            }
            else if (result == 'support') {
                setTimeout(function () {
                    _this.router.navigate(['/support'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (result == 'privacy policy') {
                setTimeout(function () {
                    _this.router.navigate(['/legals/privacy'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (result == 'user agreement') {
                setTimeout(function () {
                    _this.router.navigate(['/legals/agreement'], {
                        animated: true,
                        clearHistory: false
                    });
                }, 300);
            }
            else if (result == 'how to play') {
                _this.pop("slap before you grab, sneak after you grab. Don't let  the timer hit 0, if you are not the one who grabbed the prize. If you get slapped, grab again and again and again. Send us your video explaining how to play and you could win $1,000 in bitcoin videos must be in by 12/30/2019. send youtube link to cs@grabbit.cheap, subject how to play video", 'how to play');
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
    HomeComponent.prototype.bGLOBALGAMES = function () {
        console.log("getting global games this time");
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_15__["request"])({
            url: "https://app.grabbit.cheap/bGLOBALGAMES",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({})
        }).then(function (response) {
            var result = response.content.toJSON();
            console.log(result);
        }, function (e) {
            console.log(e);
        });
        // this.$game.bGLOBALGAMES()
        //   .subscribe(
        //     (jordi: any) => {
        //       if (jordi.success) {
        //         // console.log(jordi.payload)
        //         this.zone.run(() => {
        //
        //           this.DGAMES = jordi.payload[0]
        //           this.GLOBALGAMES = this.DGAMES
        //           this.Dgame = this.DGAMES[Math.floor(Math.random() * this.DGAMES.length)];
        //           this.$gID = this.Dgame.game
        //           this.title = this.Dgame.details.title
        //           this.image = this.Dgame.details.images[0].url
        //           this.playersMax = this.Dgame.details.playersMax
        //           this.playersMin = this.Dgame.details.playersMin
        //           this.playersReady = this.Dgame.details.playersReady
        //
        //           this.runTimer = true
        //           this.onTimer()
        //           this.cd.detectChanges();
        //
        //         })
        //
        //       } else {
        //
        //         console.log("no global games here")
        //
        //         //no  success here check local
        //       }
        //     }, (error) => {
        //       console.error('error getting global games' + JSON.stringify(error))
        //     })
    };
    // --------------------------------------------------------------------
    // bring local games
    HomeComponent.prototype.bLOCALGAMES = function () {
        var _this = this;
        this.$game.bLOCALGAMES(this.token, this.user, this.lat, this.lng)
            .subscribe(function (jordi) {
            if (jordi.success) {
                // console.log(jordi.payload)
                _this.zone.run(function () {
                    _this.LOCALGAMES = jordi.payload[0];
                    _this.cd.detectChanges();
                });
            }
            else {
                //no  success here check local
            }
        });
    };
    // --------------------------------------------------------------------
    // Game  Action
    HomeComponent.prototype.onTimer = function () {
        var _this = this;
        if (this.OTIMER) {
            timer__WEBPACK_IMPORTED_MODULE_13__["clearTimeout"](this.OTIMER);
        }
        this.OTIMER = timer__WEBPACK_IMPORTED_MODULE_13__["setInterval"](function () {
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
                            // console.log(this.$gID)
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
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"]({
                        title: "Login/Signup",
                        message: "register or login securely  via sms. enter your phone number",
                        okButtonText: "send sms",
                        cancelButtonText: "cancel",
                        inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].number
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
        this.$game.login(number, this.device, this.lat, this.lng, this.countryCode)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"]({
                        title: "verify account",
                        message: "enter your login code",
                        okButtonText: "log me in",
                        cancelButtonText: "cancel",
                        inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].text
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
                        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"]({
                            title: "verify account",
                            message: "enter your login code",
                            okButtonText: "log me in",
                            cancelButtonText: "cancel",
                            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].text
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
    HomeComponent.prototype.onShare = function () {
        nativescript_social_share__WEBPACK_IMPORTED_MODULE_14__["shareUrl"]("https://www.nativescript.org/", "come play grabbit with me, we can win awesome prizes");
    };
    HomeComponent.prototype.onRedeem = function (qr) {
        var _this = this;
        this.zone.run(function () {
            _this.redeemQR = qr;
            _this.showRedeem = true;
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.onReload = function (type) {
        var _this = this;
        this.$game.reload(this.token, this.user, this.$gID, type)
            .subscribe(function (jordi) {
            if (jordi.success) {
                _this.zone.run(function () {
                    _this.message = 'reloaded';
                });
            }
            else {
                _this.message = jordi.message;
            }
        });
        this.cd.detectChanges();
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
            // console.log(index)
            if (index != 2) {
                timer__WEBPACK_IMPORTED_MODULE_13__["clearTimeout"](_this.OTIMER);
            }
            else {
                _this.bGLOBALGAMES();
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
            var tabWidth = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs / this.tabList.length;
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
        this.leftTabs.nativeElement.width = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
        // set default selected tab
        var tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
        this.currentTabIndex = this.defaultSelected;
        //get user
        this.gStorage();
        ///get user location
        this.geo();
        this.bGeo();
        //get  global game
        this.bGLOBALGAMES();
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
        return index * tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs / this.tabList.length - (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_9__["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    HomeComponent.prototype.setGameId = function (gID) {
        var _this = this;
        this.zone.run(function () {
            setTimeout(function () {
                _this.$gID = gID;
                _this.onBottomNavTap(2);
                _this.cd.detectChanges();
            }, 1000);
        });
    };
    HomeComponent.prototype.pop = function (message, type) {
        var options = {
            title: type,
            message: message,
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["confirm"])(options).then(function () {
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
        Object(nativescript_clipboard__WEBPACK_IMPORTED_MODULE_12__["setText"])(text)
            .then(function () { return _this.pop("copied  to  clipboard", 'success'); })
            .catch(function (err) { return _this.pop("error copying, try again", 'error'); });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.run(function () {
            _this.runTimer = false;
            if (_this.OTIMER) {
                timer__WEBPACK_IMPORTED_MODULE_13__["clearTimeout"](_this.OTIMER);
            }
            _this.cd.detectChanges();
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
        { type: _services_game__WEBPACK_IMPORTED_MODULE_8__["GameProvider"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterExtensions"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_11__["Page"] }
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _services_game__WEBPACK_IMPORTED_MODULE_8__["GameProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_11__["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUduSDtBQUVjO0FBQ0gsQ0FBQywrREFBK0Q7QUFDL0Q7QUFDSDtBQUNxQjtBQUNkO0FBQzFELDZGQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sOEVBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztBQUM1Qyw2RkFBZSxDQUFDLGVBQWUsRUFBRSxjQUFNLDBCQUFPLENBQUMsc0VBQXFDLENBQUMsQ0FBQyxhQUFhLEVBQTVELENBQTRELENBQUMsQ0FBQztBQUc5QztBQUdYO0FBQzVDLElBQU0sWUFBWSxHQUFHLG1CQUFPLENBQUMsK0VBQXVDLENBQUMsQ0FBQztBQUN0QjtBQUM2QjtBQUM3RSxpREFBaUQ7QUFDYztBQUNmO0FBQ29DO0FBQ3JEO0FBRTBCO0FBRzRDO0FBQ3JDO0FBQ2hFLElBQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsK0NBQU0sQ0FBQyxDQUFDO0FBUW5DO0lBd0dFLHVCQUFvQixJQUFnQixFQUFTLEtBQW1CLEVBQVUsSUFBWSxFQUFVLEVBQXFCLEVBQVUsTUFBd0IsRUFBVSxJQUFVO1FBQXZKLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBNUYzSyxhQUFhO1FBQ2IsZUFBVSxHQUFXLENBQUMsQ0FBQztR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REFBWSxFQUFnQixvREFBTSxFQUFjLCtEQUFpQixFQUFrQiw2RUFBZ0IsRUFBZ0IsOERBQUk7T0F4R2hLLGFBQWEsQ0Fvb0N6QjtJQUFELG9CQUFDO0NBQUE7QUFwb0N5QiIsImZpbGUiOiIwLmE5OGFjYjg3NWRlM2YzMmE2ODc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IFBhbkdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVTdGF0ZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiOyAvLyB1c2VkIHRvIGRlc2NyaWJlIGF0IHdoYXQgYWNjdXJhY3kgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBnZXRcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBUZWxlcGhvbnkgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXBob255JztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIlB1bGxUb1JlZnJlc2hcIiwgKCkgPT4gcmVxdWlyZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCIpLlB1bGxUb1JlZnJlc2gpO1xuXG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5cbmltcG9ydCB7IGdldFVVSUQgfSBmcm9tICduYXRpdmVzY3JpcHQtdXVpZCc7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCB7IEdhbWVQcm92aWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzL29ic2VydmFibGUvdGltZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBnZXRUZXh0LCBzZXRUZXh0LCBnZXRUZXh0U3luYywgc2V0VGV4dFN5bmMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiO1xuaW1wb3J0ICogYXMgdGltZXIgZnJvbSBcInRpbWVyXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhLCBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcImh0dHBcIik7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjZW50ZXJDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJDaXJjbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RyYWdDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcmFnQ2lyY2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsZWZ0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIGxlZnRUYWJzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyaWdodFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSByaWdodFRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlclBhdGNoJywgeyBzdGF0aWM6IHRydWUgfSkgY2VudGVyUGF0Y2g6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkJHQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQkdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbigndGFiQ29udGVudHMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICAvLyBQYW4gSGVscGVyXG4gIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cbiAgYW5pbWF0aW9uQ3VydmUgPSBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguMzgsIC40NywgMCwgMSk7XG5cbiAgLy8gVGFiIENvbnRlbnRzIGFuZCBQcm9wZXJ0aWVzXG4gIHRhYkNvbnRhaW5lciA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJyxcbiAgICBmb2N1c0NvbG9yOiAnI0YxRjFGMSdcbiAgfTtcbiAgdGFiTGlzdDogeyB0ZXh0OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgZmFkZUNvbG9yPzogc3RyaW5nIH1bXSA9IFtcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNTU1KSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNDZkKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNDQxKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDA3KSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNzljKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfVxuICBdO1xuXG4gIGN1cnJlbnRUYWJJbmRleDogbnVtYmVyID0gMjtcbiAgZGVmYXVsdFNlbGVjdGVkOiBudW1iZXIgPSAyO1xuXG5cbiAgJGdhbWU6IGFueVxuICAkZ1R5cGU6IHN0cmluZ1xuICAkZ0lEOiBzdHJpbmdcblxuICB0b2tlbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgYXZhdGFyOiBzdHJpbmdcbiAgcHJhY3RpY2VDb3VudDogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgd2luczogc3RyaW5nXG4gIGNvdW50cnk6IHN0cmluZ1xuICBjaXR5OiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIGdhbWVzUGxheWVkOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG5cbiAgbGF0OiBzdHJpbmdcbiAgbG5nOiBzdHJpbmdcblxuICBEVVNFUjogYW55XG4gIERHQU1FUzogYW55XG4gIFBMQVlFUlM6IGFueVxuICBEZ2FtZTogYW55XG4gIFVTRVJJTkdBTUU6IGFueVxuICBHQU1FRlVMTDogYW55XG4gIEdBTUVTVEFSVEVEOiBhbnlcbiAgR0FNRUNPTVBMRVRFOiBhbnlcblxuICBHTE9CQUxHQU1FUzogW11cbiAgTE9DQUxHQU1FUzogW11cbiAgV0lOUzogW11cblxuICBPVElNRVI6IGFueVxuICB0aW1lcjogYW55XG4gIGdhbWVUaW1lOiBhbnlcbiAgcnVuVGltZXI6IGJvb2xlYW5cblxuICBsb2NhdGlvbnMgPSBbXTtcbiAgd2F0Y2hJZHMgPSBbXTtcblxuICB0aXRsZTogYW55XG4gIGltYWdlOiBhbnlcbiAgcGxheWVyc01pbjogc3RyaW5nXG4gIHBsYXllcnNSZWFkeTogc3RyaW5nXG4gIHBsYXllcnNNYXg6IHN0cmluZ1xuXG4gIGRldmljZTogYW55XG4gIGFkbWluOiBhbnlcblxuICBwbGF5ZXJzSGVpZ2h0OiBhbnlcblxuICBzaG93QnV5VG9vbHM6IGJvb2xlYW5cbiAgc2hvd0NyZWF0ZTogYm9vbGVhblxuICBzaG93UmVkZWVtOiBib29sZWFuXG4gIGxpdmVHYW1lOiBhbnlcblxuICByZWRlZW1RUjogYW55XG5cbiAgYnV5R3JhYnMgPSAwXG4gIGJ1eVNsYXBzID0gMFxuICBidXlTbmVha3MgPSAwXG4gIGJ1eVRvdGFsOiBhbnlcbiAgYnRjX3ZhbHVlOiBzdHJpbmdcbiAgYnRjX2ZlZTogc3RyaW5nXG4gIGJ0Y19mZWVfdXNkOiBzdHJpbmdcblxuICBtYXRoID0gTWF0aFxuICBjb3VudHJ5Q29kZTogYW55XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cbiAgICB0aGlzLiRnYW1lID0gX2dhbWVcbiAgICB0aGlzLiRnVHlwZSA9ICdnbG9iYWwnXG4gICAgdGhpcy5zaG93QnV5VG9vbHMgPSBmYWxzZVxuICAgIHRoaXMuc2hvd0NyZWF0ZSA9IGZhbHNlXG4gICAgdGhpcy5saXZlR2FtZSA9IDBcbiAgICB0aGlzLkxPQ0FMR0FNRVMgPSBbXVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBIb29rc1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZVRhYkJhcigpO1xuXG4gIH1cblxuICBwdWJsaWMgZ2VvKCkge1xuXG4gICAgZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbigoaXNFbmFibGVkKSA9PiB7XG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSwgdHJ1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIEVuYWJsZWQgTG9jYXRpb24gU2VydmljZVwiKTtcbiAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnBvcChlLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KS5jYXRjaChleCA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBFbmFibGUgWW91ciBEZXZpY2UgTG9jYXRpb25cIiwgZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAoZSkgPT4ge1xuXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYkdlbygpIHtcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgbWF4aW11bUFnZTogNTAwMCxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgfSkudGhlbigobG9jOiBhbnkpID0+IHtcbiAgICAgIGlmIChsb2MpIHtcblxuICAgICAgICB0aGF0LmxvY2F0aW9ucy5wdXNoKGxvYyk7XG4gICAgICAgIHRoaXMubGF0ID0gbG9jLmxhdGl0dWRlXG4gICAgICAgIHRoaXMubG5nID0gbG9jLmxvbmdpdHVkZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCdsYXQnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxhdCkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRTdHJpbmcoJ2xuZycsIEpTT04uc3RyaW5naWZ5KHRoaXMubG5nKSlcbiAgICAgICAgdGhpcy5iTE9DQUxHQU1FUygpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvYylcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5wb3AoJ3VuYWJsZSB0byBnZXQgeW91ciBsb2NhdGlvbiwgbG9jYWwgZ2FtZXMgd29uXFwndCBiZSBhdmFpbGFibGUnLCAnZXJyb3JzJylcblxuICAgICAgICAvLyB0aGlzLmJHQU1FUygpXG5cbiAgICAgIH1cbiAgICB9LCAoZSkgPT4ge1xuXG4gICAgICB0aGlzLnBvcCgndW5hYmxlIHRvIGdldCB5b3VyIGxvY2F0aW9uLCBsb2NhbCBnYW1lcyB3b25cXCd0IGJlIGF2YWlsYWJsZScsICdlcnJvcnMnKVxuXG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgc3RvcmVkICBpbmZvXG4gIGdTdG9yYWdlKCkge1xuXG4gICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3Rva2VuJylcbiAgICB0aGlzLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCduYW1lJylcbiAgICB0aGlzLnVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd1c2VyJylcbiAgICB0aGlzLmRldmljZSA9IGdldFVVSUQoKTtcblxuICAgIFRlbGVwaG9ueSgpLnRoZW4oKHJlc29sdmVkOiBhbnkpID0+IHtcblxuICAgICAgdGhpcy5jb3VudHJ5Q29kZSA9IHJlc29sdmVkLmNvdW50cnlDb2RlXG4gICAgICB0aGlzLnBvcCh0aGlzLmNvdW50cnlDb2RlLCAnc3VjY2VzcycpXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG5cbiAgICB9KVxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5kcm9pZFwiKVxuICAgICAgLy8gdGhpcy5kZXZpY2UgPSBcImFuZHJvaWQ0OTU3NzVxYWZlZjRiaTlcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW9zXCIpXG4gICAgICAvL1xuICAgICAgLy8gdGhpcy5kZXZpY2UgPSBcImFuZmVvYm9ldWFiMzByM3VcIlxuXG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdvdCB1c2VyIGlkIHN0b3JlZFwiKVxuICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAvLyB0aGlzLmJHQU1FUygpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHVzZXJzXCIpXG5cbiAgICAgIC8vIHRoaXMuYkdBTUVTKClcblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2V0IHVzZXJcbiAgZ1VTRVIoKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHRoZSB1c2VyXCIpXG4gICAgdGhpcy4kZ2FtZS5nVVNFUih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaSkgPT4ge1xuXG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgbGV0IFVTRVIgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgIHRoaXMuV0lOUyA9IGpvcmRpLnBheWxvYWRbMl1cbiAgICAgICAgICAgICAgdGhpcy5EVVNFUiA9IFVTRVJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVVNFUilcblxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBVU0VSLnByb2ZpbGUubmFtZSB8fCAnbm8gdXNlciBuYW1lIHNldCdcbiAgICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSBVU0VSLnByb2ZpbGUuYXZhdGFyIHx8ICd+L2Fzc2V0cy9pbWdzL2F2YXRhcnMvYWxpZW5fMDIucG5nJ1xuICAgICAgICAgICAgICB0aGlzLndpbnMgPSBVU0VSLnByb2ZpbGUud2lucyB8fCAwXG4gICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VDb3VudCA9IFVTRVIucHJvZmlsZS5wcmFjdGljZSB8fCAwXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZXNQbGF5ZWQgPSBVU0VSLnByb2ZpbGUucGxheXMgfHwgMFxuICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gVVNFUi5wcm9maWxlLmVtYWlsIHx8ICdubyBlbWFpbCBzZXQnXG4gICAgICAgICAgICAgIHRoaXMuYWRtaW4gPSBVU0VSLnByb2ZpbGUuYWRtaW5cbiAgICAgICAgICAgICAgdGhpcy5idGNfdmFsdWUgPSBqb3JkaS5idGNfdmFsdWVcbiAgICAgICAgICAgICAgdGhpcy5idGNfZmVlX3VzZCA9IGpvcmRpLmJ0Y19mZWVfdXNkXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9ICduL2EnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG4gICAgICAgICAgICAgIHRoaXMud2lucyA9ICcwJ1xuICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlQ291bnQgPSAnMCdcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHNldCBhdmF0YXFyXG5cbiAgb25BdmF0YXIoYXZhdGFyOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy51c2VyKSB7XG5cbiAgICAgIHRoaXMucG9wKFwibG9nIGluIHRvIHNldCB5b3VyIGF2YXRhclwiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLiRnYW1lLm9uQXZhdGFyKHRoaXMudG9rZW4sIHRoaXMudXNlciwgYXZhdGFyKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBhc3luYyBvbkVkaXQoKSB7XG5cbiAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIkVkaXQgUHJvZmlsZVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgIGFjdGlvbnM6IFtcImVkaXQgdXNlciBuYW1lXCIsIFwiZWRpdCBlbWFpbFwiXVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0ID09IFwiZWRpdCB1c2VyIG5hbWVcIikge1xuXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICB0aXRsZTogXCJFZGl0IFVzZXIgTmFtZVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiY2hvb3NlIGEgc3VpdGFibGUgdXNlciBuYW1lXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcInNhdmVcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBudWxsLFxuICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICB9KS50aGVuKChyKSA9PiB7XG5cbiAgICAgICAgICBpZiAoci5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMub25FZGl0Q29tcGxldGUoci50ZXh0LCAxKVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcImVkaXQgZW1haWxcIikge1xuICAgICAgICAvL0RvIGFjdGlvbjJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgIHRpdGxlOiBcIkVkaXQgRW1haWxcIixcbiAgICAgICAgICBtZXNzYWdlOiBcImEgY29uZmlybWF0aW9uIGNvZGUgd2lsbCBiZSBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzc1wiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJzYXZlXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICBkZWZhdWx0VGV4dDogbnVsbCxcbiAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgIGlmIChyLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5vbkVkaXRDb21wbGV0ZShyLnRleHQsIDIpXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uQnV5VG9vbHMoKSB7XG5cbiAgICBpZiAodGhpcy5idXlTbGFwcyA8IDEgJiYgdGhpcy5idXlHcmFicyA8IDEgJiYgdGhpcy5idXlTbmVha3MgPCAxKSB7XG5cbiAgICAgIHRoaXMucG9wKFwibXVzdCBidXkgMSBvciBtb3JlIHRvb2xzXCIsICdlcnJvcicpXG4gICAgfSBlbHNlIHtcblxuICAgICAgbGV0IEFDVElPTlMgPSBbXCJwYXkgd2l0aCBiaXRjb2luXCIsIFwicGF5IHdpdGggb3dvXCJdXG4gICAgICBsZXQgcGF5VHlwZTtcblxuICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICBtZXNzYWdlOiBcIlBheW1lbnQgT3B0aW9uc1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICBhY3Rpb25zOiBBQ1RJT05TXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAncGF5IHdpdGggIGJpdGNvaW4nKSB7XG4gICAgICAgICAgcGF5VHlwZSA9IDFcblxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAncGF5IHdpdGggIG93bycpIHtcblxuICAgICAgICAgIHBheVR5cGUgPSAyXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRnYW1lLm9uUGF5KHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5idXlHcmFicywgdGhpcy5idXlTbGFwcywgdGhpcy5idXlTbmVha3MsIHBheVR5cGUpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgb25DcmVhdGUodHlwZTogYW55KSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlLycgKyB0eXBlXSwge1xuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgfSlcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgb25NZW51KCkge1xuICAgIGxldCBBQ1RJT05TO1xuXG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgaWYgKHRoaXMuYWRtaW4gPiAwKSB7XG4gICAgICAgIEFDVElPTlMgPSBbXCJhZG1pblwiLCBcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIiwgXCJsb2dvdXRcIl1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQUNUSU9OUyA9IFtcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIiwgXCJsb2dvdXRcIl1cblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBBQ1RJT05TID0gW1wiY2hhdFwiLCBcImhvdyB0byBwbGF5XCIsIFwic3VwcG9ydFwiLCBcImFib3V0IHVzXCIsIFwidXNlciBhZ3JlZW1lbnRcIiwgXCJwcml2YWN5IHBvbGljeVwiXVxuICAgIH1cbiAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIk1lbnVcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBhY3Rpb25zOiBBQ1RJT05TXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICdsb2dvdXQnKSB7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZShcInVzZXJcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZSgnbmFtZScpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3AoXCJ5b3UgYXJlIGxvZ2dlZCBub3Qgb3V0XCIsICdzdWNjZXNzJylcbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ2Fib3V0IHVzJykge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWJvdXQnXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09ICdjaGF0Jykge1xuXG4gICAgICAgIHRoaXMucG9wKFwiY2hhdCAgaXMgY29taW5nIHNvb25cIiwgJ2Vycm9yJylcblxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ3N1cHBvcnQnKSB7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdXBwb3J0J10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAncHJpdmFjeSBwb2xpY3knKSB7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sZWdhbHMvcHJpdmFjeSddLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ3VzZXIgYWdyZWVtZW50Jykge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGVnYWxzL2FncmVlbWVudCddLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ2hvdyB0byBwbGF5Jykge1xuXG4gICAgICAgIHRoaXMucG9wKFwic2xhcCBiZWZvcmUgeW91IGdyYWIsIHNuZWFrIGFmdGVyIHlvdSBncmFiLiBEb24ndCBsZXQgIHRoZSB0aW1lciBoaXQgMCwgaWYgeW91IGFyZSBub3QgdGhlIG9uZSB3aG8gZ3JhYmJlZCB0aGUgcHJpemUuIElmIHlvdSBnZXQgc2xhcHBlZCwgZ3JhYiBhZ2FpbiBhbmQgYWdhaW4gYW5kIGFnYWluLiBTZW5kIHVzIHlvdXIgdmlkZW8gZXhwbGFpbmluZyBob3cgdG8gcGxheSBhbmQgeW91IGNvdWxkIHdpbiAkMSwwMDAgaW4gYml0Y29pbiB2aWRlb3MgbXVzdCBiZSBpbiBieSAxMi8zMC8yMDE5LiBzZW5kIHlvdXR1YmUgbGluayB0byBjc0BncmFiYml0LmNoZWFwLCBzdWJqZWN0IGhvdyB0byBwbGF5IHZpZGVvXCIsICdob3cgdG8gcGxheScpXG5cbiAgICAgIH1cblxuXG4gICAgfSk7XG4gIH1cblxuICBvbkVkaXRDb21wbGV0ZSh0ZXh0OiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xuXG4gICAgdGhpcy4kZ2FtZS5vbkVkaXQodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0ZXh0LCB0eXBlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBicmluZyBnbG9iYWwgZ2FtZVxuICBiR0xPQkFMR0FNRVMoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZ2xvYmFsIGdhbWVzIHRoaXMgdGltZVwiKVxuICAgIHJlcXVlc3Qoe1xuICAgICAgdXJsOiBcImh0dHBzOi8vYXBwLmdyYWJiaXQuY2hlYXAvYkdMT0JBTEdBTUVTXCIsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuXG4gICAgICB9KVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH0sIChlKSA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKGUpXG5cbiAgICB9KTtcbiAgICAvLyB0aGlzLiRnYW1lLmJHTE9CQUxHQU1FUygpXG4gICAgLy8gICAuc3Vic2NyaWJlKFxuICAgIC8vICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhqb3JkaS5wYXlsb2FkKVxuICAgIC8vICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgdGhpcy5ER0FNRVMgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgLy8gICAgICAgICAgIHRoaXMuR0xPQkFMR0FNRVMgPSB0aGlzLkRHQU1FU1xuICAgIC8vICAgICAgICAgICB0aGlzLkRnYW1lID0gdGhpcy5ER0FNRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ER0FNRVMubGVuZ3RoKV07XG4gICAgLy8gICAgICAgICAgIHRoaXMuJGdJRCA9IHRoaXMuRGdhbWUuZ2FtZVxuICAgIC8vICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnRpdGxlXG4gICAgLy8gICAgICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLkRnYW1lLmRldGFpbHMuaW1hZ2VzWzBdLnVybFxuICAgIC8vICAgICAgICAgICB0aGlzLnBsYXllcnNNYXggPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc01heFxuICAgIC8vICAgICAgICAgICB0aGlzLnBsYXllcnNNaW4gPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc01pblxuICAgIC8vICAgICAgICAgICB0aGlzLnBsYXllcnNSZWFkeSA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzUmVhZHlcbiAgICAvL1xuICAgIC8vICAgICAgICAgICB0aGlzLnJ1blRpbWVyID0gdHJ1ZVxuICAgIC8vICAgICAgICAgICB0aGlzLm9uVGltZXIoKVxuICAgIC8vICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgfSlcbiAgICAvL1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZ2xvYmFsIGdhbWVzIGhlcmVcIilcbiAgICAvL1xuICAgIC8vICAgICAgICAgLy9ubyAgc3VjY2VzcyBoZXJlIGNoZWNrIGxvY2FsXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBnZXR0aW5nIGdsb2JhbCBnYW1lcycgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpXG4gICAgLy8gICAgIH0pXG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGJyaW5nIGxvY2FsIGdhbWVzXG4gIGJMT0NBTEdBTUVTKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5iTE9DQUxHQU1FUyh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnBheWxvYWQpXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLkxPQ0FMR0FNRVMgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vbm8gIHN1Y2Nlc3MgaGVyZSBjaGVjayBsb2NhbFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2FtZSAgQWN0aW9uXG5cbiAgb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5PVElNRVIpIHtcbiAgICAgIHRpbWVyLmNsZWFyVGltZW91dCh0aGlzLk9USU1FUik7XG4gICAgfVxuICAgIHRoaXMuT1RJTUVSID0gdGltZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG4gICAgICB0aGlzLiRnYW1lLm9uVGltZXIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLkRnYW1lID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRnYW1lKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkRnYW1lLCB0aGlzLiRnSUQpXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnRpdGxlXG4gICAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5EZ2FtZS5kZXRhaWxzLmltYWdlc1swXS51cmxcbiAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc01heCA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWF4XG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNNaW4gPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc01pblxuICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzUmVhZHkgPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc1JlYWR5XG4gICAgICAgICAgICAgICAgICB0aGlzLkdBTUVGVUxMID0gdGhpcy5EZ2FtZS5kZXRhaWxzLmZ1bGxcbiAgICAgICAgICAgICAgICAgIHRoaXMuR0FNRVNUQVJURUQgPSB0aGlzLkRnYW1lLmRldGFpbHMuc3RhcnRlZFxuICAgICAgICAgICAgICAgICAgdGhpcy5HQU1FQ09NUExFVEUgPSB0aGlzLkRnYW1lLmRldGFpbHMuY29tcGxldGVkXG4gICAgICAgICAgICAgICAgICB0aGlzLmxpdmVHYW1lID0gam9yZGkubGl2ZUdhbWVcbiAgICAgICAgICAgICAgICAgIHRoaXMuUExBWUVSUyA9IHRoaXMuRGdhbWUucGxheWVyc1xuICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzSGVpZ2h0ID0gKHRoaXMuUExBWUVSUy5sZW5ndGggKiAxNTApICsgOTAwXG4gICAgICAgICAgICAgICAgICB0aGlzLlVTRVJJTkdBTUUgPSB0aGlzLlBMQVlFUlMuZmluZCgoeDogYW55KSA9PiB4LnVzZXIgPT0gdGhpcy51c2VyKVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmdhbWVUaW1lID0gam9yZGkudGltZXJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJGdJRClcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMuRGdhbWUgPSB0aGlzLkRHQU1FU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLkRHQU1FUy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJGdJRCA9IHRoaXMuRGdhbWUuZ2FtZVxuXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkRnYW1lLCB0aGlzLiRnSUQpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqb3JkaS50aW1lcilcbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICwgY29uc29sZS5sb2coXCJ0aW1lciBydW5uaW5nXCIpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZXIgZXJyb3JcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25QbGF5KCkge1xuXG4gICAgdGhpcy4kZ2FtZS5wbGF5KHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy4kZ0lEKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS50eXBlID09IDEpIHtcblxuICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4vU2lnbnVwXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJyZWdpc3RlciBvciBsb2dpbiBzZWN1cmVseSAgdmlhIHNtcy4gZW50ZXIgeW91ciBwaG9uZSBudW1iZXJcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwic2VuZCBzbXNcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUubnVtYmVyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci50ZXh0KSB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oci50ZXh0KVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vL3VzZXIgcHJvZmlsZSBpcyAgbm90IGNvbXBsZXRlXG4gICAgICAgICAgICBpZiAoam9yZGkudHlwZSA9PSAyKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgICAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoMylcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICAgICAgfSwgMjAwMClcblxuXG4gICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8vdXNlciBpcyBhbHJlYWR5IGluIHRoaXMgIGdhbWVcbiAgICAgICAgICAgIGlmIChqb3JkaS50eXBlID09IDMpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICB9XG5cbiAgb25HcmFiKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5vbkdyYWIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcblxuXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIG9uU2xhcCgpIHtcblxuICAgIHRoaXMuJGdhbWUub25TbGFwKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy4kZ0lEKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcblxuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnXG5cblxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gIH1cblxuICBvblNuZWFrKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5vblNuZWFrKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy4kZ0lEKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcblxuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnXG5cblxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBsb2dpbi9yZWdpc3RlclxuXG4gIGxvZ2luKG51bWJlcjogc3RyaW5nKSB7XG5cbiAgICB0aGlzLiRnYW1lLmxvZ2luKG51bWJlciwgdGhpcy5kZXZpY2UsIHRoaXMubGF0LCB0aGlzLmxuZywgdGhpcy5jb3VudHJ5Q29kZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcInZlcmlmeSBhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlbnRlciB5b3VyIGxvZ2luIGNvZGVcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwibG9nIG1lIGluXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkNvbXBsZXRlKHIudGV4dClcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBvcCgnd2hhdCBpcyAgeW91ciBwaG9uZSBudW1iZXI/JywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgfVxuXG4gIGxvZ2luQ29tcGxldGUoY29kZTogc3RyaW5nKSB7XG5cbiAgICB0aGlzLiRnYW1lLmxvZ2luQ29tcGxldGUoY29kZSwgdGhpcy5kZXZpY2UpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBqb3JkaS50b2tlblxuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBqb3JkaS51c2VyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRTdHJpbmcoJ3Rva2VuJywgam9yZGkudG9rZW4pXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRTdHJpbmcoJ3VzZXInLCBqb3JkaS51c2VyKVxuICAgICAgICAgICAgICB0aGlzLnBvcChcInlvdSBhcmUgbG9nZ2VkIGluXCIsIFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgXCJlcnJvclwiKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJ2ZXJpZnkgYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlbnRlciB5b3VyIGxvZ2luIGNvZGVcIixcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJsb2cgbWUgaW5cIixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoci50ZXh0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkNvbXBsZXRlKHIudGV4dClcblxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoJ3doYXQgaXMgIHlvdXIgcGhvbmUgbnVtYmVyPycsICdlcnJvcicpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICB9XG5cblxuXG4gIG9uU2hhcmUoKSB7XG5cbiAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCIsIFwiY29tZSBwbGF5IGdyYWJiaXQgd2l0aCBtZSwgd2UgY2FuIHdpbiBhd2Vzb21lIHByaXplc1wiKTtcbiAgfVxuXG4gIG9uUmVkZWVtKHFyKSB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgdGhpcy5yZWRlZW1RUiA9IHFyXG4gICAgICB0aGlzLnNob3dSZWRlZW0gPSB0cnVlXG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVsb2FkKHR5cGU6IGFueSkge1xuXG5cbiAgICB0aGlzLiRnYW1lLnJlbG9hZCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRCwgdHlwZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdyZWxvYWRlZCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVXNlciBJbnRlcmFjdGlvblxuXG4gIC8vIE1ZOiBUYWJzIHNlbGVjdGVkIGluZGV4IGlzIGNoYW5nZWQsIGUuZy4gd2hlbiBzd2lwZSB0byBuYXZpZ2F0ZS5cbiAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKGFyZ3MubmV3SW5kZXggIT09IHRoaXMuY3VycmVudFRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoYXJncy5uZXdJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcbiAgfVxuXG4gIC8vIFRhcCBvbiBhIG9uZSBvZiB0aGUgdGFic1xuICBvbkJvdHRvbU5hdlRhcChpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFiQ29udGVudHNBcnIgPSB0aGlzLnRhYkNvbnRlbnRzLnRvQXJyYXkoKTtcblxuICAgICAgICAvLyBzZXQgdW5mb2N1cyB0byBwcmV2aW91cyBpbmRleFxuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmN1cnJlbnRUYWJJbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0VW5mb2N1c0FuaW1hdGlvbih0aGlzLmN1cnJlbnRUYWJJbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgICAvLyBzZXQgZm9jdXMgdG8gY3VycmVudCBpbmRleFxuICAgICAgICB0YWJDb250ZW50c0FycltpbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0Rm9jdXNBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiB0YXAgb24gdGFiIHN0cmlwXG4gICAgICBpZiAodGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLmRyYWdDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgIC8vIHNldCBjdXJyZW50IGluZGV4IHRvIG5ldyBpbmRleFxuICAgICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSBpbmRleDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxuXG4gICAgICBpZiAoaW5kZXggIT0gMikge1xuXG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dCh0aGlzLk9USU1FUik7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5iR0xPQkFMR0FNRVMoKVxuICAgICAgICB0aGlzLm9uVGltZXIoKVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgLy8gRHJhZyB0aGUgZm9jdXMgY2lyY2xlIHRvIG9uZSBvZiB0aGUgdGFic1xuICBvbkNlbnRlckNpcmNsZVBhbihhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKTogdm9pZCB7XG4gICAgbGV0IGdyZExheW91dDogR3JpZExheW91dCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIGxldCBuZXdYOiBudW1iZXIgPSBncmRMYXlvdXQudHJhbnNsYXRlWCArIGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYO1xuXG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDApIHtcbiAgICAgIC8vIGZpbmdlciBkb3duXG4gICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgLy8gZmluZ2VyIG1vdmluZ1xuICAgICAgZ3JkTGF5b3V0LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG5cbiAgICAgIHRoaXMucHJldkRlbHRhWCA9IGFyZ3MuZGVsdGFYO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMykge1xuICAgICAgLy8gZmluZ2VyIHVwXG4gICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgICAgY29uc3QgdGFiV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoO1xuICAgICAgY29uc3QgdGFiU2VsZWN0ZWQ6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5hYnMobmV3WCAvIHRhYldpZHRoKSk7XG4gICAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0YWJTZWxlY3RlZCAqIHRhYldpZHRoO1xuICAgICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICAgIC8vIHBhbiBsZWZ0XG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIGxlZnRcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYW4gcmlnaHRcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gcmlnaHRcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkICsgdGFiU2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVGFiIGJhciBoZWxwZXJzXG5cbiAgaW5pdGlhbGl6ZVRhYkJhcigpOiB2b2lkIHtcbiAgICAvLyBzZXQgdXAgYmFzZSBsYXllclxuICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC53aWR0aCA9IDEwMDtcblxuICAgIHRoaXMudGFiQkdDb250YWluZXIubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgLSAoODAgLyAyKTtcblxuICAgIC8vIHNldCBkZWZhdWx0IHNlbGVjdGVkIHRhYlxuICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG4gICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVYID0gMS41O1xuICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWSA9IDEuNTtcbiAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gLSAxNTtcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkO1xuXG4gICAgLy9nZXQgdXNlclxuICAgIHRoaXMuZ1N0b3JhZ2UoKVxuXG4gICAgLy8vZ2V0IHVzZXIgbG9jYXRpb25cbiAgICB0aGlzLmdlbygpXG4gICAgdGhpcy5iR2VvKClcblxuICAgIC8vZ2V0ICBnbG9iYWwgZ2FtZVxuICAgIHRoaXMuYkdMT0JBTEdBTUVTKClcbiAgfVxuXG4gIGdldFNsaWRlQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNsYXRlOiB7IHg6IHRoaXMuZ2V0VGFiVHJhbnNsYXRlWChpbmRleCksIHk6IDAgfSxcbiAgICAgIGN1cnZlOiB0aGlzLmFuaW1hdGlvbkN1cnZlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGdldEZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6IHsgeDogMS41LCB5OiAxLjUgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMTUgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRVbmZvY3VzQW5pbWF0aW9uKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRUYWJUcmFuc2xhdGVYKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIHRoaXMudGFiTGlzdC5sZW5ndGggLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgKyAoODAgLyAyKVxuICB9XG5cbiAgc2V0R2FtZUlkKGdJRCkge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICB0aGlzLiRnSUQgPSBnSURcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCgyKVxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgfSwgMTAwMClcbiAgICB9KVxuICB9XG4gIHBvcChtZXNzYWdlOiBhbnksIHR5cGU6IGFueSkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdHlwZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG5cbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJSYWNlIGNob3NlbiFcIik7XG4gICAgfSk7XG4gIH1cblxuICBvblR5cGUodmFsdWUpIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGdUeXBlID09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy4kZ1R5cGUgPSAnZ2xvYmFsJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZ1R5cGUgPSAnbG9jYWwnXG5cbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgcHVibGljIG9uQ29weSh0ZXh0OiBhbnkpOiB2b2lkIHtcbiAgICBzZXRUZXh0KHRleHQpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnBvcChcImNvcGllZCAgdG8gIGNsaXBib2FyZFwiLCAnc3VjY2VzcycpKVxuICAgICAgLmNhdGNoKChlcnI6IHN0cmluZykgPT4gdGhpcy5wb3AoXCJlcnJvciBjb3B5aW5nLCB0cnkgYWdhaW5cIiwgJ2Vycm9yJykpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgIHRoaXMucnVuVGltZXIgPSBmYWxzZVxuICAgICAgaWYgKHRoaXMuT1RJTUVSKSB7XG5cbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KHRoaXMuT1RJTUVSKTtcblxuICAgICAgfVxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuXG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==