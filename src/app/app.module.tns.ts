import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { TicketsModule } from "./tickets/tickets.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { ProfileModule } from "./profile/profile.module";
import { StatsModule } from "./stats/stats.module";
import { BackendService } from "./backend.service";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { Stats } from "fs";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardLayoutComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    TicketsModule,
    EquipmentModule,
    ProfileModule,
    StatsModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
