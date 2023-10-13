import { BaseConfig } from "./base";

export class Config extends BaseConfig {
  constructor() {
    super();
    this.isProduction = true;
    this.basepath = "/testproject/";
  }
}
