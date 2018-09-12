import { Routes } from '@angular/router';

import { StatsComponent } from './stats.component';

export const COMPONENT_DECLARATIONS: any[] = [
  StatsComponent
];

export const ROUTES: Routes = [
  { path: 'stats', component: StatsComponent }
];
