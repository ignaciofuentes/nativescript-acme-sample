import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";

import { AppModule } from "./app/app.module.tns";

let options: AppOptions = {};

// !!! Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);
