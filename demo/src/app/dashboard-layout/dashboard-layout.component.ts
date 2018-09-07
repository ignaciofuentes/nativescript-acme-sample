import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";
import { Router } from "../utils";

@Component({
  selector: "app-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.css"]
})
export class DashboardLayoutComponent implements OnInit {
  constructor(private service: BackendService, private router: Router) {}

  ngOnInit() {}
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
