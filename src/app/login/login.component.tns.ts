import { Component } from "@angular/core";
import { NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

import { FingerprintAuth, BiometricIDAvailableResult } from "nativescript-fingerprint-auth";

import { BackendService } from "../backend.service";

@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private fingerprintAuth: FingerprintAuth;

  name = "admin";
  password = "admin";
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

    this.fingerprintAuth = new FingerprintAuth();
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
    /*try {
      const user = await this.backendService.loginWithMIC("sde://");
      this.navigateToTickets();
      console.log("user: " + JSON.stringify(user));
    } catch (error) {
      alert("An error occurred. Check your Kinvey settings.");
      console.log("error: " + error);
    }*/

    this.fingerprintAuth.verifyFingerprint(
      {
        title: 'Android title', // optional title (used only on Android)
        message: 'Scan yer finger', // optional (used on both platforms) - for FaceID on iOS see the notes about NSFaceIDUsageDescription
        authenticationValidityDuration: 10, // optional (used on Android, default 5)
        useCustomAndroidUI: false // set to true to use a different authentication screen (see below)
      })
      .then((enteredPassword?: string) => {
        this.navigateToTickets();
      })
      .catch(err => console.log(`Biometric ID NOT OK: ${JSON.stringify(err)}`));
  }

  private navigateToTickets() {
    this.zone.run(() => {
      this._routerExtensions.navigate(["/chat"], {
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
