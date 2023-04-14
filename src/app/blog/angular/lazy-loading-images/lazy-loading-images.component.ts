import { Component, OnInit } from '@angular/core';

import { ANGULAR_DATA } from '@shared/data';
import { angularBlogCardList } from '../angular.post-list';
import { appWithLazyLoadingImagesSnippet, importDeferLoadModuleFileSnippet } from './lazy-loading-images.snippets';

@Component({
  selector: 'app-lazy-loading-images',
  templateUrl: './lazy-loading-images.component.html',
  styleUrls: ['./lazy-loading-images.component.scss']
})

export class LazyLoadingImagesComponent implements OnInit {

  readonly angularBlogCardList = angularBlogCardList;

  readonly title = ANGULAR_DATA.LAZY_LOAD_IMAGES.TITLE;
  readonly date = ANGULAR_DATA.LAZY_LOAD_IMAGES.DATE;
  readonly hashtags = ANGULAR_DATA.LAZY_LOAD_IMAGES.HASHTAGS;
  readonly shareText = ANGULAR_DATA.LAZY_LOAD_IMAGES.SHARE_TEXT;
  readonly image = ANGULAR_DATA.LAZY_LOAD_IMAGES.META.IMAGE;

  readonly importDeferLoadModuleFileSnippet = importDeferLoadModuleFileSnippet;
  readonly appWithLazyLoadingImagesSnippet = appWithLazyLoadingImagesSnippet;

  ngOnInit() { }

}
