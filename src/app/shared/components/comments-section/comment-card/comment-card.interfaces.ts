export interface IComment {
    _id: string;
    avatarUrl: string;
    commentText: string;
    created_at: string;
    user: IUser;
    likes: number;
    disLikes: number;
    repliedUsers: string[];
    alreadyLiked: number;
    alreadyDisliked: number;
}
export interface IUser extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
}
