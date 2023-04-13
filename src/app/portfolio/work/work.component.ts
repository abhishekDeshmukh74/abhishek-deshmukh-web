import { Component, OnInit } from '@angular/core';

import { IProject } from '@shared/components/project-card/project-card.interfaces';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {

  projects: IProject[] = [
    {
      image: '/assets/img/projects/project1.jpg',
      imageAlt: 'Project 1',
      url: 'send-notification',
      name: 'Send Notification'
    },
    // {
    //   image: '/assets/img/projects/project2.jpg',
    //   imageAlt: 'Project 2',
    //   url: 'send-notification',
    //   name: 'Send Notification'
    // },
    // {
    //   image: '/assets/img/projects/project3.jpg',
    //   imageAlt: 'Project 3',
    //   url: 'send-notification',
    //   name: 'Send Notification'
    // },
    // {
    //   image: '/assets/img/projects/project4.jpg',
    //   imageAlt: 'Project 4',
    //   url: 'send-notification',
    //   name: 'Send Notification'
    // },
  ];

  constructor() { }

  ngOnInit() { }

}
