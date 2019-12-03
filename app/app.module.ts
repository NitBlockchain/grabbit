import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component"
import { CreateComponent } from "./create/create.component"
import { CreateBusinessComponent } from "./create-business/create-business.component"
import { SupportComponent } from "./support/support.component"
import { LegalsComponent } from "./legals/legals.component"

@NgModule({

  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    HttpClientModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    CreateBusinessComponent,
    SupportComponent,
    LegalsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
