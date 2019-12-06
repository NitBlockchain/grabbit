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
  selector: "Create",
  moduleId: module.id,
  templateUrl: "./create-business.component.html",
  styleUrls: ["./create-business.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBusinessComponent implements AfterViewInit {

  _create: FormGroup
  $game: any

  public bizType: Array<string> = ['restaurant', 'retail', 'spa', 'bar', 'cafe', 'food truck', 'tourism', 'salon', 'hair stylist', 'website'];
  bizName: string
  address: string
  phone: string
  story: string
  bType: string
  email: string
  public images: Array<string>;

  token: string
  name: string
  user: string
  avatar: string
  lat: any
  lng: any

  showBizForm: boolean
  showBiz: boolean
  askBiz: boolean
  showVerify: boolean

  BIZ: any
  USER: any
  image = "http://cdn.cnn.com/cnnnext/dam/assets/190710135245-12-waterfront-restaurants.jpg"
  yelpImage = "https://i.imgur.com/hP9GPp3.png"

  constructor(public _game: GameProvider, private zone: NgZone, private cd: ChangeDetectorRef, private location: Location, private router: RouterExtensions, private route: ActivatedRoute, private formBuilder: FormBuilder, ) {

    this.images = []
    this.$game = _game
    this.showBiz = false
    this.showVerify = false

  }

  ngAfterViewInit(): void {

    this.zone.run(() => {

      this.token = localStorage.getString('token')
      this.name = localStorage.getString('name')
      this.user = localStorage.getString('user')
      this.lat = localStorage.getString('lat')
      this.lng = localStorage.getString('lng')

      this.showBizForm = false
      this.gUSER()

      this.cd.detectChanges();

    })
  }

  // --------------------------------------------------------------------
  // get user
  gUSER() {
    console.log("getting the user and biz")
    this.$game.gUSER(this.token, this.user, this.lat, this.lng)
      .subscribe(
        (jordi) => {

          if (jordi.success) {

            this.zone.run(() => {

              this.USER = jordi.payload[0]

              this.BIZ = jordi.payload[1]
              if (this.BIZ && this.BIZ.length > 0 && this.BIZ[0].profile[0].verified < 1) {

                this.showVerify = true
                this.showBiz = true
                this.askBiz = false

              } else if (this.BIZ && this.BIZ.length > 0 && this.BIZ[0].profile[0].verified > 0) {

                this.showVerify = false
                this.showBiz = true
                this.askBiz = false


              } else if (this.BIZ && this.BIZ.length < 1) {

                this.showVerify = false
                this.showBiz = false
                this.askBiz = true


              }
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

  onYelp() {


    dialogs.prompt({
      title: "Yelp",
      message: "enter yelp id",
      okButtonText: "get yelp",
      cancelButtonText: "cancel",
      inputType: dialogs.inputType.text
    }).then((r) => {
      if (r.text) {

        this.bYELP(r.text)
        // this.loginComplete(r.text)

      } else {
        // this.pop('enter yelp id?', 'error')
      }
      // console.log("Dialog result: " + r.result + ", text: " + r.text);

    });

  }

  bYELP(yelp: any) {

    this.$game.bYELP(this.token, this.user, this.lat, this.lng, yelp)
      .subscribe((jordi: any) => {
        console.log(jordi)
        if (jordi.success) {

          this.zone.run(() => {

            this.BIZ = jordi.payload
            this.showBiz = true
            this.pop(jordi.message, "success")

            this.cd.detectChanges();

          })

        } else {
          this.pop(jordi.message, "error")

        }
      })
  }

  vYELP(yelp: any) {

    this.$game.vYELP(this.token, this.user, null)
      .subscribe((jordi: any) => {
        if (jordi.success) {

          this.zone.run(() => {

            dialogs.prompt({
              title: "Verify Business",
              message: "enter verification code",
              okButtonText: "confirm",
              cancelButtonText: "cancel",
              inputType: dialogs.inputType.text
            }).then((r) => {
              if (r.text) {

                this.$game.vYELP(this.token, this.user, r.text)
                  .subscribe((jordi: any) => {
                    if (jordi.success) {

                      this.pop(jordi.message, 'success')

                    } else {

                      this.pop(jordi.message, 'error')

                    }
                  })

              } else {
                // this.pop('enter verification code', 'error')
              }
              // console.log("Dialog result: " + r.result + ", text: " + r.text);

            });

            this.cd.detectChanges();

          })

        } else {
          this.pop(jordi.message, "error")

        }
      })
  }

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
