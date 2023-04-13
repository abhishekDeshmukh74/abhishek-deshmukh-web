import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';

import { CopyCodeModule } from '../copy-code/copy-code.module';
import { ImageModule } from '@shared/components/image/image.module';
import { FreestyleCodeSnippetComponent } from './freestyle-code-snippet.component';

@NgModule({
  declarations: [
    FreestyleCodeSnippetComponent,
  ],
  imports: [
    CommonModule,
    HighlightModule,
    MatTabsModule,
    CopyCodeModule,
    ImageModule,
  ],
  exports: [
    FreestyleCodeSnippetComponent,
  ]
})

export class FreestyleCodeSnippetModule { }
