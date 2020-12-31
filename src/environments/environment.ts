// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // restUrl: 'https://ecclerium.herokuapp.com/api',
  // controller: 'https://ecclerium.herokuapp.com',
  restUrl: 'http://localhost:8080/api',
  controller: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: "AIzaSyBvbAHd8K27uAeCl4Yz4nWnHyZZhWSu_lY",
    authDomain: "ecclerium.firebaseapp.com",
    databaseURL: "https://ecclerium.firebaseio.com",
    projectId: "ecclerium",
    storageBucket: "ecclerium.appspot.com",
    messagingSenderId: "114892667340",
    appId: "1:114892667340:web:3304fc7891ede83197c569",
    measurementId: "G-EWYZNS21B8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
