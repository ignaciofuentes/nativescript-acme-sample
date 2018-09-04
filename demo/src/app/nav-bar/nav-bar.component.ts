import { Component, Input } from '@angular/core';
import * as application from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  moduleId: module.id,
})
export class NavBarComponent {
  isIPhoneX = false;

  private _index: number = 0;
  @Input() set index(i: number) {
    this._index = i;
  }
  get index(): number {
    return this._index;
  }

  ngOnInit(): void {
    // Account for the iPhone X
    // See https://discourse.nativescript.org/t/iphone-x-support/3103
    if (isIOS && application.ios.window.safeAreaInsets) {
      const bottomSafeArea: number = application.ios.window.safeAreaInsets.bottom;
      if (bottomSafeArea > 0) {
        this.isIPhoneX = true;
        application.addCss(`
          .action-bar { padding-top: 0; }
        `);
      }
    }
  }
}
