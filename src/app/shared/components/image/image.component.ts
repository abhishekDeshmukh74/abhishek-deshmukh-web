import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class ImageComponent implements OnInit {

  @Input() src: string | undefined;
  @Input() alt: string | undefined;
  @Output() loaded = new EventEmitter<boolean>(false);
  show = false;

  constructor() { }

  ngOnInit() { }

  onDefer() {
    this.show = true;
  }

  onLoad() {
    this.loaded.emit(true);
  }

}
