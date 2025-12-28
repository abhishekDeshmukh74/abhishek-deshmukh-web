import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { INotification } from './notification-card.interfaces';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
  standalone: false
})

export class NotificationCardComponent implements OnInit {

  @Input() notification: INotification | undefined | any;
  @Output() readId = new EventEmitter<string>();

  otherUserName: string | undefined;

  constructor() { }

  ngOnInit() {
    this.otherUserName = `${this.notification?.otherUser.firstName} ${this.notification?.otherUser.lastName}`;
  }

  onClick() {
    if (!this.notification?.read) {
      this.notification.read = true;
      this.readId.emit(this.notification?._id);
    }
  }

}
