import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IJob } from './job-card.interfaces';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JobCardComponent implements OnInit {

  @Input() job: IJob;

  constructor() { }

  ngOnInit() { }

}
