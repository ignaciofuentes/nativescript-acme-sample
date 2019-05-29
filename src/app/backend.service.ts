import { Injectable } from "@angular/core";
import {
  UserService,
  FilesService,
  DataStoreService,
  DataStoreType,
  Query,
  AuthorizationGrant,
  User
} from "./utils";
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
  private user: User;
  private ticketsStore: any;

  constructor(
    private userService: UserService,
    private filesService: FilesService,
    private datastoreService: DataStoreService
  ) {
    this.ticketsStore = this.datastoreService.collection("tickets");
  }

  async login(username: string, password: string): Promise<User> {
    this.user = await User.login(username, password);

    return this.user;
  }

  async loginWithMIC(redirectUri: string): Promise<User> {
    this.user = await this.userService.loginWithMIC(
      redirectUri,
      AuthorizationGrant.AuthorizationCodeLoginPage
    );

    return this.user;
  }

  logout(): Promise<User> {
    return this.userService.logout();
  }

  isLoggedIn(): boolean {
    return User.getActiveUser() != null;
  }

  getTickets(): Observable<Ticket[]> {
    const query = new Query();
    query.ascending("CaseNumber");
    return this.ticketsStore.find(query);
  }

  getTicketById(id: string): Observable<Ticket> {
    return this.ticketsStore.findById(id);
  }

  async editTicketStatus(ticket: Ticket): Promise<Ticket> {
    const ticketToUpdate = Object.assign({}, ticket);
    delete ticketToUpdate.CaseNumber;
    ticket = await this.ticketsStore.save(ticketToUpdate);
    return ticket;
  }
  pendingSyncCount(): Promise<any> {
    return this.ticketsStore.pendingSyncCount();
  }
  push(): Promise<any> {
    return this.ticketsStore.push();
  }
}
