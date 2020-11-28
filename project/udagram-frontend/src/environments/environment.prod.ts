// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// TODO: for reviewer. The package.json script, "build:prod": "ng build --prod", did not work. Any idea why?

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://a3d9e3d11deaa4e39bff3c6c0eb694ed-27db5a4b969ecd17.elb.eu-north-1.amazonaws.com/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
