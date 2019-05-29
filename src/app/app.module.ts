import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { TicketsModule } from "./tickets/tickets.module";
import { BackendService } from "./backend.service";
import { GridModule } from "@progress/kendo-angular-grid";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { ChartsModule } from "@progress/kendo-angular-charts";
import "hammerjs";
import { KinveyModule } from "kinvey-angular-sdk";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardLayoutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TicketsModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ChartsModule,
    KinveyModule.init({
      appKey: "kid_rkDJUINIQ",
      appSecret: "17282f9d91da4af7b398855e32ea4dd0"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
