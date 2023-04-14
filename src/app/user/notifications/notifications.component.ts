import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { IUser } from '@shared/components/comments-section/comment-card/comment-card.interfaces';
import { ThrownError } from '@shared/interfaces';
import { StorageService } from '@shared/services';
import { UserService } from '../user.service';
import { INotification } from './notification-card/notification-card.interfaces';
import { INotificationsResponse } from './notifications.interfaces';

@Component({
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit, OnDestroy {

  user: IUser | undefined;
  notifications: INotification[] = [];
  readIds: string[] = [];
  pageEvent: PageEvent | undefined;
  allNotifications = 0;
  showSpinner = true;
  pageNumber = 1;
  private storageServiceSubscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.getUserLoggedIn();
    this.getNotifications();
  }

  getNotifications() {
    this.userService
      .getNotifications(String(this.user?._id), this.pageNumber)
      .subscribe(
        (res: INotificationsResponse | any) => {
          this.showSpinner = false;
          this.notifications = res.notifications;
          this.allNotifications = res.allNotifications;
        },
        (error: ThrownError) => {
          this.showSpinner = false;
        }
      );
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.pageNumber = event.pageIndex + 1;
    this.showSpinner = true;
    this.notifications = [];
    this.getNotifications();
    return event;
  }

  getUserLoggedIn() {
    this.storageServiceSubscription = this.storageService.watchStorage.subscribe((data: any) => {
      this.user = this.storageService.getUser();
    });
  }

  unreadNotifications() {
    this.userService.readNotifications(this.readIds).subscribe(
      (res: any) => {
      },
      (error: ThrownError) => {
      }
    );
  }

  onRead(readId: string) {
    this.readIds.push(readId);
  }

  ngOnDestroy() {
    this.unreadNotifications();
    if (this.storageServiceSubscription) {
      this.storageServiceSubscription.unsubscribe();
    }
  }

}
