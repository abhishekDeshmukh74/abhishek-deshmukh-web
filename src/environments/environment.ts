export const environment = {
  production: false,
  // apiUrl: 'http://localhost:3000/api',
  apiUrl: 'https://abhishek-deshmukh-api.onrender.com/api',
  vapidPublicKey:
    'BG2XarIqKVn-BROxIuK29nyC-mp94eLy1_Woh7eLJIyK--ThvanU4hkF4CCD7Bw3EEQeFeuAxhs_2FfIeNEFl6s',
  CONSENT_URL:
    'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=openid%20profile%20email&response_type=code&client_id=361894516073-ajj8ibs8q58aaiu60gf7ukdki4maensh.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fblog%2Fgoogle%2Fcallback',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
