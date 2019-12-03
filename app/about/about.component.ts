import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";
import { EventData } from "tns-core-modules/data/observable";
@Component({
  selector: "About",
  moduleId: module.id,
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements AfterViewInit {

  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private location: Location) {


  }

  ngAfterViewInit(): void {


  }

  goBack(): void {
    this.location.back();
  }


}
