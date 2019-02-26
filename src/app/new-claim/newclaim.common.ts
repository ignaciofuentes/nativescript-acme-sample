import { Routes } from '@angular/router';

import { NewClaimComponent } from './newclaim.component';

export const COMPONENT_DECLARATIONS: any[] = [
  NewClaimComponent
];

export const ROUTES: Routes = [
  { path: 'new-claim', component: NewClaimComponent }
];
