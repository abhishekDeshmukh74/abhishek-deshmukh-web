import { Component, OnInit } from '@angular/core';

import { ES6_DATA } from '@shared/data';
import { es6BlogCardList } from '../es6+.post-list';
import {
  concatExample, everyExample, filterExample, includesExample, mapExample, popExample, pushExample,
  reduceExample, reduceRightExample, shiftExample, sliceExample, someExample, sortExample,
  spliceExample, unshiftExample
} from './javascript-array-methods.snippets';

@Component({
  selector: 'app-javascript-array-methods',
  templateUrl: './javascript-array-methods.component.html',
  styleUrls: ['./javascript-array-methods.component.scss'],
})

export class JavascriptArrayMethodsComponent implements OnInit {

  readonly es6BlogCardList = es6BlogCardList;

  readonly title = ES6_DATA.JAVASCRIPT_ARRAY_METHODS.TITLE;
  readonly date = ES6_DATA.JAVASCRIPT_ARRAY_METHODS.DATE;
  readonly hashtags = ES6_DATA.JAVASCRIPT_ARRAY_METHODS.HASHTAGS;
  readonly shareText = ES6_DATA.JAVASCRIPT_ARRAY_METHODS.SHARE_TEXT;
  readonly image = ES6_DATA.JAVASCRIPT_ARRAY_METHODS.META.IMAGE;

  readonly mapExample = mapExample;
  readonly filterExample = filterExample;
  readonly reduceExample = reduceExample;
  readonly reduceRightExample = reduceRightExample;
  readonly includesExample = includesExample;
  readonly concatExample = concatExample;
  readonly everyExample = everyExample;
  readonly someExample = someExample;
  readonly sortExample = sortExample;
  readonly sliceExample = sliceExample;
  readonly spliceExample = spliceExample;
  readonly popExample = popExample;
  readonly shiftExample = shiftExample;
  readonly pushExample = pushExample;
  readonly unshiftExample = unshiftExample;

  constructor() { }

  ngOnInit() { }

}
