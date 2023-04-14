import { INotification } from './notification-card/notification-card.interfaces';

export interface INotificationsResponse {
    notifications: INotification[];
    allNotifications: number;
    unreadNotifications: number;
}
