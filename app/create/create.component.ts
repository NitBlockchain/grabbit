import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameProvider } from '../services/game';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { confirm } from "tns-core-modules/ui/dialogs";
const localStorage = require("tns-core-modules/application-settings");
import * as imagepicker from "nativescript-imagepicker";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { ImageFormat } from "ui/enums";
import * as Camera from "nativescript-camera";
import * as Toast from "nativescript-toast";
var FileSystem = require("file-system");
var BackgroundHttp = require("nativescript-background-http");
var MD5 = require("blueimp-md5");
import { Observable } from "rxjs/Observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { getUUID } from 'nativescript-uuid';

@Component({
  selector: "Create",
  moduleId: module.id,
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements AfterViewInit {

  _create: FormGroup
  public bizType: Array<string> = ['restaurant', 'retail', 'spa', 'bar', 'cafe', 'food truck', 'tourism', 'salon', 'hair stylist', 'website'];
  bizName: string
  address: string
  phone: string
  story: string
  bType: string
  email: string
  public images: Array<string>;
  locations = [];

  gameTitle: string
  maxPlayers: any
  prize: any
  prize2: string
  price: string
  details: string
  gameLat: any
  gameLng: any

  token: string
  name: string
  user: string
  avatar: string
  lat: any
  lng: any
  type: any
  prizeType: any
  showGameForm: boolean
  showBizForm: boolean
  $game: any
  admin: any
  BIZ: any
  USER: any

  btc_value: any
  btc_fee: string
  btc_fee_usd: string
  playerFee: any

  device: any
  constructor(public _game: GameProvider, private zone: NgZone, private cd: ChangeDetectorRef, private location: Location, private router: RouterExtensions, private route: ActivatedRoute, private formBuilder: FormBuilder, ) {

    this.$game = _game
    this.images = []

  }

  ngAfterViewInit(): void {

    this.zone.run(() => {

      this.token = localStorage.getString('token')
      this.name = localStorage.getString('name')
      this.user = localStorage.getString('user')
      this.lat = localStorage.getString('lat')
      this.lng = localStorage.getString('lng')
      this.device = getUUID();
      if (isAndroid) {
        // console.log("android")
        // this.device = "android495775qafef4bi9"

      } else {
        // console.log("ios")
        //
        // this.device = "anfeoboeuab30r3u"

      }
      this.showBizForm = false
      this.showGameForm = false

      this.type = this.route.snapshot.params.type
      if (this.user) {

        this.gUSER()
      }
      this.cd.detectChanges();

    })
  }

  // --------------------------------------------------------------------
  // get user
  gUSER() {
    console.log("getting the user")
    this.$game.gUSER(this.token, this.user, this.lat, this.lng)
      .subscribe(
        (jordi) => {

          if (jordi.success) {
            console.log(jordi.btc_value)
            this.zone.run(() => {

              let USER = jordi.payload[0]
              this.BIZ = jordi.payload[1]

              this.USER = USER
              this.btc_value = jordi.btc_value
              this.btc_fee = jordi.btc_fee
              this.btc_fee_usd = jordi.btc_fee_usd
              // console.log(this.BIZ.profle)

              this.name = USER.profile.name || 'no user name set'
              this.avatar = USER.profile.avatar || '~/assets/imgs/avatars/alien_02.png'
              this.admin = USER.profile.admin

              this.cd.detectChanges();

            })
          } else {

            this.zone.run(() => {

              this.name = 'n/a'
              this.avatar = '~/assets/imgs/avatars/alien_02.png'

              this.cd.detectChanges();

            })
          }


        },
        (error) => {
          console.log(<any>error)
        });
  }

  gCreateCoupon(type: any) {

    if (!this.gameTitle) {
      this.pop("whats the game title?", "error")
    } else if (!this.maxPlayers) {
      this.pop("whats the max number of players?", "error")

    } else if (!this.prize) {
      this.pop("whats the prize?", "error")

    } else if (this.prizeType == 'everyone wins' && !this.prize2) {
      this.pop("whats the  prize  for none winners?", "error")

    } else if (this.prizeType == 'free item  with  purchase' && !this.price) {

      this.pop("whats the price of the  item to purchase?", "error")

    } else if (!this.details) {

      this.pop("whats the prize details?", "error")

    } else {

      let total = this.maxPlayers * this.playerFee
      this.$game.gCREATECOUPON(this.token, this.user, this.prizeType, this.gameTitle, this.maxPlayers, this.prize, this.prize2, this.price, total)
        .subscribe(
          (jordi) => {
            if (jordi.success) {

              this.pop(jordi.message, "success")

            } else {
              this.pop(jordi.message, "error")

            }
          })

    }

  }

  gCreateBTC() {

    if (!this.gameTitle) {
      this.pop("whats the game title?", "error")
    } else if (!this.prize) {
      this.pop("whats the  prize?", "error")

    } else if (!this.details) {

      this.pop("whats the prize details?", "error")

    } else if ((this.btc_value * this.prize) > 25) {

      this.pop("$25 max prize value", "error")

    } else {

      this.$game.gCREATEBTC(this.token, this.user, this.gameTitle, this.prize, this.details, this.gameLat, this.gameLng)
        .subscribe(
          (jordi) => {
            if (jordi.success) {

              this.pop(jordi.message, "success")

            } else {

              this.pop(jordi.message, "error")

            }
          })

    }

  }
  gSAVE() {

    if (!this.bizName) {
      this.pop("whats your business  name?", "error")
    } else if (!this.address) {
      this.pop("whats your business address?", "error")

    } else if (!this.phone) {
      this.pop("whats your business phone?", "error")

    } else if (!this.story) {
      this.pop("whats your business story?", "error")

    } else if (!this.details) {
      this.pop("whats the  game  details?", "error")

    } else {

      this.$game.bizSAVE(this.token, this.user, this.bizName, this.address, this.phone, this.story, this.email, this.bType, this.lat, this.lng)
        .subscribe(
          (jordi) => {
            if (jordi.success) {

              this.pop(jordi.message, "success")

            } else {
              this.pop(jordi.message, "error")

            }
          })
    }

  }

  onCreate(prizeType) {

    this.zone.run(() => {
      this.prizeType = prizeType
      if (prizeType == '1 winner') {

        this.playerFee = .65

      }
      if (prizeType == 'everyone wins') {

        this.playerFee = 1.75

      }
      if (prizeType == 'winner must bring a friend') {

        this.playerFee = 1

      }
      if (prizeType == 'free item  with  purchase') {

        this.playerFee = 1

      }

      if (this.BIZ && this.BIZ.length < 1) {

        // console.log(this.showBizForm)
        this.pop("lets create your business profile 1st", "error")
        setTimeout(() => {

          this.router.navigate(['/create-business/'], {
            animated: false,
            clearHistory: false
          })
        }, 300);
        // this.showBizForm = true


      } else if (this.BIZ && this.BIZ.length > 0 && this.BIZ[0].profile[0].verified < 1) {


        this.pop("please verify business", "error")
        setTimeout(() => {

          this.router.navigate(['/create-business/'], {
            animated: false,
            clearHistory: false
          })
        }, 300);

      } else if (this.BIZ && this.BIZ.length > 0 && this.BIZ[0].profile[0].verified > 0) {

        this.showGameForm = true

      } else if (!this.user) {

        this.pop("log in to create a game", "error")

      }
      this.cd.detectChanges();

    })

  }


  public takePicture() {

    Camera.takePicture({ saveToGallery: false, width: 320, height: 240 }).then((picture: any) => {
      let folder = FileSystem.knownFolders.documents();
      let path = FileSystem.path.join(folder.path, MD5(new Date()) + ".png");
      picture.saveToFile(path, ImageFormat.png, 60);
      this.upload("https://app.grabbit.cheap/upload", "upload", path)
        .subscribe(result => {
          this.zone.run(() => {
            this.images.push(path.replace(/^.*[\\\/]/, ''));
          });
        }, error => {
          console.log(error);
        });
    });
  }

  public upload(destination: string, filevar: string, filepath: string) {
    return new Observable((observer: any) => {
      let session = BackgroundHttp.session("file-upload");
      let request = {
        url: destination,
        method: "POST"
      };
      let params = [{ "name": filevar, "filename": filepath, "mimeType": "image/png" }];
      let task = session.multipartUpload(params, request);
      task.on("complete", (event) => {
        let file = FileSystem.File.fromPath(filepath);
        file.remove().then(result => {
          observer.next("Uploaded `" + filepath + "`");
          observer.complete();
        }, error => {
          observer.error("Could not delete `" + filepath + "`");
        });
      });
      task.on("error", event => {
        console.log(event);
        observer.error("Could not upload `" + filepath + "`. " + event.eventName);
      });
    });
  }

  // --------------------------------------------------------------------
  // login/register

  login() {
    console.log("working")
    dialogs.prompt({
      title: "Login/Signup",
      message: "register or login securely  via sms. enter your phone number",
      okButtonText: "send sms",
      cancelButtonText: "cancel",
      inputType: dialogs.inputType.number
    }).then((r) => {
      if (r.text) {

        this.$game.login(r.text, this.device, this.lat, this.lng)
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
      } else {

      }
      // console.log("Dialog result: " + r.result + ", text: " + r.text);

    });

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

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.bType = this.bizType[picker.selectedIndex]
    console.log(this.bType);
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
  private createForm() {

    this._create = this.formBuilder.group({
      title: ['', Validators.required],
      hashtags: ['', Validators.required],
      details: ['', Validators.required],
      category: ['', Validators.required]

    });
  }

}
