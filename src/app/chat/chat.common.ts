import { Routes } from '@angular/router';

import { ChatComponent } from './chat.component';

export const COMPONENT_DECLARATIONS: any[] = [
  ChatComponent
];

export const ROUTES: Routes = [
  { path: 'chat', component: ChatComponent }
];
