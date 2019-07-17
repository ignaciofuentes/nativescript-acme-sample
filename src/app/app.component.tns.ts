import { Component } from "@angular/core";
import * as connectivity from "tns-core-modules/connectivity";
import { Toasty } from "nativescript-toasty";

import { BackendService } from "./backend.service";
import { Router } from "./utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private service: BackendService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.setupOfflineWatcher();
  }

  setupOfflineWatcher() {
    connectivity.startMonitoring(async (newConnectionType: number) => {
      switch (newConnectionType) {
        case connectivity.connectionType.none:
          console.log("Connection type changed to none.");
          break;
        case connectivity.connectionType.wifi:
          console.log("Connection type changed to WiFi.");

          let pendingItems: number = await this.service.pendingSyncCount();
          if (pendingItems > 0) {
            const toast = new Toasty({ text: "Updating " + pendingItems + " items" });
            toast.show();
          }
          await this.service.push();
          break;
        case connectivity.connectionType.mobile:
          console.log("Connection type changed to mobile.");
          await this.service.push();
          break;
        default:
          break;
      }
    });
  }
}
