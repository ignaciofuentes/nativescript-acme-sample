import { Component, OnInit, NgZone } from '@angular/core';

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
    private backendService: BackendService) { }

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
    if (status == "Completed" || status == "Resolved") {
      return "#00880A";
    } else if (status == "Open") {
      return "#DDAA00";
    } else {
      return "#D63100";
    }
  }
}
