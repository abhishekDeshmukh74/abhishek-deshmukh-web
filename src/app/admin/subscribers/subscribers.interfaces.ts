export interface ISubscriberResponse {
    _id: string;
    user: User;
}

export interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

export interface ISubscriber {
    email: string;
    name: string;
    avatarUrl: string;
}
