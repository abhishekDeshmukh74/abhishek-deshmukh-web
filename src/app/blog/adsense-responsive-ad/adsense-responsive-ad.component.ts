import { Component, ChangeDetectionStrategy, AfterViewInit, Input } from '@angular/core';

declare const window: any;
@Component({
  selector: 'app-adsense-responsive-ad',
  templateUrl: './adsense-responsive-ad.component.html',
  styleUrls: ['./adsense-responsive-ad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class AdsenseResponsiveAdComponent implements AfterViewInit {

  @Input() className = 'responsive-ad';

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      } catch (e: any) {
        console.error('error:', e.message);
      }
    }, 3000);
  }
}
