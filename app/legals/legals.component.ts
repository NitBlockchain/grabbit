import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";
@Component({
  selector: "Legals",
  moduleId: module.id,
  templateUrl: "./legals.component.html",
  styleUrls: ["./legals.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalsComponent implements AfterViewInit {

  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private location: Location) {


  }

  ngAfterViewInit(): void {


  }

  goBack(): void {
    this.location.back();
  }
}
