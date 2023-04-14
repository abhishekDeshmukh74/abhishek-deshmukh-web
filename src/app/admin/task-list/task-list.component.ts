import { Component, OnInit } from '@angular/core';

import { IProject } from '@shared/components/project-card/project-card.interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  projects: IProject[] = [
    {
      image: '/assets/img/tasks/send-notification.png',
      imageAlt: 'Send Notification',
      url: 'send-notification',
      name: 'Send Notification'
    },
    {
      image: '/assets/img/tasks/social-activity.png',
      imageAlt: 'Social Activity',
      url: 'social-activity',
      name: 'Social Activity'
    },
    {
      image: '/assets/img/tasks/subscribers.png',
      imageAlt: 'Subscribers',
      url: 'subscribers',
      name: 'Subscribers'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
