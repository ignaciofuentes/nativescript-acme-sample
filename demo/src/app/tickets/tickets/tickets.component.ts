import { Component, OnInit, NgZone } from '@angular/core';

import { BackendService, Ticket } from '../../backend.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private zone: NgZone,
    private backendService: BackendService) { }

  ngOnInit() {
    this.zone.run(
      () => this.loadData()
    );
  }

  async loadData() {
    this.tickets = await this.backendService.getTickets();
  }
}
