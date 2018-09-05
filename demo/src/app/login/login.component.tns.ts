import { Component } from "@angular/core";
import { NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page"

import { BackendService } from '../backend.service';

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    name = 'admin';
    password = 'admin';
    isIOS = isIOS;
    isAndroid = isAndroid;
    processing = false;

    constructor(
        private _routerExtensions: RouterExtensions,
        private zone: NgZone,
        private page: Page,
        private backendService: BackendService
    ) {
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.actionBarHidden = true;
        this.page.className = "fancy-background";
    }

    async login() {
        this.processing = true;
        try {
            await this.backendService.login(this.name, this.password);
            this.processing = false;
            this.navigateToTickets();
        } catch (error) {
            this.processing = false;
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }
    }

    async loginWithMIC() {
        this.processing = true;
        try {
            // TODO: Eventually replace this with a MIC login
            const user = await this.backendService.login(this.name, this.password);
            this.processing = false;
            this.navigateToTickets();
            console.log("user: " + JSON.stringify(user));
        } catch (error) {
            this.processing = false;
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }
    }

    private navigateToTickets() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["/tickets"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}
