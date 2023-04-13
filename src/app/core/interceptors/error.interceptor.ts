import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { captureException } from '@sentry/browser';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CONSTANTS } from '@constants';
import { environment } from '@environment';
import { ThrownError } from '@shared/interfaces';
import { AlertService, StorageService } from '@shared/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private alertService: AlertService,
        private storageService: StorageService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ThrownError>> {
        return next.handle(request).pipe(
            catchError((err) => {
                console.log('ErrorInterceptor', err);
                if (err instanceof HttpErrorResponse) {
                    if (environment.production) {
                        captureException(err);
                    }
                    switch (err.status) {
                        case 0:
                            this.alertService.error('API is Offline :/');
                            break;

                        case 401:
                            this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.USER);
                            this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN);
                            this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.IS_LOGGED_IN);
                            this.alertService.error('Session Timeout. Please login again');
                            break;

                        case 503:
                            console.log('The Server is currently unavailable');
                            break;

                        default:
                            this.alertService.error('Exception occurred! Please try again later');
                    }
                }
                return throwError({
                    status: err.status,
                    message: err.error.message
                });
            })
        );
    }
}
