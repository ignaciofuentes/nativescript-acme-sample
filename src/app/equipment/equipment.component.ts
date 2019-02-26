import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";
import { Page } from "tns-core-modules/ui/page"
import { isIOS } from "tns-core-modules/platform";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  moduleId: module.id,
})
export class EquipmentComponent implements OnInit {
  isSupported = false;

  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

  constructor(private page: Page, private routerExtensions: RouterExtensions) {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    if (AR.isSupported() && isIOS) {
      this.isSupported = true;
    } else {
      alert("Your device does not support Augmented reality");
    }

    setTimeout(() => {
      this.logout();
    }, 3000);
  }

  logout() {
    Kinvey.User.logout()
      .then(() => {
        this.routerExtensions.navigate(["login"],
          {
              clearHistory: true,
              animated: true,
              transition: {
                  name: "slideBottom",
                  duration: 350,
                  curve: "ease"
              }
          });
      });
  }

  onPlaneTapped(args: ARPlaneTappedEventData): void {
    const ar: AR = args.object;
    ar.addModel({
      name: "Models.scnassets/Generator-final.dae",
      position: {
        x: args.position.x,
        y: args.position.y,
        z: args.position.z
      },
      scale: 1,
      mass: 20
    });
  }
}
