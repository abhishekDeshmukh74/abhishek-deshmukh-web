import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { HighlightModule } from 'ngx-highlightjs';
import { AdsenseModule } from 'ng2-adsense';

import { CONSTANTS } from '@constants';
import { AngularCodeSnippetModule } from '@shared/components/angular-code-snippet/angular-code-snippet.module';
import { BlogCardModule } from '@shared/components/blog-card/blog-card.module';
import { CommentsSectionModule } from '@shared/components/comments-section/comments-section.module';
import { FreestyleCodeSnippetModule } from '@shared/components/freestyle-code-snippet/freestyle-code-snippet.module';
import { ImageModule } from '@shared/components/image/image.module';
import { PostHeaderModule } from '@shared/components/post-header/post-header.module';
import { RelatedPostSectionModule } from '@shared/components/related-post-section/related-post-section.module';
import { SharePostSectionModule } from '@shared/components/share-post-section/share-post-section.module';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogRoutingModule } from './blog-routing.module';

import {
  AddCustomEnvironmentsComponent, BuildMobileAppsUsingAngularComponent,
  DifferentialLoadingComponent, LazyLoadingImagesComponent, MaterialTableStuffComponent
} from './angular/angular.imports';
import { TopicListComponent } from './blog-post-list/topic-list/topic-list.component';
import {
  ConsoleObjectMethodsComponent, ES2020NewFeaturesComponent,
  JavascriptArrayMethodsComponent, JavascriptEventsComponent
} from './es6+/es6+.imports';
import { CssGridVsFlexboxComponent } from './html-css/html-css.imports';
import { ReactRouterGuideComponent, FormikComponent } from './react/react.imports';
import { GoogleCallbackComponent } from './google-callback/google-callback.component';
import { AdsenseResponsiveAdComponent } from './adsense-responsive-ad/adsense-responsive-ad.component';

@NgModule({
  declarations: [
    BlogPostListComponent,
    MaterialTableStuffComponent,
    AddCustomEnvironmentsComponent,
    DifferentialLoadingComponent,
    GoogleCallbackComponent,
    LazyLoadingImagesComponent,
    BuildMobileAppsUsingAngularComponent,
    ES2020NewFeaturesComponent,
    ConsoleObjectMethodsComponent,
    JavascriptArrayMethodsComponent,
    TopicListComponent,
    AdsenseResponsiveAdComponent,
    CssGridVsFlexboxComponent,
    JavascriptEventsComponent,
    ReactRouterGuideComponent,
    FormikComponent,
  ],
  imports: [
    AngularCodeSnippetModule,
    BlogCardModule,
    RelatedPostSectionModule,
    BlogRoutingModule,
    CommentsSectionModule,
    ImageModule,
    CommonModule,
    FormsModule,
    FreestyleCodeSnippetModule,
    MatDividerModule,
    MatSelectModule,
    PostHeaderModule,
    SharePostSectionModule,
    HighlightModule,
    AdsenseModule.forRoot({
      adClient: CONSTANTS.ADSENSE_ID,
      adSlot: 4306076980,
      pageLevelAds: true,
    }),
  ],
})
export class BlogModule {}
