import { Component, OnInit, NgZone } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

import { BackendService, Ticket } from '../../backend.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  listLoaded;
  isLoading;

  constructor(
    private zone: NgZone,
    private backendService: BackendService,
    private page: Page) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
    }

  ngOnInit() {
    this.listLoaded = false;
    this.isLoading = true;
    this.zone.run(
      () => this.loadData()
    );
  }

  async loadData() {
    this.tickets = await this.backendService.getTickets();
    this.isLoading = false;
    this.listLoaded = true;
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

