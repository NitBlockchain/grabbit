import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreateBusinessComponent } from "./create-business.component";

const routes: Routes = [
  { path: "create-business", component: CreateBusinessComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CreateBusinessRoutingModule { }
