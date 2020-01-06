import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProfileBusinessComponent } from "./profile-business.component";

const routes: Routes = [
  { path: "profile-business", component: ProfileBusinessComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProfileBusinessRoutingModule { }
