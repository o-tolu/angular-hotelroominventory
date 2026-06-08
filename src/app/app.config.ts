import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

/*
  The `appConfig` object is an instance of `ApplicationConfig` that defines the configuration for the Angular application. 
  It includes providers for global error listeners, - "Listen for unexpected errors occurring in the browser."
  routing, and - Angular takes your routes and activates navigation.
  client hydration with event replay. - "Hydrate the application on the client side, replaying any events that occurred during server-side rendering."
*/
