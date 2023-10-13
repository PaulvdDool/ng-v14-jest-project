import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: ['node_modules/(?!@angular|firebase|keycloak-angular)'],
  resolver: '<rootDir>/jest.resolver.ts'
};

export default jestConfig;
