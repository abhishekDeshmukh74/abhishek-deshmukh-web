import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class PostHeaderComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  date!: string;

  constructor() { }

  ngOnInit() {
  }

}
