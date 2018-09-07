import { Component, OnInit, NgZone } from "@angular/core";

import { BackendService, Ticket } from "../../backend.service";
import { ColorUtility } from "../../utils/colors";

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
    return ColorUtility.getStatusColor(status);
  }
  async setStatus(ticket: Ticket, status) {
    ticket.Status = status;

    ticket = await this.backendService.editTicketStatus(ticket);
  }
}
