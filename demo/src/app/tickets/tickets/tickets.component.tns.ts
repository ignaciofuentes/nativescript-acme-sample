import { Component, OnInit, NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { BackendService, Ticket } from "../../backend.service";
import { Observable } from "rxjs";
import { ColorUtility } from "../../utils/colors";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Observable<Ticket[]>;
  listLoaded: boolean;
  isLoading: boolean;

  constructor(
    private zone: NgZone,
    private backendService: BackendService,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
    this.page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.listLoaded = false;
    this.isLoading = true;
    this.zone.run(() => this.loadData());
  }

  async loadData() {
    this.tickets = this.backendService.getTickets();
    this.isLoading = false;
    this.listLoaded = true;
  }

  getStatusColor(status) {
    return ColorUtility.getStatusColor(status);
  }
}
