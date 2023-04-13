import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { SharePostSectionComponent } from './share-post-section.component';

@NgModule({
  declarations: [
    SharePostSectionComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  exports: [
    SharePostSectionComponent
  ]
})

export class SharePostSectionModule { }
