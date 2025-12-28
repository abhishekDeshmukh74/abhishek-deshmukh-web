import { Component, Input, OnInit } from '@angular/core';

import { CONSTANTS } from '@constants';
import { BlogTopic } from './../blog-post-list.interfaces';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
  standalone: false
})

export class TopicListComponent implements OnInit {

  @Input()
  selectedTopic!: string;
  @Input()
  blogTopic!: BlogTopic;

  readonly BLOG_TOPICS = CONSTANTS.BLOG_TOPICS;
  maxSize = CONSTANTS.BLOG_POST_DISPLAY_SIZE;

  constructor() { }

  ngOnInit() { }

  onLoadMore() {
    this.maxSize += this.maxSize;
  }

}
