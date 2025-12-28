import { Component, OnInit } from '@angular/core';

import { REACT_DATA } from '@shared/data';
import { reactBlogCardList } from '../react.post-list';
import { appJsStartingCode } from './formik.snippets';

@Component({
  selector: 'app-formik',
  templateUrl: './formik.component.html',
  styleUrls: ['./formik.component.scss'],
  standalone: false
})

export class FormikComponent implements OnInit {

  constructor() {}

  readonly reactBlogCardList = reactBlogCardList;

  readonly title = REACT_DATA.FORMIK.TITLE;
  readonly date = REACT_DATA.FORMIK.DATE;
  readonly hashtags = REACT_DATA.FORMIK.HASHTAGS;
  readonly shareText = REACT_DATA.FORMIK.SHARE_TEXT;
  readonly image = REACT_DATA.FORMIK.META.IMAGE;

  readonly appJsStartingCode = appJsStartingCode;

  ngOnInit() {}
}
