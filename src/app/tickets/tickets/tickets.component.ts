import { Component, OnInit, NgZone } from "@angular/core";

import { BackendService, Ticket } from "../../backend.service";
import { ColorUtility } from "../../utils/colors";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  listLoaded: boolean;
  isLoading: boolean;
  public pieData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private zone: NgZone, private backendService: BackendService) {}

  ngOnInit() {
    this.listLoaded = false;
    this.isLoading = true;
    this.loadData();
  }

  loadData() {
    this.backendService.getTickets().subscribe(data => {
      this.zone.run(() => {
        this.tickets = data;
        this.processPieData(data);
      });
    });
    this.isLoading = false;
    this.listLoaded = true;
  }

  private processPieData(data: Ticket[]) {
    this.pieData.next([
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
    ]);
  }

  async setStatus(ticket: Ticket, status) {
    ticket.Status = status;
    let caseNumber = ticket.CaseNumber;
    await this.backendService.editTicketStatus(ticket);
    this.processPieData(this.tickets);
  }
}
