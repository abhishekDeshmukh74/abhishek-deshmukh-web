import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AnalyticsService, SEOService } from '@shared/services';
import { Subscription, Observable, map } from 'rxjs';

import { slideInAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})

export class AppComponent {
  isBrowser!: boolean;
  schema: any;
  notificationClicksSubscription!: Subscription;
  breakPointObserverSubscription!: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 768px)')
    .pipe(map((result) => result.matches));

  constructor(
    private analyticsService: AnalyticsService,
    private seoService: SEOService,
    public router: Router,
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getDepth(outlet: RouterOutlet): number {
    return outlet.activatedRouteData['depth'];
  }
}
