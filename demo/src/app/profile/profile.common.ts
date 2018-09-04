import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

export const COMPONENT_DECLARATIONS: any[] = [
  ProfileComponent
];

export const ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent }
];
