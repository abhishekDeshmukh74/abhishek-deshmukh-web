import { Component, OnInit } from '@angular/core';

import { ES6_DATA } from '@shared/data';
import { es6BlogCardList } from '../es6+.post-list';
import {
  eventBubblingHtmlSnippet, eventBubblingJsSnippet, eventCapturingHtmlSnippet,
  eventCapturingJsSnippet, eventListenerAddSnippet
} from './javascript-events.snippets';

@Component({
  selector: 'app-javascript-events',
  templateUrl: './javascript-events.component.html',
  styleUrls: ['./javascript-events.component.scss']
})

export class JavascriptEventsComponent implements OnInit {

  constructor() { }

  readonly eventBubblingHtmlSnippet = eventBubblingHtmlSnippet;
  readonly eventBubblingJsSnippet = eventBubblingJsSnippet;
  readonly eventCapturingHtmlSnippet = eventCapturingHtmlSnippet;
  readonly eventCapturingJsSnippet = eventCapturingJsSnippet;
  readonly eventListenerAddSnippet = eventListenerAddSnippet;

  readonly es6BlogCardList = es6BlogCardList;

  readonly title = ES6_DATA.JAVASCRIPT_EVENTS.TITLE;
  readonly date = ES6_DATA.JAVASCRIPT_EVENTS.DATE;
  readonly hashtags = ES6_DATA.JAVASCRIPT_EVENTS.HASHTAGS;
  readonly shareText = ES6_DATA.JAVASCRIPT_EVENTS.SHARE_TEXT;
  readonly image = ES6_DATA.JAVASCRIPT_EVENTS.META.IMAGE;

  ngOnInit() { }

}
