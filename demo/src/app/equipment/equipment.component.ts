import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARNode, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";
import { Page } from "tns-core-modules/ui/page"
import { isIOS } from "tns-core-modules/platform";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  moduleId: module.id,
})
export class EquipmentComponent implements OnInit {
  isSupported = false;

  constructor(private page: Page) {
    this.page.backgroundSpanUnderStatusBar = true;
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    if (AR.isSupported() && isIOS) {
      this.isSupported = true;
    } else {
      alert("Your device does not support Augmented reality");
    }
  }

  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

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
