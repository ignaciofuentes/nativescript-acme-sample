import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { Page } from "tns-core-modules/ui/page";

import { BackendService, Ticket } from "../../backend.service";
import { ColorUtility } from "../../utils/colors";
import { Toasty } from "nativescript-toasty";

@Component({
  selector: "app-details",
  templateUrl: "./ticket-detail.component.html",
  styleUrls: ["./ticket-detail.component.css"],
  moduleId: module.id
})
export class TicketDetailComponent implements OnInit {
  ticket = {};

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
    const id: string = this.route.snapshot.params["id"];
    if (id == "1") {
      this.ticket = {
        image: "~/app/images/car8.jpg",
        car: "2010 Ford Focus",
        color: "#DDAA00",
        status: "PENDING",
        desc: "Major damage to trunk after a rear-end collision."
      };
    } else {
      this.ticket = {
        image: "~/app/images/car18.jpg",
        car: "2008 Buick Regal",
        color: "#00880A",
        status: "PAID",
        desc: "Hood damaged after incident with another vehicle."
      };
    }
  }

  loadData(id: string) {
    this.backendService
      .getTicketById(id)
      .subscribe(ticket => (this.ticket = ticket));
  }

  onOpenDrawerTap() {
    this.drawerComponent.sideDrawer.showDrawer();
  }
  onCloseDrawerTap() {
    this.drawerComponent.sideDrawer.closeDrawer();
  }

  getStatusColor(status) {
    return ColorUtility.getStatusColor(status);
  }
}
