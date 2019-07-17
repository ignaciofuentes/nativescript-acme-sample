import * as application from "tns-core-modules/application";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";
import { AppSync } from "nativescript-app-sync";
import { isIOS } from "tns-core-modules/platform";

import { AppModule } from "./app/app.module.tns";

application.on(application.resumeEvent, () => {
  AppSync.sync({
    deploymentKey: isIOS ? "dd7Z3X4jYwNBzOhvKRKGy5TE6GDhS1el9lsdW" : "oIukiiWMbbg4vPwyEJuQyolhHdmyS1el9lsdW"
  });
});

let options: AppOptions = {};
platformNativeScriptDynamic(options).bootstrapModule(AppModule);
