import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IProject } from './project-card.interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProjectCardComponent implements OnInit {

  @Input() project: IProject | undefined;
  showSpinner = true;

  constructor() { }

  ngOnInit() { }

  hideSpinner() {
    this.showSpinner = false;
  }

}
