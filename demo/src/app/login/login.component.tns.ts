import { Component } from "@angular/core";
import { NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page"

import { LoginService } from "./login.service";

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
        private loginService: LoginService
    ) {
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.actionBarHidden = true;
        this.page.className = "fancy-background";
    }

    async login() {
        this.processing = true;
        try {
            await this.loginService.login(this.name, this.password);
            this.processing = true;
            this.navigateHome();
        } catch (error) {
            this.processing = true;
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }
    }

    async loginWithMIC() {
        try {
            const user = await this.loginService.loginWithMIC();
            this.processing = true;
            this.navigateHome();
            console.log("user: " + JSON.stringify(user));
        } catch (error) {
            this.processing = true;
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }
    }

    private navigateHome() {
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
