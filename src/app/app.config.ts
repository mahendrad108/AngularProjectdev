import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './Interceptors/logger.interceptor';
import { authInterceptor } from './Interceptors/auth.interceptor';
import { retryInterceptor } from './Interceptors/retry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(),
    provideHttpClient(withInterceptors([loggerInterceptor,authInterceptor,retryInterceptor]))]
};
