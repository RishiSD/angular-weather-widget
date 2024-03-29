// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ENDPOINT: ' https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=<replace-with-actual-appid>',
  TitleOfSite: " Weather Card",
  City: " Berlin",
  WEATHER_ICON_URL: 'http://openweathermap.org/img/wn/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
