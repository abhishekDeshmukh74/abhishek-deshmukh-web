export const afterAddingConfigInServeInAngularJsonSnippet = `"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "angular-custom-environments:build"
    },
    "configurations": {
      "production": {
        "browserTarget": "angular-custom-environments:build:production"
      },
      "release": {
        "browserTarget": "angular-custom-environments:build:release"
      },
      "staging": {
        "browserTarget": "angular-custom-environments:build:staging"
      },
      "test": {
        "browserTarget": "angular-custom-environments:build:test"
      }
    }
}`;

export const releaseEnvironmentFileSnippet = `export const environment = {
    production: false,
    apiUrl: 'http://release.some-api.com'
};`;

export const stagingEnvironmentFileSnippet = `export const environment = {
    production: false,
    apiUrl: 'http://staging.some-api.com'
};`;

export const testEnvironmentFileSnippet = `export const environment = {
    production: false,
    apiUrl: 'http://test.some-api.com'
};`;

export const appWithEnvironmentAccessSnippet = {
  tsCode: `   import { Component } from '@angular/core';
  import { environment } from './../environments/environment';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
  })

  export class AppComponent {
    title = 'angular-custom-environments';
    currentEnvironment = environment.apiUrl;
  }`,
  htmlCode: `  <div>
    <p> This project is using: </p>
    <h1>
      {{ currentEnvironment }}
    </h1>
  </div>`,
  cssCode: ``
};
