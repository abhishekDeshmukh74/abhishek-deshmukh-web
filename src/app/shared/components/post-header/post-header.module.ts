import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { PostHeaderComponent } from './post-header.component';

@NgModule({
  declarations: [
    PostHeaderComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  exports: [
    PostHeaderComponent
  ]
})

export class PostHeaderModule { }
