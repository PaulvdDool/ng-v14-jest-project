export interface EnvConfigModel {
  applicationId?: string;
  applicationName?: string;
  isProduction?: boolean;
  profile?: string;
  basepath?: string;
  env?: 'dev' | 'acc' | 'prod';
  buildVersion?: string;
  poeditorProjectId?: number;
  gaTrackingId?: string;
  locales?: Array<string>;
}

export class BaseConfig implements EnvConfigModel {
  applicationId: string = "test-project";
  applicationName: string = "Test Project";
  isProduction: boolean = false;
  basepath: string = "/";
  gaTrackingId: string = '';
  env: 'dev' | 'acc' | 'prod' = 'dev';// gets set in the build process
  buildVersion: string = "0";// gets set in the build process
  locales: [ 'en-gb', 'en-us', 'nl-nl', 'de-de', 'fr-fr' ]
}
