import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BlogCard } from './blog-card.interfaces';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BlogCardComponent implements OnInit {

  @Input() blogCard: BlogCard;
  showSpinner = true;
  constructor() { }

  ngOnInit() { }

  hideSpinner() {
    this.showSpinner = false;
  }

}
