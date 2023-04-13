import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { RelatedBlogCardComponent } from './related-blog-card/related-blog-card.component';
import { RelatedPostSectionComponent } from './related-post-section.component';
import { ImageModule } from '@shared/components/image/image.module';

@NgModule({
  declarations: [
    RelatedPostSectionComponent,
    RelatedBlogCardComponent,
  ],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    RouterModule,
    ImageModule,
  ],
  exports: [
    RelatedPostSectionComponent
  ]
})

export class RelatedPostSectionModule { }
