import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Kinvey } from "kinvey-nativescript-sdk";

if (environment.production) {
  enableProdMode();
}

Kinvey.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
