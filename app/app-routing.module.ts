import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AboutComponent } from "./about/about.component"
import { CreateComponent } from "./create/create.component"
import { CreateBusinessComponent } from "./create-business/create-business.component"
import { HomeComponent } from "./home/home.component"
import { SupportComponent } from "./support/support.component"
import { LegalsComponent } from "./legals/legals.component"
import { ProfileBusinessComponent } from "./profile-business/profile-business.component"
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: "about", component: AboutComponent },
  { path: "create/:type", component: CreateComponent },
  { path: "create-business", component: CreateBusinessComponent },
  { path: "support", component: SupportComponent },
  { path: "legals/:type", component: LegalsComponent },
  { path: "profile-business", component: ProfileBusinessComponent }

];

// export const navigatableComponents = [
//   AboutComponent,
// ];
@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
