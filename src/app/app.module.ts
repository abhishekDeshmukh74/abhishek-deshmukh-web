import { ErrorHandler, Injectable, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { captureException, init, showReportDialog } from '@sentry/browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderModule } from "./shared/components/header/header.module";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, CredentialsInterceptor, ErrorInterceptor } from '@core/interceptors';
import { CONSTANTS } from '@constants';
import { AdminGuard } from './admin/admin.guard';
import { HomeComponent } from './portfolio/home/home.component';

// init({
//   dsn: CONSTANTS.SENTRY.DSN,
// });

// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   handleError(error: any) {
//     const eventId = captureException(error.originalError || error);
//     showReportDialog({ eventId });
//   }
// }

@NgModule({
  declarations: [AppComponent, HomeComponent],
  providers: [
    MatSnackBarModule,
    AdminGuard,
    // {
    //   provide: ErrorHandler,
    //   useClass: SentryErrorHandler,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
        },
        themePath: 'highlight.js/styles/dracula.css',
      },
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    HeaderModule,
    MatSnackBarModule,
  ],
})
export class AppModule {}
