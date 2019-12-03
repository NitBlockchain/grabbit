import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Location } from "@angular/common";

@Component({
  selector: "Chat",
  moduleId: module.id,
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements AfterViewInit {

  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private location: Location) {


  }

  ngAfterViewInit(): void {


  }

  goBack(): void {
    this.location.back();
  }
}
