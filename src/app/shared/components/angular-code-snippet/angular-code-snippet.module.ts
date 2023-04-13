import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';

import { CopyCodeModule } from '../copy-code/copy-code.module';
import { AngularCodeSnippetComponent } from './angular-code-snippet.component';

@NgModule({
  declarations: [
    AngularCodeSnippetComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightModule,
    CopyCodeModule,
  ],
  exports: [
    AngularCodeSnippetComponent,
  ]
})

export class AngularCodeSnippetModule { }
