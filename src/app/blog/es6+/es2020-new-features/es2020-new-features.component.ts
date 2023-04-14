import { Component, OnInit } from '@angular/core';

import { ES6_DATA } from '@shared/data/es6.data';
import { es6BlogCardList } from '../es6+.post-list';
import { allSettledExample, index, utilities } from './es2020-new-features.snippets';

@Component({
  selector: 'app-es2020-new-features',
  templateUrl: './es2020-new-features.component.html',
  styleUrls: ['./es2020-new-features.component.scss']
})

export class ES2020NewFeaturesComponent implements OnInit {

  readonly es6BlogCardList = es6BlogCardList;

  readonly title = ES6_DATA.ES2020_NEW_FEATURES.TITLE;
  readonly date = ES6_DATA.ES2020_NEW_FEATURES.DATE;
  readonly hashtags = ES6_DATA.ES2020_NEW_FEATURES.HASHTAGS;
  readonly shareText = ES6_DATA.ES2020_NEW_FEATURES.SHARE_TEXT;
  readonly image = ES6_DATA.ES2020_NEW_FEATURES.META.IMAGE;

  readonly utilities = utilities;
  readonly index = index;
  readonly allSettledExample = allSettledExample;

  ngOnInit() { }

}
