import { Component, OnInit, NgZone } from "@angular/core";

import { BackendService, Ticket } from "../../backend.service";
import { tick } from "@angular/core/testing";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  listLoaded: boolean;
  isLoading: boolean;

  constructor(private zone: NgZone, private backendService: BackendService) {}

  ngOnInit() {
    this.listLoaded = false;
    this.isLoading = true;
    this.loadData();
  }

  loadData() {
    this.backendService.getTickets().subscribe(data => {
      this.zone.run(() => {
        console.log(data);
        this.tickets = data;
      });
    });
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
  async markClosed(ticket) {
    if (ticket.status == "Closed") {
      ticket.status = "testing";
    } else {
      ticket.status = "Closed";
    }
    await this.backendService.editTicketStatus(ticket);
    alert("Success!");
  }
}
