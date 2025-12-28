import { Component, OnInit } from '@angular/core';

import { REACT_DATA } from '@shared/data';
import { reactBlogCardList } from '../react.post-list';
import {
  appJsStartingCode,
  homeJsCode,
  contactJsCode,
  aboutJsCode,
  importsCode,
  browserRouterUseCode,
  navSampleCode,
  switchSampleCode,
  basicRenderingWholeCode,
  noMatchRouteCode,
  noMatchLinkCode,
  appCssCode,
  contactNestedCode,
  pathAndUrlImportCode,
  nestedRoutesUlCode,
  switchCode,
  socialUrlCode,
} from './react-router-guide.snippets';

@Component({
  selector: 'app-react-router-guide',
  templateUrl: './react-router-guide.component.html',
  styleUrls: ['./react-router-guide.component.scss'],
  standalone: false
})
export class ReactRouterGuideComponent implements OnInit {
  readonly reactBlogCardList = reactBlogCardList;

  readonly title = REACT_DATA.REACT_ROUTER.TITLE;
  readonly date = REACT_DATA.REACT_ROUTER.DATE;
  readonly hashtags = REACT_DATA.REACT_ROUTER.HASHTAGS;
  readonly shareText = REACT_DATA.REACT_ROUTER.SHARE_TEXT;
  readonly image = REACT_DATA.REACT_ROUTER.META.IMAGE;

  readonly appJsStartingCode = appJsStartingCode;
  readonly homeJsCode = homeJsCode;
  readonly contactJsCode = contactJsCode;
  readonly aboutJsCode = aboutJsCode;
  readonly importsCode = importsCode;
  readonly browserRouterUseCode = browserRouterUseCode;
  readonly navSampleCode = navSampleCode;
  readonly switchSampleCode = switchSampleCode;
  readonly basicRenderingWholeCode = basicRenderingWholeCode;
  readonly noMatchRouteCode = noMatchRouteCode;
  readonly noMatchLinkCode = noMatchLinkCode;
  readonly appCssCode = appCssCode;
  readonly contactNestedCode = contactNestedCode;
  readonly pathAndUrlImportCode = pathAndUrlImportCode;
  readonly nestedRoutesUlCode = nestedRoutesUlCode;
  readonly switchCode = switchCode;
  readonly socialUrlCode = socialUrlCode;

  constructor() {}

  ngOnInit() {}
}
