import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { TicketsComponent } from "./tickets/tickets/tickets.component";
import { AnonGuard } from "./anon.guard";

export const routes: Routes = [
  { path: "", redirectTo: "tickets", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
];

//TODO: Should we add lazy loading?
