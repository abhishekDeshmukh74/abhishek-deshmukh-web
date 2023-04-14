import { BlogCard } from '@shared/components/blog-card/blog-card.interfaces';

export interface BlogTopic {
    name: string;
    imgPath: string;
    imgAlt: string;
    topicList: BlogCard[];
}
