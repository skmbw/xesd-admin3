// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const IP = '192.168.1.104';

export const environment = {
  SERVER_LOCAL: './',
  URL: `http://${IP}:8775/`,
  SERVER_URL: `http://${IP}:8775/`,
  IMAGE_HOST: `http://${IP}:8300/`,
  IMAGE_URL: `${IP}:8300/`,
  production: false,
  useHash: true,
  hmr: false,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
