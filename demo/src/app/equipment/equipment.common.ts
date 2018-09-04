import { Routes } from '@angular/router';

import { EquipmentComponent } from './equipment.component';

export const COMPONENT_DECLARATIONS: any[] = [
  EquipmentComponent
];

export const ROUTES: Routes = [
  { path: 'equipment', component: EquipmentComponent }
];
