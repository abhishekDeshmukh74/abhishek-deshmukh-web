import { Component, OnInit } from '@angular/core';

import { HTML_CSS_DATA } from '@shared/data';
import { htmlCssBlogCardList } from '../html-css.post-list';
import { flexboxHtmlSnippet, gridHtmlSnippet } from './css-grid-vs-flexbox.snippets';

@Component({
  selector: 'app-css-grid-vs-flexbox',
  templateUrl: './css-grid-vs-flexbox.component.html',
  styleUrls: ['./css-grid-vs-flexbox.component.scss'],
  standalone: false
})

export class CssGridVsFlexboxComponent implements OnInit {

  readonly htmlCssBlogCardList = htmlCssBlogCardList;
  readonly gridHtmlSnippet = gridHtmlSnippet;
  readonly flexboxHtmlSnippet = flexboxHtmlSnippet;

  readonly title = HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.TITLE;
  readonly date = HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.DATE;
  readonly hashtags = HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.HASHTAGS;
  readonly shareText = HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.SHARE_TEXT;
  readonly image = HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.META.IMAGE;

  constructor() { }

  ngOnInit() {
  }

}
