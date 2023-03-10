// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
  timezoneUrl: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
  X_RapidAPI: '2098454712msh117ee6475cd413fp104705jsn79a822207b21',
  X_RapidAPIHost: 'weatherapi-com.p.rapidapi.com',
  appId: 'appid',
  appIdValue: '86d9e8009e983c79aa93ebb71fa75922',

  // variables for N-days weather fgorcasting
  baseUrlForcast: 'api.openweathermap.org/data/2.5/forecast/daily',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
