import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "../component/components.module";

@NgModule( {
  imports: [ CommonModule, ComponentsModule ],
  declarations: [ AppComponent ],
  exports: [],
  providers: [],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
