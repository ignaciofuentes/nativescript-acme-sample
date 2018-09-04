import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

  constructor(private _routerExtensions: RouterExtensions, private page: Page) {
    this.page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }

  logout() {
    Kinvey.User.logout()
      .then(() => {
        this._routerExtensions.navigate(["login"],
          {
              clearHistory: true,
              animated: true,
              transition: {
                  name: "slideBottom",
                  duration: 350,
                  curve: "ease"
              }
          });
      });
  }
}
