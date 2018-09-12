import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

import { BackendService, Ticket } from "../backend.service";

@Component({
  selector: 'app-profile',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  moduleId: module.id,
})
export class StatsComponent implements OnInit {

  ticketData: { status: string, amount: number }[] = [];

  constructor(private page: Page, private backendService: BackendService) {
    this.page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
    this.loadData();
  }

  loadData() {
    this.backendService.getTickets().subscribe(data => {
      let newCount = 0;
      let workingCount = 0;
      let closedCount = 0;
      let ticketData = [];

      if (this.ticketData.length > 0) {
        return;
      }

      data.forEach((ticket: Ticket) => {
        if (ticket.Status == "New" ) newCount++;
        if (ticket.Status == "Working") workingCount++;
        if (ticket.Status == "Closed") closedCount++;
      });

      ticketData.push({ status: "New", amount: newCount });
      ticketData.push({ status: "Working", amount: workingCount });
      ticketData.push({ status: "Closed", amount: closedCount });

      this.ticketData = ticketData;
    });
  }
}
