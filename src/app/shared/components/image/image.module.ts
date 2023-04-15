import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferLoadModule } from '@trademe/ng-defer-load';

import { ImageComponent } from './image.component';

@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    DeferLoadModule,
  ],
  exports: [
    ImageComponent
  ]
})

export class ImageModule { }
