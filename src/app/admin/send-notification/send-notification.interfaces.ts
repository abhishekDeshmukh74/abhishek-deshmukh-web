export interface NotificationRequest {
    image: string;
    title: string;
    body: string;
    actions: Action[];
}

export interface Action {
    action: string;
    title: string;
}

export interface NotificationTopicMeta {
    TITLE: string;
    DESCRIPTION: string;
    IMAGE: string;
    PATH: string;
}
