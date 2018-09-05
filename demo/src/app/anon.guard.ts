import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { BackendService } from "./backend.service";

@Injectable({
  providedIn: "root"
})
export class AnonGuard implements CanActivate {
  constructor(private service: BackendService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("checking if logged out");
    if (!this.service.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
