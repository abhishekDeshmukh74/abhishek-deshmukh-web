import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-post-section',
  templateUrl: './share-post-section.component.html',
  styleUrls: ['./share-post-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class SharePostSectionComponent implements OnInit {

  @Input()
  text!: string;
  @Input()
  hashtags!: string;
  @Input()
  image!: string;

  url: string | undefined;
  pinImage: string | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.url = `https://www.abhishekdeshmukh.com${this.router.url}`;
    this.pinImage = `https://www.abhishekdeshmukh.com/${this.image}`;
  }

}
