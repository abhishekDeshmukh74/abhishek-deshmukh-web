import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerModule } from './../loading-spinner/loading-spinner.module';
import { BlogCardComponent } from './blog-card.component';
import { ImageModule } from '@shared/components/image/image.module';

@NgModule({
  declarations: [
    BlogCardComponent,
  ],
  imports: [
    LoadingSpinnerModule,
    ImageModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    BlogCardComponent,
  ]
})

export class BlogCardModule { }
