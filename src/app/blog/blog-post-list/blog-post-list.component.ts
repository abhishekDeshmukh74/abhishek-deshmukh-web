import { Component } from '@angular/core';

import { CONSTANTS } from '@constants';
import { es6BlogCardList } from '../es6+/es6+.post-list';
import { reactBlogCardList } from '../react/react.post-list';
import { htmlCssBlogCardList } from '../html-css/html-css.post-list';
import { angularBlogCardList } from './../angular/angular.post-list';
import { BlogTopic } from './blog-post-list.interfaces';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
  standalone: false
})

export class BlogPostListComponent {

  readonly BLOG_TOPICS = CONSTANTS.BLOG_TOPICS;
  maxSize = CONSTANTS.BLOG_POST_DISPLAY_SIZE;
  selectedTopic = this.BLOG_TOPICS.EVERYTHING;

  blogTopics: BlogTopic[] = [
    {
      name: this.BLOG_TOPICS.EVERYTHING,
      imgPath: 'assets/icons/coding.png',
      imgAlt: 'Everything logo',
      topicList: [],
    },
    {
      name: this.BLOG_TOPICS.JAVASCRIPT_ES6,
      imgPath: 'assets/icons/javascript.png',
      imgAlt: 'JavaScript logo',
      topicList: es6BlogCardList,
    },
    {
      name: this.BLOG_TOPICS.ANGULAR,
      imgPath: 'assets/icons/angular.png',
      imgAlt: 'Angular logo',
      topicList: angularBlogCardList,
    },
    {
      name: this.BLOG_TOPICS.HTML_CSS,
      imgPath: 'assets/icons/html-css.png',
      imgAlt: 'HTML CSS logo',
      topicList: htmlCssBlogCardList,
    },
    {
      name: this.BLOG_TOPICS.REACT,
      imgPath: 'assets/icons/react.png',
      imgAlt: 'React logo',
      topicList: reactBlogCardList,
    },
  ];
}
