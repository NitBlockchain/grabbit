import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";
@Component({
  selector: "Support",
  moduleId: module.id,
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent implements AfterViewInit {

  USER: any
  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private location: Location) {


  }

  ngAfterViewInit(): void {


  }

  goBack(): void {
    this.location.back();
  }
}
