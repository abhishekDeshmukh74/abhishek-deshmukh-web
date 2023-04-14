import { IUser } from '@shared/components/comments-section/comment-card/comment-card.interfaces';

type Event = 'LIKED' | 'DISLIKED' | 'COMMENTED' | 'NEW_POST_OUT' | 'NEW_FEATURE_OUT';

export interface INotification {
    _id: string;
    read: boolean;
    text: string;
    event: Event;
    otherUser: IUser;
    created_at: string;
}
