import { Component, OnInit } from '@angular/core';

import { ES6_DATA } from '@shared/data';
import { es6BlogCardList } from '../es6+.post-list';
import { consoleGroupSnippet, loopComparisonOutput, loopComparisonSnippet } from './console-object-methods.snippets';

@Component({
  selector: 'app-console-object-methods',
  templateUrl: './console-object-methods.component.html',
  styleUrls: ['./console-object-methods.component.scss']
})

export class ConsoleObjectMethodsComponent implements OnInit {

  readonly es6BlogCardList = es6BlogCardList;
  readonly loopComparisonSnippet = loopComparisonSnippet;
  readonly loopComparisonOutput = loopComparisonOutput;
  readonly consoleGroupSnippet = consoleGroupSnippet;

  readonly title = ES6_DATA.CONSOLE_OBJECT_METHODS.TITLE;
  readonly date = ES6_DATA.CONSOLE_OBJECT_METHODS.DATE;
  readonly hashtags = ES6_DATA.CONSOLE_OBJECT_METHODS.HASHTAGS;
  readonly shareText = ES6_DATA.CONSOLE_OBJECT_METHODS.SHARE_TEXT;
  readonly image = ES6_DATA.CONSOLE_OBJECT_METHODS.META.IMAGE;

  constructor() { }

  ngOnInit() {
  }

}
