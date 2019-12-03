import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { PanGestureEventData, GestureStateTypes, GestureEventData } from "ui/gestures";
import { AnimationCurve } from "ui/enums";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get
import { confirm } from "tns-core-modules/ui/dialogs";
import { Telephony } from 'nativescript-telephony';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);
registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh);

import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as TNSPhone from 'nativescript-phone';

import { getUUID } from 'nativescript-uuid';
const localStorage = require("tns-core-modules/application-settings");
import { GameProvider } from '../services/game';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
// import { timer } from 'rxjs/observable/timer';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { getText, setText, getTextSync, setTextSync } from "nativescript-clipboard";
import * as timer from "timer";
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import * as SocialShare from "nativescript-social-share";
import { ImageSource } from "image-source";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('tabs', { static: true }) tabs: ElementRef;
  @ViewChild('centerCircle', { static: true }) centerCircle: ElementRef;
  @ViewChild('dragCircle', { static: true }) dragCircle: ElementRef;
  @ViewChild('leftTabs', { static: true }) leftTabs: ElementRef;
  @ViewChild('rightTabs', { static: true }) rightTabs: ElementRef;
  @ViewChild('centerPatch', { static: true }) centerPatch: ElementRef;
  @ViewChild('tabBGContainer', { static: true }) tabBGContainer: ElementRef;

  @ViewChildren('tabContents', { read: ElementRef }) tabContents: QueryList<ElementRef>;

  // Pan Helper
  prevDeltaX: number = 0;

  animationCurve = AnimationCurve.cubicBezier(.38, .47, 0, 1);

  // Tab Contents and Properties
  tabContainer = {
    backgroundColor: '#F1F1F1',
    focusColor: '#F1F1F1'
  };
  tabList: { text: string, icon?: string, color?: string, backgroundColor: string, fadeColor?: string }[] = [
    { text: String.fromCharCode(0xf555), backgroundColor: '#FFF', color: '#DC7905' },
    { text: String.fromCharCode(0xf46d), backgroundColor: '#FFF', color: '#DC7905' },
    { text: String.fromCharCode(0xf441), backgroundColor: '#FFF', color: '#DC7905' },
    { text: String.fromCharCode(0xf007), backgroundColor: '#FFF', color: '#DC7905' },
    { text: String.fromCharCode(0xf79c), backgroundColor: '#FFF', color: '#DC7905' }
  ];

  currentTabIndex: number = 2;
  defaultSelected: number = 2;


  $game: any
  $gType: string
  $gID: string

  token: string
  name: string
  user: string
  avatar: string
  practiceCount: string
  email: string
  wins: string
  country: string
  city: string
  address: string
  gamesPlayed: string
  message: string

  lat: string
  lng: string

  DUSER: any
  DGAMES: any
  PLAYERS: any
  Dgame: any
  USERINGAME: any
  GAMEFULL: any
  GAMESTARTED: any
  GAMECOMPLETE: any

  GLOBALGAMES: []
  LOCALGAMES: []
  WINS: []

  OTIMER: any
  timer: any
  gameTime: any
  runTimer: boolean

  locations = [];
  watchIds = [];

  title: any
  image: any
  playersMin: string
  playersReady: string
  playersMax: string

  device: any
  admin: any

  playersHeight: any

  showBuyTools: boolean
  showCreate: boolean
  showRedeem: boolean
  liveGame: any

  redeemQR: any

  buyGrabs = 0
  buySlaps = 0
  buySneaks = 0
  buyTotal: any
  btc_value: string
  btc_fee: string
  btc_fee_usd: string

  math = Math
  countryCode: any

  constructor(public _game: GameProvider, private zone: NgZone, private cd: ChangeDetectorRef, private router: RouterExtensions, private page: Page) {

    this.$game = _game
    this.$gType = 'global'
    this.showBuyTools = false
    this.showCreate = false
    this.liveGame = 0
    this.LOCALGAMES = []

  }

  // --------------------------------------------------------------------
  // Hooks

  ngAfterViewInit(): void {

    this.initializeTabBar();

  }

  public geo() {

    geolocation.isEnabled().then((isEnabled) => {
      if (!isEnabled) {
        geolocation.enableLocationRequest(true, true).then(() => {
          console.log("User Enabled Location Service");
        }, (e) => {
          this.pop(e.message, 'error')

          console.log("Error: " + (e.message || e));
        }).catch(ex => {

          console.log("Unable to Enable Your Device Location", ex);
        });
      }
    }, (e) => {

    });
  }

  public bGeo() {

    let that = this;
    geolocation.getCurrentLocation({
      desiredAccuracy: Accuracy.high,
      maximumAge: 5000,
      timeout: 10000
    }).then((loc: any) => {
      if (loc) {

        that.locations.push(loc);
        this.lat = loc.latitude
        this.lng = loc.longitude
        localStorage.setString('lat', JSON.stringify(this.lat))
        localStorage.setString('lng', JSON.stringify(this.lng))
        this.bLOCALGAMES()
        // console.log(loc)
      } else {

        this.pop('unable to get your location, local games won\'t be available', 'errors')

        // this.bGAMES()

      }
    }, (e) => {

      this.pop('unable to get your location, local games won\'t be available', 'errors')

    });
  }

  // --------------------------------------------------------------------
  // get stored  info
  gStorage() {

    this.token = localStorage.getString('token')
    this.name = localStorage.getString('name')
    this.user = localStorage.getString('user')
    this.device = getUUID();

    Telephony().then((resolved: any) => {

      this.countryCode = resolved.countryCode
    }).catch((error) => {

    })
    if (isAndroid) {
      // console.log("android")
      // this.device = "android495775qafef4bi9"

    } else {
      // console.log("ios")
      //
      // this.device = "anfeoboeuab30r3u"

    }


    if (this.user) {
      console.log("got user id stored")
      this.gUSER()
      // this.bGAMES()

    } else {

      console.log("no users")

      // this.bGAMES()

    }

  }

  // --------------------------------------------------------------------
  // get user
  gUSER() {
    console.log("getting the user")
    this.$game.gUSER(this.token, this.user, this.lat, this.lng)
      .subscribe(
        (jordi) => {

          if (jordi.success) {

            this.zone.run(() => {

              let USER = jordi.payload[0]
              this.WINS = jordi.payload[2]
              this.DUSER = USER
              // console.log(USER)

              this.name = USER.profile.name || 'no user name set'
              this.avatar = USER.profile.avatar || '~/assets/imgs/avatars/alien_02.png'
              this.wins = USER.profile.wins || 0
              this.practiceCount = USER.profile.practice || 0
              this.gamesPlayed = USER.profile.plays || 0
              this.email = USER.profile.email || 'no email set'
              this.admin = USER.profile.admin
              this.btc_value = jordi.btc_value
              this.btc_fee_usd = jordi.btc_fee_usd
              this.cd.detectChanges();

            })
          } else {

            this.zone.run(() => {

              this.name = 'n/a'
              this.avatar = '~/assets/imgs/avatars/alien_02.png'
              this.wins = '0'
              this.practiceCount = '0'

              this.cd.detectChanges();

            })
          }


        },
        (error) => {
          console.log(<any>error)
        });
  }

  // --------------------------------------------------------------------
  // set avataqr

  onAvatar(avatar: string) {

    if (!this.user) {

      this.pop("log in to set your avatar", "error")

    } else {

      this.$game.onAvatar(this.token, this.user, avatar)
        .subscribe(
          (jordi: any) => {
            if (jordi.success) {

              this.zone.run(() => {
                this.pop(jordi.message, 'success')

                this.gUSER()
                this.cd.detectChanges();

              })

            } else {

              this.pop(jordi.message, 'error')
            }

          })
    }

  }

  async onEdit() {

    dialogs.action({
      message: "Edit Profile",
      cancelButtonText: "cancel",
      actions: ["edit user name", "edit email"]
    }).then((result) => {
      // console.log("Dialog result: " + result);
      if (result == "edit user name") {

        dialogs.prompt({
          title: "Edit User Name",
          message: "choose a suitable user name",
          okButtonText: "save",
          cancelButtonText: "Cancel",
          defaultText: null,
          inputType: dialogs.inputType.text
        }).then((r) => {

          if (r.result) {
            this.onEditComplete(r.text, 1)

          }

        });

      } else if (result == "edit email") {
        //Do action2
        dialogs.prompt({
          title: "Edit Email",
          message: "a confirmation code will be sent to your email address",
          okButtonText: "save",
          cancelButtonText: "Cancel",
          defaultText: null,
          inputType: dialogs.inputType.text
        }).then((r) => {
          if (r.result) {
            this.onEditComplete(r.text, 2)

          }

        });
      }
    });

  }

  onBuyTools() {

    if (this.buySlaps < 1 && this.buyGrabs < 1 && this.buySneaks < 1) {

      this.pop("must buy 1 or more tools", 'error')
    } else {

      let ACTIONS = ["pay with bitcoin", "pay with owo"]
      let payType;

      dialogs.action({
        message: "Payment Options",
        cancelButtonText: "cancel",
        actions: ACTIONS
      }).then((result) => {
        if (result == 'pay with  bitcoin') {
          payType = 1

        } else if (result == 'pay with  owo') {

          payType = 2
        }

        this.$game.onPay(this.token, this.user, this.buyGrabs, this.buySlaps, this.buySneaks, payType)
          .subscribe(
            (jordi: any) => {
              if (jordi.success) {

                this.zone.run(() => {
                  this.pop(jordi.message, 'success')

                  this.gUSER()
                  this.cd.detectChanges();

                })

              } else {

                this.pop(jordi.message, 'error')
              }

            })

      });
    }

  }
  onCreate(type: any) {

    setTimeout(() => {

      this.router.navigate(['/create/' + type], {
        animated: true,
        clearHistory: false
      })
    }, 300);
  }

  onMenu() {
    let ACTIONS;

    if (this.user) {
      if (this.admin > 0) {
        ACTIONS = ["admin", "chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"]

      } else {
        ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy", "logout"]

      }
    } else {
      ACTIONS = ["chat", "how to play", "support", "about us", "user agreement", "privacy policy"]
    }
    dialogs.action({
      message: "Menu",
      cancelButtonText: "cancel",
      actions: ACTIONS
    }).then((result) => {
      if (result == 'logout') {

        localStorage.remove("user");
        localStorage.remove('token')
        localStorage.remove('name')

        setTimeout(() => {
          this.pop("you are logged not out", 'success')
        })

      } else if (result == 'about us') {

        setTimeout(() => {

          this.router.navigate(['/about'], {
            animated: true,
            clearHistory: false
          })
        }, 300);
      } else if (result == 'chat') {

        this.pop("chat  is coming soon", 'error')

      } else if (result == 'support') {

        setTimeout(() => {

          this.router.navigate(['/support'], {
            animated: true,
            clearHistory: false
          })
        }, 300);
      } else if (result == 'privacy policy') {

        setTimeout(() => {

          this.router.navigate(['/legals/privacy'], {
            animated: true,
            clearHistory: false
          })
        }, 300);
      } else if (result == 'user agreement') {

        setTimeout(() => {

          this.router.navigate(['/legals/agreement'], {
            animated: true,
            clearHistory: false
          })
        }, 300);
      } else if (result == 'how to play') {

        this.pop("slap before you grab, sneak after you grab. Don't let  the timer hit 0, if you are not the one who grabbed the prize. If you get slapped, grab again and again and again. Send us your video explaining how to play and you could win $1,000 in bitcoin videos must be in by 12/30/2019. send youtube link to cs@grabbit.cheap, subject how to play video", 'how to play')

      }


    });
  }

  onEditComplete(text: string, type: number) {

    this.$game.onEdit(this.token, this.user, text, type)
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {

            this.zone.run(() => {
              this.pop(jordi.message, 'success')

              this.gUSER()
              this.cd.detectChanges();

            })

          } else {

            this.pop(jordi.message, 'error')
          }

        })
  }

  // --------------------------------------------------------------------
  // bring global game
  bGLOBALGAMES() {

    this.$game.bGLOBALGAMES()
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {
            console.log(jordi.payload)
            this.zone.run(() => {

              this.DGAMES = jordi.payload[0]
              this.GLOBALGAMES = this.DGAMES
              this.Dgame = this.DGAMES[Math.floor(Math.random() * this.DGAMES.length)];
              this.$gID = this.Dgame.game
              this.title = this.Dgame.details.title
              this.image = this.Dgame.details.images[0].url
              this.playersMax = this.Dgame.details.playersMax
              this.playersMin = this.Dgame.details.playersMin
              this.playersReady = this.Dgame.details.playersReady

              this.runTimer = true
              this.onTimer()
              this.cd.detectChanges();

            })

          } else {
            //no  success here check local
          }
        })

  }

  // --------------------------------------------------------------------
  // bring local games
  bLOCALGAMES() {

    this.$game.bLOCALGAMES(this.token, this.user, this.lat, this.lng)
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {
            // console.log(jordi.payload)
            this.zone.run(() => {

              this.LOCALGAMES = jordi.payload[0]
              this.cd.detectChanges();

            })

          } else {
            //no  success here check local
          }
        })

  }

  // --------------------------------------------------------------------
  // Game  Action

  onTimer() {
    if (this.OTIMER) {
      timer.clearTimeout(this.OTIMER);
    }
    this.OTIMER = timer.setInterval(() => {

      this.$game.onTimer(this.token, this.user, this.$gID)
        .subscribe(
          (jordi: any) => {
            if (jordi.success) {

              this.zone.run(() => {

                this.Dgame = jordi.payload[0]
                if (this.Dgame) {
                  // console.log(this.Dgame, this.$gID)
                  this.title = this.Dgame.details.title
                  this.image = this.Dgame.details.images[0].url
                  this.playersMax = this.Dgame.details.playersMax
                  this.playersMin = this.Dgame.details.playersMin
                  this.playersReady = this.Dgame.details.playersReady
                  this.GAMEFULL = this.Dgame.details.full
                  this.GAMESTARTED = this.Dgame.details.started
                  this.GAMECOMPLETE = this.Dgame.details.completed
                  this.liveGame = jordi.liveGame
                  this.PLAYERS = this.Dgame.players
                  this.playersHeight = (this.PLAYERS.length * 150) + 900
                  this.USERINGAME = this.PLAYERS.find((x: any) => x.user == this.user)

                  this.gameTime = jordi.timer
                  console.log(this.$gID)

                } else {

                  // this.Dgame = this.DGAMES[Math.floor(Math.random() * this.DGAMES.length)];
                  // this.$gID = this.Dgame.game

                  // console.log(this.Dgame, this.$gID)

                }

                // console.log(jordi.timer)
                this.cd.detectChanges();

              })
                , console.log("timer running")

            } else {
              console.log("timer error")
            }
          })
    }, 1000);
  }

  onPlay() {

    this.$game.play(this.token, this.user, this.$gID)
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {

            this.zone.run(() => {

              this.pop(jordi.message, 'success')

              this.cd.detectChanges();

            })


          } else {

            if (jordi.type == 1) {

              dialogs.prompt({
                title: "Login/Signup",
                message: "register or login securely  via sms. enter your phone number",
                okButtonText: "send sms",
                cancelButtonText: "cancel",
                inputType: dialogs.inputType.number
              }).then((r) => {
                if (r.text) {

                  this.login(r.text)

                } else {

                }
                // console.log("Dialog result: " + r.result + ", text: " + r.text);

              });

            }

            ///user profile is  not complete
            if (jordi.type == 2) {

              this.pop(jordi.message, 'error')
              this.zone.run(() => {


                setTimeout(() => {

                  this.gUSER()
                  this.onBottomNavTap(3)
                  this.cd.detectChanges();

                }, 2000)


              })


            }
            ///user is already in this  game
            if (jordi.type == 3) {

              this.pop(jordi.message, 'error')

            }

          }

        })

  }

  onGrab() {

    this.$game.onGrab(this.token, this.user, this.$gID)
      .subscribe(
        (jordi: any) => {

          this.zone.run(() => {

            if (jordi.success) {
              this.message = jordi.message
            } else {
              this.message = jordi.message

            }
            setTimeout(() => {

              this.message = ''


            }, 2000)

            this.cd.detectChanges();

          })

        })
  }

  onSlap() {

    this.$game.onSlap(this.token, this.user, this.$gID)
      .subscribe(
        (jordi: any) => {

          this.zone.run(() => {

            if (jordi.success) {
              this.message = jordi.message
            } else {
              this.message = jordi.message

            }
            setTimeout(() => {

              this.message = ''


            }, 2000)

            this.cd.detectChanges();

          })

        })
  }

  onSneak() {

    this.$game.onSneak(this.token, this.user, this.$gID)
      .subscribe(
        (jordi: any) => {

          this.zone.run(() => {

            if (jordi.success) {
              this.message = jordi.message
            } else {
              this.message = jordi.message

            }
            setTimeout(() => {

              this.message = ''


            }, 2000)

            this.cd.detectChanges();

          })

        })
  }

  // --------------------------------------------------------------------
  // login/register

  login(number: string) {

    this.$game.login(number, this.device, this.lat, this.lng, this.countryCode)
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {

            this.zone.run(() => {

              dialogs.prompt({
                title: "verify account",
                message: "enter your login code",
                okButtonText: "log me in",
                cancelButtonText: "cancel",
                inputType: dialogs.inputType.text
              }).then((r) => {
                if (r.text) {

                  this.loginComplete(r.text)

                } else {
                  this.pop('what is  your phone number?', 'error')
                }
                // console.log("Dialog result: " + r.result + ", text: " + r.text);

              });

              this.cd.detectChanges();


            })

          } else {

          }
        })
  }

  loginComplete(code: string) {

    this.$game.loginComplete(code, this.device)
      .subscribe(
        (jordi: any) => {
          if (jordi.success) {

            this.zone.run(() => {

              this.token = jordi.token
              this.user = jordi.user
              localStorage.setString('token', jordi.token)
              localStorage.setString('user', jordi.user)
              this.pop("you are logged in", "success")
              this.gUSER()
            });

            this.cd.detectChanges();


          } else {

            this.pop(jordi.message, "error")
            setTimeout(() => {

              this.zone.run(() => {

                dialogs.prompt({
                  title: "verify account",
                  message: "enter your login code",
                  okButtonText: "log me in",
                  cancelButtonText: "cancel",
                  inputType: dialogs.inputType.text
                }).then((r) => {
                  if (r.text) {

                    this.loginComplete(r.text)

                  } else {
                    this.pop('what is  your phone number?', 'error')
                  }
                  // console.log("Dialog result: " + r.result + ", text: " + r.text);

                });

                this.cd.detectChanges();


              })
            }, 2000)

          }
        })
  }



  onShare() {

    SocialShare.shareUrl("https://www.nativescript.org/", "come play grabbit with me, we can win awesome prizes");
  }

  onRedeem(qr) {

    this.zone.run(() => {

      this.redeemQR = qr
      this.showRedeem = true

      this.cd.detectChanges();

    })
  }
  // --------------------------------------------------------------------
  // User Interaction

  // MY: Tabs selected index is changed, e.g. when swipe to navigate.
  onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
    this.zone.run(() => {
      if (args.newIndex !== this.currentTabIndex) {
        this.onBottomNavTap(args.newIndex);
      }

      this.cd.detectChanges();

    })
  }

  // Tap on a one of the tabs
  onBottomNavTap(index: number, duration: number = 300): void {
    this.zone.run(() => {

      if (this.currentTabIndex !== index) {
        const tabContentsArr = this.tabContents.toArray();

        // set unfocus to previous index
        tabContentsArr[this.currentTabIndex].nativeElement.animate(this.getUnfocusAnimation(this.currentTabIndex, duration));

        // set focus to current index
        tabContentsArr[index].nativeElement.animate(this.getFocusAnimation(index, duration));
      }

      // MY: Change the selected index of Tabs when tap on tab strip
      if (this.tabs.nativeElement.selectedIndex !== index) {
        this.tabs.nativeElement.selectedIndex = index;
      }

      this.centerCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
      this.leftTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
      this.rightTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
      this.centerPatch.nativeElement.animate(this.getSlideAnimation(index, duration));
      this.dragCircle.nativeElement.animate(this.getSlideAnimation(index, duration));

      // set current index to new index
      this.currentTabIndex = index;
      console.log(index)

      if (index != 2) {

        timer.clearTimeout(this.OTIMER);

      } else {

        this.bGLOBALGAMES()
        this.onTimer()

      }

      this.cd.detectChanges();

    })

  }

  // Drag the focus circle to one of the tabs
  onCenterCirclePan(args: PanGestureEventData): void {
    let grdLayout: GridLayout = <GridLayout>args.object;
    let newX: number = grdLayout.translateX + args.deltaX - this.prevDeltaX;

    if (args.state === 0) {
      // finger down
      this.prevDeltaX = 0;
    } else if (args.state === 2) {
      // finger moving
      grdLayout.translateX = newX;
      this.leftTabs.nativeElement.translateX = newX;
      this.rightTabs.nativeElement.translateX = newX;
      this.centerPatch.nativeElement.translateX = newX;
      this.centerCircle.nativeElement.translateX = newX;

      this.prevDeltaX = args.deltaX;
    } else if (args.state === 3) {
      // finger up
      this.prevDeltaX = 0;
      const tabWidth = screen.mainScreen.widthDIPs / this.tabList.length;
      const tabSelected: number = Math.round(Math.abs(newX / tabWidth));
      const translateX: number = tabSelected * tabWidth;
      if (newX < 0) {
        // pan left
        this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
        // MY: Change the selected index of Tabs when pan left
        this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
      } else {
        // pan right
        this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
        // MY: Change the selected index of Tabs when pan right
        this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
      }
    }
  }

  // --------------------------------------------------------------------
  // Tab bar helpers

  initializeTabBar(): void {
    // set up base layer
    this.leftTabs.nativeElement.width = screen.mainScreen.widthDIPs;
    this.rightTabs.nativeElement.width = screen.mainScreen.widthDIPs;
    this.centerPatch.nativeElement.width = 100;

    this.tabBGContainer.nativeElement.translateX = - (screen.mainScreen.widthDIPs / 2) - (80 / 2);

    // set default selected tab
    const tabContentsArr = this.tabContents.toArray();
    tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
    tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
    tabContentsArr[this.defaultSelected].nativeElement.translateY = - 15;
    this.currentTabIndex = this.defaultSelected;

    //get user
    this.gStorage()

    ///get user location
    this.geo()
    this.bGeo()

    //get  global game
    this.bGLOBALGAMES()
  }

  getSlideAnimation(index: number, duration: number) {
    return {
      translate: { x: this.getTabTranslateX(index), y: 0 },
      curve: this.animationCurve,
      duration: duration
    };
  }

  getFocusAnimation(index: number, duration: number) {
    return {
      scale: { x: 1.5, y: 1.5 },
      translate: { x: 0, y: -15 },
      duration: duration
    };
  }

  getUnfocusAnimation(index: number, duration: number) {
    return {
      scale: { x: 1, y: 1 },
      translate: { x: 0, y: 0 },
      duration: duration
    };
  }

  getTabTranslateX(index: number): number {
    return index * screen.mainScreen.widthDIPs / this.tabList.length - (screen.mainScreen.widthDIPs / 2) + (80 / 2)
  }

  setGameId(gID) {

    this.zone.run(() => {
      setTimeout(() => {

        this.$gID = gID
        this.onBottomNavTap(2)
        this.cd.detectChanges();

      }, 1000)
    })
  }
  pop(message: any, type: any) {

    let options = {
      title: type,
      message: message,
      okButtonText: "OK"
    };

    confirm(options).then(() => {
      // console.log("Race chosen!");
    });
  }

  onType(value) {

    this.zone.run(() => {
      if (this.$gType == 'local') {
        this.$gType = 'global'
      } else {
        this.$gType = 'local'

      }
      this.cd.detectChanges();

    })

  }

  public onCopy(text: any): void {
    setText(text)
      .then(() => this.pop("copied  to  clipboard", 'success'))
      .catch((err: string) => this.pop("error copying, try again", 'error'));
  }
  ngOnDestroy() {

    this.zone.run(() => {

      this.runTimer = false
      if (this.OTIMER) {

        timer.clearTimeout(this.OTIMER);

      }
      this.cd.detectChanges();

    })


  }
}
