import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from '@environment';
import { NotificationRequest } from './send-notification/send-notification.interfaces';
import { ISocialActivity, ISocialActivityResponse } from './social-activity/social-activity.interfaces';
import { ISubscriber, ISubscriberResponse } from './subscribers/subscribers.interfaces';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  sendNotifications(notificationRequest: NotificationRequest) {
    return this.http.post(`${environment.apiUrl}/send-notification`, notificationRequest)
      .pipe(
        take(1)
      );
  }

  getSubscribers(): Observable<ISubscriber[]> {
    return this.http.get(`${environment.apiUrl}/subscribers`).pipe(
      map((res: any | ISubscriberResponse[]) => {
        return res.map((item: ISubscriberResponse) => {
          return {
            email: item.user.email,
            name: `${item.user.firstName} ${item.user.lastName}`,
            avatarUrl: item.user.avatarUrl,
          };
        }
        );
      })
    );
  }

  getSocialStats(): Observable<ISocialActivity[]> {
    return this.http.get(`${environment.apiUrl}/count`).pipe(
      map((res: any | ISocialActivityResponse[]) => {
        return res.map((item: ISocialActivityResponse) => {
          return {
            url: item.url,
            totalViews: item.totalViews,
            facebook: item.Facebook.total_count,
            pinterest: item.Pinterest,
          };
        }
        );
      })
    );
  }
}
