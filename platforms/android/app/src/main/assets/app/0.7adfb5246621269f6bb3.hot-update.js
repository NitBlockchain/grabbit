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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SjtBQUduSDtBQUVjO0FBQ0gsQ0FBQywrREFBK0Q7QUFDL0Q7QUFFa0I7QUFDZDtBQUMxRCw2RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLDhFQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsNkZBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBTSwwQkFBTyxDQUFDLHNFQUFxQyxDQUFDLENBQUMsYUFBYSxFQUE1RCxDQUE0RCxDQUFDLENBQUM7QUFHOUM7QUFJdkQsSUFBTSxZQUFZLEdBQUcsbUJBQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ3RCO0FBQzZCO0FBQzdFLGlEQUFpRDtBQUNjO0FBQ2Y7QUFDb0M7QUFDckQ7QUFVL0I7SUFpR0UsdUJBQW1CLEtBQW1CLEVBQVUsSUFBWSxFQUFVLEVBQXFCLEVBQVUsTUFBd0IsRUFBVSxJQUFVO1FBQTlILFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFyRmpKLGFBQWE7UUFDYixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLG1CQUFjLEdBQUcsdURBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsOEJBQThCO1FBQzlCLGlCQUFZLEdBQUc7WUFDYixlQUFlLEVBQUUsU0FBUztZQUMxQixVQUFV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LHdEQUFVO3lEQUFDO0lBRXZCO1FBQWxELGtFQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHdEQUFVLEVBQUUsQ0FBQztrQ0FBYyx1REFBUztzREFBYTtJQVYzRSxhQUFhO1FBUHpCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7WUFFcEMsZUFBZSxFQUFFLHFFQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBa0cwQiwyREFBWSxFQUFnQixvREFBTSxFQUFjLCtEQUFpQixFQUFrQiw0RUFBZ0IsRUFBZ0IsOERBQUk7T0FqR3RJLGFBQWEsQ0FpK0J6QjtJQUFELG9CQUFDO0NBQUE7QUFqK0J5QiIsImZpbGUiOiIwLjdhZGZiNTI0NjYyMTI2OWY2YmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IFBhbkdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVTdGF0ZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiOyAvLyB1c2VkIHRvIGRlc2NyaWJlIGF0IHdoYXQgYWNjdXJhY3kgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBnZXRcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBUZWxlcGhvbnkgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXBob255JztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICdAbnN0dWRpby9uYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIlB1bGxUb1JlZnJlc2hcIiwgKCkgPT4gcmVxdWlyZShcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCIpLlB1bGxUb1JlZnJlc2gpO1xuXG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5cbmltcG9ydCB7IGdldFVVSUQgfSBmcm9tICduYXRpdmVzY3JpcHQtdXVpZCc7XG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmltcG9ydCB7IEdhbWVQcm92aWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzL29ic2VydmFibGUvdGltZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBnZXRUZXh0LCBzZXRUZXh0LCBnZXRUZXh0U3luYywgc2V0VGV4dFN5bmMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiO1xuaW1wb3J0ICogYXMgdGltZXIgZnJvbSBcInRpbWVyXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhLCBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjZW50ZXJDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZW50ZXJDaXJjbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RyYWdDaXJjbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcmFnQ2lyY2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsZWZ0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIGxlZnRUYWJzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyaWdodFRhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSByaWdodFRhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlclBhdGNoJywgeyBzdGF0aWM6IHRydWUgfSkgY2VudGVyUGF0Y2g6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkJHQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQkdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZHJlbigndGFiQ29udGVudHMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICAvLyBQYW4gSGVscGVyXG4gIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cbiAgYW5pbWF0aW9uQ3VydmUgPSBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguMzgsIC40NywgMCwgMSk7XG5cbiAgLy8gVGFiIENvbnRlbnRzIGFuZCBQcm9wZXJ0aWVzXG4gIHRhYkNvbnRhaW5lciA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJyxcbiAgICBmb2N1c0NvbG9yOiAnI0YxRjFGMSdcbiAgfTtcbiAgdGFiTGlzdDogeyB0ZXh0OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgZmFkZUNvbG9yPzogc3RyaW5nIH1bXSA9IFtcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNTU1KSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNDZkKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNDQxKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDA3KSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfSxcbiAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNzljKSwgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnI0RDNzkwNScgfVxuICBdO1xuXG4gIGN1cnJlbnRUYWJJbmRleDogbnVtYmVyID0gMjtcbiAgZGVmYXVsdFNlbGVjdGVkOiBudW1iZXIgPSAyO1xuXG5cbiAgJGdhbWU6IGFueVxuICAkZ1R5cGU6IHN0cmluZ1xuICAkZ0lEOiBzdHJpbmdcblxuICB0b2tlbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1c2VyOiBzdHJpbmdcbiAgYXZhdGFyOiBzdHJpbmdcbiAgcHJhY3RpY2VDb3VudDogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgd2luczogc3RyaW5nXG4gIGNvdW50cnk6IHN0cmluZ1xuICBjaXR5OiBzdHJpbmdcbiAgYWRkcmVzczogc3RyaW5nXG4gIGdhbWVzUGxheWVkOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG5cbiAgbGF0OiBzdHJpbmdcbiAgbG5nOiBzdHJpbmdcblxuICBEVVNFUjogYW55XG4gIERHQU1FUzogYW55XG4gIFBMQVlFUlM6IGFueVxuICBEZ2FtZTogYW55XG4gIFVTRVJJTkdBTUU6IGFueVxuICBHQU1FRlVMTDogYW55XG4gIEdBTUVTVEFSVEVEOiBhbnlcbiAgR0FNRUNPTVBMRVRFOiBhbnlcblxuICBHTE9CQUxHQU1FUzogW11cbiAgTE9DQUxHQU1FUzogW11cblxuICBPVElNRVI6IGFueVxuICB0aW1lcjogYW55XG4gIGdhbWVUaW1lOiBhbnlcbiAgcnVuVGltZXI6IGJvb2xlYW5cblxuICBsb2NhdGlvbnMgPSBbXTtcbiAgd2F0Y2hJZHMgPSBbXTtcblxuICB0aXRsZTogYW55XG4gIGltYWdlOiBhbnlcbiAgcGxheWVyc01pbjogc3RyaW5nXG4gIHBsYXllcnNSZWFkeTogc3RyaW5nXG4gIHBsYXllcnNNYXg6IHN0cmluZ1xuXG4gIGRldmljZTogYW55XG4gIGFkbWluOiBhbnlcblxuICBwbGF5ZXJzSGVpZ2h0OiBhbnlcblxuICBzaG93QnV5VG9vbHM6IGJvb2xlYW5cbiAgc2hvd0NyZWF0ZTogYm9vbGVhblxuICBsaXZlR2FtZTogYW55XG5cbiAgYnV5R3JhYnM6IGFueVxuICBidXlTbGFwczogYW55XG4gIGJ1eVNuZWFrczogYW55XG4gIGJ1eVRvdGFsOiBhbnlcbiAgYnRjX3ZhbHVlOiBzdHJpbmdcbiAgYnRjX2ZlZTogc3RyaW5nXG4gIGJ0Y19mZWVfdXNkOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2dhbWU6IEdhbWVQcm92aWRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cbiAgICB0aGlzLiRnYW1lID0gX2dhbWVcbiAgICB0aGlzLiRnVHlwZSA9ICdnbG9iYWwnXG4gICAgdGhpcy5zaG93QnV5VG9vbHMgPSBmYWxzZVxuICAgIHRoaXMuc2hvd0NyZWF0ZSA9IGZhbHNlXG4gICAgdGhpcy5saXZlR2FtZSA9IDBcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSG9va3NcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmluaXRpYWxpemVUYWJCYXIoKTtcblxuICB9XG5cbiAgcHVibGljIGdlbygpIHtcblxuICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oKGlzRW5hYmxlZCkgPT4ge1xuICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUsIHRydWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBFbmFibGVkIExvY2F0aW9uIFNlcnZpY2VcIik7XG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3AoZS5tZXNzYWdlLCAnZXJyb3InKVxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gRW5hYmxlIExvY2F0aW9uIHBsZWFzZSBmaXhcIiwgZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAoZSkgPT4ge1xuICAgICAgdGhpcy5wb3AoZS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBiR2VvKCkge1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICBtYXhpbXVtQWdlOiA1MDAwLFxuICAgICAgdGltZW91dDogMTAwMDBcbiAgICB9KS50aGVuKChsb2M6IGFueSkgPT4ge1xuICAgICAgaWYgKGxvYykge1xuXG4gICAgICAgIHRoYXQubG9jYXRpb25zLnB1c2gobG9jKTtcbiAgICAgICAgdGhpcy5sYXQgPSBsb2MubGF0aXR1ZGVcbiAgICAgICAgdGhpcy5sbmcgPSBsb2MubG9uZ2l0dWRlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRTdHJpbmcoJ2xhdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMubGF0KSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygnbG5nJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sbmcpKVxuXG4gICAgICAgIHRoaXMuZ1N0b3JhZ2UoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMuYkdBTUVTKClcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGxvYycpXG5cbiAgICAgIH1cbiAgICB9LCAoZSkgPT4ge1xuXG4gICAgICB0aGlzLnBvcChlLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgc3RvcmVkICBpbmZvXG4gIGdTdG9yYWdlKCkge1xuXG4gICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRTdHJpbmcoJ3Rva2VuJylcbiAgICB0aGlzLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCduYW1lJylcbiAgICB0aGlzLnVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0U3RyaW5nKCd1c2VyJylcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWRcIilcbiAgICAgIHRoaXMuZGV2aWNlID0gXCJhbmRyb2lkNDk1Nzc1cWFmZWY0Ymk5XCJcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImlvc1wiKVxuXG4gICAgICB0aGlzLmRldmljZSA9IFwiYW5mZW9ib2V1YWIzMHIzdVwiXG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLmRldmljZSA9IGdldFVVSUQoKTtcblxuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ290IHVzZXIgaWQgc3RvcmVkXCIpXG4gICAgICB0aGlzLmdVU0VSKClcbiAgICAgIHRoaXMuYkdBTUVTKClcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwibm8gdXNlcnNcIilcblxuICAgICAgdGhpcy5iR0FNRVMoKVxuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXQgdXNlclxuICBnVVNFUigpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIHVzZXJcIilcbiAgICB0aGlzLiRnYW1lLmdVU0VSKHRoaXMudG9rZW4sIHRoaXMudXNlciwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpKSA9PiB7XG5cbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBsZXQgVVNFUiA9IGpvcmRpLnBheWxvYWRbMF1cbiAgICAgICAgICAgICAgdGhpcy5EVVNFUiA9IFVTRVJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVVNFUilcblxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBVU0VSLnByb2ZpbGUubmFtZSB8fCAnbm8gdXNlciBuYW1lIHNldCdcbiAgICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSBVU0VSLnByb2ZpbGUuYXZhdGFyIHx8ICd+L2Fzc2V0cy9pbWdzL2F2YXRhcnMvYWxpZW5fMDIucG5nJ1xuICAgICAgICAgICAgICB0aGlzLndpbnMgPSBVU0VSLnByb2ZpbGUud2lucyB8fCAwXG4gICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VDb3VudCA9IFVTRVIucHJvZmlsZS5wcmFjdGljZSB8fCAwXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZXNQbGF5ZWQgPSBVU0VSLnByb2ZpbGUucGxheXMgfHwgMFxuICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gVVNFUi5wcm9maWxlLmVtYWlsIHx8ICdubyBlbWFpbCBzZXQnXG4gICAgICAgICAgICAgIHRoaXMuYWRtaW4gPSBVU0VSLnByb2ZpbGUuYWRtaW5cbiAgICAgICAgICAgICAgdGhpcy5idGNfdmFsdWUgPSBqb3JkaS5idGNfdmFsdWVcbiAgICAgICAgICAgICAgdGhpcy5idGNfZmVlX3VzZCA9IGpvcmRpLmJ0Y19mZWVfdXNkXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9ICduL2EnXG4gICAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gJ34vYXNzZXRzL2ltZ3MvYXZhdGFycy9hbGllbl8wMi5wbmcnXG4gICAgICAgICAgICAgIHRoaXMud2lucyA9ICcwJ1xuICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlQ291bnQgPSAnMCdcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHNldCBhdmF0YXFyXG5cbiAgb25BdmF0YXIoYXZhdGFyOiBzdHJpbmcpIHtcblxuICAgIGlmICghdGhpcy51c2VyKSB7XG5cbiAgICAgIHRoaXMucG9wKFwibG9nIGluIHRvIHNldCB5b3VyIGF2YXRhclwiLCBcImVycm9yXCIpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLiRnYW1lLm9uQXZhdGFyKHRoaXMudG9rZW4sIHRoaXMudXNlciwgYXZhdGFyKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBhc3luYyBvbkVkaXQoKSB7XG5cbiAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIkVkaXQgUHJvZmlsZVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgIGFjdGlvbnM6IFtcImVkaXQgdXNlciBuYW1lXCIsIFwiZWRpdCBlbWFpbFwiXVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0ID09IFwiZWRpdCB1c2VyIG5hbWVcIikge1xuXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICB0aXRsZTogXCJFZGl0IFVzZXIgTmFtZVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiY2hvb3NlIGEgc3VpdGFibGUgdXNlciBuYW1lXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcInNhdmVcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBudWxsLFxuICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICB9KS50aGVuKChyKSA9PiB7XG5cbiAgICAgICAgICBpZiAoci5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMub25FZGl0Q29tcGxldGUoci50ZXh0LCAxKVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcImVkaXQgZW1haWxcIikge1xuICAgICAgICAvL0RvIGFjdGlvbjJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgIHRpdGxlOiBcIkVkaXQgRW1haWxcIixcbiAgICAgICAgICBtZXNzYWdlOiBcImEgY29uZmlybWF0aW9uIGNvZGUgd2lsbCBiZSBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzc1wiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJzYXZlXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICBkZWZhdWx0VGV4dDogbnVsbCxcbiAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgIGlmIChyLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5vbkVkaXRDb21wbGV0ZShyLnRleHQsIDIpXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uQnV5VG9vbHMoKSB7XG5cbiAgICBsZXQgQUNUSU9OUyA9IFtcInBheSB3aXRoIGJpdGNvaW5cIiwgXCJwYXkgd2l0aCBvd29cIl1cblxuICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBPcHRpb25zXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgYWN0aW9uczogQUNUSU9OU1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAncGF5IHdpdGggIGJpdGNvaW4nKSB7XG5cblxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ3BheSB3aXRoICBvd28nKSB7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG4gIG9uQ3JlYXRlKHR5cGU6IGFueSkge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZS8nICsgdHlwZV0sIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIG9uTWVudSgpIHtcbiAgICBsZXQgQUNUSU9OUztcblxuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGlmICh0aGlzLmFkbWluID4gMCkge1xuICAgICAgICBBQ1RJT05TID0gW1wiYWRtaW5cIiwgXCJjaGF0XCIsIFwiaG93IHRvIHBsYXlcIiwgXCJzdXBwb3J0XCIsIFwiYWJvdXQgdXNcIiwgXCJ1c2VyIGFncmVlbWVudFwiLCBcInByaXZhY3kgcG9saWN5XCIsIFwibG9nb3V0XCJdXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFDVElPTlMgPSBbXCJjaGF0XCIsIFwiaG93IHRvIHBsYXlcIiwgXCJzdXBwb3J0XCIsIFwiYWJvdXQgdXNcIiwgXCJ1c2VyIGFncmVlbWVudFwiLCBcInByaXZhY3kgcG9saWN5XCIsIFwibG9nb3V0XCJdXG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgQUNUSU9OUyA9IFtcImNoYXRcIiwgXCJob3cgdG8gcGxheVwiLCBcInN1cHBvcnRcIiwgXCJhYm91dCB1c1wiLCBcInVzZXIgYWdyZWVtZW50XCIsIFwicHJpdmFjeSBwb2xpY3lcIl1cbiAgICB9XG4gICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgbWVzc2FnZTogXCJNZW51XCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgYWN0aW9uczogQUNUSU9OU1xuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAnbG9nb3V0Jykge1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoXCJ1c2VyXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoJ25hbWUnKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9wKFwieW91IGFyZSBsb2dnZWQgbm90IG91dFwiLCAnc3VjY2VzcycpXG4gICAgICAgIH0pXG5cbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09ICdhYm91dCB1cycpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IGNsaWNrZWRcIilcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Fib3V0J10sIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG9uRWRpdENvbXBsZXRlKHRleHQ6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uRWRpdCh0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRleHQsIHR5cGUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgdGhpcy5nVVNFUigpXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5wb3Aoam9yZGkubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGJyaW5nIGdsb2JhbCBnYW1lXG4gIGJHQU1FUygpIHtcblxuICAgIHRoaXMuJGdhbWUuYkdBTUVTKHRoaXMubGF0LCB0aGlzLmxuZylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuREdBTUVTID0gam9yZGkucGF5bG9hZFswXVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkRHQU1FUy5sZW5ndGgpXG4gICAgICAgICAgICAgIC8vIGlmICghdGhpcy5ER0FNRVMpIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmJHQU1FUygpXG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICB0aGlzLkdMT0JBTEdBTUVTID0gdGhpcy5ER0FNRVNcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5HTE9CQUxHQU1FUy5sZW5ndGgpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnBheWxvYWRbMV0pXG4gICAgICAgICAgICAgIHRoaXMuTE9DQUxHQU1FUyA9IGpvcmRpLnBheWxvYWRbMF0gfHwgJ1tdJ1xuICAgICAgICAgICAgICB0aGlzLkRnYW1lID0gdGhpcy5ER0FNRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ER0FNRVMubGVuZ3RoKV07XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUpXG5cbiAgICAgICAgICAgICAgdGhpcy4kZ0lEID0gdGhpcy5EZ2FtZS5nYW1lXG4gICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLkRnYW1lLmRldGFpbHMudGl0bGVcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuRGdhbWUuZGV0YWlscy5pbWFnZXNbMF0udXJsXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc01heCA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWF4XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc01pbiA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWluXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyc1JlYWR5ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNSZWFkeVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRnSUQpXG4gICAgICAgICAgICAgIHRoaXMucnVuVGltZXIgPSB0cnVlXG4gICAgICAgICAgICAgIHRoaXMub25UaW1lcigpXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZ2FtZXMgYXZhaWxhYmxlIHlldHMnKVxuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHYW1lICBBY3Rpb25cblxuICBvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLk9USU1FUikge1xuICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KHRoaXMuT1RJTUVSKTtcbiAgICB9XG4gICAgdGhpcy5PVElNRVIgPSB0aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICAgIHRoaXMuJGdhbWUub25UaW1lcih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuRGdhbWUgPSBqb3JkaS5wYXlsb2FkWzBdXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuRGdhbWUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUsIHRoaXMuJGdJRClcbiAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLkRnYW1lLmRldGFpbHMudGl0bGVcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLkRnYW1lLmRldGFpbHMuaW1hZ2VzWzBdLnVybFxuICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzTWF4ID0gdGhpcy5EZ2FtZS5kZXRhaWxzLnBsYXllcnNNYXhcbiAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc01pbiA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzTWluXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNSZWFkeSA9IHRoaXMuRGdhbWUuZGV0YWlscy5wbGF5ZXJzUmVhZHlcbiAgICAgICAgICAgICAgICAgIHRoaXMuR0FNRUZVTEwgPSB0aGlzLkRnYW1lLmRldGFpbHMuZnVsbFxuICAgICAgICAgICAgICAgICAgdGhpcy5HQU1FU1RBUlRFRCA9IHRoaXMuRGdhbWUuZGV0YWlscy5zdGFydGVkXG4gICAgICAgICAgICAgICAgICB0aGlzLkdBTUVDT01QTEVURSA9IHRoaXMuRGdhbWUuZGV0YWlscy5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZUdhbWUgPSBqb3JkaS5saXZlR2FtZVxuICAgICAgICAgICAgICAgICAgdGhpcy5QTEFZRVJTID0gdGhpcy5EZ2FtZS5wbGF5ZXJzXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNIZWlnaHQgPSAodGhpcy5QTEFZRVJTLmxlbmd0aCAqIDE1MCkgKyA5MDBcbiAgICAgICAgICAgICAgICAgIHRoaXMuVVNFUklOR0FNRSA9IHRoaXMuUExBWUVSUy5maW5kKCh4OiBhbnkpID0+IHgudXNlciA9PSB0aGlzLnVzZXIpXG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbWUgPSBqb3JkaS50aW1lclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kZ0lEKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5EZ2FtZSA9IHRoaXMuREdBTUVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuREdBTUVTLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kZ0lEID0gdGhpcy5EZ2FtZS5nYW1lXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRGdhbWUsIHRoaXMuJGdJRClcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpvcmRpLnRpbWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLCBjb25zb2xlLmxvZyhcInRpbWVyIHJ1bm5pbmdcIilcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lciBlcnJvclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvblBsYXkoKSB7XG5cbiAgICB0aGlzLiRnYW1lLnBsYXkodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnR5cGUgPT0gMSkge1xuXG4gICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMb2dpbi9TaWdudXBcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInJlZ2lzdGVyIG9yIGxvZ2luIHNlY3VyZWx5ICB2aWEgc21zLiBlbnRlciB5b3VyIHBob25lIG51bWJlclwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJzZW5kIHNtc1wiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS5udW1iZXJcbiAgICAgICAgICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbihyLnRleHQpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8vdXNlciBwcm9maWxlIGlzICBub3QgY29tcGxldGVcbiAgICAgICAgICAgIGlmIChqb3JkaS50eXBlID09IDIpIHtcblxuICAgICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCAnZXJyb3InKVxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCgzKVxuICAgICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgICAgICB9LCAyMDAwKVxuXG5cbiAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy91c2VyIGlzIGFscmVhZHkgaW4gdGhpcyAgZ2FtZVxuICAgICAgICAgICAgaWYgKGpvcmRpLnR5cGUgPT0gMykge1xuXG4gICAgICAgICAgICAgIHRoaXMucG9wKGpvcmRpLm1lc3NhZ2UsICdlcnJvcicpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gIH1cblxuICBvbkdyYWIoKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uR3JhYih0aGlzLnRva2VuLCB0aGlzLnVzZXIsIHRoaXMuJGdJRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG5cbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gam9yZGkubWVzc2FnZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJ1xuXG5cbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICB9XG5cbiAgb25TbGFwKCkge1xuXG4gICAgdGhpcy4kZ2FtZS5vblNsYXAodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcblxuXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIG9uU25lYWsoKSB7XG5cbiAgICB0aGlzLiRnYW1lLm9uU25lYWsodGhpcy50b2tlbiwgdGhpcy51c2VyLCB0aGlzLiRnSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoam9yZGk6IGFueSkgPT4ge1xuXG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqb3JkaS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGpvcmRpLm1lc3NhZ2VcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcblxuXG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGxvZ2luL3JlZ2lzdGVyXG5cbiAgbG9naW4obnVtYmVyOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuJGdhbWUubG9naW4obnVtYmVyLCB0aGlzLmRldmljZSwgdGhpcy5sYXQsIHRoaXMubG5nKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGpvcmRpOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoam9yZGkuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwidmVyaWZ5IGFjY291bnRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImVudGVyIHlvdXIgbG9naW4gY29kZVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJsb2cgbWUgaW5cIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICAgICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGV4dCkge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQ29tcGxldGUoci50ZXh0KVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCd3aGF0IGlzICB5b3VyIHBob25lIG51bWJlcj8nLCAnZXJyb3InKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICB9XG5cbiAgbG9naW5Db21wbGV0ZShjb2RlOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuJGdhbWUubG9naW5Db21wbGV0ZShjb2RlLCB0aGlzLmRldmljZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChqb3JkaTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGpvcmRpLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IGpvcmRpLnRva2VuXG4gICAgICAgICAgICAgIHRoaXMudXNlciA9IGpvcmRpLnVzZXJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygndG9rZW4nLCBqb3JkaS50b2tlbilcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldFN0cmluZygndXNlcicsIGpvcmRpLnVzZXIpXG4gICAgICAgICAgICAgIHRoaXMucG9wKFwieW91IGFyZSBsb2dnZWQgaW5cIiwgXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgIHRoaXMuZ1VTRVIoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnBvcChqb3JkaS5tZXNzYWdlLCBcImVycm9yXCIpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInZlcmlmeSBhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImVudGVyIHlvdXIgbG9naW4gY29kZVwiLFxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcImxvZyBtZSBpblwiLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyLnRleHQpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQ29tcGxldGUoci50ZXh0KVxuXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgnd2hhdCBpcyAgeW91ciBwaG9uZSBudW1iZXI/JywgJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gIH1cblxuICBvbkNhbGN1bGF0ZSgpIHtcblxuICAgIHRoaXMuYnV5VG90YWwgPSAodGhpcy5idXlTbGFwcyArIHRoaXMuYnV5R3JhYnMpXG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFVzZXIgSW50ZXJhY3Rpb25cblxuICAvLyBNWTogVGFicyBzZWxlY3RlZCBpbmRleCBpcyBjaGFuZ2VkLCBlLmcuIHdoZW4gc3dpcGUgdG8gbmF2aWdhdGUuXG4gIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIGlmIChhcmdzLm5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRUYWJJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKGFyZ3MubmV3SW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIH0pXG4gIH1cblxuICAvLyBUYXAgb24gYSBvbmUgb2YgdGhlIHRhYnNcbiAgb25Cb3R0b21OYXZUYXAoaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDMwMCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50VGFiSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG5cbiAgICAgICAgLy8gc2V0IHVuZm9jdXMgdG8gcHJldmlvdXMgaW5kZXhcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5jdXJyZW50VGFiSW5kZXhdLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFVuZm9jdXNBbmltYXRpb24odGhpcy5jdXJyZW50VGFiSW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgdGFiQ29udGVudHNBcnJbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldEZvY3VzQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gdGFwIG9uIHRhYiBzdHJpcFxuICAgICAgaWYgKHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZW50ZXJDaXJjbGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0U2xpZGVBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgdGhpcy5kcmFnQ2lyY2xlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuXG4gICAgICAvLyBzZXQgY3VycmVudCBpbmRleCB0byBuZXcgaW5kZXhcbiAgICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gaW5kZXg7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleClcblxuICAgICAgaWYgKGluZGV4ICE9IDIpIHtcblxuICAgICAgICB0aW1lci5jbGVhclRpbWVvdXQodGhpcy5PVElNRVIpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uVGltZXIoKVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgLy8gRHJhZyB0aGUgZm9jdXMgY2lyY2xlIHRvIG9uZSBvZiB0aGUgdGFic1xuICBvbkNlbnRlckNpcmNsZVBhbihhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKTogdm9pZCB7XG4gICAgbGV0IGdyZExheW91dDogR3JpZExheW91dCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIGxldCBuZXdYOiBudW1iZXIgPSBncmRMYXlvdXQudHJhbnNsYXRlWCArIGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYO1xuXG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDApIHtcbiAgICAgIC8vIGZpbmdlciBkb3duXG4gICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgLy8gZmluZ2VyIG1vdmluZ1xuICAgICAgZ3JkTGF5b3V0LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuICAgICAgdGhpcy5yaWdodFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG5cbiAgICAgIHRoaXMucHJldkRlbHRhWCA9IGFyZ3MuZGVsdGFYO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMykge1xuICAgICAgLy8gZmluZ2VyIHVwXG4gICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgICAgY29uc3QgdGFiV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoO1xuICAgICAgY29uc3QgdGFiU2VsZWN0ZWQ6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5hYnMobmV3WCAvIHRhYldpZHRoKSk7XG4gICAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0YWJTZWxlY3RlZCAqIHRhYldpZHRoO1xuICAgICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICAgIC8vIHBhbiBsZWZ0XG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIGxlZnRcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkIC0gdGFiU2VsZWN0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYW4gcmlnaHRcbiAgICAgICAgdGhpcy5vbkJvdHRvbU5hdlRhcCh0aGlzLmRlZmF1bHRTZWxlY3RlZCArIHRhYlNlbGVjdGVkLCA1MCk7XG4gICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gcmlnaHRcbiAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkICsgdGFiU2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVGFiIGJhciBoZWxwZXJzXG5cbiAgaW5pdGlhbGl6ZVRhYkJhcigpOiB2b2lkIHtcbiAgICAvLyBzZXQgdXAgYmFzZSBsYXllclxuICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuY2VudGVyUGF0Y2gubmF0aXZlRWxlbWVudC53aWR0aCA9IDEwMDtcblxuICAgIHRoaXMudGFiQkdDb250YWluZXIubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgLSAoODAgLyAyKTtcblxuICAgIC8vIHNldCBkZWZhdWx0IHNlbGVjdGVkIHRhYlxuICAgIGNvbnN0IHRhYkNvbnRlbnRzQXJyID0gdGhpcy50YWJDb250ZW50cy50b0FycmF5KCk7XG4gICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQuc2NhbGVYID0gMS41O1xuICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWSA9IDEuNTtcbiAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gLSAxNTtcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkO1xuXG4gICAgdGhpcy5nZW8oKVxuICAgIHRoaXMuYkdlbygpXG4gIH1cblxuICBnZXRTbGlkZUFuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiB0aGlzLmdldFRhYlRyYW5zbGF0ZVgoaW5kZXgpLCB5OiAwIH0sXG4gICAgICBjdXJ2ZTogdGhpcy5hbmltYXRpb25DdXJ2ZSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRGb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlOiB7IHg6IDEuNSwgeTogMS41IH0sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTE1IH0sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9O1xuICB9XG5cbiAgZ2V0VW5mb2N1c0FuaW1hdGlvbihpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9O1xuICB9XG5cbiAgZ2V0VGFiVHJhbnNsYXRlWChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyB0aGlzLnRhYkxpc3QubGVuZ3RoIC0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpICsgKDgwIC8gMilcbiAgfVxuXG4gIHNldEdhbWVJZChnSUQpIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgdGhpcy4kZ0lEID0gZ0lEXG4gICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAoMilcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIH0sIDUwMClcbiAgICB9KVxuICB9XG4gIHBvcChtZXNzYWdlOiBhbnksIHR5cGU6IGFueSkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdHlwZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIH07XG5cbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJSYWNlIGNob3NlbiFcIik7XG4gICAgfSk7XG4gIH1cblxuICBvblR5cGUodmFsdWUpIHtcblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuJGdUeXBlID09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy4kZ1R5cGUgPSAnZ2xvYmFsJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZ1R5cGUgPSAnbG9jYWwnXG5cbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgcHVibGljIG9uQ29weSh0ZXh0OiBhbnkpOiB2b2lkIHtcbiAgICBzZXRUZXh0KHRleHQpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnBvcChcImNvcGllZCAgdG8gIGNsaXBib2FyZFwiLCAnc3VjY2VzcycpKVxuICAgICAgLmNhdGNoKChlcnI6IHN0cmluZykgPT4gdGhpcy5wb3AoXCJlcnJvciBjb3B5aW5nLCB0cnkgYWdhaW5cIiwgJ2Vycm9yJykpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gICAgdGhpcy5ydW5UaW1lciA9IGZhbHNlXG4gICAgaWYgKHRoaXMuT1RJTUVSKSB7XG5cbiAgICAgIHRpbWVyLmNsZWFyVGltZW91dCh0aGlzLk9USU1FUik7XG5cbiAgICB9XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==