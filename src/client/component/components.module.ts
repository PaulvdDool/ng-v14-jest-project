import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseAppComponent } from "./base-app/base-app.component";

const COMPONENTS = [
  BaseAppComponent
]

@NgModule( {
  imports: [ CommonModule ],
  declarations: COMPONENTS,
  exports: COMPONENTS
} )

export class ComponentsModule {}
