import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AnonGuard } from "./anon.guard";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
];
