import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { Config } from "../config/env.config";

if ( Config.isProduction ) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch( err => console.error(err));
