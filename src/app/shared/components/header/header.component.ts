import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { Subscription } from 'rxjs';

import { CONSTANTS } from '@constants';
import { environment } from '@environment';
import { AlertService, StorageService } from '@shared/services';
import { IUser } from './../comments-section/comment-card/comment-card.interfaces';
import { HeaderService } from './header.service';
import { INotification } from './../../../user/notifications/notification-card/notification-card.interfaces';
import { ThrownError } from '@shared/interfaces';
import { INotificationsResponse } from 'src/app/user/notifications/notifications.interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})

export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean | undefined;
  user: IUser | undefined;
  unreadNotifications: number | undefined;
  notifications: INotification[] = [];
  showMenu = false;
  private pushSubscription: PushSubscription | undefined;
  private storageServiceSubscription: Subscription | undefined;

  menuItems = [
    {
      path: '',
      title: 'Home'
    },
    {
      path: 'about',
      title: 'About Me'
    },
    // {
    //   path: 'resume',
    //   title: 'My Resume'
    // },
    {
      path: 'blog',
      title: 'blog'
    },
    // {
    //   path: 'contact-me',
    //   title: 'How To Reach Me'
    // }
  ];

  constructor(
    private alertService: AlertService,
    private headerService: HeaderService,
    private router: Router,
    private storageService: StorageService,
    private swPush: SwPush,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUserFromStorage();
    this.getNotifications();
  }

  getUserFromStorage() {
    this.storageServiceSubscription = this.storageService.watchStorage.subscribe((data: any) => {
      this.isLoggedIn = this.storageService.isLoggedIn();
      this.user = this.storageService.getUser();
    });
  }

  getNotifications() {
    if (!this.isLoggedIn) {
      return;
    }
    this.userService.getNotifications(String(this.user?._id)).subscribe(
      (res: INotificationsResponse | any) => {
        this.notifications = res.notifications;
        this.unreadNotifications = res.unreadNotifications;
      },
      (error: ThrownError) => {}
    );
  }

  toggleMenu() {
    this.showMenu ? this.showMenu = false : this.showMenu = true;
  }

  hideMenu() {
    this.showMenu = false;
  }

  async onSubscribe() {
    if (!this.swPush.isEnabled) {
      this.alertService.success(CONSTANTS.ALERT_MESSAGES.BROWSER_NOT_SUPPORTED);
      return;
    }

    this.pushSubscription = await this.swPush.requestSubscription({
      serverPublicKey: environment.vapidPublicKey
    });

    await this.headerService.sendSubscriptionToTheServer({
      // ...this.pushSubscription.toJSON(),
      endpoint: this.pushSubscription.toJSON().endpoint,
      expirationTime: this.pushSubscription.toJSON().expirationTime,
      keys: this.pushSubscription.toJSON().keys
    });

    this.alertService.success(CONSTANTS.ALERT_MESSAGES.SUBSCRIBE_TO_PUSH_NOTIFICATIONS);
  }

  onLogoff() {
    this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.USER);
    this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN);
    this.storageService.clear(CONSTANTS.LOCAL_STORAGE_KEYS.IS_LOGGED_IN);

    this.alertService.success(CONSTANTS.ALERT_MESSAGES.LOGOUT_SUCCESS);
  }

  onAdmin() {
    this.router.navigate(['/admin']);
  }

  onLogIn() {
    open(
      environment.CONSENT_URL,
      '_blank',
      'location=yes,scrollbars=yes,width=500,height=500,chrome=yes,position=centerscreen.status=yes'
    );
    if (focus) {
      focus();
    }
  }

  onNotification() {
    this.router.navigate(['/user/notifications']);
  }

  ngOnDestroy() {
    if (this.storageServiceSubscription) {
      this.storageServiceSubscription.unsubscribe();
    }
  }
}
