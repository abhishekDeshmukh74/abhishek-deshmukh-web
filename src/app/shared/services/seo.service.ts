import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { CONSTANTS } from '@constants';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  private NAME = 'Abhishek Deshmukh';
  private DEFAULT_OG_IMAGE = `https://www.abhishekdeshmukh.com/assets/img/default_og_url.png`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private router: Router,
    private title: Title,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  createCanonicalURL() {
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateAuthor() {
    this.meta.updateTag({ name: 'author', content: this.NAME });
  }

  updateRobots() {
    this.meta.updateTag({ name: 'robots', content: 'index,follow,max-image-preview:standard' });
  }

  // TODO: Add meta keywords tag

  updateOgTags(
    title: string,
    description: string,
    image: string,
    publishTime: string,
    modifiedTime: string
  ) {
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:site_name', content: this.NAME });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'article:author', content: this.NAME });
    this.meta.updateTag({ property: 'og:url', content: this.dom.URL });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({
      property: 'og:image',
      content: image ? `https://www.abhishekdeshmukh.com/${image}` : this.DEFAULT_OG_IMAGE,
    });
    if (publishTime && modifiedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: publishTime });
      this.meta.updateTag({ property: 'article:modified_time', content: modifiedTime });
      this.meta.updateTag({
        property: 'og:publish_date',
        content: publishTime,
      });
    }
  }

  updateTwitterTags(title: string, description: string, image: string) {
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: this.dom.URL });
    this.meta.updateTag({ name: 'twitter:site', content: CONSTANTS.USERNAMES.TWITTER });
    this.meta.updateTag({ name: 'twitter:creator', content: CONSTANTS.USERNAMES.TWITTER });
    this.meta.updateTag({
      name: 'twitter:image',
      content: image ? `https://www.abhishekdeshmukh.com/${image}` : this.DEFAULT_OG_IMAGE,
    });
  }

  updateMeta() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.updateTitle(event['title']);
        this.updateDescription(event['description']);
        this.updateAuthor();
        this.updateRobots();
        this.updateOgTags(
          event['title'],
          event['description'],
          event['image'],
          event['publishTime'],
          event['modifiedTime']
        );
        this.updateTwitterTags(event['title'], event['description'], event['image']);
      });
  }

  getSchema() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    );
  }
}
