import { REACT_DATA } from '@shared/data';
import { BlogCard } from '@shared/components/blog-card/blog-card.interfaces';

export const reactBlogCardList: BlogCard[] = [
    {
        image: REACT_DATA.REACT_ROUTER.META.IMAGE,
        imageAlt: REACT_DATA.REACT_ROUTER.TITLE,
        date: REACT_DATA.REACT_ROUTER.DATE,
        title: REACT_DATA.REACT_ROUTER.TITLE,
        url: REACT_DATA.REACT_ROUTER.PATH
    },
    // {
    //     image: REACT_DATA.FORMIK.META.IMAGE,
    //     imageAlt: REACT_DATA.FORMIK.TITLE,
    //     date: REACT_DATA.FORMIK.DATE,
    //     title: REACT_DATA.FORMIK.TITLE,
    //     url: REACT_DATA.FORMIK.PATH
    // }
];
