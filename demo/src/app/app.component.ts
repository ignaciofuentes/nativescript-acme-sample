import { Component } from "@angular/core";
import { BackendService } from "./backend.service";
import { Router } from "./utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private service: BackendService, private router: Router) {}

  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
