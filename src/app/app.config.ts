import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { provideHttpClient, withFetch } from '@angular/common/http';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1JpR2FGfV5ycEVAalxTTnRfUiweQnxTdEFiWX1dcXNQRWJZWEFwXQ==');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};
