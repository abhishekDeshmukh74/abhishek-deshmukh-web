import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SendNotificationComponent } from './send-notification/send-notification.component';
import { SocialActivityComponent } from './social-activity/social-activity.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { TaskListComponent } from './task-list/task-list.component';

const adminRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TaskListComponent,
    data: {
      title: 'Abhishek Deshmukh - Admin area',
      description: 'This page is admin area consisting admin related tasks like sending notification, accessing reports etc.',
      depth: 1
    }
  },
  {
    path: 'send-notification',
    component: SendNotificationComponent,
    data: {
      title: 'Abhishek Deshmukh - Send notification',
      description: `This page consists of a form that is used to send notifications to abhishekdeshmukh.com
       subscribers`,
      depth: 1
    }
  },
  {
    path: 'social-activity',
    component: SocialActivityComponent,
    data: {
      title: 'Abhishek Deshmukh - Social Activity',
      description: `This page consists of a Social Activity count`,
      depth: 1
    }
  },
  {
    path: 'subscribers',
    component: SubscribersComponent,
    data: {
      title: 'Abhishek Deshmukh - Subscribers',
      description: `This page consists of blog subscribers`,
      depth: 1
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
