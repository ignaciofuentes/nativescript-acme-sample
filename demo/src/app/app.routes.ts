import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { TicketsComponent } from "./tickets/tickets/tickets.component";

export const routes: Routes = [
  { path: "", redirectTo: "tickets", pathMatch: "full" },
  { path: "login", component: LoginComponent }
];

//TODO: Should we add lazy loading?
