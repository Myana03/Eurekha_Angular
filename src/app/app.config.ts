import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './Interceptor/logger-interceptor';
import { errorInterceptor } from './Interceptor/error-interceptor';
import { retryInterceptor } from './Interceptor/retry-interceptor';
import { authInterceptor } from './Interceptor/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggerInterceptor,errorInterceptor,retryInterceptor,authInterceptor]))
  ]
};
