import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BackendService, Ticket } from "../../backend.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-details",
  templateUrl: "./ticket-detail.component.html",
  styleUrls: ["./ticket-detail.component.css"]
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params["id"];
    this.zone.run(() => this.loadData(id));
  }

  loadData(id: string) {
    this.backendService.getTicketById(id).subscribe(ticket => {
      this.zone.run(_ => {
        this.ticket = ticket;
      });
    });
  }
}
