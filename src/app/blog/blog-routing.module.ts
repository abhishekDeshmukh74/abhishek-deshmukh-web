import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ANGULAR_DATA, ES6_DATA, PORTFOLIO_DATA, HTML_CSS_DATA, REACT_DATA } from '@shared/data';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { GoogleCallbackComponent } from './google-callback/google-callback.component';

import {
  AddCustomEnvironmentsComponent, BuildMobileAppsUsingAngularComponent,
  DifferentialLoadingComponent, LazyLoadingImagesComponent, MaterialTableStuffComponent
} from './angular/angular.imports';
import {
  ConsoleObjectMethodsComponent, ES2020NewFeaturesComponent,
  JavascriptArrayMethodsComponent, JavascriptEventsComponent
} from './es6+/es6+.imports';
import { CssGridVsFlexboxComponent } from './html-css/html-css.imports';
import { ReactRouterGuideComponent, FormikComponent } from './react/react.imports';

const blogRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogPostListComponent,
    data: {
      title: PORTFOLIO_DATA.BLOG.META.TITLE,
      description: PORTFOLIO_DATA.BLOG.META.DESCRIPTION,
      depth: 1
    }
  },
  {
    path: PORTFOLIO_DATA.GOOGLE_CALLBACK.PATH,
    component: GoogleCallbackComponent,
    data: {
      title: PORTFOLIO_DATA.GOOGLE_CALLBACK.META.TITLE,
      description: PORTFOLIO_DATA.GOOGLE_CALLBACK.META.DESCRIPTION,
      depth: 2
    }
  },
  {
    path: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.PATH,
    component: AddCustomEnvironmentsComponent,
    data: {
      title: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.META.TITLE,
      description: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.META.DESCRIPTION,
      image: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.META.IMAGE,
      publishTime: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.PUBLISH_TIME,
      modifiedTime: ANGULAR_DATA.ADD_CUSTOM_ENVIRONMENTS.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ANGULAR_DATA.DIFFERENTIAL_LOADING.PATH,
    component: DifferentialLoadingComponent,
    data: {
      title: ANGULAR_DATA.DIFFERENTIAL_LOADING.META.TITLE,
      description: ANGULAR_DATA.DIFFERENTIAL_LOADING.META.DESCRIPTION,
      image: ANGULAR_DATA.DIFFERENTIAL_LOADING.META.IMAGE,
      publishTime: ANGULAR_DATA.DIFFERENTIAL_LOADING.PUBLISH_TIME,
      modifiedTime: ANGULAR_DATA.DIFFERENTIAL_LOADING.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ANGULAR_DATA.MATERIAL_TABLE.PATH,
    component: MaterialTableStuffComponent,
    data: {
      title: ANGULAR_DATA.MATERIAL_TABLE.META.TITLE,
      description: ANGULAR_DATA.MATERIAL_TABLE.META.DESCRIPTION,
      image: ANGULAR_DATA.MATERIAL_TABLE.META.IMAGE,
      publishTime: ANGULAR_DATA.MATERIAL_TABLE.PUBLISH_TIME,
      modifiedTime: ANGULAR_DATA.MATERIAL_TABLE.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ANGULAR_DATA.LAZY_LOAD_IMAGES.PATH,
    component: LazyLoadingImagesComponent,
    data: {
      title: ANGULAR_DATA.LAZY_LOAD_IMAGES.META.TITLE,
      description: ANGULAR_DATA.LAZY_LOAD_IMAGES.META.DESCRIPTION,
      image: ANGULAR_DATA.LAZY_LOAD_IMAGES.META.IMAGE,
      publishTime: ANGULAR_DATA.LAZY_LOAD_IMAGES.PUBLISH_TIME,
      modifiedTime: ANGULAR_DATA.LAZY_LOAD_IMAGES.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ANGULAR_DATA.BUILD_MOBILE_APPS.PATH,
    component: BuildMobileAppsUsingAngularComponent,
    data: {
      title: ANGULAR_DATA.BUILD_MOBILE_APPS.META.TITLE,
      description: ANGULAR_DATA.BUILD_MOBILE_APPS.META.DESCRIPTION,
      image: ANGULAR_DATA.BUILD_MOBILE_APPS.META.IMAGE,
      publishTime: ANGULAR_DATA.BUILD_MOBILE_APPS.PUBLISH_TIME,
      modifiedTime: ANGULAR_DATA.BUILD_MOBILE_APPS.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ES6_DATA.ES2020_NEW_FEATURES.PATH,
    component: ES2020NewFeaturesComponent,
    data: {
      title: ES6_DATA.ES2020_NEW_FEATURES.META.TITLE,
      description: ES6_DATA.ES2020_NEW_FEATURES.META.DESCRIPTION,
      image: ES6_DATA.ES2020_NEW_FEATURES.META.IMAGE,
      publishTime: ES6_DATA.ES2020_NEW_FEATURES.PUBLISH_TIME,
      modifiedTime: ES6_DATA.ES2020_NEW_FEATURES.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ES6_DATA.CONSOLE_OBJECT_METHODS.PATH,
    component: ConsoleObjectMethodsComponent,
    data: {
      title: ES6_DATA.CONSOLE_OBJECT_METHODS.META.TITLE,
      description: ES6_DATA.CONSOLE_OBJECT_METHODS.META.DESCRIPTION,
      image: ES6_DATA.CONSOLE_OBJECT_METHODS.META.IMAGE,
      publishTime: ES6_DATA.CONSOLE_OBJECT_METHODS.PUBLISH_TIME,
      modifiedTime: ES6_DATA.CONSOLE_OBJECT_METHODS.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.PATH,
    component: JavascriptArrayMethodsComponent,
    data: {
      title: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.META.TITLE,
      description: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.META.DESCRIPTION,
      image: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.META.IMAGE,
      publishTime: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.PUBLISH_TIME,
      modifiedTime: ES6_DATA.JAVASCRIPT_ARRAY_METHODS.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: ES6_DATA.JAVASCRIPT_EVENTS.PATH,
    component: JavascriptEventsComponent,
    data: {
      title: ES6_DATA.JAVASCRIPT_EVENTS.META.TITLE,
      description: ES6_DATA.JAVASCRIPT_EVENTS.META.DESCRIPTION,
      image: ES6_DATA.JAVASCRIPT_EVENTS.META.IMAGE,
      publishTime: ES6_DATA.JAVASCRIPT_EVENTS.PUBLISH_TIME,
      modifiedTime: ES6_DATA.JAVASCRIPT_EVENTS.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.PATH,
    component: CssGridVsFlexboxComponent,
    data: {
      title: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.META.TITLE,
      description: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.META.DESCRIPTION,
      image: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.META.IMAGE,
      publishTime: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.PUBLISH_TIME,
      modifiedTime: HTML_CSS_DATA.CSS_GRID_VS_FLEXBOX.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: REACT_DATA.REACT_ROUTER.PATH,
    component: ReactRouterGuideComponent,
    data: {
      title: REACT_DATA.REACT_ROUTER.META.TITLE,
      description: REACT_DATA.REACT_ROUTER.META.DESCRIPTION,
      image: REACT_DATA.REACT_ROUTER.META.IMAGE,
      publishTime: REACT_DATA.REACT_ROUTER.PUBLISH_TIME,
      modifiedTime: REACT_DATA.REACT_ROUTER.MODIFIED_TIME,
      depth: 2
    }
  },
  {
    path: REACT_DATA.FORMIK.PATH,
    component: FormikComponent,
    data: {
      title: REACT_DATA.FORMIK.META.TITLE,
      description: REACT_DATA.FORMIK.META.DESCRIPTION,
      image: REACT_DATA.FORMIK.META.IMAGE,
      publishTime: REACT_DATA.FORMIK.PUBLISH_TIME,
      modifiedTime: REACT_DATA.FORMIK.MODIFIED_TIME,
      depth: 2
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogRoutingModule { }
