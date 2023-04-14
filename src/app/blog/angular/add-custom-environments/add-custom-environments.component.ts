import { Component, OnInit } from '@angular/core';

import { ANGULAR_DATA } from '@shared/data';
import { angularBlogCardList } from '../angular.post-list';
import {
  afterAddingConfigInServeInAngularJsonSnippet,
  appWithEnvironmentAccessSnippet,
  releaseEnvironmentFileSnippet,
  stagingEnvironmentFileSnippet,
  testEnvironmentFileSnippet
} from './add-custom-environments.snippets';

@Component({
  selector: 'app-add-custom-environments',
  templateUrl: './add-custom-environments.component.html',
  styleUrls: ['./add-custom-environments.component.scss']
})

export class AddCustomEnvironmentsComponent implements OnInit {

  readonly angularBlogCardList = angularBlogCardList;

  readonly title = ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.TITLE;
  readonly date = ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.DATE;
  readonly hashtags = ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.HASHTAGS;
  readonly shareText = ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.SHARE_TEXT;
  readonly image = ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.META.IMAGE;

  readonly afterAddingConfigInServeInAngularJsonSnippet = afterAddingConfigInServeInAngularJsonSnippet;
  readonly stagingEnvironmentFileSnippet = stagingEnvironmentFileSnippet;
  readonly releaseEnvironmentFileSnippet = releaseEnvironmentFileSnippet;
  readonly testEnvironmentFileSnippet = testEnvironmentFileSnippet;
  readonly appWithEnvironmentAccessSnippet = appWithEnvironmentAccessSnippet;

  ngOnInit() { }

}
