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
                    console.log("Unable to Enable Location please fix", ex);
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
        var ACTIONS = ["pay with bitcoin", "pay with owo"];
        tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["action"]({
            message: "Payment Options",
            cancelButtonText: "cancel",
            actions: ACTIONS
        }).then(function (result) {
            if (result == 'pay with  bitcoin') {
            }
            else if (result == 'pay with  owo') {
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUduSDtBQUVjO0FBQ0gsQ0FBQywrREFBK0Q7QUFDL0Q7QUFFa0I7QUFDZDtBQUMxRCw2RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLDhFQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsNkZBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBTSwwQkFBTyxDQUFDLHNFQUFxQyxDQUFDLENBQUMsYUFBYSxFQUE1RCxDQUE0RCxDQUFDLENBQUM7QUFHOUM7QUFJdkQsSUFBTSxZQUFZLEdBQUcsbUJBQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ3RCO0FBQzZCO0FBQzdFLGlEQUFpRDtBQUNjO0FBQ2Y7QUFDb0M7QUFDckQ7QUFVL0I7SUFpR0UsdUJBQW1CLEtBQW1CLEVBQVUsSUFBWSxFQUFVLEVBQXFCLEVBQVUsTUFBd0IsRUFBVSxJQUFVO1FBQTlILFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFyRmpKLGFBQWE7UUFDYixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsdURBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsOEJBQThCO1FBQzlCLGlCQUFZLEdBQUc7WUFDYixlQUFlLEVBQUUsU0FBUztZQUMxQixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ0YsWUFBTyxHQUFtRztZQUN4RyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNoRixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUNqRixDQUFDO1FBRUYsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUF3QzVCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBMkJaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7SUFFbkIsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxRQUFRO0lBRVIsdUNBQWUsR0FBZjtRQUVFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFTSwyQkFBRyxHQUFWO1FBQUEsaUJBbUJDO1FBakJDLGtFQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLDhFQUFpQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLFVBQUMsQ0FBQztvQkFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO29CQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQUU7b0JBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBRSxVQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFBQSxpQkE4QkM7UUE1QkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJFQUE4QixDQUFDO1lBQzdCLGVBQWUsRUFBRSxrRUFBUSxDQUFDLElBQUk7WUFDOUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNmLElBQUksR0FBRyxFQUFFO2dCQUVQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRO2dCQUN2QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTO2dCQUN4QixZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXZELEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsbUJBQW1CO2FBQ3BCO2lCQUFNO2dCQUVMLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFFdEI7UUFDSCxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsbUJBQW1CO0lBQ25CLGdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLG1FQUFTLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUF3QjtTQUV2QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0I7U0FFakM7UUFFRCwyQkFBMkI7UUFFM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUVkO2FBQU07WUFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUV2QixJQUFJLENBQUMsTUFBTSxFQUFFO1NBRWQ7SUFFSCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLFdBQVc7SUFDWCw2QkFBSyxHQUFMO1FBQUEsaUJBNkNDO1FBNUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN4RCxTQUFTLENBQ1IsVUFBQyxLQUFLO1lBRUosSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUVqQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFFWixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJO29CQUNqQixvQkFBb0I7b0JBRXBCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksa0JBQWtCO29CQUNuRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLG9DQUFvQztvQkFDekUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO29CQUNsQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUM7b0JBQy9DLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztvQkFDMUMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxjQUFjO29CQUNqRCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztvQkFDL0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUztvQkFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVztvQkFDcEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBRUwsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBRVosS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLO29CQUNqQixLQUFJLENBQUMsTUFBTSxHQUFHLG9DQUFvQztvQkFDbEQsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHO29CQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRztvQkFFeEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO2FBQ0g7UUFHSCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLGNBQWM7SUFFZCxnQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUF2QixpQkE2QkM7UUEzQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFZCxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQztTQUUvQzthQUFNO1lBRUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDL0MsU0FBUyxDQUNSLFVBQUMsS0FBVTtnQkFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBRWpCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNaLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7d0JBRWxDLEtBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1osS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFFMUIsQ0FBQyxDQUFDO2lCQUVIO3FCQUFNO29CQUVMLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ2pDO1lBRUgsQ0FBQyxDQUFDO1NBQ1A7SUFFSCxDQUFDO0lBRUssOEJBQU0sR0FBWjs7OztnQkFFRSxrRUFBYyxDQUFDO29CQUNiLE9BQU8sRUFBRSxjQUFjO29CQUN2QixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7aUJBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxNQUFNLElBQUksZ0JBQWdCLEVBQUU7d0JBRTlCLGtFQUFjLENBQUM7NEJBQ2IsS0FBSyxFQUFFLGdCQUFnQjs0QkFDdkIsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsWUFBWSxFQUFFLE1BQU07NEJBQ3BCLGdCQUFnQixFQUFFLFFBQVE7NEJBQzFCLFdBQVcsRUFBRSxJQUFJOzRCQUNqQixTQUFTLEVBQUUscUVBQWlCLENBQUMsSUFBSTt5QkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7NEJBRVIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO2dDQUNaLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7NkJBRS9CO3dCQUVILENBQUMsQ0FBQyxDQUFDO3FCQUVKO3lCQUFNLElBQUksTUFBTSxJQUFJLFlBQVksRUFBRTt3QkFDakMsWUFBWTt3QkFDWixrRUFBYyxDQUFDOzRCQUNiLEtBQUssRUFBRSxZQUFZOzRCQUNuQixPQUFPLEVBQUUsd0RBQXdEOzRCQUNqRSxZQUFZLEVBQUUsTUFBTTs0QkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTs0QkFDMUIsV0FBVyxFQUFFLElBQUk7NEJBQ2pCLFNBQVMsRUFBRSxxRUFBaUIsQ0FBQyxJQUFJO3lCQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQzs0QkFDUixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0NBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs2QkFFL0I7d0JBRUgsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7S0FFSjtJQUVELGtDQUFVLEdBQVY7UUFFRSxJQUFJLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztRQUVsRCxrRUFBYyxDQUFDO1lBQ2IsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFNLElBQUksbUJBQW1CLEVBQUU7YUFHbEM7aUJBQU0sSUFBSSxNQUFNLElBQUksZUFBZSxFQUFFO2FBRXJDO1FBRUgsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUixVQUFTLElBQVM7UUFBbEIsaUJBU0M7UUFQQyxVQUFVLENBQUM7WUFFVCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDeEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQztRQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBMENDO1FBekNDLElBQUksT0FBTyxDQUFDO1FBRVosSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7YUFFaEg7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQzthQUV2RztTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7U0FDN0Y7UUFDRCxrRUFBYyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE1BQU07WUFDZixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFO2dCQUV0QixZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDNUIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDO2FBRUg7aUJBQU0sSUFBSSxNQUFNLElBQUksVUFBVSxFQUFFO2dCQUUvQixVQUFVLENBQUM7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7b0JBRTVCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQy9CLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFlBQVksRUFBRSxLQUFLO3FCQUNwQixDQUFDO2dCQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNUO1FBRUgsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLElBQVksRUFBRSxJQUFZO1FBQXpDLGlCQXFCQztRQW5CQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzthQUNqRCxTQUFTLENBQ1IsVUFBQyxLQUFVO1lBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUVqQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDWixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUVsQyxLQUFJLENBQUMsS0FBSyxFQUFFO29CQUNaLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBRTFCLENBQUMsQ0FBQzthQUVIO2lCQUFNO2dCQUVMLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDakM7UUFFSCxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLG9CQUFvQjtJQUNwQiw4QkFBTSxHQUFOO1FBQUEsaUJBeUNDO1FBdkNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNsQyxTQUFTLENBQ1IsVUFBQyxLQUFVO1lBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFFWixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM5QixrQ0FBa0M7b0JBQ2xDLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixJQUFJO29CQUVKLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU07b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQ3BDLGdDQUFnQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7b0JBQzFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3pFLDBCQUEwQjtvQkFFMUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSztvQkFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztvQkFDN0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVO29CQUMvQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQy9DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWTtvQkFDbkQseUJBQXlCO29CQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7b0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO2FBR0g7aUJBQU07Z0JBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QztRQUVILENBQUMsQ0FBQztJQUNSLENBQUM7SUFHRCx1RUFBdUU7SUFDdkUsZUFBZTtJQUVmLCtCQUFPLEdBQVA7UUFBQSxpQkFvREM7UUFuREMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsbURBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxrREFBaUIsQ0FBQztZQUU5QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQztpQkFDakQsU0FBUyxDQUNSLFVBQUMsS0FBVTtnQkFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBRWpCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUVaLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTs0QkFDZCxxQ0FBcUM7NEJBQ3JDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSzs0QkFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs0QkFDN0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzRCQUMvQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVU7NEJBQy9DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWTs0QkFDbkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJOzRCQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87NEJBQzdDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUzs0QkFDaEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs0QkFDOUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87NEJBQ2pDLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHOzRCQUN0RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxJQUFLLFFBQUMsQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksRUFBbkIsQ0FBbUIsQ0FBQzs0QkFFcEUsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSzs0QkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO3lCQUV2Qjs2QkFBTTs0QkFFTCw0RUFBNEU7NEJBQzVFLDhCQUE4Qjs0QkFFOUIscUNBQXFDO3lCQUV0Qzt3QkFFRCwyQkFBMkI7d0JBQzNCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRTFCLENBQUMsQ0FBQzswQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztpQkFFakM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkF1RUM7UUFyRUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUMsU0FBUyxDQUNSLFVBQUMsS0FBVTtZQUNULElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFFakIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBRVosS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztvQkFFbEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFMUIsQ0FBQyxDQUFDO2FBR0g7aUJBQU07Z0JBRUwsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFFbkIsa0VBQWMsQ0FBQzt3QkFDYixLQUFLLEVBQUUsY0FBYzt3QkFDckIsT0FBTyxFQUFFLDhEQUE4RDt3QkFDdkUsWUFBWSxFQUFFLFVBQVU7d0JBQ3hCLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLFNBQVMsRUFBRSxxRUFBaUIsQ0FBQyxNQUFNO3FCQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQzt3QkFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7NEJBRVYsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3lCQUVuQjs2QkFBTTt5QkFFTjt3QkFDRCxtRUFBbUU7b0JBRXJFLENBQUMsQ0FBQyxDQUFDO2lCQUVKO2dCQUVELGdDQUFnQztnQkFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFFbkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDaEMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBR1osVUFBVSxDQUFDOzRCQUVULEtBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBRTFCLENBQUMsRUFBRSxJQUFJLENBQUM7b0JBR1YsQ0FBQyxDQUFDO2lCQUdIO2dCQUNELGdDQUFnQztnQkFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFFbkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFFakM7YUFFRjtRQUVILENBQUMsQ0FBQztJQUVSLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBMEJDO1FBeEJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hELFNBQVMsQ0FDUixVQUFDLEtBQVU7WUFFVCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFWixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87aUJBQzdCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87aUJBRTdCO2dCQUNELFVBQVUsQ0FBQztvQkFFVCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBR25CLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBRVIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUxQixDQUFDLENBQUM7UUFFSixDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQTBCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoRCxTQUFTLENBQ1IsVUFBQyxLQUFVO1lBRVQsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBRVosSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUNqQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO2lCQUM3QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO2lCQUU3QjtnQkFDRCxVQUFVLENBQUM7b0JBRVQsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUduQixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUVSLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFMUIsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkEwQkM7UUF4QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakQsU0FBUyxDQUNSLFVBQUMsS0FBVTtZQUVULEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUVaLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztpQkFDN0I7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztpQkFFN0I7Z0JBQ0QsVUFBVSxDQUFDO29CQUVULEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtnQkFHbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFFUixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTFCLENBQUMsQ0FBQztRQUVKLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsaUJBQWlCO0lBRWpCLDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQXBCLGlCQW9DQztRQWxDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDdEQsU0FBUyxDQUNSLFVBQUMsS0FBVTtZQUNULElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFFakIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBRVosa0VBQWMsQ0FBQzt3QkFDYixLQUFLLEVBQUUsZ0JBQWdCO3dCQUN2QixPQUFPLEVBQUUsdUJBQXVCO3dCQUNoQyxZQUFZLEVBQUUsV0FBVzt3QkFDekIsZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsU0FBUyxFQUFFLHFFQUFpQixDQUFDLElBQUk7cUJBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTs0QkFFVixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7eUJBRTNCOzZCQUFNOzRCQUNMLEtBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDO3lCQUNqRDt3QkFDRCxtRUFBbUU7b0JBRXJFLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBRzFCLENBQUMsQ0FBQzthQUVIO2lCQUFNO2FBRU47UUFDSCxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLElBQVk7UUFBMUIsaUJBcURDO1FBbkRDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixVQUFDLEtBQVU7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBRWpCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUVaLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7b0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7b0JBQ3RCLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQzVDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQzFDLEtBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO29CQUN4QyxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFHekI7aUJBQU07Z0JBRUwsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDaEMsVUFBVSxDQUFDO29CQUVULEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUVaLGtFQUFjLENBQUM7NEJBQ2IsS0FBSyxFQUFFLGdCQUFnQjs0QkFDdkIsT0FBTyxFQUFFLHVCQUF1Qjs0QkFDaEMsWUFBWSxFQUFFLFdBQVc7NEJBQ3pCLGdCQUFnQixFQUFFLFFBQVE7NEJBQzFCLFNBQVMsRUFBRSxxRUFBaUIsQ0FBQyxJQUFJO3lCQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQzs0QkFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0NBRVYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzZCQUUzQjtpQ0FBTTtnQ0FDTCxLQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQzs2QkFDakQ7NEJBQ0QsbUVBQW1FO3dCQUVyRSxDQUFDLENBQUMsQ0FBQzt3QkFFSCxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUcxQixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQzthQUVUO1FBQ0gsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFFBQVE7SUFFdEIsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxtQkFBbUI7SUFFbkIsbUVBQW1FO0lBQ25FLDhDQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUExRCxpQkFTQztRQVJDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1osSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLHNDQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsUUFBc0I7UUFBcEQsaUJBeUNDO1FBekM2Qix5Q0FBc0I7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFWixJQUFJLEtBQUksQ0FBQyxlQUFlLEtBQUssS0FBSyxFQUFFO2dCQUNsQyxJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVsRCxnQ0FBZ0M7Z0JBQ2hDLGNBQWMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUVySCw2QkFBNkI7Z0JBQzdCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN0RjtZQUVELDhEQUE4RDtZQUM5RCxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7Z0JBQ25ELEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDL0M7WUFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0UsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5RSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFL0UsaUNBQWlDO1lBQ2pDLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBRWxCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFFZCxtREFBa0IsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFFakM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sRUFBRTthQUVmO1lBRUQsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQixDQUFDLENBQUM7SUFFSixDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLHlDQUFpQixHQUFqQixVQUFrQixJQUF5QjtRQUN6QyxJQUFJLFNBQVMsR0FBMkIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLElBQUksR0FBVyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLGNBQWM7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDM0IsZ0JBQWdCO1lBQ2hCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMzQixZQUFZO1lBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBTSxRQUFRLEdBQUcsZ0VBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ25FLElBQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFNLFVBQVUsR0FBVyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ2xELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixXQUFXO2dCQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVELHNEQUFzRDtnQkFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO2FBQzVFO2lCQUFNO2dCQUNMLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUQsdURBQXVEO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7YUFDNUU7U0FDRjtJQUNILENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsa0JBQWtCO0lBRWxCLHdDQUFnQixHQUFoQjtRQUNFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsZ0VBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxnRUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUUzQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsQ0FBRSxDQUFDLGdFQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5RiwyQkFBMkI7UUFDM0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDaEUsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLENBQUUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU1QyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLElBQUksRUFBRTtJQUNiLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsS0FBYSxFQUFFLFFBQWdCO1FBQy9DLE9BQU87WUFDTCxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEQsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzFCLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEtBQWEsRUFBRSxRQUFnQjtRQUMvQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxRQUFnQjtRQUNqRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLE9BQU8sS0FBSyxHQUFHLGdFQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLGdFQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxHQUFHO1FBQWIsaUJBV0M7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNaLFVBQVUsQ0FBQztnQkFFVCxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBQ2YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNULENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCwyQkFBRyxHQUFILFVBQUksT0FBWSxFQUFFLElBQVM7UUFFekIsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRiwyRUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwQiwrQkFBK0I7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQUs7UUFBWixpQkFhQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1osSUFBSSxLQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtnQkFDMUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTzthQUV0QjtZQUNELEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFMUIsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxJQUFTO1FBQXZCLGlCQUlDO1FBSEMsdUVBQU8sQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLENBQUMsY0FBTSxZQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDO2FBQ3hELEtBQUssQ0FBQyxVQUFDLEdBQVcsSUFBSyxZQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBRWYsbURBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBRWpDO0lBRUgsQ0FBQzs7Z0JBaDRCeUIsMkRBQVk7Z0JBQWdCLG9EQUFNO2dCQUFjLCtEQUFpQjtnQkFBa0IsNEVBQWdCO2dCQUFnQiw4REFBSTs7SUEvRjVHO1FBQXBDLCtEQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFPLHdEQUFVOytDQUFDO0lBQ1Q7UUFBNUMsK0RBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWUsd0RBQVU7dURBQUM7SUFDM0I7UUFBMUMsK0RBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWEsd0RBQVU7cURBQUM7SUFDekI7UUFBeEMsK0RBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQVcsd0RBQVU7bURBQUM7SUFDcEI7UUFBekMsK0RBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQVksd0RBQVU7b0RBQUM7SUFDcEI7UUFBM0MsK0RBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWMsd0RBQVU7c0RBQUM7SUFDckI7UUFBOUMsK0RBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBaUIsd0RBQVU7eURBQUM7SUFFdkI7UUFBbEQsa0VBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsd0RBQVUsRUFBRSxDQUFDO2tDQUFjLHVEQUFTO3NEQUFhO0lBVjNFLGFBQWE7UUFQekIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQztZQUVwQyxlQUFlLEVBQUUscUVBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQzt5Q0FrRzBCLDJEQUFZLEVBQWdCLG9EQUFNLEVBQWMsK0RBQWlCLEVBQWtCLDRFQUFnQixFQUFnQiw4REFBSTtPQWpHdEksYUFBYSxDQWsrQnpCO0lBQUQsb0JBQUM7Q0FBQTtBQWwrQnlCIiwiZmlsZSI6IjAuNzUwN2ZhOWQ5YTk0ZWRjODcwN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVN0YXRlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7IC8vIHVzZWQgdG8gZGVzY3JpYmUgYXQgd2hhdCBhY2N1cmFjeSB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIGdldFxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFRlbGVwaG9ueSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcGhvbnknO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ0Buc3R1ZGlvL25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwiQG5zdHVkaW8vbmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XG5cbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcblxuaW1wb3J0IHsgZ2V0VVVJRCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11dWlkJztcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IGdldFRleHQsIHNldFRleHQsIGdldFRleHRTeW5jLCBzZXRUZXh0U3luYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCI7XG5pbXBvcnQgKiBhcyB0aW1lciBmcm9tIFwidGltZXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEsIExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJIb21lXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgndGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlckNpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlckNpcmNsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJhZ0NpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRyYWdDaXJjbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xlZnRUYWJzJywgeyBzdGF0aWM6IHRydWUgfSkgbGVmdFRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JpZ2h0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHJpZ2h0VGFiczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2VudGVyUGF0Y2gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJQYXRjaDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiQkdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJCR0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCd0YWJDb250ZW50cycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIC8vIFBhbiBIZWxwZXJcbiAgcHJldkRlbHRhWDogbnVtYmVyID0gMDtcblxuICBhbmltYXRpb25DdXJ2ZSA9IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC4zOCwgLjQ3LCAwLCAxKTtcblxuICAvLyBUYWIgQ29udGVudHMgYW5kIFByb3BlcnRpZXNcbiAgdGFiQ29udGFpbmVyID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLFxuICAgIGZvY3VzQ29sb3I6ICcjRjFGMUYxJ1xuICB9O1xuICB0YWJMaXN0OiB7IHRleHQ6IHN0cmluZywgaWNvbj86IHN0cmluZywgY29sb3I/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBmYWRlQ29sb3I/OiBzdHJpbmcgfVtdID0gW1xuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY1NTUpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY0NmQpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY0NDEpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMDcpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9LFxuICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGY3OWMpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgY29sb3I6ICcjREM3OTA1JyB9XG4gIF07XG5cbiAgY3VycmVudFRhYkluZGV4OiBudW1iZXIgPSAyO1xuICBkZWZhdWx0U2VsZWN0ZWQ6IG51bWJlciA9IDI7XG5cblxuICAkZ2FtZTogYW55XG4gICRnVHlwZTogc3RyaW5nXG4gICRnSUQ6IHN0cmluZ1xuXG4gIHRva2VuOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHVzZXI6IHN0cmluZ1xuICBhdmF0YXI6IHN0cmluZ1xuICBwcmFjdGljZUNvdW50OiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICB3aW5zOiBzdHJpbmdcbiAgY291bnRyeTogc3RyaW5nXG4gIGNpdHk6IHN0cmluZ1xuICBhZGRyZXNzOiBzdHJpbmdcbiAgZ2FtZXNQbGF5ZWQ6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcblxuICBsYXQ6IHN0cmluZ1xuICBsbmc6IHN0cmluZ1xuXG4gIERVU0VSOiBhbnlcbiAgREdBTUVTOiBhbnlcbiAgUExBWUVSUzogYW55XG4gIERnYW1lOiBhbnlcbiAgVVNFUklOR0FNRTogYW55XG4gIEdBTUVGVUxMOiBhbnlcbiAgR0FNRVNUQVJURUQ6IGFueVxuICBHQU1FQ09NUExFVEU6IGFueVxuXG4gIEdMT0JBTEdBTUVTOiBbXVxuICBMT0NBTEdBTUVTOiBbXVxuXG4gIE9USU1FUjogYW55XG4gIHRpbWVyOiBhbnlcbiAgZ2FtZVRpbWU6IGFueVxuICBydW5UaW1lcjogYm9vbGVhblxuXG4gIGxvY2F0aW9ucyA9IFtdO1xuICB3YXRjaElkcyA9IFtdO1xuXG4gIHRpdGxlOiBhbnlcbiAgaW1hZ2U6IGFueVxuICBwbGF5ZXJzTWluOiBzdHJpbmdcbiAgcGxheWVyc1JlYWR5OiBzdHJpbmdcbiAgcGxheWVyc01heDogc3RyaW5nXG5cbiAgZGV2aWNlOiBhbnlcbiAgYWRtaW46IGFueVxuXG4gIHBsYXllcnNIZWlnaHQ6IGFueVxuXG4gIHNob3dCdXlUb29sczogYm9vbGVhblxuICBzaG93Q3JlYXRlOiBib29sZWFuXG4gIGxpdmVHYW1lOiBhbnlcblxuICBidXlHcmFiczogYW55XG4gIGJ1eVNsYXBzOiBhbnlcbiAgYnV5U25lYWtzOiBhbnlcbiAgYnV5VG90YWw6IGFueVxuICBidGNfdmFsdWU6IHN0cmluZ1xuICBidGNfZmVlOiBzdHJpbmdcbiAgYnRjX2ZlZV91c2Q6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZ2FtZTogR2FtZVByb3ZpZGVyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblxuICAgIHRoaXMuJGdhbWUgPSBfZ2FtZVxuICAgIHRoaXMuJGdUeXBlID0gJ2dsb2JhbCdcbiAgICB0aGlzLnNob3dCdXlUb29scyA9IGZhbHNlXG4gICAgdGhpcy5zaG93Q3JlYXRlID0gZmFsc2VcbiAgICB0aGlzLmxpdmVHYW1lID0gMFxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBIb29rc1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZVRhYkJhcigpO1xuXG4gIH1cblxuICBwdWJsaWMgZ2VvKCkge1xuXG4gICAgZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbigoaXNFbmFibGVkKSA9PiB7XG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QodHJ1ZSwgdHJ1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIEVuYWJsZWQgTG9jYXRpb24gU2VydmljZVwiKTtcbiAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnBvcChlLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KS5jYXRjaChleCA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBFbmFibGUgTG9jYXRpb24gcGxlYXNlIGZpeFwiLCBleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIChlKSA9PiB7XG4gICAgICB0aGlzLnBvcChlLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGJHZW8oKSB7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcbiAgICAgIG1heGltdW1BZ2U6IDUwMDAsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pLnRoZW4oKGxvYzogYW55KSA9PiB7XG4gICAgICBpZiAobG9jKSB7XG5cbiAgICAgICAgdGhhdC5sb2NhdGlvbnMucHVzaChsb2MpO1xuICAgICAgICB0aGlzLmxhdCA9IGxvYy5sYXRpdHVkZVxuICAgICAgICB0aGlzLmxuZyA9IGxvYy5sb25naXR1ZGVcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygnbGF0JywgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXQpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCdsbmcnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxuZykpXG5cbiAgICAgICAgdGhpcy5nU3RvcmFnZSgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvYylcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5iR0FNRVMoKVxuICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jJylcblxuICAgICAgfVxuICAgIH0sIChlKSA9PiB7XG5cbiAgICAgIHRoaXMucG9wKGUubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCBzdG9yZWQgIGluZm9cbiAgZ1N0b3JhZ2UoKSB7XG5cbiAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldFN0cmluZygndG9rZW4nKVxuICAgIHRoaXMubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ25hbWUnKVxuICAgIHRoaXMudXNlciA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3VzZXInKVxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZFwiKVxuICAgICAgdGhpcy5kZXZpY2UgPSBcImFuZHJvaWQ0OTU3NzVxYWZlZjRiaTlcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW9zXCIpXG5cbiAgICAgIHRoaXMuZGV2aWNlID0gXCJhbmZlb2JvZXVhYjMwcjN1XCJcblxuICAgIH1cblxuICAgIC8vIHRoaXMuZGV2aWNlID0gZ2V0VVVJRCgpO1xuXG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJnb3QgdXNlciBpZCBzdG9yZWRcIilcbiAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgdGhpcy5iR0FNRVMoKVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc29sZS5sb2coXCJubyB1c2Vyc1wiKVxuXG4gICAgICB0aGlzLmJHQU1FUygpXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldCB1c2VyXG4gIGdVU0VSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGUgdXNlclwiKVxuICAgIHRoaXMuJGdhbWUuZ1VTRVIodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGkpID0+IHtcblxuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIGxldCBVU0VSID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICB0aGlzLkRVU0VSID0gVVNFUlxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhVU0VSKVxuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9IFVTRVIucHJvZmlsZS5uYW1lIHx8ICdubyB1c2VyIG5hbWUgc2V0J1xuICAgICAgICAgICAgICB0aGlzLmF2YXRhciA9IFVTRVIucHJvZmlsZS5hdmF0YXIgfHwgJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG4gICAgICAgICAgICAgIHRoaXMud2lucyA9IFVTRVIucHJvZmlsZS53aW5zIHx8IDBcbiAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZUNvdW50ID0gVVNFUi5wcm9maWxlLnByYWN0aWNlIHx8IDBcbiAgICAgICAgICAgICAgdGhpcy5nYW1lc1BsYXllZCA9IFVTRVIucHJvZmlsZS5wbGF5cyB8fCAwXG4gICAgICAgICAgICAgIHRoaXMuZW1haWwgPSBVU0VSLnByb2ZpbGUuZW1haWwgfHwgJ25vIGVtYWlsIHNldCdcbiAgICAgICAgICAgICAgdGhpcy5hZG1pbiA9IFVTRVIucHJvZmlsZS5hZG1pblxuICAgICAgICAgICAgICB0aGlzLmJ0Y192YWx1ZSA9IGpvcmRpLmJ0Y192YWx1ZVxuICAgICAgICAgICAgICB0aGlzLmJ0Y19mZWVfdXNkID0gam9yZGkuYnRjX2ZlZV91c2RcbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gJ24vYSdcbiAgICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSAnfi9hc3NldHMvaW1ncy9hdmF0YXJzL2FsaWVuXzAyLnBuZydcbiAgICAgICAgICAgICAgdGhpcy53aW5zID0gJzAnXG4gICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VDb3VudCA9ICcwJ1xuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gc2V0IGF2YXRhcXJcblxuICBvbkF2YXRhcihhdmF0YXI6IHN0cmluZykge1xuXG4gICAgaWYgKCF0aGlzLnVzZXIpIHtcblxuICAgICAgdGhpcy5wb3AoXCJsb2cgaW4gdG8gc2V0IHlvdXIgYXZhdGFyXCIsIFwiZXJyb3JcIilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuJGdhbWUub25BdmF0YXIodGhpcy50b2tlbiwgdGhpcy51c2VyLCBhdmF0YXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIG9uRWRpdCgpIHtcblxuICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IFwiRWRpdCBQcm9maWxlXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgYWN0aW9uczogW1wiZWRpdCB1c2VyIG5hbWVcIiwgXCJlZGl0IGVtYWlsXCJdXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQgPT0gXCJlZGl0IHVzZXIgbmFtZVwiKSB7XG5cbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgIHRpdGxlOiBcIkVkaXQgVXNlciBOYW1lXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJjaG9vc2UgYSBzdWl0YWJsZSB1c2VyIG5hbWVcIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwic2F2ZVwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IG51bGwsXG4gICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgIH0pLnRoZW4oKHIpID0+IHtcblxuICAgICAgICAgIGlmIChyLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5vbkVkaXRDb21wbGV0ZShyLnRleHQsIDEpXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiZWRpdCBlbWFpbFwiKSB7XG4gICAgICAgIC8vRG8gYWN0aW9uMlxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgdGl0bGU6IFwiRWRpdCBFbWFpbFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiYSBjb25maXJtYXRpb24gY29kZSB3aWxsIGJlIHNlbnQgdG8geW91ciBlbWFpbCBhZGRyZXNzXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcInNhdmVcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBudWxsLFxuICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgaWYgKHIucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLm9uRWRpdENvbXBsZXRlKHIudGV4dCwgMilcblxuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgb25CdXlUb29scygpIHtcblxuICAgIGxldCBBQ1RJT05TID0gW1wicGF5IHdpdGggYml0Y29pblwiLCBcInBheSB3aXRoIG93b1wiXVxuXG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgbWVzc2FnZTogXCJQYXltZW50IE9wdGlvbnNcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBhY3Rpb25zOiBBQ1RJT05TXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICdwYXkgd2l0aCAgYml0Y29pbicpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAncGF5IHdpdGggIG93bycpIHtcblxuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cbiAgb25DcmVhdGUodHlwZTogYW55KSB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlLycgKyB0eXBlXSwge1xuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgfSlcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgb25NZW51KCkge1xuICAgIGxldCBBQ1RJT05TO1xuXG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgaWYgKHRoaXMuYWRtaW4gPiAwKSB7XG4gICAgICAgIEFDVElPTlMgPSBbXCJhZG1pblwiLCBcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIiwgXCJsb2dvdXRcIl1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQUNUSU9OUyA9IFtcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIiwgXCJsb2dvdXRcIl1cblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBBQ1RJT05TID0gW1wiY2hhdFwiLCBcImhvdyB0byBwbGF5XCIsIFwic3VwcG9ydFwiLCBcImFib3V0IHVzXCIsIFwidXNlciBhZ3JlZW1lbnRcIiwgXCJwcml2YWN5IHBvbGljeVwiXVxuICAgIH1cbiAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIk1lbnVcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICBhY3Rpb25zOiBBQ1RJT05TXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICdsb2dvdXQnKSB7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZShcInVzZXJcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoJ3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZSgnbmFtZScpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3AoXCJ5b3UgYXJlIGxvZ2dlZCBub3Qgb3V0XCIsICdzdWNjZXNzJylcbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ2Fib3V0IHVzJykge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgY2xpY2tlZFwiKVxuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWJvdXQnXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgb25FZGl0Q29tcGxldGUodGV4dDogc3RyaW5nLCB0eXBlOiBudW1iZXIpIHtcblxuICAgIHRoaXMuJGdhbWUub25FZGl0KHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGV4dCwgdHlwZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICB0aGlzLmdVU0VSKClcbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gYnJpbmcgZ2xvYmFsIGdhbWVcbiAgYkdBTUVTKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5iR0FNRVModGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5ER0FNRVMgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuREdBTUVTLmxlbmd0aClcbiAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLkRHQU1FUykge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMuYkdBTUVTKClcbiAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgIHRoaXMuR0xPQkFMR0FNRVMgPSB0aGlzLkRHQU1FU1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkdMT0JBTEdBTUVTLmxlbmd0aClcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coam9yZGkucGF5bG9hZFsxXSlcbiAgICAgICAgICAgICAgdGhpcy5MT0NBTEdBTUVTID0gam9yZGkucGF5bG9hZFswXSB8fCAnW10nXG4gICAgICAgICAgICAgIHRoaXMuRGdhbWUgPSB0aGlzLkRHQU1FU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLkRHQU1FUy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5EZ2FtZSlcblxuICAgICAgICAgICAgICB0aGlzLiRnSUQgPSB0aGlzLkRnYW1lLmdhbWVcbiAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuRGdhbWUuZGV0YWlscy50aXRsZVxuICAgICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5EZ2FtZS5kZXRhaWxzLmltYWdlc1swXS51cmxcbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzTWF4ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNNYXhcbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzTWluID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNNaW5cbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzUmVhZHkgPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc1JlYWR5XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJGdJRClcbiAgICAgICAgICAgICAgdGhpcy5ydW5UaW1lciA9IHRydWVcbiAgICAgICAgICAgICAgdGhpcy5vblRpbWVyKClcbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBnYW1lcyBhdmFpbGFibGUgeWV0cycpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdhbWUgIEFjdGlvblxuXG4gIG9uVGltZXIoKSB7XG4gICAgaWYgKHRoaXMuT1RJTUVSKSB7XG4gICAgICB0aW1lci5jbGVhclRpbWVvdXQodGhpcy5PVElNRVIpO1xuICAgIH1cbiAgICB0aGlzLk9USU1FUiA9IHRpbWVyLnNldEludGVydmFsKCgpID0+IHtcblxuICAgICAgdGhpcy4kZ2FtZS5vblRpbWVyKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy4kZ0lEKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5EZ2FtZSA9IGpvcmRpLnBheWxvYWRbMF1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5EZ2FtZSkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5EZ2FtZSwgdGhpcy4kZ0lEKVxuICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuRGdhbWUuZGV0YWlscy50aXRsZVxuICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuRGdhbWUuZGV0YWlscy5pbWFnZXNbMF0udXJsXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNNYXggPSB0aGlzLkRnYW1lLmRldGFpbHMucGxheWVyc01heFxuICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzTWluID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNNaW5cbiAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1JlYWR5ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNSZWFkeVxuICAgICAgICAgICAgICAgICAgdGhpcy5HQU1FRlVMTCA9IHRoaXMuRGdhbWUuZGV0YWlscy5mdWxsXG4gICAgICAgICAgICAgICAgICB0aGlzLkdBTUVTVEFSVEVEID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgIHRoaXMuR0FNRUNPTVBMRVRFID0gdGhpcy5EZ2FtZS5kZXRhaWxzLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgdGhpcy5saXZlR2FtZSA9IGpvcmRpLmxpdmVHYW1lXG4gICAgICAgICAgICAgICAgICB0aGlzLlBMQVlFUlMgPSB0aGlzLkRnYW1lLnBsYXllcnNcbiAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc0hlaWdodCA9ICh0aGlzLlBMQVlFUlMubGVuZ3RoICogMTUwKSArIDkwMFxuICAgICAgICAgICAgICAgICAgdGhpcy5VU0VSSU5HQU1FID0gdGhpcy5QTEFZRVJTLmZpbmQoKHg6IGFueSkgPT4geC51c2VyID09IHRoaXMudXNlcilcblxuICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lVGltZSA9IGpvcmRpLnRpbWVyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRnSUQpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLkRnYW1lID0gdGhpcy5ER0FNRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ER0FNRVMubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLiRnSUQgPSB0aGlzLkRnYW1lLmdhbWVcblxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5EZ2FtZSwgdGhpcy4kZ0lEKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coam9yZGkudGltZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAsIGNvbnNvbGUubG9nKFwidGltZXIgcnVubmluZ1wiKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVyIGVycm9yXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIG9uUGxheSgpIHtcblxuICAgIHRoaXMuJGdhbWUucGxheSh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoam9yZGkudHlwZSA9PSAxKSB7XG5cbiAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luL1NpZ251cFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwicmVnaXN0ZXIgb3IgbG9naW4gc2VjdXJlbHkgIHZpYSBzbXMuIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcInNlbmQgc21zXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLm51bWJlclxuICAgICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKHIudGV4dClcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLy91c2VyIHByb2ZpbGUgaXMgIG5vdCBjb21wbGV0ZVxuICAgICAgICAgICAgaWYgKGpvcmRpLnR5cGUgPT0gMikge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKDMpXG4gICAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgICAgIH0sIDIwMDApXG5cblxuICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vL3VzZXIgaXMgYWxyZWFkeSBpbiB0aGlzICBnYW1lXG4gICAgICAgICAgICBpZiAoam9yZGkudHlwZSA9PSAzKSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgfVxuXG4gIG9uR3JhYigpIHtcblxuICAgIHRoaXMuJGdhbWUub25HcmFiKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy4kZ0lEKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcblxuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBqb3JkaS5tZXNzYWdlXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnXG5cblxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gIH1cblxuICBvblNsYXAoKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uU2xhcCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJ1xuXG5cbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICB9XG5cbiAgb25TbmVhaygpIHtcblxuICAgIHRoaXMuJGdhbWUub25TbmVhayh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJ1xuXG5cbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gbG9naW4vcmVnaXN0ZXJcblxuICBsb2dpbihudW1iZXI6IHN0cmluZykge1xuXG4gICAgdGhpcy4kZ2FtZS5sb2dpbihudW1iZXIsIHRoaXMuZGV2aWNlLCB0aGlzLmxhdCwgdGhpcy5sbmcpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJ2ZXJpZnkgYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgeW91ciBsb2dpbiBjb2RlXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImxvZyBtZSBpblwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci50ZXh0KSB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoJ3doYXQgaXMgIHlvdXIgcGhvbmUgbnVtYmVyPycsICdlcnJvcicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gIH1cblxuICBsb2dpbkNvbXBsZXRlKGNvZGU6IHN0cmluZykge1xuXG4gICAgdGhpcy4kZ2FtZS5sb2dpbkNvbXBsZXRlKGNvZGUsIHRoaXMuZGV2aWNlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLnRva2VuID0gam9yZGkudG9rZW5cbiAgICAgICAgICAgICAgdGhpcy51c2VyID0gam9yZGkudXNlclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCd0b2tlbicsIGpvcmRpLnRva2VuKVxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0U3RyaW5nKCd1c2VyJywgam9yZGkudXNlcilcbiAgICAgICAgICAgICAgdGhpcy5wb3AoXCJ5b3UgYXJlIGxvZ2dlZCBpblwiLCBcInN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsIFwiZXJyb3JcIilcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwidmVyaWZ5IGFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW50ZXIgeW91ciBsb2dpbiBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwibG9nIG1lIGluXCIsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgICAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Db21wbGV0ZShyLnRleHQpXG5cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCd3aGF0IGlzICB5b3VyIHBob25lIG51bWJlcj8nLCAnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgfVxuXG4gIG9uQ2FsY3VsYXRlKCkge1xuXG4gICAgdGhpcy5idXlUb3RhbCA9ICh0aGlzLmJ1eVNsYXBzICsgdGhpcy5idXlHcmFicylcbiAgICByZXR1cm4gdGhpcy5idXlUb3RhbFxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBVc2VyIEludGVyYWN0aW9uXG5cbiAgLy8gTVk6IFRhYnMgc2VsZWN0ZWQgaW5kZXggaXMgY2hhbmdlZCwgZS5nLiB3aGVuIHN3aXBlIHRvIG5hdmlnYXRlLlxuICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBpZiAoYXJncy5uZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50VGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcChhcmdzLm5ld0luZGV4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9KVxuICB9XG5cbiAgLy8gVGFwIG9uIGEgb25lIG9mIHRoZSB0YWJzXG4gIG9uQm90dG9tTmF2VGFwKGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAzMDApOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudFRhYkluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICBjb25zdCB0YWJDb250ZW50c0FyciA9IHRoaXMudGFiQ29udGVudHMudG9BcnJheSgpO1xuXG4gICAgICAgIC8vIHNldCB1bmZvY3VzIHRvIHByZXZpb3VzIGluZGV4XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuY3VycmVudFRhYkluZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRVbmZvY3VzQW5pbWF0aW9uKHRoaXMuY3VycmVudFRhYkluZGV4LCBkdXJhdGlvbikpO1xuXG4gICAgICAgIC8vIHNldCBmb2N1cyB0byBjdXJyZW50IGluZGV4XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW2luZGV4XS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRGb2N1c0FuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIH1cblxuICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHRhcCBvbiB0YWIgc3RyaXBcbiAgICAgIGlmICh0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgIHRoaXMuZHJhZ0NpcmNsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcblxuICAgICAgLy8gc2V0IGN1cnJlbnQgaW5kZXggdG8gbmV3IGluZGV4XG4gICAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IGluZGV4O1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpXG5cbiAgICAgIGlmIChpbmRleCAhPSAyKSB7XG5cbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KHRoaXMuT1RJTUVSKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vblRpbWVyKClcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIC8vIERyYWcgdGhlIGZvY3VzIGNpcmNsZSB0byBvbmUgb2YgdGhlIHRhYnNcbiAgb25DZW50ZXJDaXJjbGVQYW4oYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQge1xuICAgIGxldCBncmRMYXlvdXQ6IEdyaWRMYXlvdXQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcbiAgICBsZXQgbmV3WDogbnVtYmVyID0gZ3JkTGF5b3V0LnRyYW5zbGF0ZVggKyBhcmdzLmRlbHRhWCAtIHRoaXMucHJldkRlbHRhWDtcblxuICAgIGlmIChhcmdzLnN0YXRlID09PSAwKSB7XG4gICAgICAvLyBmaW5nZXIgZG93blxuICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIHtcbiAgICAgIC8vIGZpbmdlciBtb3ZpbmdcbiAgICAgIGdyZExheW91dC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuXG4gICAgICB0aGlzLnByZXZEZWx0YVggPSBhcmdzLmRlbHRhWDtcbiAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHtcbiAgICAgIC8vIGZpbmdlciB1cFxuICAgICAgdGhpcy5wcmV2RGVsdGFYID0gMDtcbiAgICAgIGNvbnN0IHRhYldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhYlNlbGVjdGVkOiBudW1iZXIgPSBNYXRoLnJvdW5kKE1hdGguYWJzKG5ld1ggLyB0YWJXaWR0aCkpO1xuICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gdGFiU2VsZWN0ZWQgKiB0YWJXaWR0aDtcbiAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAvLyBwYW4gbGVmdFxuICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQsIDUwKTtcbiAgICAgICAgLy8gTVk6IENoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgVGFicyB3aGVuIHBhbiBsZWZ0XG4gICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFuIHJpZ2h0XG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgKyB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIHJpZ2h0XG4gICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFRhYiBiYXIgaGVscGVyc1xuXG4gIGluaXRpYWxpemVUYWJCYXIoKTogdm9pZCB7XG4gICAgLy8gc2V0IHVwIGJhc2UgbGF5ZXJcbiAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQud2lkdGggPSAxMDA7XG5cbiAgICB0aGlzLnRhYkJHQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpIC0gKDgwIC8gMik7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBzZWxlY3RlZCB0YWJcbiAgICBjb25zdCB0YWJDb250ZW50c0FyciA9IHRoaXMudGFiQ29udGVudHMudG9BcnJheSgpO1xuICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWCA9IDEuNTtcbiAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC5zY2FsZVkgPSAxLjU7XG4gICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IC0gMTU7XG4gICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZDtcblxuICAgIHRoaXMuZ2VvKClcbiAgICB0aGlzLmJHZW8oKVxuICB9XG5cbiAgZ2V0U2xpZGVBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2xhdGU6IHsgeDogdGhpcy5nZXRUYWJUcmFuc2xhdGVYKGluZGV4KSwgeTogMCB9LFxuICAgICAgY3VydmU6IHRoaXMuYW5pbWF0aW9uQ3VydmUsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9O1xuICB9XG5cbiAgZ2V0Rm9jdXNBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZTogeyB4OiAxLjUsIHk6IDEuNSB9LFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0xNSB9LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGdldFVuZm9jdXNBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGdldFRhYlRyYW5zbGF0ZVgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluZGV4ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSArICg4MCAvIDIpXG4gIH1cblxuICBzZXRHYW1lSWQoZ0lEKSB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuJGdJRCA9IGdJRFxuICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKDIpXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICB9LCA1MDApXG4gICAgfSlcbiAgfVxuICBwb3AobWVzc2FnZTogYW55LCB0eXBlOiBhbnkpIHtcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHR5cGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICB9O1xuXG4gICAgY29uZmlybShvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmFjZSBjaG9zZW4hXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25UeXBlKHZhbHVlKSB7XG5cbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLiRnVHlwZSA9PSAnbG9jYWwnKSB7XG4gICAgICAgIHRoaXMuJGdUeXBlID0gJ2dsb2JhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGdUeXBlID0gJ2xvY2FsJ1xuXG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIHB1YmxpYyBvbkNvcHkodGV4dDogYW55KTogdm9pZCB7XG4gICAgc2V0VGV4dCh0ZXh0KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wb3AoXCJjb3BpZWQgIHRvICBjbGlwYm9hcmRcIiwgJ3N1Y2Nlc3MnKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHRoaXMucG9wKFwiZXJyb3IgY29weWluZywgdHJ5IGFnYWluXCIsICdlcnJvcicpKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcblxuICAgIHRoaXMucnVuVGltZXIgPSBmYWxzZVxuICAgIGlmICh0aGlzLk9USU1FUikge1xuXG4gICAgICB0aW1lci5jbGVhclRpbWVvdXQodGhpcy5PVElNRVIpO1xuXG4gICAgfVxuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=