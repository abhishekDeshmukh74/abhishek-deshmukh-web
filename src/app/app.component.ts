import { BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { PORTFOLIO_DATA } from '@shared/data/portfolio.data';
import { AnalyticsService, SEOService } from '@shared/services';
import { slideInAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  isBrowser: boolean | undefined;
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

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.seoService.updateMeta();
    this.seoService.createCanonicalURL();
    this.seoService.getSchema().subscribe((event: any) => {
      if (event.schema) {
        this.schema = event.schema;
      } else {
        this.schema = PORTFOLIO_DATA.HOME.SCHEMA;
      }
    });
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.analyticsService.sendDataAnalyticsServices();
      const b = '/assets/img/background.jpg';
      const c = document.querySelector('#bg-img');
      const bgImg = new Image();
      bgImg.src = b;
      bgImg.onload = () => {
        (c as HTMLElement).style.background = 'url(' + b + ')';
      };
      this.breakPointObserverSubscription = this.isHandset$.subscribe(
        (isMobile) => {
          const d = document.querySelector('.portrait');
          const e = isMobile
            ? '/assets/img/portrait_150.png'
            : '/assets/img/portrait_250.png';
          const portraitImg = new Image();
          portraitImg.src = e;
          portraitImg.onload = () => {
            (d as HTMLElement).style.background = 'url(' + e + ')';
          };
        }
      );
    }
  }

  getDepth(outlet: RouterOutlet): number {
    return outlet.activatedRouteData.depth;
  }

  ngOnDestroy() {
    if (this.notificationClicksSubscription) {
      this.notificationClicksSubscription.unsubscribe();
    }
    if (this.breakPointObserverSubscription) {
      this.breakPointObserverSubscription.unsubscribe();
    }
  }
}
