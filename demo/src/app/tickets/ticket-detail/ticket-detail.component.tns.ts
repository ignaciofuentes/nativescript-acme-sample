import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { Page } from "tns-core-modules/ui/page";

import { BackendService, Ticket } from '../../backend.service';

@Component({
  selector: "app-details",
  templateUrl: "./ticket-detail.component.html",
  styleUrls: ["./ticket-detail.component.css"],
  moduleId: module.id
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;

  @ViewChild(RadSideDrawerComponent)
  public drawerComponent: RadSideDrawerComponent;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private page: Page,
    private zone: NgZone
  ) {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    this.zone.run(
      () => this.loadData(id)
    );
  }

  async loadData(id: string) {
    this.ticket = await this.backendService.getTicketById(id);
  }

  onOpenDrawerTap() {
    this.drawerComponent.sideDrawer.showDrawer();
  }
  onCloseDrawerTap() {
    this.drawerComponent.sideDrawer.closeDrawer();
  }

  async changeStatus(status) {
    this.ticket.status = status;
    await this.backendService.editTicketStatus(this.ticket);
  }

  getStatusColor(status) {
    if (status == "New") {
      return "#00880A"; // green
    } else if (status == "Closed") {
      return "#DDAA00"; // yellow
    } else {
      return "#D63100"; // red
    }
  }
}
