export interface ISocialActivityResponse {
    url: string;
    totalViews: number;
    StumbleUpon: number;
    Reddit: number;
    Facebook: IFacebook;
    GooglePlusOne: number;
    Twitter: number;
    Pinterest: number;
    LinkedIn: number;
}

export interface IFacebook {
    comment_plugin_count: number;
    total_count: number;
    og_object: null;
    comment_count: number;
    share_count: number;
    reaction_count: number;
}

export interface ISocialActivity {
    url: string;
    totalViews: number;
    facebook: number;
    pinterest: number;
}
