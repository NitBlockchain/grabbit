import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "Legals",
  moduleId: module.id,
  templateUrl: "./legals.component.html",
  styleUrls: ["./legals.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalsComponent implements AfterViewInit {

  type: any
  user: any
  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private location: Location, private router: RouterExtensions, private route: ActivatedRoute, ) {


  }

  ngAfterViewInit(): void {

    this.zone.run(() => {

      this.type = this.route.snapshot.params.type

      this.cd.detectChanges();

    })

  }

  goBack(): void {
    this.location.back();
  }
}
