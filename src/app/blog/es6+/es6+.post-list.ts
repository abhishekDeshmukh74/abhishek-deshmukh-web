import { BlogCard } from '@shared/components/blog-card/blog-card.interfaces';
import { ES6_DATA } from '@shared/data/es6.data';

export const es6BlogCardList: BlogCard[] = [
    {
        image: ES6_DATA.ES2020_NEW_FEATURES.META.IMAGE,
        imageAlt: ES6_DATA.ES2020_NEW_FEATURES.TITLE,
        date: ES6_DATA.ES2020_NEW_FEATURES.DATE,
        title: ES6_DATA.ES2020_NEW_FEATURES.TITLE,
        url: ES6_DATA.ES2020_NEW_FEATURES.PATH
    },
    {
        image: ES6_DATA.CONSOLE_OBJECT_METHODS.META.IMAGE,
        imageAlt: ES6_DATA.CONSOLE_OBJECT_METHODS.TITLE,
        date: ES6_DATA.CONSOLE_OBJECT_METHODS.DATE,
        title: ES6_DATA.CONSOLE_OBJECT_METHODS.TITLE,
        url: ES6_DATA.CONSOLE_OBJECT_METHODS.PATH
    },
    {
        image: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.META.IMAGE,
        imageAlt: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.TITLE,
        date: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.DATE,
        title: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.TITLE,
        url: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.PATH
    },
    {
        image: ES6_DATA.JAVASCRIPT_EVENTS.META.IMAGE,
        imageAlt: ES6_DATA.JAVASCRIPT_EVENTS.TITLE,
        date: ES6_DATA.JAVASCRIPT_EVENTS.DATE,
        title: ES6_DATA.JAVASCRIPT_EVENTS.TITLE,
        url: ES6_DATA.JAVASCRIPT_EVENTS.PATH
    },
];
