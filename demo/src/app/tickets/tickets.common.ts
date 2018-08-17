import { Routes } from '@angular/router';

import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

export const COMPONENT_DECLARATIONS: any[] = [
  TicketsComponent,
  TicketDetailComponent
];

export const ROUTES: Routes = [
  { path: 'tickets', component: TicketsComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
];
