import { Injectable } from '@angular/core';
import { Kinvey, CacheStore } from './utils';

export interface Ticket {
  _id: string;
  userId: string;
  status: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private user: Kinvey.User;
  private ticketsStore: CacheStore<Ticket>;

  constructor() {
    Kinvey.init({
      appKey: 'kid_rkDJUINIQ',
      appSecret: '17282f9d91da4af7b398855e32ea4dd0'
    });

    this.ticketsStore = Kinvey.DataStore.collection<Ticket>('tickets');
  }

  async login(username: string, password: string): Promise<Kinvey.User> {
    await Kinvey.User.logout();
    this.user = await Kinvey.User.login(username, password);

    return this.user;
  }

  async sampleLogin() {
    console.warn('remove this function from the production app');
    await Kinvey.User.logout();
    this.user = await Kinvey.User.login('admin', 'admin');
  }

  async getTickets(): Promise<Ticket[]> {
    await this.sampleLogin();

    return this.ticketsStore.find().toPromise();
  }

  async getTicketById(id: string): Promise<Ticket> {
    await this.sampleLogin();

    return this.ticketsStore.findById(id).toPromise();
  }

  addTicket(id: string, body: string, status: string = 'open') {
    const newTicket: Ticket = {
      userId: this.user._id,
      _id: id,
      body,
      status,
    };

    this.ticketsStore.save(newTicket);
  }

  removeTicket(id: string) {
    this.ticketsStore.removeById(id);
  }

}
