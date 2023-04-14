import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@constants';
import { ANGULAR_DATA, ES6_DATA, REACT_DATA, HTML_CSS_DATA } from '@shared/data';
import { RouteData } from '@shared/interfaces';
import { AlertService } from '@shared/services';
import { ThrownError } from '@shared/interfaces/thrown-error.interface';
import { AdminService } from '../admin.service';
import { NotificationRequest, NotificationTopicMeta } from './send-notification.interfaces';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})

export class SendNotificationComponent implements OnInit {

  showSpinner = false;
  selectedTopic: NotificationTopicMeta;
  BLOG_POSTS_DATA: NotificationTopicMeta[] = [
    ...Object.values(ANGULAR_DATA),
    ...Object.values(ES6_DATA),
    ...Object.values(HTML_CSS_DATA),
    // ...Object.values(REACT_DATA),
  ].map((element: RouteData) => {
    return {
      TITLE: element.META.TITLE,
      DESCRIPTION: element.META.DESCRIPTION,
      IMAGE: element.META.IMAGE,
      PATH: element.PATH,
    };
  });

  constructor(
    private adminService: AdminService,
    private alertService: AlertService,
  ) { }

  ngOnInit() { }

  onSend() {

    const notificationRequest: NotificationRequest = {
      title: this.selectedTopic.TITLE,
      body: this.selectedTopic.DESCRIPTION,
      image: this.selectedTopic.IMAGE,
      actions: [
        {
          action: `/blog/${this.selectedTopic.PATH}`,
          title: 'Read post',
        }
      ],
    };
    this.showSpinner = true;
    this.adminService.sendNotifications(notificationRequest)
      .subscribe(
        (res: any) => {
          this.showSpinner = false;
          this.alertService.success(CONSTANTS.ALERT_MESSAGES.NOTIFICATION_SENT );
        },
        (error: ThrownError) => {
          this.showSpinner = false;
          this.alertService.error(error.message);
        }
      );
  }

}
