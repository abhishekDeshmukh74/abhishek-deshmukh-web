import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CONSTANTS } from '@constants';
import { BlogCard } from './../blog-card/blog-card.interfaces';

@Component({
  selector: 'app-related-post-section',
  templateUrl: './related-post-section.component.html',
  styleUrls: ['./related-post-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class RelatedPostSectionComponent implements OnInit {

  @Input()
  excludeTitle!: string;
  @Input()
  blogList!: BlogCard[];
  relatedBlogList!: BlogCard[];
  maxSize = CONSTANTS.BLOG_POST_DISPLAY_SIZE;

  constructor() { }

  ngOnInit() {
    this.relatedBlogList = this.blogList
      .filter(
        (blogCard) => blogCard.title !== this.excludeTitle
      )
      .map(
        (blogCard) => {
          return {
            ...blogCard,
            imageSmall: blogCard.image.replace('.png', '_small.png'),
          };
        }
      );
  }

  onNext() {
    this.maxSize += this.maxSize;
  }

}
