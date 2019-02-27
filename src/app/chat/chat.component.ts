import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { NativeChatConfig } from "@progress-nativechat/nativescript-nativechat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  moduleId: module.id,
})
export class ChatComponent implements OnInit {

  nativeChatConfig: NativeChatConfig;

  constructor(private _routerExtensions: RouterExtensions, private page: Page) {
    this.page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }

  onLoaded(): void {
    this.nativeChatConfig = {
        "botId": "5c7561617498a12d34de3e12",
        "channelId": "9edee837-db75-40e9-bbaf-34f609fe8abc",
        "channelToken": "62b9ac13-5dce-40c5-9969-c708e5f6bb65",
        user: {
            name: 'John Smith'
        },
        session: {
            clear: true,
            userMessage: '',
            context: {
                company: 'Progress Software',
                phone: '555 555 5555'
            }
        }
    };
}
}
