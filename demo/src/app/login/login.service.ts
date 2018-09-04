import { Injectable } from "@angular/core";
import {
  Kinvey,
  User,
} from "kinvey-nativescript-sdk";


@Injectable()
export class LoginService {
  constructor() {

  }

  login(name, password): Promise<User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.login(name, password);
    }
  }

  loginWithMIC(): Promise<User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(
        "http://localhost:4200",
        Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage,
        { version: "v2" } as any
      );
    }
  }

  logout() {
    return Kinvey.User.logout();
  }
}
