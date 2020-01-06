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
// var FileSystem = require("file-system");
// var BackgroundHttp = require("nativescript-background-http");
// var MD5 = require("blueimp-md5");
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: "Profile-business",
  moduleId: module.id,
  templateUrl: "./profile-business.component.html",
  styleUrls: ["./profile-business.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBusinessComponent implements AfterViewInit {

  token: string
  name: string
  user: string
  avatar: string
  lat: any
  lng: any

  BIZ: any
  USER: any
  $game: any

  constructor(public _game: GameProvider, private zone: NgZone, private cd: ChangeDetectorRef, private location: Location, private router: RouterExtensions, private route: ActivatedRoute, private formBuilder: FormBuilder, ) {


    this.$game = _game

  }
  ngAfterViewInit(): void {

    this.zone.run(() => {

      this.token = localStorage.getString('token')
      this.name = localStorage.getString('name')
      this.user = localStorage.getString('user')
      this.lat = localStorage.getString('lat')
      this.lng = localStorage.getString('lng')

      this.gUSER()

      this.cd.detectChanges();

    })
  }

  gUSER() {

    console.log("getting the user and biz")
    this.$game.gUSER(this.token, this.user, this.lat, this.lng)
      .subscribe(
        (jordi) => {

          if (jordi.success) {

            this.zone.run(() => {

              this.USER = jordi.payload[0]

              this.BIZ = jordi.payload[1]

              // console.log(jordi.payload)
              // console.log(this.BIZ)

              this.cd.detectChanges();

            })
          } else {

            this.BIZ = []
            this.USER = []
          }


        },
        (error) => {
          console.log(<any>error)
        });
  }

  scan() {

    dialogs.prompt({
      title: "Enter Code",
      message: "have the winner show you the game code",
      okButtonText: "confirm",
      cancelButtonText: "cancel",
      inputType: dialogs.inputType.number
    }).then((r) => {
      if (r.text) {

        this.redeem(r.text)

      } else {

      }
      // console.log("Dialog result: " + r.result + ", text: " + r.text);

    });
  }

  redeem(code: any) {

    this.$game.gREDEEM(this.token, this.user, code)
      .subscribe(
        (jordi) => {

          if (jordi.success) {

            this.zone.run(() => {

              this.pop('prize claimed', 'success')

              this.cd.detectChanges();

            })
          } else {

            this.pop(jordi.message, 'success')
          }


        },
        (error) => {
          console.log(<any>error)
        });
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

  goBack(): void {
    this.location.back();
  }


}
