import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-code-snippet',
  templateUrl: './angular-code-snippet.component.html',
  styleUrls: ['./angular-code-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})

export class AngularCodeSnippetComponent implements OnInit {

  @Input()
  tsCode!: string;
  @Input()
  htmlCode!: string;
  @Input()
  cssCode!: string;

  constructor() { }

  ngOnInit() { }

}
