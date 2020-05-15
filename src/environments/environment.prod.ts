// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  firebase: {
    apiKey: "AIzaSyDaLu8PFauHOr3MkdDzfN4kC03NxfznaOs",
    authDomain: "kuinbi-cb896.firebaseapp.com",
    databaseURL: "https://kuinbi-cb896.firebaseio.com",
    projectId: "kuinbi-cb896",
    storageBucket: "kuinbi-cb896.appspot.com",
    messagingSenderId: "180845560969",
    appId: "1:180845560969:web:a6b48a20e413c36ceff258",
    measurementId: "G-45QXCX58ZS"
  }
};