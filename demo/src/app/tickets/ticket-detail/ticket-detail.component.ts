import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService, Ticket } from '../../backend.service';

@Component({
  selector: 'app-details',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ["./ticket-detail.component.css"]
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];

    this.zone.run(
      () => this.loadData(id)
    );
  }

  async loadData(id: string) {
    this.ticket = await this.backendService.getTicketById(id);
  }
}
