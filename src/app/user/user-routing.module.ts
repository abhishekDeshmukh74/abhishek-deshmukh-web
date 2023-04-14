import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { USER_DATA } from '@shared/data/user.data';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: USER_DATA.NOTIFICATIONS.PATH,
    component: NotificationsComponent,
    data: {
      title: USER_DATA.NOTIFICATIONS.META.TITLE,
      description: USER_DATA.NOTIFICATIONS.META.DESCRIPTION,
      depth: 1
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
