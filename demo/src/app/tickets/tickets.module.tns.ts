import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { ROUTES, COMPONENT_DECLARATIONS } from './tickets.common';
import { NavBarModule } from "../nav-bar/nav-bar.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(ROUTES),
    NativeScriptUISideDrawerModule,
    NavBarModule,
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
export class TicketsModule { }
