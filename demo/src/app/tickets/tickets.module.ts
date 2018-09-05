import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ROUTES, COMPONENT_DECLARATIONS } from "./tickets.common";
import { GridModule } from "@progress/kendo-angular-grid";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    GridModule,
    ButtonsModule
  ],
  exports: [RouterModule],
  declarations: [...COMPONENT_DECLARATIONS]
})
export class TicketsModule {}
