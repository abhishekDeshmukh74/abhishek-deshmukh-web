import { Component, OnInit } from '@angular/core';

import { ANGULAR_DATA } from '@shared/data';
import { angularBlogCardList } from '../angular.post-list';

@Component({
  selector: 'app-build-mobile-apps-using-angular',
  templateUrl: './build-mobile-apps-using-angular.component.html',
  styleUrls: ['./build-mobile-apps-using-angular.component.scss'],
  standalone: false
})

export class BuildMobileAppsUsingAngularComponent implements OnInit {

  readonly angularBlogCardList = angularBlogCardList;

  readonly title = ANGULAR_DATA.BUILD_MOBILE_APPS.TITLE;
  readonly date = ANGULAR_DATA.BUILD_MOBILE_APPS.DATE;
  readonly hashtags = ANGULAR_DATA.BUILD_MOBILE_APPS.HASHTAGS;
  readonly shareText = ANGULAR_DATA.BUILD_MOBILE_APPS.SHARE_TEXT;
  readonly image = ANGULAR_DATA.BUILD_MOBILE_APPS.META.IMAGE;

  readonly indexHtmlBefore = '<base href="/">';
  readonly indexHtmlAfter = '<base href="./">';

  ngOnInit() { }

}
