import { Component, OnInit } from '@angular/core';

import { ANGULAR_DATA } from '@shared/data';
import { angularBlogCardList } from '../angular.post-list';

@Component({
  selector: 'app-differential-loading',
  templateUrl: './differential-loading.component.html',
  styleUrls: ['./differential-loading.component.scss']
})

export class DifferentialLoadingComponent implements OnInit {

  readonly angularBlogCardList = angularBlogCardList;

  readonly title = ANGULAR_DATA.DIFFERENTIAL_LOADING.TITLE;
  readonly date = ANGULAR_DATA.DIFFERENTIAL_LOADING.DATE;
  readonly hashtags = ANGULAR_DATA.DIFFERENTIAL_LOADING.HASHTAGS;
  readonly shareText = ANGULAR_DATA.DIFFERENTIAL_LOADING.SHARE_TEXT;
  readonly image = ANGULAR_DATA.DIFFERENTIAL_LOADING.META.IMAGE;

  ngOnInit() { }

}
