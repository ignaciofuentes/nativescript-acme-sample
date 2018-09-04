import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
  imports: [
    NativeScriptRouterModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [
    NavBarComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavBarModule { }
