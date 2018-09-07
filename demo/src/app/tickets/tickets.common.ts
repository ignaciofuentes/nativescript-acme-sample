import { Routes } from "@angular/router";

import { TicketsComponent } from "./tickets/tickets.component";
import { TicketDetailComponent } from "./ticket-detail/ticket-detail.component";
import { LoggedInGuard } from "../logged-in.guard";
import { DashboardLayoutComponent } from "../dashboard-layout/dashboard-layout.component";

export const COMPONENT_DECLARATIONS: any[] = [
  TicketsComponent,
  TicketDetailComponent
];

export const ROUTES: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: "tickets", component: TicketsComponent },
      { path: "ticket/:id", component: TicketDetailComponent }
    ]
  }
];
