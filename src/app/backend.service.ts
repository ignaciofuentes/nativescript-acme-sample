import { Injectable } from "@angular/core";
import { Kinvey, CacheStore } from "./utils";
import { Observable } from "rxjs";

export interface Ticket {
  _id: string;
  CaseNumber?: string;
  Type?: string;
  Status?: string;
  Reason?: string;
  Origin?: string;
  Subject?: string;
  Priority?: string;
  Description?: string;
}

@Injectable({
  providedIn: "root"
})
export class BackendService {
  private user: Kinvey.User;
  private ticketsStore: CacheStore<Ticket>;

  constructor() {
    Kinvey.init({
      appKey: "kid_rkDJUINIQ",
      appSecret: "17282f9d91da4af7b398855e32ea4dd0"
    });

    this.ticketsStore = Kinvey.DataStore.collection<Ticket>("tickets");
  }

  async login(username: string, password: string): Promise<Kinvey.User> {
    this.user = await Kinvey.User.login(username, password);

    return this.user;
  }

  async loginWithMIC(): Promise<Kinvey.User> {
    this.user = await Kinvey.User.loginWithMIC("http://localhost:4200");

    return this.user;
  }

  logout(): Promise<void> {
    return Kinvey.User.logout();
  }

  isLoggedIn(): boolean {
    return Kinvey.User.getActiveUser() != null;
  }

  getTickets(): Observable<Ticket[]> {
    const query = new Kinvey.Query();
    query.ascending("CaseNumber");
    return this.ticketsStore.find(query);
  }

  getTicketById(id: string): Observable<Ticket> {
    return this.ticketsStore.findById(id);
  }

  editTicketStatus(ticket: Ticket): Promise<Ticket> {
    return this.ticketsStore.save({
      _id: ticket._id,

      Subject: ticket.Subject,
      Description: ticket.Description,
      Type: ticket.Type,
      Status: ticket.Status
    });
  }
  pendingSyncCount(): Promise<any> {
    return this.ticketsStore.pendingSyncCount();
  }
  push(): Promise<Kinvey.PushResult<Ticket>[]> {
    return this.ticketsStore.push();
  }
}
