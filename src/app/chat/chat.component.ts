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
        botId: '5acddd9715e7187c15f3fc28',
        channelId: 'f91f065c-4079-4fa9-8860-b893e2b81696',
        channelToken: '0570f9a5-6c0e-4b77-b06d-20ce6d5c56d8',
        user: {
            name: 'John Smith'
        },
        session: {
            clear: true,
            userMessage: 'Book a doctor',
            context: {
                company: 'Progress Software',
                phone: '555 555 5555'
            }
        }
    };
}
}
