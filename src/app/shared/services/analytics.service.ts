import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: any;
declare let fbq: any;

@Injectable({
  providedIn: 'root'
})

export class AnalyticsService {

  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  sendDataAnalyticsServices() {
    // Subscribe to router events and send page views to Google Analytics and Pixel
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any | NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          gtag('config', 'UA-136828014-1', {
            pagePath: event.urlAfterRedirects
          });
          // tslint:disable-next-line:no-commented-code
          // fbq('track', 'PageView');
          // fbq('track', 'ViewContent');
        }
      });
  }
}
