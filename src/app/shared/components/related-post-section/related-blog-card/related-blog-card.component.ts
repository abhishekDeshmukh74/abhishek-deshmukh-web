import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlogCard } from '../../blog-card/blog-card.interfaces';

@Component({
  selector: 'app-related-blog-card',
  templateUrl: './related-blog-card.component.html',
  styleUrls: ['./related-blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RelatedBlogCardComponent implements OnInit {

  @Input() blogCard: BlogCard;
  showSpinner = true;

  constructor() { }

  ngOnInit() { }

  hideSpinner() {
    this.showSpinner = false;
  }

}
