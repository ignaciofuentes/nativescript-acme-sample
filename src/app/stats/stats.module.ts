import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { ROUTES, COMPONENT_DECLARATIONS } from './stats.common';
import { NavBarModule } from "../nav-bar/nav-bar.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(ROUTES),
    NavBarModule,
    NativeScriptUIChartModule
  ],
  exports: [
    NativeScriptRouterModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class StatsModule { }
