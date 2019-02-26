import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'app-new-claim',
  templateUrl: './newclaim.component.html',
  styleUrls: ['./newclaim.component.css'],
  moduleId: module.id,
})
export class NewClaimComponent implements OnInit {

  constructor(private _routerExtensions: RouterExtensions, private page: Page) {
    this.page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }
}
