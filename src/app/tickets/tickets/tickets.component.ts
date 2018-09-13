import { Component, OnInit, NgZone } from "@angular/core";
import { BackendService, Ticket } from "../../backend.service";
@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  pieData;
  constructor(private zone: NgZone, private backendService: BackendService) {}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.backendService.getTickets().subscribe(data => {
      this.zone.run(() => {
        this.tickets = data;
        this.processPieData();
      });
    });
  }
  private processPieData() {
    let data = this.tickets;
    this.pieData = [
      {
        category: "Working",
        value: data.filter(i => i.Status === "Working").length / data.length
      },
      {
        category: "New",
        value: data.filter(i => i.Status === "New").length / data.length
      },
      {
        category: "Closed",
        value: data.filter(i => i.Status === "Closed").length / data.length
      }
    ];
  }
  async setStatus(ticket: Ticket, status) {
    ticket.Status = status;
    await this.backendService.editTicketStatus(ticket);
    this.processPieData();
  }
}
