export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  graphql: {
    apiUrl: 'https://healthymode.herokuapp.com/v1alpha1/graphql',
    wsUrl: 'ws://healthymode.herokuapp.com/v1alpha1/graphql',
    accessKey: 'Hlthmd.iojsd0129euu190e082n38xy81n2hpihfon6q823m2c8=',
    anonymousRole: 'anonymous',
    userRole: 'user',
  },
  firebase: {
    apiKey: "AIzaSyABgFg2Ptbe9tuWbkOsvKc30lNpm8wh_1w",
    authDomain: "healthy-mode.firebaseapp.com",
    databaseURL: "https://healthy-mode.firebaseio.com",
    projectId: "healthy-mode",
    storageBucket: "healthy-mode.appspot.com",
    messagingSenderId: "951624504727",
    appId: "1:951624504727:web:e2373027ba88231f"
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
